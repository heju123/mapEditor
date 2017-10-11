//顶部工具栏按钮
export let navButtonStyle = {
    style : {
        autoWidth : true,
        height : "100%",
        hover : {
            backgroundColor : "#bfbfbf"
        },
        active : {
            backgroundColor : "#FF8501",
            fontColor : "#ffffff"
        },
        focus : {
            backgroundColor : "#f1f1f1"
        }

    }
};

//顶部工具栏下拉分割线
export let navDivider = {
    style : {
        width : "100%",
        height : 1,
        backgroundColor: "#ABABAB"
    }
};

//顶部工具栏下拉选项按钮
export let navItemStyle = {
    style : {
        width : "100%",
        height : 35,
        backgroundColor: "#DCDCDC",
        hover : {
            backgroundColor : "#E9E9E9"
        },
        active : {
            backgroundColor : "#FF8501",
            fontColor : "#ffffff"
        }
    },
    animation : {
        backgroundColor : {
            duration : "300ms",
            easeType : "Linear",
            easing : "ease"
        }
    }
};