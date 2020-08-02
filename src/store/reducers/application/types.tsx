export type User = {
    username: string;
    email?: string;
};

export type Poll = {
    selected?: number;
    options: object[];
};

export type Update = {
    title: string;
    content: string | Poll;
    type: 'poll' | 'text';
    date: Date;
};

export type Table = {
    title: string;
    blinds: {
        smallBlind: number;
        bigBlind: number;
    };
    timeBank: number;
    maxBuyIn: number;
};

export interface ApplicationState {
    user?: User;
    updates?: Update[];
    tables?: Table[];
    isAuthenticated: boolean;
    isLoading: Record<string, unknown>;
    error: Record<string, unknown>;
    success: Record<string, unknown>;
}

export interface ApplicationAction {
    payload?: Record<string, unknown>;
    type: string;
}
