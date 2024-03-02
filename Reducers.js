import { combineReducers } from "redux";
import productsReducer from "./Products/products.reducer";
import WishlistReducer from "./Wishlist/Wishlist.reducer";
import CartReducer from "./Bag/Bag.reducer";
import userReducer from "./user/user.reducer";
import profileReducer from "./profile/profile.reducer";
const rootReducer = combineReducers({
  products: productsReducer,
  wishlist:WishlistReducer,
  cart:CartReducer,
  user:userReducer,
  profile:profileReducer,
  });

export default rootReducer;