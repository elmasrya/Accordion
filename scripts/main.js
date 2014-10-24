$('.contentText2').css("display","none");
$('.contentText3').css("display","none");


$('#content1').click(function(){
  $('.contentText1').css("display","block");
  $('.contentText2').css("display","none");
  $('.contentText3').css("display","none");
    });
$('#content2').click(function(){
  $('.contentText2').css("display","block");
  $('.contentText1').css("display","none");
  $('.contentText3').css("display","none");
    });
$('#content3').click(function(){
  $('.contentText3').css("display","block");
  $('.contentText1').css("display","none");
  $('.contentText2').css("display","none");
    });
