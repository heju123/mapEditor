import MapController from "../../controller/map/mapController.js";

export default (data)=>{
    return {
        name : "mapCom",
        controller : MapController,
        controllerParam : [data],
        type : "rect",
        style : {
            x : 0,
            y : 0,
            width : 0,
            height : 0,
            backgroundColor : "#c8c8c8",
            draggable : true
        }
    };
}