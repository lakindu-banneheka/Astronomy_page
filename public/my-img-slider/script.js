var SlideIndex = 1;
// var mouseHolder = document.addEventListener();
var Timer;
var Time = 3000;

// next & previous
function plusDives(n){
  clearInterval(Timer);
  Timer = setInterval(SlideTimer = (n) => {n = SlideIndex;showDivs(n);SlideIndex++;}, Time);
  SlideTimer(SlideIndex += n-1);
}
// dot control
function curruntDiv(n){
  clearInterval(Timer);
  Timer = setInterval(SlideTimer = (n) => {n = SlideIndex;showDivs(n);SlideIndex++;}, Time);
  SlideTimer(SlideIndex=n);
}
// show -- main part
function showDivs(n){
var i;
var Slides = document.getElementsByClassName('Slider');
var dots = document.getElementsByClassName('dot');
if (n > Slides.length){SlideIndex=1}
if (n < 1){SlideIndex = Slides.length}
for (i = 0; i < Slides.length; i++) {
    Slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" badgeSelect", "");
  }
   Slides[SlideIndex-1].style.display = "block";  
   dots[SlideIndex-1].className += " badgeSelect";
   console.log(SlideIndex-1);
}
// start
Timer = setInterval(SlideTimer = (n) => {n = SlideIndex;showDivs(n);SlideIndex++;}, Time);
SlideTimer(SlideIndex); 
