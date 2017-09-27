import BaseWindowController from "../../baseWindowController.js";

export default class NewMapController extends BaseWindowController{
    constructor(panel) {
        super(panel);

        this.registerEvent("$onViewLoaded", ()=>{
        });
    }
}