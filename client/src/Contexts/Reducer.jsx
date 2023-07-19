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

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
