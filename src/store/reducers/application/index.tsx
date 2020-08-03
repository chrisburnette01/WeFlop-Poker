import { SIGN_UP, SIGN_IN, RESET_PASSWORD, SIGN_OUT } from '../../actions/application';
import { ApplicationState, ApplicationAction } from './types';
import moment from 'moment';

const defaultApplicationState: ApplicationState = {
    user: undefined,
    updates: undefined,
    tables: undefined,
    isAuthenticated: localStorage.token != null && moment(localStorage.expire).isAfter(moment()),
    isLoading: { },
    error: { },
    success: { }
};

const application = (state: ApplicationState = defaultApplicationState, action: ApplicationAction) => {
    switch (action.type) {
        // SIGN_IN
        case SIGN_IN.REQUEST:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    [SIGN_IN.REQUEST]: true,
                },
                error: {
                    ...state.error,
                    [SIGN_IN.ERROR]: undefined,
                }
            };
        case SIGN_IN.SUCCESS:
            return {
                ...state,
                user: {
                    username: action.payload!.username,
                    email: action.payload?.email
                },
                isAuthenticated: true,
                isLoading: {
                    ...state.isLoading,
                    [SIGN_IN.REQUEST]: false,
                }
            };
        case SIGN_IN.ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    [SIGN_IN.ERROR]: action.payload,
                },
                isLoading: {
                    ...state.isLoading,
                    [SIGN_IN.REQUEST]: false,
                }
            };
        // SIGN_UP
        case SIGN_UP.REQUEST:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    [SIGN_UP.REQUEST]: true,
                },
                error: {
                    ...state.error,
                    [SIGN_UP.ERROR]: undefined,
                }
            };
        case SIGN_UP.SUCCESS:
            return {
                ...state,
                user: {
                    username: action.payload!.username,
                    email: action.payload?.email
                },
                isAuthenticated: true,
                isLoading: {
                    ...state.isLoading,
                    [SIGN_UP.REQUEST]: false,
                }
            };
        case SIGN_UP.ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    [SIGN_UP.ERROR]: action.payload,
                },
                isLoading: {
                    ...state.isLoading,
                    [SIGN_UP.REQUEST]: false,
                }
            };
        // SIGN_OUT
        case SIGN_OUT.REQUEST:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    [SIGN_OUT.REQUEST]: true,
                },
                error: {
                    ...state.error,
                    [SIGN_OUT.ERROR]: undefined,
                }
            };
        case SIGN_OUT.SUCCESS:
            return {
                ...state,
                user: undefined,
                isAuthenticated: false,
                isLoading: {
                    ...state.isLoading,
                    [SIGN_OUT.REQUEST]: false
                }
            };
        case SIGN_OUT.ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    [SIGN_OUT.ERROR]: action.payload
                },
                isLoading: {
                    ...state.isLoading,
                    [SIGN_OUT.REQUEST]: false
                }
            };
        // RESET_PASSWORD
        case RESET_PASSWORD.REQUEST:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    [RESET_PASSWORD.REQUEST]: true,
                },
                error: {
                    ...state.error,
                    [RESET_PASSWORD.ERROR]: undefined,
                }
            };
        case RESET_PASSWORD.SUCCESS:
            return {
                ...state,
                success: {
                    [RESET_PASSWORD.SUCCESS]: ""
                },
                isLoading: {
                    ...state.isLoading,
                    [RESET_PASSWORD.REQUEST]: false,
                }
            };
        case RESET_PASSWORD.ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    [RESET_PASSWORD.ERROR]: action.payload,
                },
                isLoading: {
                    ...state.isLoading,
                    [RESET_PASSWORD.REQUEST]: false,
                }
            };
        default:
            return state;
    }
};

export default application;
