import React, { Component, useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ADD_ELECTRONICS } from "./actions";
import { Electronic } from "./Single/electronic";

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

export const CustomArrows =()=> {
    const dispatch=useDispatch();
    const electronics=useSelector((state)=>state.todoReducer.electronics)
   const [product,setProduct]=useState([]);
   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/category/electronics`,{
        method:"GET",
        mode:"no-cors",
        headers:{
            "Content-Type":"application/json"
        }
      }).then(res=>res.json()).then(res=>{
        console.log(res);
        //setProduct(res)
        dispatch(ADD_ELECTRONICS(res))
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
          {electronics.map((el)=>(
            <Electronic elec={el}/>
          ))}
        </Slider>
      </div>
    );
  }
