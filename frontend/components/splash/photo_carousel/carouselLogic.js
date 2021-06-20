export default function carouselLogic(slideIndex) {

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