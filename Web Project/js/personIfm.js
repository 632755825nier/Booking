/**
 * Created by Nier on 2018/8/16.
 */
$(document).ready(function () {
    $('.order_ifm_p1').hover(function () {
        $('.tips').fadeIn();
        $('.tips').text($('.order_ifm_p1').attr('data-title'));
    });

    $('.order_ifm_p1').mousemove(function (e) {
        var top = e.pageY + 15;
        var left = e.pageX + 20; //使得文字块显示在鼠标的右下方
        $('.tips').css({
            'top': top + 'px',
            'left': left + 'px'
        });
    });

    $('.order_ifm_p1').mouseout(function () {
        $('.tips').hide();
    });


    $('.order_information_next1_p').hover(function () {
        $('.tip3').slideDown();
        $('.tip3').text($('.order_information_next1_p').attr('data-title'));
    });

    $('.order_information_next1_p').mousemove(function (e) {
        var top = e.pageY + 15;
        var left = e.pageX + 20; //使得文字块显示在鼠标的右下方
        $('.tip3').css({
            'top': top + 'px',
            'left': left + 'px'
        });
    });

    $('.order_information_next1_p').mouseout(function () {
        $('.tip3').hide();
    });

    //$(".input_ifm_centre_inp").focusout(function(){
    //   //alert("表单事件！")
    //   // if($(".input_ifm_centre_inp").value()==null){
    //   //     alert("没有内容");
    //   // }else{
    //        alert("有内容"+$(".input_ifm_centre_inp").value());
    //
    //    }
    //});
});