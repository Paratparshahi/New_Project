import React from 'react'
import { BsTelephoneInbound,BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter,AiOutlineGoogle,AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div style={{display:"flex"}}>
        
        <div style={{width:"35%",textAlign:"start"}}>
         <h2>OPTIMA</h2>
         <p style={{color:"#666666",fontSize:"14px"}}>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
         <br />
         <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <BsTelephoneInbound size={'50px'} color={'#46adf1'}/>
          <pre style={{fontSize:"20px"}}>
             Need Help <br />
             (+800)345678,
              (+800)123456
          </pre>
          
         </div>
         <ul style={{display:"flex",gap:"25px",listStyle:"none",fontSize:"23px"}}>
            <li><FaFacebookF/></li>
           <li><AiOutlineTwitter/></li>
           <li><BsYoutube/></li>
           <li><AiOutlineGoogle/></li>
           <li><AiOutlineInstagram/></li>
          </ul>
        </div>
        <div style={{width:"65%"}}>
            <div style={{display:"flex"}}>
                <ul style={{textAlign:"left",width:"20%"}}>
                    <li><h4>Products</h4></li>
                    <li style={{padding:"6px 0"}}>About us</li>
                    <li style={{padding:"6px 0"}}>Price drop</li>
                    <li style={{padding:"6px 0"}}>New Products</li>
                    <li style={{padding:"6px 0"}}>Best Sales</li>
                    <li style={{padding:"6px 0"}}>Login</li>
                    <li style={{padding:"6px 0"}}>My account</li>
                </ul>
                <ul style={{textAlign:"left",width:"20%"}}>
                    <li><h4>Our Company</h4></li>
                    <li style={{padding:"6px 0"}}>Delivery</li>
                    <li style={{padding:"6px 0"}}>Legal Notice</li>
                    <li style={{padding:"6px 0"}}>About Us</li>
                    <li style={{padding:"6px 0"}}>Contact Us</li>
                    <li style={{padding:"6px 0"}}>Sitemap</li>
                    <li style={{padding:"6px 0"}}>Stores</li>
                </ul>
                <ul style={{textAlign:"left",width:"45%"}}>
                    <li><h4>News Letter</h4></li>
                    <p>Sign up for our email to get latest news</p>
                    <div>
                        <input type="text" name='email' style={{padding:"10px 20px",borderRadius:"20px"}} placeholder="Your email address"/>
                        <input type="submit" style={{padding:"10px 20px",borderRadius:"10px"}}/>
                        <br />
                        <br />
                        <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/app_store.png" alt="" />&nbsp;
                        <img src="https://demo2.posthemes.com/pos_optima_electronic/electronic3/img/cms/google_play.png" alt="" />
                    </div>
                </ul>
                <div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
