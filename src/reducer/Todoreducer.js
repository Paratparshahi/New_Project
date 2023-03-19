const initialData={
    electronics:[],
    jewelery:[],
    mens_clothing:[],
    womens_clothing:[],
    cart:[]
}

export const todoReducer=(state=initialData,action)=>{
    switch (action.type) {
        case "ADD ELECTRONICS":
            const data = action.payload;
            
            return {
                ...state,
                electronics:data
            }
        case "ADD JEWELERY":
            const datas  =action.payload ;
           return{
            ...state,
            jewelery:datas
           }
           case "ADD MENS CLOTHING":
            const data2  =action.payload ;
           return{
            ...state,
            mens_clothing:data2
           }
           case "ADD WOMENS CLOTHING":
            const data3  =action.payload ;
           return{
            ...state,
            womens_clothing:data3
           }
           case "ADD CART":
            const data4  =action.payload ;
            return{
             ...state,
             cart:[
                ...state.cart,
                data4
             ]
            }
            case "UPDATE CART":
                const {id,quantity}=action.payload;
                const newcart=state.cart.filter((elem)=>{
                    if(elem.id==id){
                        return{...elem,
                        quantity:quantity}
                    }else {
                        return elem
                    }
                })
                return{
                    ...state,
                    cart:newcart
                }
                case "DELETE ITEM":
                    const {ids}=action.payload;
                    const newcarts=state.cart.filter((elem)=>elem.id!==ids);
                    return {
                        ...state,
                        cart:newcarts
                    }
        default: return state;
            break;
    }
}