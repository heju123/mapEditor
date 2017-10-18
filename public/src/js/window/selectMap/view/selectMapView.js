import SelectMapController from "../controller/selectMapController.js";
import window from "../../style/window.js";
import {buttonStyle} from "../../../style/common.js";
import {formInputStyle} from "../../../style/form.js";

const FORM_BOTTOM_HEIGHT = 40;
const FORM_BUTTON_HEIGHT = 30;

const FILE_LIST_ITEM_WIDTH = 60;
const FILE_LIST_ITEM_HEIGHT = 60;

let contentStyle = {
    type : "rect",
    style : {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
    },
    children : [
        {
            name : "form1",
            type : "rect",
            style : {
                x : 0,
                y : 0,
                width : "100%",
                height : "100%",
                layout : {
                    type : "linearLayout",
                    orientation : "vertical"
                }
            },
            children : [
                {
                    name : "file_list_outer",
                    type : "rect",
                    style : {
                        width : "100%",
                        height : function(){
                            return this.parent.getInnerHeight() - 20 - FORM_BOTTOM_HEIGHT;
                        }
                    },
                    children : [
                        {
                            name : "file_list",
                            type : "rect",
                            style : {
                                x : 10,
                                y : 10,
                                width : function(){
                                    return this.parent.getInnerWidth() - 20
                                },
                                height : function(){
                                    return this.parent.getInnerHeight() - 20;
                                },
                                backgroundColor : "#f4f4f4",
                                borderColor : "#dfdfdf",
                                borderWidth : 1,
                                borderRadius : 5,
                                layout : {
                                    type : "linearLayout",
                                    orientation : "horizontal"
                                }
                            },
                            children : [
                                {
                                    name : "file_list_item_outer",
                                    type : "rect",
                                    style : {
                                        width : 80,
                                        height : 80
                                    },
                                    children : [
                                        {
                                            name : "file_list_item",
                                            type : "rect",
                                            style : {
                                                x : function(){
                                                    return this.parent.getWidth() / 2 - FILE_LIST_ITEM_WIDTH / 2;
                                                },
                                                y : function(){
                                                    return this.parent.getHeight() / 2 - FILE_LIST_ITEM_HEIGHT / 2;
                                                },
                                                width : FILE_LIST_ITEM_WIDTH,
                                                height : FILE_LIST_ITEM_HEIGHT,
                                                layout : {
                                                    type : "linearLayout",
                                                    orientation : "vertical"
                                                }
                                            },
                                            children : [
                                                {
                                                    name: "file_list_item_img",
                                                    type: "rect",
                                                    style: {
                                                        width: "100%",
                                                        height: 40,
                                                        backgroundImage: "/src/images/map.png"
                                                    }
                                                },
                                                {
                                                    name: "file_list_item_text",
                                                    type: "rect",
                                                    style: {
                                                        width: "100%",
                                                        height: 20,
                                                        lineHeight : 20,
                                                        textAlign : "center"
                                                    },
                                                    text : "文件名称"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "input_row_blank",
                    type: "rect",
                    style: {
                        width: "100%",
                        height: 20,
                        layout: {
                            type: "linearLayout",
                            orientation: "horizontal",
                            contentAlign: "center"
                        }
                    }
                },
                {
                    name: "input_row",
                    type: "rect",
                    style: {
                        width: "100%",
                        height: FORM_BOTTOM_HEIGHT,
                        layout : {
                            type : "linearLayout",
                            orientation : "horizontal",
                            contentAlign : "center"
                        }
                    },
                    children : [
                        buttonStyle("确定", {
                            y : function(){
                                return this.parent.getInnerHeight() / 2 - FORM_BUTTON_HEIGHT / 2;
                            },
                            autoWidth : true,
                            height : FORM_BUTTON_HEIGHT,
                            events : {
                                click : "onOk"
                            }
                        }),
                        buttonStyle("取消", {
                            y : function(){
                                return this.parent.getInnerHeight() / 2 - FORM_BUTTON_HEIGHT / 2;
                            },
                            autoWidth : true,
                            height : FORM_BUTTON_HEIGHT,
                            events : {
                                click : "onCancel"
                            }
                        })
                    ]
                }
            ]
        }
    ]
};

export default window(SelectMapController, {
    id : "select_map_window",
    title : "选择地图",
    width : 400,
    height : 300,
    contentStyle : contentStyle
})