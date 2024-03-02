import { LOGIN_USER } from "./profile.types";


export const loginuser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

