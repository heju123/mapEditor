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
                parent.removeAllChildren();
                this.fileList.forEach((file)=>{
                    item = new window.monk.components.Rect(parent);
                    item.initCfg(fileListItemView(file));
                    parent.appendChildren(item);
                });
            }
        });
    }

    setSelectedStyle(item){
        item.setStyle("borderColor", "#3399FF");
        item.setStyle("backgroundColor", "#53b8ff");
    }
    removeSelectedStyle(item){
        item.removeStyle("borderColor");
        item.removeStyle("backgroundColor");
    }

    onSelectedItem(item){
        if (this.selectedItem)
        {
            this.removeSelectedStyle(this.selectedItem);
        }
        this.selectedItem = item;
        this.setSelectedStyle(this.selectedItem);
    }

    onOk(){
        if (this.selectedItem)
        {
            let mapName = this.selectedItem.getComponentByName("file_list_item_text").getText();
            window.monk.httpUtil.get(config.serverUrl + "/getMapDetail", {
                fileName : mapName
            }).then((data)=>{
                data = JSON.parse(data);
                if (data.code === 200)
                {
                    data.detail = JSON.parse(data.detail);
                    data.detail.mapData = JSON.parse(data.detail.mapData);
                    this.closeWindow(data.detail);
                }
            });
        }
    }

    onCancel(){
        this.closeWindow();
    }
}