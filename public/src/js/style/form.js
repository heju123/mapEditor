//表单输入框
export let formInputStyle = function(id, name, title, opts){
    return [
        {
            name : "input_label",
            type : "rect",
            style : {
                width : opts.formLabelWidth,
                height : "100%",
                lineHeight : opts.formRowHeight,
                textAlign : "center"
            },
            text : title
        },
        {
            name : "input_area",
            type : "rect",
            style : {
                width : function(){
                    return this.parent.getInnerWidth() - opts.formLabelWidth;
                },
                height : "100%"
            },
            children : [
                {
                    id : id,
                    name : name || "input",
                    type : "input",
                    style : {
                        x : opts.formInputPadding,
                        y : opts.formInputPadding,
                        width : function(){
                            return this.parent.getInnerWidth() - opts.formInputPadding * 2;
                        },
                        height : function(){
                            return this.parent.getInnerHeight() - opts.formInputPadding * 2;
                        },
                        borderWidth : 1,
                        borderColor : "#dfdfdf",
                        borderRadius : 3,
                        readOnly : opts.readOnly
                    }
                }
            ]
        }
    ];
};

export let formCheckboxStyle = function(id, name, title, opts) {
    return [
        {
            type : "rect",
            style : {
                width : 40,
                height : "100%"
            },
            children : [
                {
                    id : id,
                    name : name || "checkbox",
                    type : "checkbox",
                    style : {
                        x : function(){
                            return this.parent.getWidth() / 2 - opts.width / 2
                        },
                        y : function(){
                            return this.parent.getHeight() / 2 - opts.height / 2
                        },
                        width : opts.width,
                        height : opts.height,
                        lineWidth : opts.lineWidth
                    },
                    events : {
                        "click" : opts.onChecked
                    },
                    checked : opts.checked
                }
            ]
        },
        {
            type : "rect",
            style : {
                autoWidth : true,
                height : "100%",
                lineHeight : opts.formRowHeight
            },
            text : title,
            events : {
                "click" : {
                    callback : function(){
                        let checkbox = this.parent.getComponentsByType("checkbox");
                        if (checkbox && checkbox.length > 0)
                        {
                            checkbox[0].triggerEvent("click");
                        }
                    },
                }
            }
        }
    ];
};