/**
 * Created by Lenovo on 2019/3/7.
 */
$(function(){
    $('.headerRight ul.headerList li.bgColor').hover(function(){
        $(this).addClass('headerBg').siblings().removeClass('headerBg');
        $(this).find('div').show();
    },function(){
        $(this).removeClass('headerBg');
        $(this).find('div').hide();
    });
//            �ֲ�ͼ������ʽ
//            ���ƶ�
    var _index4 = 0;
    $('.bannerImg img').eq(0).css('z-index','2');
    $('.btnRight').mousedown(function(){
        _index4++;
        if(_index4 >= 5){_index4 = 0;}
        $('.bannerImg img').eq(_index4).css('z-index','2').siblings().css('z-index','0');
        $('.bannerBtn ul.BtnList li').eq(_index4).addClass('btnBg').siblings().removeClass('btnBg');
        clearInterval(timer);
    }).mouseup(function(){
        autoPlay();
    });
//            ���ƶ�
    var _index5 = 0;
    $('.btnLeft').mousedown(function(){
        _index5--;
        if(_index5 <= -1){_index5 = 4;}
        $('.bannerImg img').eq(_index5).css('z-index','2').siblings().css('z-index','0');
        $('.bannerBtn ul.BtnList li').eq(_index5).addClass('btnBg').siblings().removeClass('btnBg');
        console.log(_index5);
        clearInterval(timer);
    }).mouseup(function(){
        autoPlay();
    });
//            ����������
    $('.bannerBtn ul.BtnList li').hover(function(){
        var _index6 = $(this).index();
        $('.bannerImg img').eq(_index6).css('z-index','2').siblings().css('z-index','0');
        $(this).addClass('btnBg').siblings().removeClass('btnBg');
        clearInterval(timer);
    },function(){
        autoPlay();
    });
//            �Զ�����
    var _index7 = 0;
    var timer = null;
    function autoPlay(){
        timer = setInterval(function(){
            _index7++;
            if(_index7 >= 5){_index7 = 0;}
            $('.bannerImg img').eq(_index7).css('z-index','2').siblings().css('z-index','0');
            $('.bannerBtn ul.BtnList li').eq(_index7).addClass('btnBg').siblings().removeClass('btnBg');
        },2000);
    }
    autoPlay()
//        �и����Ч
    $('.foodWrapper ul.listOne li').hover(function(){
        var _index1 = $(this).index();
        $('.foodWrapper div.content1 div').eq(_index1).addClass('contentWrapper').siblings().removeClass('contentWrapper');
        $(this).addClass('triangle').siblings().removeClass('triangle');
    },function(){});
//        è�۵�Ӱ����
//        ���󻬶�
    $('.buttonOne').click(function(){
        $('.movieCont ul.movieList').css('left','-1190px');
    });
//        ���һ���
    $('.buttonTwo').click(function(){
        $('.movieCont ul.movieList').css('left','0px');
    });
    $('.movieTitle ul.listOne li').hover(function(){
        var _index2 = $(this).index();
        $('.movieWrapper .movieCont ul').eq(_index2).css('display','block').siblings().css('display','none');
        $(this).addClass('triangle').siblings().removeClass('triangle');
    },function(){});
//        �Ƽ����񶯻�
    $('.liveWrapper ul.listTwo li').hover(function(){
        var _index3 = $(this).index();
        $('.liveWrapper .content2 div').eq(_index3).addClass('contentWrapper').siblings().removeClass('contentWrapper');
        $(this).addClass('triangle').siblings().removeClass('triangle');
    },function(){});
});