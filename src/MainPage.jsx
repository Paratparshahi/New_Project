import React from 'react'

import SimpleSlider from './AutoCrousel';
import  { CustomArrows } from './Crousel';
import { Footer } from './Footer';
import { Jewellery } from './Jewellery';
import { Mens } from './Mens';
import { Womens } from './Womens';
import './App.css'
import { Navbar } from './Navbar/Navbar';


export const MainPage = () => {
  return (
    <div className='main' style={{color:"black"}}>
  
    <SimpleSlider/>
    <div style={{display:"flex",gap:"20px",marginTop:"30px"}}>
        <div style={{width:"50%",gap:"20px",}}>
         <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/img1.jpg" alt="" srcset="" style={{width:"100%",marginBottom:"20px"}}/>
         <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/img2.jpg" alt="" style={{width:"100%",}}/>
        </div>
        <div style={{width:"50%"}}>
        <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/img3.jpg" alt="" style={{width:"100%"}}/>
        </div>
    </div>
    <br />
    <br />
    <h2 style={{textAlign:"left"}}>Electronics</h2>
     <CustomArrows/>
     <br />
     <br />
     <div >
        <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/img_banner.jpg" alt="" style={{width:"100%"}}/>
     </div>
     <h2 style={{textAlign:"left"}}>Mens Clothing</h2>
     <Mens/>
     <br />
     <h2 style={{textAlign:"left"}}>Womens Clothing</h2>
     <Womens/>
     <br />
     <h2 style={{textAlign:"left"}}>Jewellery</h2>
     <Jewellery/>
     <br />
     <br />
     <hr />
    </div>
  )
}
