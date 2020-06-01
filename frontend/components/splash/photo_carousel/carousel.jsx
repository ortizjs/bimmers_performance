import React from 'react';
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
        this.carouseulFunction();
    }

    // startCarousel = () => {
    //     this.car
    // }

    carouseulFunction() {
        debugger
        // var slideIndex = 0;
        var slideIndex = this.props.slideIndex;
        var i;
        var showSlides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < showSlides.length; i++) {
            debugger
            showSlides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > showSlides.length) { slideIndex = 1; }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // debugger
        showSlides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(this.carouseulFunction, 2000); // Change image every 2 seconds
    }

    render() {
        // debugger;
        let photos = window.images.carousel_images_array.map((photo_url,i) => {
            return (
                <div className="carousel-ul">
                    <CarouselPhoto 
                        id={i}
                        key={i}
                        photo_url={photo_url}
                    />
                    

                </div>
            );
        });
        return(
            <div className="slideshow-container">
                {photos}
                {/* {this.carouseulFunction()} */}
                <div className="dot-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    }
}
export default Carousel;