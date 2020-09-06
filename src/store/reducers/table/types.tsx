export interface TableState {
    isLoading: Record<string, unknown>;
    error: Record<string, unknown>;
    success: Record<string, unknown>;
    players: Player[];
    slot?: number;
    chat: { username: string; message: string }[] | [];
    balance?: { totalPot?: number; currentPot?: number; sidePots?: number[] };
    autoMuck: boolean;
    music: boolean;
    gameSounds: boolean;
    ledger?: [{ username: string; id: number; balance: number }];
    player?: Player;
    status: 'waiting' | 'started' | 'betting' | 'finished-round' | 'finished';
}

export interface TableAction {
    payload?: Record<string, any>;
    type: string;
}

export interface Player {
    username: string;
    lastAction: {
        type?: 'bet' | 'call' | 'raise' | 'check';
        params?: Record<string, any>;
    };
    balance?: { pot?: number; main?: number };
    slot: number;
    cards?: [];
    isDealer?: boolean;
    timeLeft?: number;
    status?: 'selected' | 'sitted-in' | 'sitted-out' | 'folded' | 'won' | 'lost';
}
