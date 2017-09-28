import NewMapController from "../controller/newMapController.js";
import window from "../../style/window.js";

const FORM_ROW_HEIGHT = 40;
const FORM_LABEL_WIDTH = 100;
const FORM_INPUT_PADDING = 5;
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
                    children : [
                        {
                            name : "input_label",
                            type : "rect",
                            style : {
                                width : FORM_LABEL_WIDTH,
                                height : "100%",
                                lineHeight : FORM_ROW_HEIGHT,
                                textAlign : "center"
                            },
                            text : "地图名称："
                        },
                        {
                            name : "input_area",
                            type : "rect",
                            style : {
                                width : function(){
                                    return this.parent.getInnerWidth() - FORM_LABEL_WIDTH;
                                },
                                height : "100%"
                            },
                            children : [
                                {
                                    name : "input",
                                    type : "input",
                                    style : {
                                        x : FORM_INPUT_PADDING,
                                        y : FORM_INPUT_PADDING,
                                        width : function(){
                                            return this.parent.getInnerWidth() - FORM_INPUT_PADDING * 2;
                                        },
                                        height : function(){
                                            return this.parent.getInnerHeight() - FORM_INPUT_PADDING * 2;
                                        },
                                        borderWidth : 1,
                                        borderColor : "#dfdfdf",
                                        borderRadius : 3
                                    }
                                }
                            ]
                        }
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