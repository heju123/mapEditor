import {navItemStyle} from "../style/base.js";

export default (TOP_HEIGHT)=>{
    return {
        id : "fileView",
        type: "rect",
        style: {
            x: 10,
            y: TOP_HEIGHT,
            width: 100,
            autoHeight : true,
            backgroundColor: "#DCDCDC",
            borderWidth : 1,
            borderColor : "#ABABAB",
            layout : {
                type : "linearLayout",
                orientation : "vertical"
            },
            zIndex : 2
        },
        active : false,
        children : [
            {
                type : "button",
                style : navItemStyle.style,
                text : "新建地图",
                animation : navItemStyle.animation
            },
            {
                type: "rect",
                style: {
                    width : "100%",
                    height : 1,
                    backgroundColor: "#ABABAB"
                }
            },
            {
                type : "button",
                style : navItemStyle.style,
                text : "加载地图",
                animation : navItemStyle.animation
            }
        ]
    };
};