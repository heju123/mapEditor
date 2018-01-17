//按钮
export let buttonStyle = function(text, opts){
    let style = {};
    if (opts.x)
    {
        style.x = opts.x;
    }
    if (opts.y)
    {
        style.y = opts.y;
    }
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
    style.hover = {
        backgroundColor : "#337ab7",
        borderColor : "#337ab7",
        fontColor : "#fff"
    };
    style.active = {
        backgroundColor : "#3170AB",
        borderColor : "#3170AB",
        fontColor : "#fff"
    };

    return {
        name : "button",
        type : "button",
        style : style,
        text : text,
        events : opts.events
    };
};