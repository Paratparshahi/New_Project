export const ADD_ELECTRONICS=(data)=>{
    return {
        type:"ADD ELECTRONICS",
        payload :data
    }
}

export const ADD_JEWELERY=(data)=>{
    return {
        type:"ADD JEWELERY",
        payload:data
    }
}

export const ADD_MENS_CLOTHING=(data)=>{
    return {
        type:"ADD MENS CLOTHING",
        payload:data
    }
}
export const ADD_WOMENS_CLOTHING=(data)=>{
    return {
        type:"ADD WOMENS CLOTHING",
        payload:data
    }
}
export const ADD_CART=(data)=>{
    return {
        type:"ADD CART",
        payload:data
    }
}
export const UPDATE_CART=(id,quant)=>{
    return {
        type:"UPDATE CART",
        payload:{
            id:id,
            quantity:quant
        }
    }
}
export const DELETE_ITEM=(id)=>{
    return {
        type:"DELETE ITEM",
        payload :{
            id:id
        }
    }
}
