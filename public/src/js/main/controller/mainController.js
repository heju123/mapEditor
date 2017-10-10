/**
 * Created by heju on 2017/7/14.
 */
import mapView from "../view/map/mapView.js";

export default class MainController extends window.monk.Controller{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
            this.fileView = this.viewState.getComponentById("fileView");

            let mainView = this.viewState.getComponentById("mainView");
            mainView.registerEvent("click", this.onClickRoot.bind(this));
        });
    }

    showFileView(e){
        this.fileView.active = !this.fileView.active;
        e.stopPropagation();
    }

    onClickRoot(){
        this.fileView.active = false;
    }

    openNewMapDlg(e){
        let newMapWindow = this.viewState.getComponentById("new_map_window");
        newMapWindow.controller.clearForm();
        newMapWindow.controller.center().openWindow({
            okCallback : (data)=>{
                let parent = this.component.getComponentById("edit_area");
                let mapRect = new window.monk.components.Rect(parent);
                mapRect.initCfg(mapView(data));
                parent.appendChildren(mapRect);
            }
        });
    }
}