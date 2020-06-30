import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

const CarouselPhoto = props => {
    return (
        // <div id="slides" className="slides fade">
        <div id="slides" className="slides">
            <img alt="" src={props.photo_url} />
            {/* <p className="legend">{"Legend ${props.id}`} </p> */}
        </div>
    )
};

export default CarouselPhoto;