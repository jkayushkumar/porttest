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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {     
    // slides[i].classList.add("noDisplay");
    slides[i].style.opacity="0%";
  }
  
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//  }
  slides[slideIndex-1].classList.remove("noDisplay");
  slides[slideIndex-1].style.opacity="100%";
//   dots[slideIndex-1].className += " active";
}