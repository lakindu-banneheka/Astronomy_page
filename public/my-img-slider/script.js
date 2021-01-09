var SlideIndex = 1;
// var mouseHolder = document.addEventListener();
// var Timer;
showDivs(SlideIndex);
setInterval(SlideTimer = (n) => {
    
    n = SlideIndex;
    showDivs(n);
    console.log(n-1);
    SlideIndex++;

  }, 4000);

function plusDives(n){
    SlideTimer(SlideIndex += n);
}

function curruntDiv(n){
    SlideTimer(SlideIndex=n);
}


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
    
}

