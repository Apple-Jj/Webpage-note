$(function () {
    //获取左侧列表中的li，注册鼠标经过事件
    $("#left>li").mouseover(function () {
        var index=$(this).index();//获取当前活动的索引值
        //console.log(index);//测试索引是否正确，网页中按F12,console看
        $("#center>li:eq("+index+")").siblings("li").hide();//鼠标经过时让不是当前活动的兄弟元素隐藏
        $("#center>li:eq("+index+")").show();//鼠标经过时让活动的当前元素显示出来
    });

    //获取右侧列表中的li，注册鼠标经过事件
    $("#right>li").mouseover(function () {
        var index=$(this).index()+9;//获取当前活动的索引值
        $("#center>li:eq("+index+")").siblings("li").hide();
        $("#center>li:eq("+index+")").show();
    });
});