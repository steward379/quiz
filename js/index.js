var points = 0;
// console.log(points)
// $(document).ready();

//test1

$('.one').on('click', function(){
  points += 3;
});
$('.two').on('click', function(){
  points += 5;
});
$('.three').on('click', function(){
  points += 2;
});
$('.four').on('click', function(){
  points += 4;
});
$('.five').on('click', function(){
  points += 1;
});
$('.block1').on('click', function(){
  $('.count').text(points);
  $('.test1').hide();
  $('.test2').show();
});

//test2

$('.two-one').on('click', function(){
  points += 4;
});
$('.two-two').on('click', function(){
  points += 3;
});
$('.two-three').on('click', function(){
  points += 1;
});
$('.block2').on('click', function(){
  $('.count').text(points);
  $('.test2').hide();
  $('.test3').show();
});

//test3

$('.three-one').on('click', function(){
  points += 4;
});
$('.three-two').on('click', function(){
  points += 1;
});
$('.block3').on('click', function(){
  $('.count').text(points);
  $('.test3').hide();
  $('.test4').show();
});

//test4

$('.four-one').on('click', function(){
  points += 2;
});
$('.four-two').on('click', function(){
  points += 3;
});
$('.four-three').on('click', function(){
  points += 4;
});
$('.four-four').on('click', function(){
  points += 5;
});
$('.four-five').on('click', function(){
  points += 1;
});
$('.block4').on('click', function(){
  $('.count').text(points);
  $('.test4').hide();
  $('.test5').show();
});

//test5

$('.five-one').on('click', function(){
  points += 5;
});
$('.five-two').on('click', function(){
  points += 4;
});
$('.five-three').on('click', function(){
  points += 3;
});
$('.five-four').on('click', function(){
  points += 2;
});
$('.five-five').on('click', function(){
  points += 1;
});
$('.block5').on('click', function(){
  $('.count').text(points);
  $('.test5').hide();
  $('.test6').show();
});

//test6

$('.six-one').on('click', function(){
  points += 3;
});
$('.six-two').on('click', function(){
  points += 2;
});
$('.six-three').on('click', function(){
  points += 5;
});
$('.six-four').on('click', function(){
  points += 1;
});
$('.six-five').on('click', function(){
  points += 4;
});
$('.block6').on('click', function(){
  $('.count').text(points);
  $('.test6').hide();
  $('.outcome').show();
  if(points > 0 && points < 6){
    $('._1').show();
    $('._1').text('1-5 美國');
  }else if(points > 5 && points < 12){
    $('._2').show();
    $('._2').text('6-11 希臘');
  }else if(points > 11 && points < 18){
    $('._3').show();
    $('._3').text('12-17 土而其');
  }else if(points > 17 && points < 24){
    $('._4').show();
    $('._4').text('18-23 印度');
  }else{
    $('._5').show();
    $('._5').text('24-28 剛果');
  }
});