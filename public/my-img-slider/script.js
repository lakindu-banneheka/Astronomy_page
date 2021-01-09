var SlideIndex = 1;
// var mouseHolder = document.addEventListener();
// var Timer;

showDivs(SlideIndex);

function plusDives(n){
    showDivs(SlideIndex += n);
}

function curruntDiv(n){
    showDivs(SlideIndex=n);
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
setInterval(SlideTimer = (n) => {
    SlideIndex++;
    // n = SlideIndex-1;
    showDivs(SlideIndex-1);
    console.log(SlideIndex-1);


  }, 4000);
