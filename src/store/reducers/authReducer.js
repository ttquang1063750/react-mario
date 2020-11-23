const initState = {
    authError: null
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login fail'
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_ERROR':
            return {
                ...state,
                authError: 'Sign out fail'
            };
        case 'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error.message
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            };
        default:
            return state;

    }
};

export default authReducer;
