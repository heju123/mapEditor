import MainController from "../controller/mainController.js";

let TOP_HEIGHT = 30;

export default {
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
        {
            type : "rect",
            style : {
                x : 0,
                y : 0,
                width : "100%",
                height : TOP_HEIGHT,
                backgroundColor : "#aeaeae"
            }
        },
        {
            type : "rect",
            style : {
                x : 0,
                y : TOP_HEIGHT,
                width : "100%",
                height : function(){
                    return this.parent.getHeight() - TOP_HEIGHT;
                },
                backgroundColor : "#dfdfdf"
            }
        }
    ]
};