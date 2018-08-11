/**
 * Created by Nier on 2018/8/8.
 */
$(document).ready(function() {
    $("#hide_i").click(function(){
       $("#container_holiday").hide("show");
    });

    //显示文字
    $('.user_email').hover(function(){
        $('.tip2').fadeIn();
        $('.tip2').text($('.user_email').attr('data-title'));
    });

    //获取鼠标位置
    $('.user_email').mousemove(function(e){
        var top = e.pageY+15;
        var left = e.pageX+20; //使得文字块显示在鼠标的右下方
        $('.tip2').css({
            'top' : top + 'px',
            'left': left+ 'px'
        });
    });
    //隐藏文字
    $('.user_email').mouseout(function(){
        $('.tip2').hide();
    });


});

