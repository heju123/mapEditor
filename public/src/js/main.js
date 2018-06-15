/**
 * Created by heju on 2017/7/19.
 */
import "plutojs";
import route from "./main/view/route.js";
import "../style/style.less";

class Main {
    constructor(){
        let mainBox = document.getElementById("mainBox");
        mainBox.style.width = window.innerWidth + "px";
        mainBox.style.height = window.innerHeight + "px";

        this.pluto = new window.plutojs.Main("mainBox");

        this.pluto.run(route);
    }
}

let main = new Main();

$("#fileSelectPop").children(".upload-btn").children(".btn").click(function(){
    let fileSelector = $("#fileSelector");

    fileSelector.on('change', function () {
        let files = fileSelector[0].files;
        main.pluto.fps.viewState.rootComponent.getComponentById("mainView").controller.importMap(files);
        layer.closeAll();
    });

    fileSelector.click();
});