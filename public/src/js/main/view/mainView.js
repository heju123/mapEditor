import MainController from "../controller/mainController.js";
import fileView from "./dropdown/fileView.js";
import mapView from "./dropdown/mapView.js";
import {navButtonStyle} from "../style/nav.js";

const TOP_HEIGHT = 30;

export default {
    id : "mainView",
    controller : MainController,
    type : "rect",
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
                                "click" : {
                                    callback : "showDropdownView",
                                    param : (self)=>{
                                        return [0, self];
                                    }
                                }
                            }
                        },
                        {
                            type : "button",
                            style : navButtonStyle.style,
                            text : "地图",
                            animation : navButtonStyle.animation,
                            events : {
                                "click" : {
                                    callback : "showDropdownView",
                                    param : (self)=>{
                                        return [1, self];
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    id : "top_tool_terrainShowLabel",
                    type: "rect",
                    style: {
                        x: function(){
                            return this.parent.getWidth() - 180
                        },
                        y: 0,
                        autoWidth: true,
                        autoLine : false,
                        height: "100%",
                        lineHeight : TOP_HEIGHT,
                        fontSize : "16px",
                        fontColor : "#666666"
                    },
                    active : false
                }
            ]
        },
        fileView(TOP_HEIGHT),
        mapView(TOP_HEIGHT),
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
        },
        (get) => {
            return new Promise((resolve, reject)=>{
                require.ensure([], require => {
                    get(require("../../window/newMap/view/newMapView.js").default, resolve, reject);
                },'newMapView');
            });
        },
        (get) => {
            return new Promise((resolve, reject)=>{
                require.ensure([], require => {
                    get(require("../../window/setTerrain/view/setTerrainView.js").default, resolve, reject);
                },'setTerrainView');
            });
        }
    ]
};