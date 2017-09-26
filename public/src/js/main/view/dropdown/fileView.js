import {navItemStyle,navDivider} from "../../style/nav.js";

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
                animation : navItemStyle.animation,
                events : {
                    "click" : "openNewMapDlg"
                }
            },
            {
                type: "rect",
                style: navDivider.style
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