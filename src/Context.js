import React, { useReducer, createContext } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  burger: [],
  basket: [],
};

const burgersContext = createContext(initialState);
const { Provider } = burgersContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "BURGER_RECIPE":
      return {
        ...state,
        burger: [action.payload],
      };

    case "ADD_TO_BASKET":
      console.log(action.payload);
      return {
        ...state,
        basket: [...state.basket, action.payload],
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
