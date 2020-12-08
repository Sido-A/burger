import React, { useReducer, createContext } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  burger: [],
};

const burgersContext = createContext(initialState);
const { Provider } = burgersContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "BURGER_RECIPE":
      return {
        ...state,
        burger: [...state.burger, action.payload],
      };
    default:
      return state;
  }
};

const BurgersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { burgersContext, BurgersContextProvider };
