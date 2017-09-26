export default {
    header : {
        style : (headHeight)=>{
            return {
                type : "rect",
                style: {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: headHeight,
                    backgroundColor: "#3D3D3D"
                }
            };
        }
    },
    content : {
        style : (headHeight, content)=>{
            return {
                type : "rect",
                style: {
                    x: 0,
                    y: headHeight,
                    width: "100%",
                    height: function(){
                        return this.parent.getInnerHeight() - headHeight;
                    },
                    backgroundColor: "#ffffff"
                },
                children : [
                    content
                ]
            };
        }
    }
};