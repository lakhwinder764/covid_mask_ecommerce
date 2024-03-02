import { ADD_CART_PRODUCTS,DELETE_CART_PRODUCTS,ADD_CART_PRICE,DELETE_CART_PRICE,ADD_TO_CART,DELETE_TO_CART } from "./Bag.types";


export const addToCartProducts = (product) => ({
  type: ADD_CART_PRODUCTS,
  payload: product,
  expayload:product.id,
});
export const addToPrice = (price) => ({
  type: ADD_CART_PRICE,
  payload: price,
});
export const deleteToPrice = (price) => ({
  type: DELETE_CART_PRICE,
  payload: price,
});
export const deleteToCartProducts = (id) => ({
  type: DELETE_CART_PRODUCTS,
  payload:id,
  });
  export const addToCart = () => ({
    type: ADD_TO_CART,
     });
     export const deleteToCart = () => ({
      type: DELETE_TO_CART,
       });   

