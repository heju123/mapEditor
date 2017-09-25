import baseStyle from "../style/base.js";

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
                style : {
                    width : "100%",
                    height : 35,
                    backgroundColor: "#DCDCDC",
                    hover : {
                        backgroundColor : "#E9E9E9"
                    }
                },
                text : "新建地图"
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
                style : {
                    width : "100%",
                    height : 35,
                    backgroundColor: "#DCDCDC",
                    hover : {
                        backgroundColor : "#E9E9E9"
                    }
                },
                text : "加载地图"
            }
        ]
    };
};