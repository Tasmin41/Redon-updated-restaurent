/*$(document).ready(function() {
    $('.video-popup').magnificPopup({
        type:'iframe',
        gallery:{
         enabled:true
}
    });
});
*/
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
 // dots: true,
  prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
 
  });
  

});
// init Isotope
var $grid = $('.menu').isotope({
    // options
  });
  // filter items on button click
  $('.menu-type-list').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  //sticky menu
  $(window).load(function(){
    //sticky menu
    $(window).on('scroll',function(){
      if($(this).scrollTop() > 20){
        $('.header-2').addClass('sticky');
      }else{
        $('.header-2').removeClass('sticky');
      }
    });
  });