import {navItemStyle,navDivider} from "../../style/nav.js";

export default (TOP_HEIGHT)=>{
    return {
        id : "dropdown_mapView",
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
                text : "设置地形",
                animation : navItemStyle.animation,
                events : {
                    "click" : "openSetTerrainDlg"
                }
            }
        ]
    };
};