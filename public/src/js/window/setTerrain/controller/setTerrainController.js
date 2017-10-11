import BaseWindowController from "../../baseWindowController.js";

export default class SetTerrainController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
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