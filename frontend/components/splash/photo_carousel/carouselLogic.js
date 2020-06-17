export default function carouselLogic(slideIndex) {
    //  debugger
    //  var i;
    //  var showSlides = document.getElementsByClassName("slides");
    //  var dots = document.getElementsByClassName("dot");
    //  for (i = 0; i < showSlides.length; i++) {
    //      // debugger
    //      showSlides[i].style.display = "none";
    //  }
    //  debugger
    //  slideIndex++;
    //  if (slideIndex > showSlides.length) {
    //      slideIndex = 1;
    //  }
    //  for (i = 0; i < dots.length; i++) {
    //      dots[i].className = dots[i].className.replace(" active", "");
    //  }
    //  debugger
    //  showSlides[slideIndex - 1].style.display = "block";
    //  dots[slideIndex - 1].className += " active";
    //  setTimeout(carouselLogic(slideIndex), 2000); // Change image every 2 seconds

        var metaslider_25 = function($) {
            $('#metaslider_25').addClass('flexslider'); // theme/plugin conflict avoidance
            $('#metaslider_25').flexslider({ 
                slideshowSpeed:3000,
                animation:"fade",
                controlNav:false,
                directionNav:false,
                pauseOnHover:false,
                direction:"horizontal",
                reverse:false,
                animationSpeed:600,
                prevText:"&lt;",
                nextText:"&gt;",
                slideshow:true
            });
        };
        var timer_metaslider_25 = function() {
            var slider = !window.jQuery ? window.setTimeout(timer_metaslider_25, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_25, 1) : metaslider_25(window.jQuery);
        };
        timer_metaslider_25();
    
}