export default class BaseWindowController extends window.Monk.Controller{
    constructor(component) {
        super(component);
    }

    openWindow(){
        this.component.parent.active = true;
        this.component.parent.setStyle("alpha", 0.4);
        this.component.setStyle("alpha", 1);
        return this;
    }

    center(){
        this.component.setStyle({
            x : this.component.parent.getInnerWidth() / 2 - this.component.getWidth() / 2,
            y : this.component.parent.getInnerHeight() / 2 - this.component.getHeight() / 2
        });
        return this;
    }
}