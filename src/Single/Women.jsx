import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { ADD_CART } from '../actions';

const Women = ({wom}) => {
    const [enter,setenter]=useState(0);
    const dispatch=useDispatch();
    function enters(elem){
        const rem={...elem,quantity:1};
        console.log(rem);
        dispatch(ADD_CART(rem))
     }
  return (
    <div style={{height:"400px"}} onMouseEnter={()=>setenter(1)} onMouseLeave={()=>setenter(0)}>
    <img src={wom.image} alt="" style={{height:"200px",width:"90%"}}/>
    <div style={{width:"70%",marginLeft:"20px",textAlign:"start"}}>
        <p>{wom.category}</p>
        <h5 >{wom.title}</h5>
        <div style={{display:"flex",justifyContent:"space-between",width:"50%",alignItems:"center"}}>
        {enter==0?<p style={{color:"#cf2929"}}>${wom.price}</p>:<button style={{height:"20px"}} onClick={()=>enters(wom)}>Add</button>}
    </div>
    </div>
    </div>
  )
}

export default Women