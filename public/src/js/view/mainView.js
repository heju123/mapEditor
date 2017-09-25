import MainController from "../controller/mainController.js";
import fileView from "./dropdown/fileView.js";
import {navButtonStyle} from "./style/base.js";

let TOP_HEIGHT = 30;

export default {
    id : "mainView",
    controller : MainController,
    type : "panel",
    style : {
        x : 0,
        y : 0,
        width : "100%",
        height : "100%",
        backgroundColor : "#ffffff"
    },
    children : [
        //工具栏
        {
            type : "rect",
            style : {
                x : 0,
                y : 0,
                width : "100%",
                height : TOP_HEIGHT,
                backgroundColor : "#aeaeae"
            },
            children : [
                {
                    type : "rect",
                    style : {
                        x : 10,
                        y : 0,
                        autoWidth : true,
                        height : "100%",
                        layout : {
                            type : "linearLayout",
                            orientation : "horizontal"
                        }
                    },
                    children : [
                        {
                            type : "button",
                            style : navButtonStyle.style,
                            text : "文件",
                            animation : navButtonStyle.animation,
                            events : {
                                "click" : "showFileView"
                            }
                        }
                    ]
                }
            ]
        },
        fileView(TOP_HEIGHT),
        //编辑区域
        {
            id : "edit_area",
            type : "rect",
            style : {
                x : 0,
                y : TOP_HEIGHT,
                width : "100%",
                height : function(){
                    return this.parent.getHeight() - TOP_HEIGHT;
                },
                backgroundColor : "#f4f4f4"
            }
        }
    ]
};