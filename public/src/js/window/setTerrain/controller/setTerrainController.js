import BaseWindowController from "../../baseWindowController.js";

export default class SetTerrainController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    onCheckTerrainBlock(e){
        let terrain = this.component.getComponentByName("terrain");
        if (e.currentTarget.checked)
        {
            terrain.text = undefined;
            terrain.setStyle("readOnly", true);
        }
        else
        {
            terrain.setStyle("readOnly", false);
        }
    }

    onOk(){
        let terrain = this.component.getComponentByName("terrain");
        this.closeWindow({
            terrain : terrain.getText()
        });
    }

    onCancel(){
        this.closeWindow();
    }
}