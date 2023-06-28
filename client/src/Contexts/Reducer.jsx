import { DISPLAY_ALERT, CLEAR_ALERT, USER_REGISTRATION_BEGIN, USER_REGISTRATION_SUCCESSFUL } from "./Action";



const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
      return  {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!'
        }
    }
    if(action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: '',
            alertType: ''
        }
    }
    if(action.type === USER_REGISTRATION_BEGIN) {
        return {
            ...state, 
            isLoading: true,
        }
    }
    if(action.type === USER_REGISTRATION_SUCCESSFUL) {
        return {
            ...state, 
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'User created!! Redirecting...'
        }
    }
    if(action.type === USER_REGISTRATION_SUCCESSFUL) {
        return {
            ...state, 
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: 'There was an error'
        }
    }

    throw new Error(`no such action: ${action.type}`);
}


export default reducer;