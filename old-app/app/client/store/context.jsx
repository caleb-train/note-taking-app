import React, { createContext, useReducer } from "./node_modules/react";
import Reducer from "./reducers/index";
import * as initState from "./reducers/initialState";

export const Context = createContext();

export const ThemeContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
