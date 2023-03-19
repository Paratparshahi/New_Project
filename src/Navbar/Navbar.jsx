import React from 'react'
import { BsSearch ,BsCartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className="top-section" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <div>
        <Link to={'/'}>
        <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/optimaelectronic3-responsive-prestashop-theme-logo-16165700493.jpg" alt="" />
        </Link>
        </div>
       <div>
        <ul style={{display:"flex",listStyle:"none",gap:"2em",marginLeft:"1rem",position:"relative"}}>
            <li >Home</li>
            <li id='audio'>Audio
            <div className='audios' >
               <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <li><h5>Shop</h5></li>
                <li>Computer</li>
                <li>Camera</li>
                <li>Audio</li>
                <li>Smartphone</li>
                <li>Recorders</li>
               </ul>
               <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <li><h5>Accessories</h5></li>
                <li>Headphone</li>
                <li>Apple TV</li>
                <li>TV Streaming</li>
                <li>Google Chromecast</li>
                <li>NIVIDIA SHEILD</li>
               </ul>
               <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <li><h5>Shop</h5></li>
                <li>Computer</li>
                <li>Camera</li>
                <li>Audio</li>
                <li>Smartphone</li>
                <li>Recorders</li>
               </ul>
              </div>
            </li>
            <li id='TV_Audio'>TV Audio
            <div className='tv_audios' >
               <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <li><h5>Shop</h5></li>
                <li>Computer</li>
                <li>Camera</li>
                <li>Audio</li>
                <li>Smartphone</li>
                <li>Recorders</li>
               </ul>
               <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <li><h5>Shop</h5></li>
                <li>Computer</li>
                <li>Camera</li>
                <li>Audio</li>
                <li>Smartphone</li>
                <li>Recorders</li>
               </ul>
               <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <li><h5>Shop</h5></li>
                <li>Computer</li>
                <li>Camera</li>
                <li>Audio</li>
                <li>Smartphone</li>
                <li>Recorders</li>
               </ul>
              </div>
            </li>
            <li >Smart Phone</li>
            <li >Laptop & Tablets</li>
        </ul>
       </div>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"15rem",width:"25%"}}>
         <BsSearch size={'23px'}/>
         <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
         <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/phone3.png" alt="" style={{height:"3em"}}/>
         <p>
            Call Us:
            <p style={{marginTop:"2px"}}>+1 (123) 888</p>
         </p>
         </div>
         <div>
         <Link to={'/cart'}><BsCartFill style={{height:"20px"}} /></Link>
         <span> $105.32</span>
         </div>
       </div>
      
    </div>
  )
}
