import React from 'react';
import carouselLogic from './carouselLogic';
import CarouselPhoto from './carousel_photo';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }

    fetchPhotos() {
        // return 
    }

    componentDidMount() {
        // slideIndex = 0;
        // this.startSlide();
    }

    // startCarousel = () => {
    //     this.car
    // }

    carouseulFunction() {
        // var slideIndex = 0;
        // // debugger
        // carouselLogic(slideIndex);
    }

    // metaslider_25 = function ($) {
    fetchCarousel($) {
        debugger
        $('.slideshow-container').addClass('flexslider'); // theme/plugin conflict avoidance
        $('.slideshow-container').flexslider({
            slideshowSpeed: 3000,
            animation: "fade",
            controlNav: false,
            directionNav: false,
            pauseOnHover: false,
            direction: "horizontal",
            reverse: false,
            animationSpeed: 600,
            prevText: "&lt;",
            nextText: "&gt;",
            slideshow: true
        });
    }

    startSlide() {
        var slider = !window.jQuery ? window.setTimeout(this.startSlide(), 100) : !jQuery.isReady ? window.setTimeout(this.startSlide(), 1) : fetchCarousel(window.jQuery);
    }
    // startSlide();

    render() {
        // debugger;
        // let photos = window.images.carousel_images_array.map((photo_url,i) => {
        //     return (
        //         <div className="carousel-ul">
        //             <CarouselPhoto 
        //                 id={i}
        //                 key={i}
        //                 photo_url={photo_url}
        //             />
                    

        //         </div>
        //     );
        // });
        return(
            <div className="slideshow-container">
                {/* {photos} */}
                <div className="carousel-ul">
                    <CarouselPhoto
                        id={1}
                        key={1}
                        photo_url={window.images.carousel_images_array[0]}
                        // photo_url={photo_url}
                    />
                </div>
                {/* {this.carouseulFunction()} */}
                {/* <div className="dot-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div> */}
            </div>
        )
    }
}
export default Carousel;