import BaseWindowController from "../../baseWindowController.js";

export default class NewMapController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }

    onOk(){
    }

    onCancel(){
        this.closeWindow();
    }
}