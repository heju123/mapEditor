import BaseWindowController from "../../baseWindowController.js";
import skin from "../../../style/skin.js";

export default class SetTerrainController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    onOpen(){
        let setTerrainBlock = this.component.getComponentByName("setTerrainBlock");
        let terrain = this.component.getComponentByName("terrain");
        if (setTerrainBlock.checked)
        {
            terrain.setStyle("readOnly", true);
            terrain.setStyle("backgroundColor", skin.INPUT_READONLY_BG);
        }
        else
        {
            terrain.setStyle("readOnly", false);
            terrain.setStyle("backgroundColor", undefined);
        }
    }

    onCheckTerrainBlock(e){
        let terrain = this.component.getComponentByName("terrain");
        if (e.currentTarget.checked)
        {
            terrain.text = undefined;
            terrain.setStyle("readOnly", true);
            terrain.setStyle("backgroundColor", skin.INPUT_READONLY_BG);
        }
        else
        {
            terrain.setStyle("readOnly", false);
            terrain.setStyle("backgroundColor", undefined);
        }
    }

    onOk(){
        let terrain = this.component.getComponentByName("terrain");
        let trrainBlock = this.component.getComponentByName("setTerrainBlock");
        this.closeWindow({
            terrain : terrain.getText(),
            trrainBlock : trrainBlock.checked
        });
    }

    onCancel(){
        this.closeWindow();
    }
}