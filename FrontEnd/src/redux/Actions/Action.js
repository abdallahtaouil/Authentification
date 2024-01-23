import axios from "axios";
import { LOGIN } from "../Actiontype/Actiontype";

export const LoginAction = (data,Navigate) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:8000/user/login", data)
      .then(res => dispatch({type:LOGIN,payload:res.data}));
      Navigate('/home')
  } catch (error) {
    console.log(error)
  }
};
