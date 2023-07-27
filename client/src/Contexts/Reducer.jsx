import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
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
  ADD_EXPENSE_ERROR
} from "./Action";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === USER_REGISTRATION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === USER_REGISTRATION_SUCCESSFUL) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User created!! Redirecting...",
      user: action.payload.user,
      token: action.payload.token,
    };
  }

  if (action.type === USER_REGISTRATION_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === USER_LOGIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === USER_LOGIN_SUCCESSFUL) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful!! Redirecting...",
      user: action.payload.user,
      token: action.payload.token,
    };
  }
  if (action.type === USER_LOGIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === SHOW_TOGGLE) {
    return {
      ...state,
      showToggle: !state.showToggle,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      token: null,
    };
  }
  if(action.type === TOGGLE_SIDEBAR) {
    return {
      ...state, showSideBar: !state.showSideBar
    }
  }
  if(action.type === UPDATE_USER_BEGIN) {
    return {
      ...state, 
      isLoading: true
    }
  }
  if(action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state, 
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Profile update successful",
      user: action.payload.user,
      token: action.payload.token,
      
    }
  }
  if(action.type === UPDATE_USER_ERROR) {
    return {
      ...state, 
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }
  if(action.type === HANDLE_CHANGE) {
    return {
      ...state, 
      [action.payload.name]: action.payload.value
    }
  }
  if(action.type === ADD_EXPENSE_BEGIN) {
    return {
      ...state, 
      isLoading: true
    }
  }
  if(action.type === ADD_EXPENSE_SUCCESS) {
    return {
      ...state, 
      isLoading: false,
      alertType: "success",
      alertText: "Expense added",
      showAlert: true,
    }
  }
  if(action.type === ADD_EXPENSE_ERROR) {
    return {
      ...state, 
      isLoading: false,
      alertType: "danger",
      alertText: "Failed to add expense",
    }
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
