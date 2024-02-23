import * as actions from './loginAction'

const initialState = {
    sessionActive: false,
    emailId: '',
    name: '',
    isLoggingOut: false,
}

export const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.SET_SESSION_STATUS: {
            return {
                ...state,
                sessionActive: action.value
            }
        }
        case actions.SET_NAME: {
            return {
                ...state,
                name: action.value
            }
        }
        case actions.SET_EMAIL: {
            return {
                ...state,
                emailId: action.value
            }
        }
        case actions.LOGGING_OUT_STATUS: {
            return {
                ...state,
                isLoggingOut: action.value
            }
        }
        default: return state
    }
}

export default loginReducer