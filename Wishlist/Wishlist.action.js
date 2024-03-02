import { ADD_WISHLIST_PRODUCTS,DELETE_WISHLIST_PRODUCTS,ADD_TO_WISHLIST,DELETE_TO_WISHLIST } from "./Wishlist.types";


export const addToWishlistProducts = (product) => ({
  type: ADD_WISHLIST_PRODUCTS,
  payload: product,
});

export const deleteToWishlistProducts = (id) => ({
  type: DELETE_WISHLIST_PRODUCTS,
  payload:id,
  });

  export const addToWishlist = () => ({
    type: ADD_TO_WISHLIST,
     });
     export const deleteToWishlist = () => ({
      type: DELETE_TO_WISHLIST,
       });   

