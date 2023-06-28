import React, { useReducer, useContext } from "react";
import reducer from "./Reducer";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  USER_REGISTRATION_BEGIN,
  USER_REGISTRATION_SUCCESSFUL,
  USER_REGISTRATION_ERROR,
} from "./Action";
import axios from "axios";
const initialState = {
  showAlert: false,
  alertType: "",
  alertText: "",
  isLoading: false,

};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const registerUser = async (currentUser) => {
      dispatch({type: USER_REGISTRATION_BEGIN});
      const user = await axios.post('/api/v1/auth/register', currentUser);
      if(user) {
        dispatch({type: USER_REGISTRATION_SUCCESSFUL}) 
      } else {
        dispatch({type: USER_REGISTRATION_ERROR});
      }
      
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider, initialState };
