export default class BaseWindowController extends window.monk.Controller{
    constructor(component) {
        super(component);
    }

    openWindow(opts){
        this.opts = opts;
        this.component.parent.active = true;
        let y = this.component.getY();
        this.component.setStyle("y", y - 200, false);
        this.component.setStyle("y", y);
        this.component.parent.setStyle("alpha", 0.4);
        this.component.setStyle("alpha", 1);

        if (this.onOpen && typeof(this.onOpen) === "function")
        {
            this.onOpen.apply(this, []);
        }
        return this;
    }

    center(){
        this.component.setStyle({
            x : this.component.parent.getInnerWidth() / 2 - this.component.getWidth() / 2,
            y : this.component.parent.getInnerHeight() / 2 - this.component.getHeight() / 2
        }, false);
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