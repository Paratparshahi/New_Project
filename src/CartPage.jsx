import React, { useState, useEffect } from 'react';

import {useDispatch,useSelector} from 'react-redux'
import { AiOutlineTwitter,AiOutlineGoogle,AiOutlineInstagram ,AiFillDelete,AiFillLock} from "react-icons/ai";
import './App.css';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdAssignmentReturn } from "react-icons/md";
import { Cart } from './Single/Cart';
import { to } from 'mathjs';


export const CartPage = () => {
    const cart=useSelector((state)=>state.todoReducer.cart);
    const [total,settotal]=useState(0);
    useEffect(()=>{
        let tot=0
       cart.map((elek)=>{
          tot+=Number(elek.price)*(elek.quantity)
       });
       settotal(tot)
    })
    return (
    <div style={{ display: "flex", padding: "4rem 1rem", gap: "20px" }}>
        <div style={{ width: "65%", border: "1px solid", textAlign: "left" }}>
            <div>
                <h1>Shopping Cart</h1>
            </div>
            {cart.map((elem)=>(
                <Cart elem={elem}/>
            ))}

        </div>
        <div style={{ border: "1px solid", width: "35%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 20px" }}>
                3 item
                <br />
                shipping
                <div>
                    ${total}
                    <br />
                    $7.00
                </div>
            </div>
            <hr />
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 20px" }}>
                    Total (tax exclusive)
                    <br />
                    Taxes
                    <div>
                        ${total+7}
                        <br />
                        $0.00
                    </div>
                </div>

            </div>
            <div style={{ textAlign: "center" }}>
                <button style={{ padding: "8px 20px", backgroundColor: "#333333", color: "white", fontWeight: "600", fontSize: "1rem", marginBottom: "20px" }}>Proceed to Checkout</button>
            </div>
            <div style={{textAlign:"left",margin:"10px 15px"}}>
                <div style={{display:"flex",}}>
                <AiFillLock fontSize={'28px'}/>
                Security policy
                <br />
                (edit with costumer reassurance module)
                </div>
                <br />
                <div style={{display:"flex",}}>
                <CiDeliveryTruck fontSize={'28px'}/>
                Delivery Policy
                <br />
                (edit with costumer reassurance module)
                </div>
                <br />
                <div style={{display:"flex",}}>
                <MdAssignmentReturn fontSize={'28px'}/>
                Delivery Policy
                <br />
                (edit with costumer reassurance module)
                </div>
            </div>
        </div>
    </div>)
}
