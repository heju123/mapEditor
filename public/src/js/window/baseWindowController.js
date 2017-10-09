export default class BaseWindowController extends window.Monk.Controller{
    constructor(component) {
        super(component);
    }

    openWindow(opts){
        this.opts = opts;
        this.component.parent.active = true;
        this.component.parent.setStyle("alpha", 0.4);
        this.component.setStyle("alpha", 1);
        return this;
    }

    center(){
        this.component.setStyle("y", this.component.parent.getInnerHeight() / 2 - this.component.getHeight() / 2 - 200, false);
        this.component.setStyle({
            x : this.component.parent.getInnerWidth() / 2 - this.component.getWidth() / 2,
            y : this.component.parent.getInnerHeight() / 2 - this.component.getHeight() / 2
        });
        return this;
    }

    closeWindow(data){
        let promise1 = this.component.parent.setStyle("alpha", 0);
        let promise2 = this.component.setStyle({
            "alpha" : 0,
            "y" : this.component.getY() + 200
        });
        Promise.all([promise1,promise2]).then(()=>{
            this.component.parent.active = false;

            if (this.opts && this.opts.okCallback && typeof(this.opts.okCallback) === "function")
            {
                this.opts.okCallback.apply(this, [data]);
            }
        });
    }
}