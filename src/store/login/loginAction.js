export const SET_EMAIL = 'SET_EMAIL'
export const SET_NAME = 'SET_NAME'
export const SET_SESSION_STATUS = 'SET_SESSION_STATUS'
export const LOGGING_OUT_STATUS = 'LOGGING_OUT_STATUS'

export const setEmail= (value) => ({
    type: SET_EMAIL,
    value
})

export const setName= (value) => ({
    type: SET_NAME,
    value
})

export const setSessionStatus= (value) => ({
    type: SET_SESSION_STATUS,
    value
})

export const setLoggingOutStatus= (value) => ({
    type: LOGGING_OUT_STATUS,
    value
})