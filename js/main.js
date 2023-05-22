// let testWidth = document.getElementById('para01').clientWidth;
// let testHeight = document.getElementById('para01').clientHeight;
// console.log(testWidth + 'px ' + testHeight + 'px');

// $('#para02').height(testHeight);

$(function(){
    $(".slideshow-fade li").css({"position":"relative","overflow":"hidden"});
    $(".slideshow-fade li").hide().css({"position":"absolute","top":0,"left":0});
    $(".slideshow-fade li:first").addClass("fade").show();
    setInterval(function(){
      var $active = $(".slideshow-fade li.fade");
      var $next = $active.next("li").length?$active.next("li"):$(".slideshow-fade li:first");
      $active.fadeOut(1000).removeClass("fade");
      $next.fadeIn(1000).addClass("fade");
    },2000);
});