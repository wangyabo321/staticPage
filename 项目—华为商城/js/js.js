/**
 * Created by Lenovo on 2019/1/8.
 */
$(function(){
    $(".dh").hover(function(){
        $(this).siblings('li.kf').children('a').css('borderRight','none');
    },function(){
        $(this).siblings('li.kf').children('a').css('borderRight','1px solid #C1ABB6');
    });
    $(".ph").hover(function(){
        $(this).siblings('li.dh').children('a').css('borderRight','none');
    },function(){
        $(this).siblings('li.dh').children('a').css('borderRight','1px solid #C1ABB6');
    });
    //列表轮播图1
    $(".point-left-one").click(function(){
        $(".play-chart-con .cart-con ul").css("marginLeft","-930px");
    });
    $(".point-right-one").click(function(){
        $(".play-chart-con .cart-con ul").css("marginLeft","0px");
    });
    //列表轮播图2
    $(".point-left-two").click(function(){
        $(".cart-con-two ul").css("marginLeft","-504px");
    });
    $(".point-right-two").click(function(){
        $(".cart-con-two ul").css("marginLeft","0px");
    });
});
