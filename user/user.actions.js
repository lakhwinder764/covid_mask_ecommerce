import { ADD_USER } from "./user.types";


export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});


