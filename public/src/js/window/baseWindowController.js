export default class BaseWindowController extends window.Monk.Controller{
    constructor(panel) {
        super(panel);
    }

    openWindow(){
        this.panel.parent.active = true;
        this.panel.parent.setStyle("alpha", 0.4);
        this.panel.setStyle("alpha", 1);
    }
}