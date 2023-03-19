import React, { Component, useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ADD_JEWELERY } from "./actions";
import { Jewel } from "./Single/Jewel";

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

export const Jewellery =()=> {
    const dispatch = useDispatch();
    const Jewelery = useSelector((state)=>state.todoReducer.jewelery)
   const [product,setProduct]=useState([]);
   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/category/jewelery`,{
        method:"GET",
        mode:"no-cors",
        headers:{
            "Content-Type":"application/json"
        }
      }).then(res=>res.json()).then(res=>{
        console.log(res);
        dispatch(ADD_JEWELERY(res))
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
          {Jewelery.map((el)=>(
            <Jewel Jew={el}/>
          ))}
        </Slider>
      </div>
    );
  }



