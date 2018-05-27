
$(document).ready(function(){
var w = window.innerWidth
||document.documentElement.clientWidth||document.body.clientWidth;
var h = window.innerHeight
||document.documentElement.clientHeight||document.body.clientHeight;
var scrollWidth =
    Element.offsetWidth - Element.clientWidth;
var y = document.getElementById("titleImage");
        y.style.height = h;
        y.style.width = w-scrollWidth;

});

//$(".clickme").click(function(){
//    return true
//    $('html,body'.animate({
//        scrollTop: $(".gohere").offset().top},
//        'slow'));
//    });