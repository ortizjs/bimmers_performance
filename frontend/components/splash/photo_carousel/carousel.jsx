import React, { PropTypes, Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

// class CarouselPhotos extends Component {
//     render() {
//         return (
//             // <Carousel showArrows={true}>
//             <Carousel autoPlay>
//                 <div>
//                     <img alt="" src={window.images.carousel_images_array[0]} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img alt="" src={window.images.carousel_images_array[1]} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img alt="" src={window.images.carousel_images_array[2]} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img alt="" src={window.images.carousel_images_array[3]} />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img alt="" src={window.images.carousel_images_array[4]} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//             </Carousel>
//         );
//     }
// }
// export default CarouselPhotos;

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src={window.images.carousel_images_array[0]} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src={window.images.carousel_images_array[1]} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src={window.images.carousel_images_array[2]} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src={window.images.carousel_images_array[3]} />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src={window.images.carousel_images_array[4]} />
            <p className="legend">Legend 5</p>
        </div>
    </Carousel>
)