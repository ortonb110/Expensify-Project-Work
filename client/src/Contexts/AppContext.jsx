import React, { useReducer, useContext, useState } from "react";

const initialState = {
  showAlert: false,
  alertType: "",
  alertText: "",
  isMember: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return <AppContext.Provider value={{ ...state }}>
    {children}
  </AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider, initialState };
