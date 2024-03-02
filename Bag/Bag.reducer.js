import { ADD_CART_PRODUCTS,DELETE_CART_PRODUCTS,ADD_CART_PRICE,ADD_TO_CART,DELETE_TO_CART,DELETE_CART_PRICE} from "./Bag.types";
import BagproductsInitialState from "./Bag.initialstate";
import {addToWishlistCart,deleteToWishlistCart} from "../Wishlist/Wishlist.action";
import { useDispatch,useSelector} from "react-redux";
const CartproductsReducer = (state =BagproductsInitialState, action) => {
  // const dispatch=useDispatch();
  switch (action.type) {
    case ADD_CART_PRODUCTS:
      // dispatch(deleteToWishlistCart(action.expayload));
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_CART_PRODUCTS:
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, products };
    case ADD_CART_PRICE:
      return {...state,price:state.price+action.payload};  
    case DELETE_CART_PRICE:
      return {...state,price:state.price-action.payload};     
    case ADD_TO_CART:  
       return {...state,count:state.count+1}
    case DELETE_TO_CART:  
        if(state.count===0){
          return state.count;
        }
        else{
       return {...state,count:state.count-1}
        }   
    default:
      return state;

  }
};

export default CartproductsReducer;