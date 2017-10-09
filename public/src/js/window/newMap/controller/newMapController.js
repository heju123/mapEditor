import BaseWindowController from "../../baseWindowController.js";

export default class NewMapController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    onOk(){
        let mapNameCom = this.component.getComponentById("mapName");
        let mapWidthCom = this.component.getComponentById("mapWidth");
        let mapHeightCom = this.component.getComponentById("mapHeight");
        this.closeWindow({
            mapName : mapNameCom.getText(),
            mapWidth : mapWidthCom.getText(),
            mapHeight : mapHeightCom.getText()
        });
    }

    onCancel(){
        this.closeWindow();
    }
}