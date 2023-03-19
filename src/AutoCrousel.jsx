import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
      <Slider {...settings}>
        <div className="middle" >
         <p style={{fontSize:"18px"}}>THE ALL - NEW</p>
         <p style={{fontSize:"50px",marginTop:"2px",marginBottom:"2px"}}>NEW MACBOOK</p>
         <p style={{fontSize:"50px",marginTop:"2px",marginBottom:"30px"}}>With Touch Bar</p>
         <p>Touch of genius In 13-Inch & 15-Inch</p>
         <br />
         <button style={{padding:"10px 20px",borderRadius:"30px"}}>Shop Now</button>
        </div>
        <div className="middle2">
        <p style={{fontSize:"18px"}}>Introducing the new</p>
         <p style={{fontSize:"50px",marginTop:"2px",marginBottom:"2px"}}>GALAXY NOTE 11</p>
         <p style={{fontSize:"50px",marginTop:"2px",marginBottom:"30px"}}>Connecting the future</p>
         <p>Fastest smartphone ever</p>
         <br />
         <button style={{padding:"10px 20px",borderRadius:"30px"}}>Shop Now</button>
        </div>
      </Slider>
    );
  }