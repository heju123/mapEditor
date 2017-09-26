import newMapController from "../controller/newMapController.js";
import window from "../../style/window.js";

const HEAD_HEIGHT = 45;

let content = {
    type : "rect",
    style : {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
    },
    text : "123"
};

export default {
    controller: newMapController,
    type: "panel",
    style: {
        x: 10,
        y: 10,
        width: 400,
        height: 300,
        backgroundColor: "#dfdfdf",
        borderColor : "#3D3D3D",
        borderWidth : 1,
        borderRadius : 5,
        zIndex : 9999
    },
    children: [
        window.header.style(HEAD_HEIGHT),
        window.content.style(HEAD_HEIGHT, content)
    ]
}