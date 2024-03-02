import { ADD_PRODUCTS } from "./products.types";
import productsInitialState from "./products.initialstate";


const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [{...state.products}, action.payload];
    default:
      return state;
  }
};

export default productsReducer;