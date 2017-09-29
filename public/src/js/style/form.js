//表单输入框
export let formInputStyle = function(id, title, opts){
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
                    name : "input",
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

//按钮
export let buttonStyle = function(text, opts){
    let style = {};
    style.x = opts.x;
    style.y = opts.y;
    if (opts.width !== undefined)
    {
        style.width = opts.width;
    }
    else
    {
        style.autoWidth = true;
    }
    style.height = opts.height;
    style.borderWidth = 1;
    style.borderColor = "#dfdfdf";
    style.backgroundColor = "#ffffff";

    return {
        name : "button",
        type : "button",
        style : style,
        text : text
    };
}