import MapController from "../../controller/map/mapController.js";

export default ()=>{
    return {
        name : "mapCom",
        controller : MapController,
        type : "rect",
        style : {
            x : 0,
            y : 0,
            width : 100,
            height : 100,
            backgroundColor : "#c8c8c8"
        }
    };
}