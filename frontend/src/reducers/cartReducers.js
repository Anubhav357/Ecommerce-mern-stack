import {
  CART_ADD_ITEM
} from '../constants/cartConstant';

export const cartReducer=(state={cartItems:[]},action)=>{
    switch (action.type) {
      case CART_ADD_ITEM:
        const item=action.payload;
        const existItem=state.cartItems.find(x=>item.product===x.product);
        if(existItem){
          return {
            ...state,
            cartItems:state.cartItems.map(x=>x.product===item.product?item:x)
          }
        }else{
          return {
            ...state,
            cartItems:[...state.cartItems,item]
          }
        }
      default:
        return state;
    }
}
