import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const Slider = () => {
        return (
            <Carousel>
                <div>
                    <img src={img1}  alt="image1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2}  alt="image2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3}  alt="image3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
}

export default Slider;