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
                        borderRadius : 3
                    }
                }
            ]
        }
    ];
};