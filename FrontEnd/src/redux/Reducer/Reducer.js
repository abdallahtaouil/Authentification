import { LOGIN } from "../Actiontype/Actiontype";

const initialState = { user: {} };

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };

    default:
      return state;
  }
};
