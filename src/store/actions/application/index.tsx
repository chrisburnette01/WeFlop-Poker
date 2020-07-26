export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';

export const SEND_FEEDBACK_REQUEST = 'SEND_FEEDBACK_REQUEST';
export const SEND_FEEDBACK_SUCCESS = 'SEND_FEEDBACK_SUCCESS';
export const SEND_FEEDBACK_ERROR = 'SEND_FEEDBACK_ERROR';

export const GET_UPDATES_REQUEST = 'GET_UPDATES_REQUEST';
export const GET_UPDATES_SUCCESS = 'GET_UPDATES_SUCCESS';
export const GET_UPDATES_ERROR = 'GET_UPDATES_ERROR';

export const VOTE_POLL_REQUEST = 'VOTE_POLL_REQUEST';
export const VOTE_POLL_SUCCESS = 'VOTE_POLL_SUCCESS';
export const VOTE_POLL_ERROR = 'VOTE_POLL_ERROR';

export const GET_TABLES_REQUEST = 'GET_TABLES_REQUEST';
export const GET_TABLES_SUCCESS = 'GET_TABLES_SUCCESS';
export const GET_TABLES_ERROR = 'GET_TABLES_ERROR';

export const CREATE_TABLE_REQUEST = 'CREATE_TABLE_REQUEST';
export const CREATE_TABLE_SUCCESS = 'CREATE_TABLE_SUCCESS';
export const CREATE_TABLE_ERROR = 'CREATE_TABLE_ERROR';

/*

Sign up

*/

export const signUp = (payload) => {
    return {
        type: SIGN_UP_REQUEST,
        payload,
    };
};

export const signUpSuccess = (payload) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload,
    };
};

export const signUpError = (payload) => {
    return {
        type: SIGN_UP_ERROR,
        payload,
    };
};

/*

Sign in

*/

export const signIn = (payload) => {
    return {
        type: SIGN_IN_REQUEST,
        payload,
    };
};

export const signInSuccess = (payload) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload,
    };
};

export const signInError = (payload) => {
    return {
        type: SIGN_IN_ERROR,
        payload,
    };
};

/*

Reset password

*/

export const resetPassword = (payload) => {
    return {
        type: RESET_PASSWORD_REQUEST,
        payload,
    };
};

export const resetPasswordSuccess = (payload) => {
    return {
        type: RESET_PASSWORD_SUCCESS,
        payload,
    };
};

export const resetPasswordError = (payload) => {
    return {
        type: RESET_PASSWORD_ERROR,
        payload,
    };
};

/*

Logout

*/

export const logOut = () => {
    return {
        type: LOG_OUT_REQUEST,
    };
};

export const logOutSuccess = (payload) => {
    return {
        type: LOG_OUT_SUCCESS,
        payload,
    };
};

export const logOutError = (payload) => {
    return {
        type: LOG_OUT_ERROR,
        payload,
    };
};

/*

Send feedback

*/

export const sendFeedback = (payload) => {
    return {
        type: SEND_FEEDBACK_REQUEST,
        payload,
    };
};

export const sendFeedbackSuccess = (payload) => {
    return {
        type: SEND_FEEDBACK_SUCCESS,
        payload,
    };
};

export const sendFeedbackError = (payload) => {
    return {
        type: SEND_FEEDBACK_ERROR,
        payload,
    };
};

/*

Get updates

*/

export const getUpdates = () => {
    return {
        type: GET_UPDATES_REQUEST,
    };
};

export const getUpdatesSuccess = (payload) => {
    return {
        type: GET_UPDATES_SUCCESS,
        payload,
    };
};

export const getUpdatesError = (payload) => {
    return {
        type: GET_UPDATES_ERROR,
        payload,
    };
};

/*

Vote

*/

export const votePoll = (payload) => {
    return {
        type: VOTE_POLL_REQUEST,
        payload,
    };
};

export const votePollSuccess = (payload) => {
    return {
        type: VOTE_POLL_SUCCESS,
        payload,
    };
};

export const votePollError = (payload) => {
    return {
        type: VOTE_POLL_ERROR,
        payload,
    };
};

/*

Get tables

*/

export const getTables = () => {
    return {
        type: GET_TABLES_REQUEST,
    };
};

export const getTablesSuccess = (payload) => {
    return {
        type: GET_TABLES_SUCCESS,
        payload,
    };
};

export const getTablesError = (payload) => {
    return {
        type: GET_TABLES_ERROR,
        payload,
    };
};

/*

Create table

*/

export const createTable = (payload) => {
    return {
        type: CREATE_TABLE_REQUEST,
        payload,
    };
};

export const createTableSuccess = (payload) => {
    return {
        type: CREATE_TABLE_SUCCESS,
        payload,
    };
};

export const createTableError = (payload) => {
    return {
        type: CREATE_TABLE_ERROR,
        payload,
    };
};
