import { LOGIN_USER } from "./profile.types";
import profileInitialState from "./profile.initialstate";


const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state.user,...action.payload};
    default:
      return state;
  }
};

export default profileReducer;