$(document).ready(function(){
    $('.parallax').parallax();

      var options = [
    {selector: '#skill-content', offset: 400, callback: 'Materialize.toast("I Speak Computer!", 1500 )' },
    {selector: '#about-content', offset: 150, callback: 'Materialize.toast("Projects I worked on!", 1500 )' },
    {selector: '#about-content', offset: 520, callback: 'Materialize.toast("A little about Me", 1500 )' },
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
      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideExpandUp");
      }
    });
  });

//app-content animation
$('.app-contain').css('visibility', 'hidden');

$(window).scroll(function() {
    $('.app-contain').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass("slideLeft");
      }
    });
  });


});
