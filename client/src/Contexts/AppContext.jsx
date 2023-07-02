import React, { useReducer, useContext } from "react";
import reducer from "./Reducer";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  USER_REGISTRATION_BEGIN,
  USER_REGISTRATION_SUCCESSFUL,
  USER_REGISTRATION_ERROR,
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_ERROR,
} from "./Action";
import axios from "axios";

//Get Data from local Storage if it exist
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const location = localStorage.getItem("location");

const initialState = {
  showAlert: false,
  alertType: "",
  alertText: "",
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  location: location,
  token: token,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removefromLocalStorage = ({ user, token, location }) => {
    localStorage.removeItem("user", user);
    localStorage.removeItem("token", token);
    localStorage.removeItem("location", location);
  };

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
    dispatch({ type: USER_REGISTRATION_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token, location } = await response.data;
      if (user) {
        dispatch({
          type: USER_REGISTRATION_SUCCESSFUL,
          payload: {
            user,
            token,
            location,
          },
        });
      }
      addToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert()//Clears all alert
  };

  const loginUser = async ({ email, password }) => {
    const currentUser = { email, password };
    dispatch({ type: USER_LOGIN_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, location } = data;
      if (user) {
        dispatch({
          type: USER_LOGIN_SUCCESSFUL,
          payload: { user, token, location },
        });
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert()//Clears all alert
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider, initialState };
