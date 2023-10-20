import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/Header.jpg'
// import banner2 from '../../images/bg12.png'
// import banner3 from '../../images/Top bg.jpg'


const Banner = () => {
    return (
        <div>
            
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                
        </div>
    );
};

export default Banner;