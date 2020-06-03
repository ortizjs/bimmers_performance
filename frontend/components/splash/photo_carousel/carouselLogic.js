export default function carouselLogic(slideIndex) {
    //  debugger
     var i;
     var showSlides = document.getElementsByClassName("slides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < showSlides.length; i++) {
         // debugger
         showSlides[i].style.display = "none";
     }
     debugger
     slideIndex++;
     if (slideIndex > showSlides.length) {
         slideIndex = 1;
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     debugger
     showSlides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
     setTimeout(carouselLogic(slideIndex), 2000); // Change image every 2 seconds
}