import { SIGN_UP } from '../../actions/application';

type User = {
    nickname: string;
    email?: string;
    password?: string;
};

type Poll = {
    selected: number;
    options: string[];
};

type Update = {
    title: string;
    content: string | Poll;
    type: 'poll' | 'text';
    date: Date;
};

type Table = {
    title: string;
    blinds: {
        smallBlind: number;
        bigBlind: number;
    };
    timeBank: number;
    maxBuyIn: number;
};

interface ApplicationState {
    user?: User;
    updates?: Update[];
    tables?: Table[];
    isAuthenticated: boolean;
}

interface ApplicationAction {
    payload?: Record<string, unknown>;
    type: string;
}

const defaultApplicationState: ApplicationState = {
    user: undefined,
    updates: undefined,
    tables: undefined,
    isAuthenticated: false,
};

const application = (state: ApplicationState = defaultApplicationState, action: ApplicationAction) => {
    switch (action.type) {
        case SIGN_UP.SUCCESS:
            return state;
        case SIGN_UP.ERROR:
            return state;
        default:
            return state;
    }
};

export default application;
