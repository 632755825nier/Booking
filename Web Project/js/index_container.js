/**
 * Created by Nier on 2018/8/8.
 */
$(document).ready(function() {
    $("#hide_i").click(function(){
       $("#container_holiday").hide("show");
    });

    //��ʾ����
    $('.user_email').hover(function(){
        $('.tip2').fadeIn();
        $('.tip2').text($('.user_email').attr('data-title'));
    });

    //��ȡ���λ��
    $('.user_email').mousemove(function(e){
        var top = e.pageY+15;
        var left = e.pageX+20; //ʹ�����ֿ���ʾ���������·�
        $('.tip2').css({
            'top' : top + 'px',
            'left': left+ 'px'
        });
    });
    //��������
    $('.user_email').mouseout(function(){
        $('.tip2').hide();
    });


});

