import { ADD_PRODUCTS } from "./products.types";


export const addToCart = (product) => ({
  type: ADD_PRODUCTS,
  payload: product,
});

