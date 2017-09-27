const HEAD_HEIGHT = 50;

let getHeader = (title)=>{
    return {
        type : "rect",
        style: {
            x: 0,
            y: 0,
            width: "100%",
            height: HEAD_HEIGHT,
            backgroundColor: "#3D3D3D"
        },
        children : [
            {
                type : "rect",
                style: {
                    x: 10,
                    y: 0,
                    autoWidth : true,
                    height: "100%",
                    lineHeight : HEAD_HEIGHT,
                    fontColor : "#919191",
                    fontSize : "18px"
                },
                text : title
            }
        ]
    };
};

let getContent = (content)=>{
    return {
        type : "rect",
        style: {
            x: 0,
            y: HEAD_HEIGHT,
            width: "100%",
            height: function(){
                return this.parent.getInnerHeight() - HEAD_HEIGHT;
            },
            backgroundColor: "#ffffff"
        },
        children : [
            content
        ]
    };
};

export default (controller, opts)=>{
    return {
        type : "rect",
        active : false,
        style: {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            zIndex : 9998,
            alpha : 0
        },
        animation : {
            alpha : {
                duration : "500ms",
                easeType : "Linear",
                easing : "ease"
            }
        },
        children : [
            {
                id : opts.id,
                controller: controller,
                type: "panel",
                style: {
                    x: opts.x,
                    y: opts.y,
                    width: opts.width,
                    height: opts.height,
                    backgroundColor: "#dfdfdf",
                    borderColor : "#3D3D3D",
                    borderWidth : 1,
                    borderRadius : 5,
                    zIndex : 9999,
                    alpha : 0
                },
                animation : {
                    alpha : {
                        duration : "500ms",
                        easeType : "Linear",
                        easing : "ease"
                    }
                },
                children: [
                    getHeader(opts.title),
                    getContent(opts.contentStyle)
                ]
            }
        ]
    }
};