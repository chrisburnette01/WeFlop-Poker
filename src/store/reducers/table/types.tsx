export interface TableState {
    isLoading: Record<string, unknown>;
    error: Record<string, unknown>;
    success: Record<string, unknown>;
    players?: Player[];
    activeSlot: number;
    chat: { username: string; message: string }[] | [];
    balance: { totalPot: number; sidePots?: [number] };
    autoMuck: boolean;
    music: boolean;
    gameSounds: boolean;
    ledger?: [{ username: string; id: number; balance: number }];
}

export interface TableAction {
    payload?: Record<string, unknown>;
    type: string;
}

export interface Player {
    lastAction: 'fold' | 'call' | 'bet' | 'raise' | 'check' | 'muck' | 'show';
    balance: { pot: number; mainBalance: number };
    slot: number;
    cards: [];
    isDealer: boolean;
    timeLeft: number;
}
