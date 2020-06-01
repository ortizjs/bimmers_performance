import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

const CarouselPhoto = props => {
    return (
        <div id="slides" className="slides fade">
            <div className="number-text">1 / {props.id+1}</div>
            <img src={props.photo_url} alt="" />
            <div className="caption-text">caption text</div>
            {/* <Link to={`/photos/${props.photo.id}`}> */}
            {/* </Link> */}
            {/* <div className="photo-title">
                {props.title}
            </div> */}
        </div>
    )
};

export default CarouselPhoto;