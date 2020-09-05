$(function () {
    //获取左侧按钮，注册点击事件
    $("#btn1").click(function () {
        $("div>img").last("img").hide(1000,function () {
            $(this).prev("img").hide(1000,arguments.callee);//回调函数
        });
    });
    //获取右侧按钮，注册点击事件
    $("#btn2").click(function () {
        $("div>img").first("img").show(1000,function () {
            $(this).next("img").show(1000,arguments.callee);//回调函数
        });
    });
});