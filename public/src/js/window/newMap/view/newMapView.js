import NewMapController from "../controller/newMapController.js";
import window from "../../style/window.js";
import {buttonStyle} from "../../../style/common.js";
import {formInputStyle} from "../../../style/form.js";

const FORM_ROW_HEIGHT = 60;
const FORM_LABEL_WIDTH = 100;
const FORM_INPUT_PADDING = 15;
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
                autoHeight : true,
                layout : {
                    type : "linearLayout",
                    orientation : "vertical"
                }
            },
            children : [
                {
                    name : "input_row",
                    type : "rect",
                    style : {
                        width : "100%",
                        height : FORM_ROW_HEIGHT,
                        layout : {
                            type : "linearLayout",
                            orientation : "horizontal"
                        }
                    },
                    children : formInputStyle("mapName", "地图名称：", {
                        formRowHeight : FORM_ROW_HEIGHT,
                        formLabelWidth : FORM_LABEL_WIDTH,
                        formInputPadding : FORM_INPUT_PADDING
                    })
                },
                {
                    name : "input_row",
                    type : "rect",
                    style : {
                        width : "100%",
                        height : FORM_ROW_HEIGHT,
                        layout : {
                            type : "linearLayout",
                            orientation : "horizontal"
                        }
                    },
                    children : [
                        {
                            name : "input_50p",
                            type : "rect",
                            style : {
                                width : "50%",
                                height : "100%",
                                layout : {
                                    type : "linearLayout",
                                    orientation : "horizontal"
                                }
                            },
                            children : formInputStyle("mapWidth", "宽：", {
                                formRowHeight : FORM_ROW_HEIGHT,
                                formLabelWidth : FORM_LABEL_WIDTH,
                                formInputPadding : FORM_INPUT_PADDING
                            })
                        },
                        {
                            name : "input_50p",
                            type : "rect",
                            style : {
                                width : "50%",
                                height : "100%",
                                layout : {
                                    type : "linearLayout",
                                    orientation : "horizontal"
                                }
                            },
                            children : formInputStyle("mapHeight", "高：", {
                                formRowHeight : FORM_ROW_HEIGHT,
                                formLabelWidth : FORM_LABEL_WIDTH,
                                formInputPadding : FORM_INPUT_PADDING
                            })
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
                        height: FORM_ROW_HEIGHT,
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
                        {
                            name: "button_div",
                            type: "rect",
                            style: {
                                width: "20",
                                height: FORM_ROW_HEIGHT
                            }
                        },
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

export default window(NewMapController, {
    id : "new_map_window",
    title : "新建地图",
    width : 400,
    height : 300,
    contentStyle : contentStyle
})