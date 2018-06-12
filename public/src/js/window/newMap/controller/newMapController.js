import BaseWindowController from "../../baseWindowController.js";

export default class NewMapController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    resetForm(form){
        let mapNameCom = this.component.getComponentByName("mapName");
        let widthCom = this.component.getComponentByName("width");
        let heightCom = this.component.getComponentByName("height");
        let sizeCom = this.component.getComponentByName("size");

        if (!form)
        {
            mapNameCom.setText("");
            widthCom.setText("");
            heightCom.setText("");
            sizeCom.setText("");
        }
        else
        {
            mapNameCom.setText(form.mapName);
            widthCom.setText(form.width);
            heightCom.setText(form.height);
            sizeCom.setText(form.size);
        }
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