import { ADD_USER} from "./user.types";
import  usersInitialState from "./user.initialstate";


const usersReducer = (state =usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: [...state.user, action.payload] };
    default:
      return state;
  }
};

export default usersReducer;