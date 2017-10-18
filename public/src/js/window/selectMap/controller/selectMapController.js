import BaseWindowController from "../../baseWindowController.js";
import config from "../../../config.js";

export default class SelectMapController extends BaseWindowController{
    constructor(component) {
        super(component);
    }

    onOpen(){
        this.getMapList();
    }

    getMapList(){
        window.monk.httpUtil.get(config.serverUrl + "/getMapList").then((data)=>{
            data = JSON.parse(data);
            if (data.code === 200)
            {
                this.fileList = data.list;
            }
        });
    }

    onOk(){
    }

    onCancel(){
        this.closeWindow();
    }
}