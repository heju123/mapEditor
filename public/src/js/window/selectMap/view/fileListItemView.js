const FILE_LIST_ITEM_WIDTH = 60;
const FILE_LIST_ITEM_HEIGHT = 60;

export default (name)=>{
    return {
        name : "file_list_item_outer",
        type : "rect",
        style : {
            width : 80,
            height : 80
        },
        children : [
            {
                name : "file_list_item",
                type : "rect",
                style : {
                    x : function(){
                        return this.parent.getWidth() / 2 - FILE_LIST_ITEM_WIDTH / 2;
                    },
                    y : function(){
                        return this.parent.getHeight() / 2 - FILE_LIST_ITEM_HEIGHT / 2;
                    },
                    width : FILE_LIST_ITEM_WIDTH,
                    height : FILE_LIST_ITEM_HEIGHT,
                    borderWidth : 1,
                    hover : function(){
                        this.getComponentByName("file_list_item_img").setStyle("backgroundImage", "/src/images/map_on.png");
                        this.getComponentByName("file_list_item_text").setStyle("fontColor", "#337ab7");
                        this.setStyle("scale" , "1.1,1.1");
                    },
                    hoverout : function(){
                        this.getComponentByName("file_list_item_img").setStyle("backgroundImage", "/src/images/map.png");
                        this.getComponentByName("file_list_item_text").setStyle("fontColor", "#333");
                        this.setStyle("scale" , "1,1");
                    },
                    layout : {
                        type : "linearLayout",
                        orientation : "vertical"
                    }
                },
                animation : {
                    scale : {
                        duration : "200ms",
                        easeType : "Linear",
                        easing : "easeOut"
                    }
                },
                children : [
                    {
                        name: "file_list_item_img",
                        type: "rect",
                        style: {
                            width: "100%",
                            height: 40,
                            backgroundImage: "/src/images/map.png"
                        }
                    },
                    {
                        name: "file_list_item_text",
                        type: "rect",
                        style: {
                            width: "100%",
                            height: 20,
                            lineHeight : 20,
                            textAlign : "center",
                            fontSize : 12,
                            autoLine : false
                        },
                        text : name
                    }
                ],
                events : {
                    "click" : {
                        callback : "onSelectedItem",
                        param : function(){
                            return this;
                        }
                    }
                }
            }
        ]
    };
}