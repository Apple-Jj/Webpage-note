$(function () {
    //获取左侧列表中的li，注册鼠标经过事件
    $("#left>li").mouseover(function () {
        //获取当前li的索引值，.index()方法
        var index=$(this).index();
        // console.log(index);
        $("#center>li:eq("+index+")").siblings("li").hide();
        $("#center>li:eq("+index+")").show();//"+index+"是变量，光index是字符串


    })



    //获取右侧列表中的li，注册鼠标经过事件
    $("#right>li").mouseover(function () {
        var index=$(this).index()+9;
        $("#center>li:eq("+index+")").siblings("li").hide();
        $("#center>li:eq("+index+")").show();

    })
});