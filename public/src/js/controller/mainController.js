/**
 * Created by heju on 2017/7/14.
 */
export default class MainController extends window.Monk.Controller{
    constructor(panel) {
        super(panel);

        this.onClickRootBind = this.onClickRoot.bind(this);
        setTimeout(()=>{
            let mainView = this.viewState.getComponentById("mainView");
            mainView.registerEvent("click", this.onClickRootBind);
        }, 1000);
    }

    showFileView(e){
        let fileView = this.viewState.getComponentById("fileView");
        fileView.active = !fileView.active;
        e.stopPropagation();
    }

    onClickRoot(){
        let fileView = this.viewState.getComponentById("fileView");
        fileView.active = false;
    }

    destory(){
        let mainView = this.viewState.getComponentById("mainView");
        mainView.removeEvent("click", this.onClickRootBind);
    }
}