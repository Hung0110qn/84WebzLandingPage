const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const listmenu = document.querySelector(".list-menu");
// var offset = 80;

$(document).ready(function () {
  // $(".change-bg").click(function () {
  //   console.log("aaa");
  //   $("body").toggleClass("changeBG");
  // });
  $(".slide").slick({
    
    infinite: true,
    autoplay: true,
    dots:false,
    
    slidesToShow: 1,
    pauseOnHover: true,
    arrows: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return `<div class="number"><a class="number1">${i+1}</a> </div>`;
      },
  });
  $(".menu-mobile .menu ul .list-menu").on("click", function () {
    $("nav").removeClass("open");
    $("button").removeClass("open");
});
$(".hamburger").on("click", function() {
    console.log("aaaa")
    $(".hamburger").toggleClass("open");
    $(".menu").toggleClass("open");
});
// $('.navbar li a').click(function(event) {
//   event.preventDefault();
//   $($(this).attr('href'))[0].scrollIntoView();
// console.log($($(this).attr('href')).offset().top)
//  window.scroll(0,$($(this).attr('href')).offset().top)
//   scrollBy(0, -offset);
//   console.log($(this).attr('href'));
// });

});
