$(function () {
    //获取操纵元素，注册鼠标经过事件
    $("#box>ul>li").mouseover(function ()
        {
            $(this).siblings("li").css("width","100px");
            $(this).css("width","800px");
        }
    );

    //获取操纵元素，注册鼠标离开事件
    $("#box>ul>li").mouseout(function ()
        {
            $("#box>ul>li").css("width","240px");
        }
    );
});