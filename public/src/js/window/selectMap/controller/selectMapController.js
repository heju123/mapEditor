import BaseWindowController from "../../baseWindowController.js";
import config from "../../../config.js";
import fileListItemView from "../view/fileListItemView.js";

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
                let item;
                let parent = this.component.getComponentByName("file_list");
                this.fileList.forEach((file)=>{
                    item = new window.monk.components.Rect(parent);
                    item.initCfg(fileListItemView(file));
                    parent.appendChildren(item);
                });
            }
        });
    }

    onOk(){
    }

    onCancel(){
        this.closeWindow();
    }
}