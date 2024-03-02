import { ADD_WISHLIST_PRODUCTS,DELETE_WISHLIST_PRODUCTS,ADD_TO_WISHLIST,DELETE_TO_WISHLIST} from "./Wishlist.types";
import  wishlistproductsInitialState from "./Wishlist.initialstate";


const wishlistproductsReducer = (state =wishlistproductsInitialState, action) => {
  switch (action.type) {
    case ADD_WISHLIST_PRODUCTS:
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_WISHLIST_PRODUCTS:
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, products };
    case ADD_TO_WISHLIST:  
      return {...state,count:state.count+1}
    case DELETE_TO_WISHLIST:  
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

export default wishlistproductsReducer;