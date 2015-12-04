$(document).ready(function(){
    $('.parallax').parallax();

      var options = [
    {selector: '#image-test', offset: 50, callback: 'Materialize.toast("Close!", 1500 )' },
    {selector: '#image-test', offset: 205, callback: 'Materialize.toast("Almost There!", 1500 )' },
    {selector: '.about-list', offset: 230, callback: 'Materialize.showStaggeredList(".about-list")' },
    {selector: '#image-test', offset: 230, callback: 'Materialize.fadeInImage("#image-test")' }
  ];
  Materialize.scrollFire(options);


//trigger Animations based off element
$('.card-panel').css('visibility', 'hidden');

$(window).scroll(function() {
    $('.card-panel').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+350) {
        $(this).addClass("slideExpandUp");
      }
    });
  });

//app-content animation
$('.card').css('visibility', 'hidden');

$(window).scroll(function() {
    $('.card').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass("slideLeft");
      }
    });
  });


});
