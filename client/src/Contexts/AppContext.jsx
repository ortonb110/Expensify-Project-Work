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
  SHOW_TOGGLE,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  ADD_EXPENSE_BEGIN,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_ERROR,
  CLEAR_INPUTS,
  GET_EXPENSES_BEGIN,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_ERROR,
  SET_EDIT_EXPENSE

} from "./Action";
import axios from "axios";

//TODO: Create a new pass checker
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
  showToggle: false,
  showSideBar: true,
  paymentMethod: ["Cash", "Mobile Money", "Online Payment"],
  statusOptions: ["Paid", "Pending"],
  description: "",
  amount: 0,
  receiver: "",
  expenses: [],
  totalExpenses: "",
  numOfPages: 1,
  setExpenseId: "",
  isEditing: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Creating Axios Interceptors
  const authFetch = axios.create({
    baseURL: "api/v1",
  });

  //Axios request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //Axios response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logOutUser();
      }
      return Promise.reject(error);
    }
  );

  const addToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
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
    clearAlert(); //Clears all alert
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: USER_LOGIN_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, location } = await response.data;

      if (user) {
        dispatch({
          type: USER_LOGIN_SUCCESSFUL,
          payload: { user, token, location },
        });
      }
      addToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert(); //Clears all alert
  };

  const toggleShow = () => {
    dispatch({ type: SHOW_TOGGLE });
  };

  const logOutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromLocalStorage();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/update", currentUser);
      const { user, token, location } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token, location },
      });
      addToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    console.log(name, value);
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        name,
        value,
      },
    });
  };

  const addExpense = async () => {
    dispatch({ type: ADD_EXPENSE_BEGIN });
    try {
      const { description, amount, receiver, payment, status } = state;
      const expense = await authFetch.post("/expense/add-expense", {
        description,
        amount,
        receiver,
        payment,
        status,
      });

      dispatch({ type: ADD_EXPENSE_SUCCESS });
    } catch (error) {
      dispatch({
        type: ADD_EXPENSE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const clearInputs = () => {
    dispatch({ type: CLEAR_INPUTS });
    clearAlert();
  };

  const getExpenses = async () => {
    dispatch({ type: GET_EXPENSES_BEGIN });
    try {
      const { data } = await authFetch.get("/expense/all-expenses");
      const { allExpenses, totalExpenses, numOfPages } = data;
      dispatch({
        type: GET_EXPENSES_SUCCESS,
        payload: {
          allExpenses,
          totalExpenses,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  const setEditId = (id) => {
    dispatch({type: SET_EDIT_EXPENSE, payload: {id: id}})
  }

  const setEditExpense = () => {

  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleShow,
        logOutUser,
        toggleSidebar,
        updateUser,
        handleChange,
        addExpense,
        clearInputs,
        getExpenses,
        setEditId,
        setEditExpense
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider, initialState };
