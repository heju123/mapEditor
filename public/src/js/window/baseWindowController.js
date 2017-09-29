export default class BaseWindowController extends window.Monk.Controller{
    constructor(component) {
        super(component);
    }

    openWindow(){console.log("open");
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

    closeWindow(){
        let allPromise = [];
        let promise1 = this.component.parent.setStyle("alpha", 0);
        let promise2 = this.component.setStyle({
            "alpha" : 0,
            "y" : "70%"
        });
        if (promise1)
        {
           allPromise.push(promise1);
        }
        if (promise2)
        {
            allPromise.push(promise2);
        }
        if (allPromise.length > 0)
        {
            Promise.all(allPromise).then(()=>{
                this.component.parent.active = false;
            });
        }
    }
}