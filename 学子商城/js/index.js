/**
 * Created by Lenovo on 2019/2/26.
 */
<!--����Ч��-->
$(function(){
//        �ֲ�ͼ�һ���
    var index = 0;
    $(".banner ul.banner-list li").eq(index).css("z-index",1);
    $(".banner a.right-btn").mousedown(function(){
        index++;
        $(".banner ul.banner-list li").eq(index).css("z-index",1).siblings().css("z-index",0);
        $(".banner ul.list-btn li").eq(index).addClass("hover").siblings().removeClass("hover");
        if(index>=3){index=-1}
        clearInterval(timePlay);
    }).mouseup(function(){
        autoPlay();
    });
//         �ֲ�ͼ�󻬶�
    $(".banner a.left-btn").mousedown(function(){
        index--;
        if(index<0){index=3}
        $(".banner ul.banner-list li").eq(index).css("z-index",1).siblings().css("z-index",0);
        $(".banner ul.list-btn li").eq(index).addClass("hover").siblings().removeClass("hover");
        clearInterval(timePlay);
    }).mouseup(function(){
        autoPlay();
    });
//        ��ʱ������
    function autoPlay() {
        timePlay = setInterval(function () {
            index++;
            $(".banner ul.banner-list li").eq(index).css("z-index", 1).siblings().css("z-index", 0);
            $(".banner ul.list-btn li").eq(index).addClass("hover").siblings().removeClass("hover");
            if (index >= 3) {
                index = -1
            }
        }, 2000);
    }
    autoPlay();
});