import BaseWindowController from "../../baseWindowController.js";

export default class NewMapController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    clearForm(){
        let mapNameCom = this.component.getComponentById("mapName");
        let widthCom = this.component.getComponentById("width");
        let heightCom = this.component.getComponentById("height");
        let sizeCom = this.component.getComponentById("size");

        mapNameCom.setText("");
        widthCom.setText("");
        heightCom.setText("");
        sizeCom.setText("");
    }

    onOk(){
        let mapNameCom = this.component.getComponentById("mapName");
        let widthCom = this.component.getComponentById("width");
        let heightCom = this.component.getComponentById("height");
        let sizeCom = this.component.getComponentById("size");
        this.closeWindow({
            mapName : mapNameCom.getText(),
            width : widthCom.getText(),
            height : heightCom.getText(),
            size : sizeCom.getText()
        });
    }

    onCancel(){
        this.closeWindow();
    }
}