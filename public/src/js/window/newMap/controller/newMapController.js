import BaseWindowController from "../../baseWindowController.js";

export default class NewMapController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    clearForm(){
        let mapNameCom = this.component.getComponentByName("mapName");
        let widthCom = this.component.getComponentByName("width");
        let heightCom = this.component.getComponentByName("height");
        let sizeCom = this.component.getComponentByName("size");

        mapNameCom.setText("");
        widthCom.setText("");
        heightCom.setText("");
        sizeCom.setText("");
    }

    onOk(){
        let mapNameCom = this.component.getComponentByName("mapName");
        let widthCom = this.component.getComponentByName("width");
        let heightCom = this.component.getComponentByName("height");
        let sizeCom = this.component.getComponentByName("size");
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