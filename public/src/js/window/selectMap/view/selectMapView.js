import SelectMapController from "../controller/selectMapController.js";
import window from "../../style/window.js";
import {buttonStyle} from "../../../style/common.js";
import {formInputStyle} from "../../../style/form.js";

const FORM_BOTTOM_HEIGHT = 40;
const FORM_BUTTON_HEIGHT = 30;

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
                    orientation : "vertical",
                    contentAlign: "center"
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
                            }
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
                        autoWidth : true,
                        height: FORM_BOTTOM_HEIGHT,
                        layout : {
                            type : "linearLayout",
                            orientation : "horizontal",
                            contentAlign : "center"
                        }
                    },
                    children : [
                        buttonStyle("加载", {
                            autoWidth : true,
                            height : FORM_BUTTON_HEIGHT,
                            events : {
                                click : "load"
                            }
                        }),
                        {
                            name: "button_div",
                            type: "rect",
                            style: {
                                width: 20,
                                height: FORM_BUTTON_HEIGHT
                            }
                        },
                        buttonStyle("下载", {
                            autoWidth : true,
                            height : FORM_BUTTON_HEIGHT,
                            events : {
                                click : "download"
                            }
                        }),
                        {
                            name: "button_div",
                            type: "rect",
                            style: {
                                width: 20,
                                height: FORM_BUTTON_HEIGHT
                            }
                        },
                        buttonStyle("删除", {
                            autoWidth : true,
                            height : FORM_BUTTON_HEIGHT,
                            events : {
                                click : "delete"
                            }
                        }),
                        {
                            name: "button_div",
                            type: "rect",
                            style: {
                                width: 20,
                                height: FORM_BUTTON_HEIGHT
                            }
                        },
                        buttonStyle("取消", {
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