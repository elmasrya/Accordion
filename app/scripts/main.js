
  $('.top').on('click',function() {
  $('.text').addClass('close');
  $('this').next().find('.text').removeClass('close');
  $('this').next().find('.text').addClass('open');
});

/*
$('.top2').on('click',function() {


  $('.text2').removeClass('text2');




});

$('.top3').on('click',function() {

  $('.text3').removeClass('text3');

});

/*
$('.top2').click(function() {



  $('.box2').removeClass('text2');
});

$('.top3').click(function() {



  $('.box3').removeClass('text3');
});
*/
