export default class BaseWindowController extends window.Monk.Controller{
    constructor(panel) {
        super(panel);
    }

    openWindow(){
        this.panel.parent.active = true;
        this.panel.parent.setStyle("alpha", 0.4);
        this.panel.setStyle("alpha", 1);
        return this;
    }

    center(){
        this.panel.setStyle({
            x : this.panel.parent.getInnerWidth() / 2 - this.panel.getWidth() / 2,
            y : this.panel.parent.getInnerHeight() / 2 - this.panel.getHeight() / 2
        });
        return this;
    }
}