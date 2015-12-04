$(document).ready(function(){
    $('.parallax').parallax();

      var options = [
    {selector: '#image-test', offset: 50, callback: 'Materialize.toast("Close!", 1500 )' },
    {selector: '#image-test', offset: 205, callback: 'Materialize.toast("Closer!", 1500 )' },
    {selector: '.about-list', offset: 215, callback: 'Materialize.showStaggeredList(".about-list")' },
    {selector: '#image-test', offset: 215, callback: 'Materialize.fadeInImage("#image-test")' }
  ];
  Materialize.scrollFire(options);


});