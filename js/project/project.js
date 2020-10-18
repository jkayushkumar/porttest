var slideIndex = 1;

function nextProject(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("prjClass");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.opacity = "0%";
    slides[i].classList.add("noDisplay");
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].classList.remove("noDisplay");
  // slides[slideIndex - 1].animate({opacity:1},{duration:1000, iterations:Infinity}  ); 
  //   dots[slideIndex-1].className += " active";
}