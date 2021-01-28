const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const listmenu = document.querySelector(".list-menu");
// var offset = 80;

$(document).ready(function () {
  $(".change-bg").click(function () {
    console.log("aaa");
    $("body").toggleClass("changeBG");
  });
  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   dots:false,
  //   autoplay:false,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: false,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   arrows: false,
  // });
  $(".slide").slick({
    
    infinite: true,
    autoplay: false,
    dots:true,
    
    slidesToShow: 1,
    pauseOnHover: true,
    arrows: false,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return `<div class="number"><a class="number1">${i+1}</a> </div>`;
      },
  });
  // $(".btn1").hover(
  //   function(){
  //   $("p1").show();
  //   }, 
  //   function(){
  //   $("p1").hide();
  // });
  // $(".btn2").hover(
  //   function(){
  //   $("p2").show();
  //   }, 
  //   function(){
  //   $("p2").hide();
  // });
  // $(".btn3").hover(
  //   function(){
  //   $("p3").show();
  //   },
  //   function(){
  //   $("p3").hide();
  // });
  // $("p3").hover(
  //   function(){
  //   $("p3").show();
  //   },
  //   function(){
  //   $("p3").hide();
  // });
  // $(".navbar-nav>li>a").on("click", function () {
  //   $(".navbar-collapse").collapse("hide");
  // });
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
