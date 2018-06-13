/**
 * Created by heju on 2017/7/14.
 */
import mapView from "../view/map/mapView.js";
import config from "../../config.js";

export default class MainController extends window.plutojs.Controller{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
            this.dropdownViews = [];
            this.dropdownViews.push(this.viewState.getComponentById("dropdown_fileView"));
            this.dropdownViews.push(this.viewState.getComponentById("dropdown_mapView"));

            let mainView = this.viewState.getComponentById("mainView");
            mainView.registerEvent("click", this.onClickRoot.bind(this));
        });
    }

    hideAllDropdownViews()
    {
        this.dropdownViews.forEach((view)=>{
            view.active = false;
        });
    }

    showDropdownView(param, e){
        this.hideAllDropdownViews();
        let x = param[1].getX() + param[1].parent.getX();
        this.dropdownViews[param[0]].setX(x);
        this.dropdownViews[param[0]].active = true;
        e.stopPropagation();
    }

    onClickRoot(){
        this.hideAllDropdownViews();
    }

    openNewMapDlg(e){
        let newMapWindow = this.viewState.getComponentById("new_map_window");
        newMapWindow.controller.resetForm();
        newMapWindow.controller.center().openWindow({
            okCallback : (data)=>{
                let parent = this.component.getComponentById("edit_area");
                if (this.mapComponent)
                {
                    parent.removeChild(this.mapComponent);
                }
                this.mapComponent = new window.plutojs.components.Rect(parent);
                this.mapComponent.initCfg(mapView(data));
                parent.appendChild(this.mapComponent);
            }
        });
    }

    openSetTerrainDlg(e){
        let setTerrainWindow = this.viewState.getComponentById("set_terrain_window");
        setTerrainWindow.controller.center().openWindow({
            okCallback : (data)=>{
                if (this.mapComponent)
                {
                    if (data.trrainBlock)//选中“设置地形为障碍物”标识当前正在设置障碍物
                    {
                        this.mapComponent.controller.isSetTerrain = false;
                    }
                    else
                    {
                        this.mapComponent.controller.isSetTerrain = true;
                    }
                    this.mapComponent.controller.terrain = data.terrain;
                    let terrainShowLabel = this.viewState.getComponentById("top_tool_terrainShowLabel");
                    if (data.terrain && data.terrain !== "0")
                    {
                        terrainShowLabel.setText("当前设置地形：" + data.terrain);
                    }
                    else
                    {
                        terrainShowLabel.setText("");
                    }
                    terrainShowLabel.setX(terrainShowLabel.parent.getWidth() - terrainShowLabel.getWidth());
                    terrainShowLabel.active = true;
                }
            }
        });
    }

    /** 重新设置当前地图 */
    resetCurrentMap(){
        let newMapWindow = this.viewState.getComponentById("new_map_window");
        let form = {
            mapName : this.mapComponent.controller.mapName,
            width : this.mapComponent.controller.width,
            height : this.mapComponent.controller.height,
            size : this.mapComponent.controller.size
        }
        newMapWindow.controller.resetForm(form);
        newMapWindow.controller.center().openWindow({
            okCallback : (data)=>{
                let parent = this.component.getComponentById("edit_area");
                if (this.mapComponent)
                {
                    parent.removeChild(this.mapComponent);
                }
                this.mapComponent = new window.plutojs.components.Rect(parent);
                this.mapComponent.initCfg(mapView(data));
                parent.appendChild(this.mapComponent);
            }
        });
    }

    saveMap(e){
        window.plutojs.utils.httpUtil.post(config.serverUrl + "/saveMap", {
            mapName : this.mapComponent.controller.mapName,
            width : this.mapComponent.controller.width,
            height : this.mapComponent.controller.height,
            size : this.mapComponent.controller.size,
            mapData : JSON.stringify(this.mapComponent.controller.mapData)
        }).then((data)=>{
            data = JSON.parse(data);
            if (data.success === true)
            {
                window.plutojs.utils.commonUtil.popMessageTooltip("保存成功！");
            }
            else
            {
                window.plutojs.utils.commonUtil.popMessageTooltip(data.message);
            }
        });
    }

    loadMap(){
        let selectMapWindow = this.viewState.getComponentById("select_map_window");
        selectMapWindow.controller.center().openWindow({
            okCallback : (data)=>{
                let parent = this.component.getComponentById("edit_area");
                this.mapComponent = new window.plutojs.components.Rect(parent);
                this.mapComponent.initCfg(mapView(data));
                parent.appendChild(this.mapComponent);
            }
        });
    }
}