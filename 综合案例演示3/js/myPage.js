$(function () {
    var k=$(window).height();
    var flag=false;
    $("#fullpage").fullpage(
        //fullpage接受json对象的形式

        {
            // 是否显示导航栏
            navigation:true,
            //导航栏所在位置
            // navigationPosition:"left",
            //是否循环滚动
            loopBottom:true,
            //滚动速度
            scrollingSpeed:1200,
            //当加载完之后的回调函数
            afterLoad:function (anchorLink,index) {
                // alert(index);
                if(index==2&&flag==false)
                {
                    $(".search").show().animate({"right":370},1000,function () {
                        $(".search-words").animate({"opacity":1},1000,function () {
                            $(".search").hide();
                            $(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},1000);
                            $(".goods-02").show().animate({"height":218},1000,function () {
                                flag=true;
                            });
                            $(".words-02").show().animate({"opacity":1},1000);
                        });
                    });

                }
            },
            onLeave:function (index,nextIndex,direction) {
                if(index==2&&nextIndex==3&&flag==true)
                {
                    $(".shirt-02").show().animate({"bottom":-(k-250),"width":207,"left":260},2000);
                    $(".cover").show();
                }
                if(index==3&&nextIndex==4)
                {
                    $(".shirt-02").hide();
                    $(".t1f").show().animate({"bottom":-((k-250)+50),"left":260},2000,function () {
                        $(this).hide();
                        $(".car-img").show();
                        $(".car").animate({"left":2050},4000,"easeInElastic");
                    });
                }
            },
        }
    )

});