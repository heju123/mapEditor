import newMapController from "../controller/newMapController.js";
import window from "../../style/window.js";

let contentStyle = {
    type : "rect",
    style : {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
    },
    text : "123"
};

export default window(newMapController, {
    title : "新建地图",
    x : 10,
    y : 10,
    width : 400,
    height : 300,
    contentStyle : contentStyle
})