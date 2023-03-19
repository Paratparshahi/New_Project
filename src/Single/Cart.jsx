import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_ITEM, UPDATE_CART } from '../actions'

export const Cart = ({elem}) => {
    const Dispatch=useDispatch();
    function Changequant(id,quant){
        Dispatch(UPDATE_CART(id,Number(quant)));
    }
    function DeleteItem(id){
       Dispatch(DELETE_ITEM(id))
    }
  return (
    <div style={{ display: "flex", width: "100%", border: "1px solid", justifyContent: "space-between", alignItems: "center" }}>
                           <img src={elem.image} alt="" width={"15%"}/>
                           <div style={{width:"35%"}}>
                               <h3>{elem.title}</h3>
                               <p>${elem.price}</p>
                               <p>Diamension: 40*60cm</p>
                           </div>
                           <div>
                               <select name="" id="" onChange={()=>Changequant(elem.id,e.target.value)}>
                                   <option value="">Select Quantity</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4</option>
                               </select>
                           </div>
                           <p>${elem.price*elem.quantity}</p>
                           <AiFillDelete size={'25px'} onClick={()=>DeleteItem(elem.id)}/>
</div>)
}
