import React, { Component, useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ADD_MENS_CLOTHING } from "./actions";
import Men from "./Single/Men";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:"red" }}
      onClick={onClick}
    />
  );
}

export const Mens =()=> {
    
    const dispatch=useDispatch();
    const mens=useSelector((state)=>state.todoReducer.mens_clothing);
    
   const [product,setProduct]=useState([]);
   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/category/men's clothing`,{
        method:"GET",
        mode:"no-cors",
        headers:{
            "Content-Type":"application/json"
        }
      }).then(res=>res.json()).then(res=>{
        console.log(res);
        dispatch(ADD_MENS_CLOTHING(res))
        //setProduct(res)
      })
   },[])
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        
        <Slider {...settings}>
          {mens.map((el)=>(
            <Men data={el}/> 
          ))}
        </Slider>
      </div>
    );
  }

