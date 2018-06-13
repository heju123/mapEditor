import BaseWindowController from "../../baseWindowController.js";
import config from "../../../config.js";
import fileListItemView from "../view/fileListItemView.js";

export default class SelectMapController extends BaseWindowController{
    constructor(component) {
        super(component);
    }

    onOpen(){
        this.getMapList();
    }

    getMapList(){
        window.plutojs.utils.httpUtil.get(config.serverUrl + "/getMapList").then((data)=>{
            data = JSON.parse(data);
            if (data.success === true)
            {
                this.fileList = data.list;
                let item;
                let parent = this.component.getComponentByName("file_list");
                parent.removeAllChildren();
                this.fileList.forEach((file)=>{
                    item = new window.plutojs.components.Rect(parent);
                    item.initCfg(fileListItemView(file));
                    parent.appendChild(item);
                });
            }
        });
    }

    setSelectedStyle(item){
        item.setStyle("borderColor", "#3399FF");
        item.setStyle("backgroundColor", "#53b8ff");
    }
    removeSelectedStyle(item){
        item.removeStyle("borderColor");
        item.removeStyle("backgroundColor");
    }

    onSelectedItem(item){
        if (this.selectedItem)
        {
            this.removeSelectedStyle(this.selectedItem);
        }
        this.selectedItem = item;
        this.setSelectedStyle(this.selectedItem);
    }

    load(){
        if (this.selectedItem)
        {
            let mapName = this.selectedItem.getComponentByName("file_list_item_text").getText();
            window.plutojs.utils.httpUtil.get(config.serverUrl + "/getMapDetail", {
                fileName : mapName
            }).then((data)=>{
                data = JSON.parse(data);
                if (data.success === true)
                {
                    data.detail = JSON.parse(data.detail);
                    data.detail.mapData = JSON.parse(data.detail.mapData);
                    this.closeWindow(data.detail);
                }
                else
                {
                    window.plutojs.utils.commonUtil.popMessageTooltip(data.message);
                }
            });
        }
    }

    download(){
        let mapName = this.selectedItem.getComponentByName("file_list_item_text").getText();
        window.location.href = config.serverUrl + "/download?mapName=" + mapName;
    }

    delete(){
        window.plutojs.utils.commonUtil.popConfirm("是否确认要删除选中地图？").then(()=>{
            let mapName = this.selectedItem.getComponentByName("file_list_item_text").getText();
            window.plutojs.utils.httpUtil.post(config.serverUrl + "/delete", {
                mapName : mapName
            }).then((data)=>{
                data = JSON.parse(data);
                if (data.success === true)
                {
                    window.plutojs.utils.commonUtil.popMessageTooltip("删除成功！");
                    this.getMapList();
                }
                else
                {
                    window.plutojs.utils.commonUtil.popMessageTooltip(data.message);
                }
            });
        });
    }

    onCancel(){
        this.closeWindow();
    }
}