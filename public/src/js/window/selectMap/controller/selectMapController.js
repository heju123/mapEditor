import BaseWindowController from "../../baseWindowController.js";
import config from "../../../config.js";

export default class SelectMapController extends BaseWindowController{
    constructor(component) {
        super(component);

        this.registerEvent("$onViewLoaded", ()=>{
           console.log("SelectMap");
        });
    }

    onOpen(){
        //查询保存的地图列表
        window.monk.httpUtil.get(config.serverUrl + "/mapList").then((data)=>{
            data = JSON.parse(data);
            if (data.code === 200)
            {
                console.log(data.list);
            }
        });
    }

    onOk(){
    }

    onCancel(){
        this.closeWindow();
    }
}