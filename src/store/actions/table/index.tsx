type Action = {
    REQUEST: string;
    SUCCESS: string;
    ERROR: string;
};

const JOIN_GAME: Action = {
    REQUEST: 'JOIN_GAME_REQUEST',
    SUCCESS: 'JOIN_GAME_SUCCESS',
    ERROR: 'JOIN_GAME_ERROR',
};

const BET: Action = {
    REQUEST: 'BET_REQUEST',
    SUCCESS: 'BET_SUCCESS',
    ERROR: 'BET_ERROR',
};

const CHECK: Action = {
    REQUEST: 'CHECK_REQUEST',
    SUCCESS: 'CHECK_SUCCESS',
    ERROR: 'CHECK_ERROR',
};

const FOLD: Action = {
    REQUEST: 'FOLD_REQUEST',
    SUCCESS: 'FOLD_SUCCESS',
    ERROR: 'FOLD_ERROR',
};

const RAISE: Action = {
    REQUEST: 'RAISE_REQUEST',
    SUCCESS: 'RAISE_SUCCESS',
    ERROR: 'RAISE_ERROR',
};

const CALL: Action = {
    REQUEST: 'CALL_REQUEST',
    SUCCESS: 'CALL_SUCCESS',
    ERROR: 'CALL_ERROR',
};

const SIT_IN: Action = {
    REQUEST: 'SIT_IN_REQUEST',
    SUCCESS: 'SIT_IN_SUCCESS',
    ERROR: 'SIT_IN_ERROR',
};

const SIT_OUT: Action = {
    REQUEST: 'SIT_OUT_REQUEST',
    SUCCESS: 'SIT_OUT_SUCCESS',
    ERROR: 'SIT_OUT_ERROR',
};

const CHANGE_SEATS: Action = {
    REQUEST: 'CHANGE_SEATS_REQUEST',
    SUCCESS: 'CHANGE_SEATS_SUCCESS',
    ERROR: 'CHANGE_SEATS_ERROR',
};

const WAIT_BB: Action = {
    REQUEST: 'WAIT_BB_REQUEST',
    SUCCESS: 'WAIT_BB_SUCCESS',
    ERROR: 'WAIT_BB_ERROR',
};

const POST_BB: Action = {
    REQUEST: 'POST_BB_REQUEST',
    SUCCESS: 'POST_BB_SUCCESS',
    ERROR: 'POST_BB_ERROR',
};

const SIT_OUT_NEXT_BB: Action = {
    REQUEST: 'SIT_OUT_NEXT_BB_REQUEST',
    SUCCESS: 'SIT_OUT_NEXT_BB_SUCCESS',
    ERROR: 'SIT_OUT_NEXT_BB_ERROR',
};

const SIT_OUT_NEXT_HAND: Action = {
    REQUEST: 'SIT_OUT_NEXT_HAND_REQUEST',
    SUCCESS: 'SIT_OUT_NEXT_HAND_SUCCESS',
    ERROR: 'SIT_OUT_NEXT_HAND_ERROR',
};

const BUY_IN: Action = {
    REQUEST: 'BUY_IN_REQUEST',
    SUCCESS: 'BUY_IN_SUCCESS',
    ERROR: 'BUY_IN_ERROR',
};

const TOP_UP: Action = {
    REQUEST: 'TOP_UP_REQUEST',
    SUCCESS: 'TOP_UP_SUCCESS',
    ERROR: 'TOP_UP_ERROR',
};

const MUCK: Action = {
    REQUEST: 'MUCK_REQUEST',
    SUCCESS: 'MUCK_SUCCESS',
    ERROR: 'MUCK_ERROR',
};

const SHOW: Action = {
    REQUEST: 'SHOW_REQUEST',
    SUCCESS: 'SHOW_SUCCESS',
    ERROR: 'SHOW_ERROR',
};

const GET_CHAT: Action = {
    REQUEST: 'GET_CHAT_REQUEST',
    SUCCESS: 'GET_CHAT_SUCCESS',
    ERROR: 'GET_CHAT_ERROR',
};

const GET_BALANCE: Action = {
    REQUEST: 'GET_BALANCE_REQUEST',
    SUCCESS: 'GET_BALANCE_SUCCESS',
    ERROR: 'GET_BALANCE_ERROR',
};

const SET_AUTO_MUCK: Action = {
    REQUEST: 'SET_AUTO_MUCK_REQUEST',
    SUCCESS: 'SET_AUTO_MUCK_SUCCESS',
    ERROR: 'SET_AUTO_MUCK_ERROR',
};

const SET_MUSIC: Action = {
    REQUEST: 'SET_MUSIC_REQUEST',
    SUCCESS: 'SET_MUSIC_SUCCESS',
    ERROR: 'SET_MUSIC_ERROR',
};

const SET_SOUNDS: Action = {
    REQUEST: 'SET_SOUNDS_REQUEST',
    SUCCESS: 'SET_SOUNDS_SUCCESS',
    ERROR: 'SET_SOUNDS_ERROR',
};

const GET_LEDGER: Action = {
    REQUEST: 'GET_LEDGER_REQUEST',
    SUCCESS: 'GET_LEDGER_SUCCESS',
    ERROR: 'GET_LEDGER_ERROR',
};

const SEND_MESSAGE_CHAT: Action = {
    REQUEST: 'SEND_MESSAGE_CHAT_REQUEST',
    SUCCESS: 'SEND_MESSAGE_CHAT_SUCCESS',
    ERROR: 'SEND_MESSAGE_CHAT_ERROR',
};
// join game

const joinGame = (payload) => {
    return {
        type: JOIN_GAME.REQUEST,
        payload,
    };
};

const joinGameSuccess = (payload) => {
    return {
        type: JOIN_GAME.SUCCESS,
        payload,
    };
};

const joinGameError = (payload) => {
    return {
        type: JOIN_GAME.ERROR,
        payload,
    };
};

// bet

const bet = (payload) => {
    return {
        type: BET.REQUEST,
        payload,
    };
};

const betSuccess = (payload) => {
    return {
        type: BET.SUCCESS,
        payload,
    };
};

const betError = (payload) => {
    return {
        type: BET.ERROR,
        payload,
    };
};

// check

const check = (payload) => {
    return {
        type: CHECK.REQUEST,
        payload,
    };
};

const checkSuccess = (payload) => {
    return {
        type: CHECK.SUCCESS,
        payload,
    };
};

const checkError = (payload) => {
    return {
        type: CHECK.ERROR,
        payload,
    };
};

// fold

const fold = (payload) => {
    return {
        type: FOLD.REQUEST,
        payload,
    };
};

const foldSuccess = (payload) => {
    return {
        type: FOLD.SUCCESS,
        payload,
    };
};

const foldError = (payload) => {
    return {
        type: FOLD.ERROR,
        payload,
    };
};

// raise

const raise = (payload) => {
    return {
        type: RAISE.REQUEST,
        payload,
    };
};

const raiseSuccess = (payload) => {
    return {
        type: RAISE.SUCCESS,
        payload,
    };
};

const raiseError = (payload) => {
    return {
        type: RAISE.ERROR,
        payload,
    };
};

// call

const call = (payload) => {
    return {
        type: CALL.REQUEST,
        payload,
    };
};

const callSuccess = (payload) => {
    return {
        type: CALL.SUCCESS,
        payload,
    };
};

const callError = (payload) => {
    return {
        type: CALL.ERROR,
        payload,
    };
};

// sit in

const sitIn = (payload) => {
    return {
        type: SIT_IN.REQUEST,
        payload,
    };
};

const sitInSuccess = (payload) => {
    return {
        type: SIT_IN.SUCCESS,
        payload,
    };
};

const sitInError = (payload) => {
    return {
        type: SIT_IN.ERROR,
        payload,
    };
};

// sit out

const sitOut = (payload) => {
    return {
        type: SIT_OUT.REQUEST,
        payload,
    };
};

const sitOutSuccess = (payload) => {
    return {
        type: SIT_OUT.SUCCESS,
        payload,
    };
};

const sitOutError = (payload) => {
    return {
        type: SIT_OUT.ERROR,
        payload,
    };
};

// change seats

const changeSeats = (payload) => {
    return {
        type: BET.REQUEST,
        payload,
    };
};

const changeSeatsSuccess = (payload) => {
    return {
        type: CHANGE_SEATS.SUCCESS,
        payload,
    };
};

const changeSeatsError = (payload) => {
    return {
        type: CHANGE_SEATS.ERROR,
        payload,
    };
};

// wait bb

const waitBB = (payload) => {
    return {
        type: WAIT_BB.REQUEST,
        payload,
    };
};

const waitBBSuccess = (payload) => {
    return {
        type: WAIT_BB.SUCCESS,
        payload,
    };
};

const waitBBError = (payload) => {
    return {
        type: WAIT_BB.ERROR,
        payload,
    };
};

// post bb

const postBB = (payload) => {
    return {
        type: POST_BB.REQUEST,
        payload,
    };
};

const postBBSuccess = (payload) => {
    return {
        type: POST_BB.SUCCESS,
        payload,
    };
};

const postBBError = (payload) => {
    return {
        type: POST_BB.ERROR,
        payload,
    };
};

// sit out next bb

const sitOutNextBB = (payload) => {
    return {
        type: SIT_OUT_NEXT_BB.REQUEST,
        payload,
    };
};

const sitOutNextBBSuccess = (payload) => {
    return {
        type: SIT_OUT_NEXT_BB.SUCCESS,
        payload,
    };
};

const sitOutNextBBError = (payload) => {
    return {
        type: SIT_OUT_NEXT_BB.ERROR,
        payload,
    };
};

// sit out next hand

const sitOutNextHand = (payload) => {
    return {
        type: SIT_OUT_NEXT_HAND.REQUEST,
        payload,
    };
};

const sitOutNextHandSuccess = (payload) => {
    return {
        type: SIT_OUT_NEXT_HAND.SUCCESS,
        payload,
    };
};

const sitOutNextHandError = (payload) => {
    return {
        type: SIT_OUT_NEXT_HAND.ERROR,
        payload,
    };
};

// buy in

const buyIn = (payload) => {
    return {
        type: BUY_IN.REQUEST,
        payload,
    };
};

const buyInSuccess = (payload) => {
    return {
        type: BUY_IN.SUCCESS,
        payload,
    };
};

const buyInError = (payload) => {
    return {
        type: BUY_IN.ERROR,
        payload,
    };
};

// top up

const topUp = (payload) => {
    return {
        type: TOP_UP.REQUEST,
        payload,
    };
};

const topUpSuccess = (payload) => {
    return {
        type: TOP_UP.SUCCESS,
        payload,
    };
};

const topUpError = (payload) => {
    return {
        type: TOP_UP.ERROR,
        payload,
    };
};

// muck

const muck = (payload) => {
    return {
        type: MUCK.REQUEST,
        payload,
    };
};

const muckSuccess = (payload) => {
    return {
        type: MUCK.SUCCESS,
        payload,
    };
};

const muckError = (payload) => {
    return {
        type: MUCK.ERROR,
        payload,
    };
};

// show

const show = (payload) => {
    return {
        type: BET.REQUEST,
        payload,
    };
};

const showSuccess = (payload) => {
    return {
        type: SHOW.SUCCESS,
        payload,
    };
};

const showError = (payload) => {
    return {
        type: SHOW.ERROR,
        payload,
    };
};

// get chat

const getChat = (payload) => {
    return {
        type: GET_CHAT.REQUEST,
        payload,
    };
};

const getChatSuccess = (payload) => {
    return {
        type: GET_CHAT.SUCCESS,
        payload,
    };
};

const getChatError = (payload) => {
    return {
        type: GET_CHAT.ERROR,
        payload,
    };
};

// get balance

const getBalance = (payload) => {
    return {
        type: GET_BALANCE.REQUEST,
        payload,
    };
};

const getBalanceSuccess = (payload) => {
    return {
        type: GET_BALANCE.SUCCESS,
        payload,
    };
};

const getBalanceError = (payload) => {
    return {
        type: GET_BALANCE.ERROR,
        payload,
    };
};

// set auto muck

const setAutoMuck = (payload) => {
    return {
        type: SET_AUTO_MUCK.REQUEST,
        payload,
    };
};

const setAutoMuckSuccess = (payload) => {
    return {
        type: SET_AUTO_MUCK.SUCCESS,
        payload,
    };
};

const setAutoMuckError = (payload) => {
    return {
        type: SET_AUTO_MUCK.ERROR,
        payload,
    };
};

// set music

const setMusic = (payload) => {
    return {
        type: SET_MUSIC.REQUEST,
        payload,
    };
};

const setMusicSuccess = (payload) => {
    return {
        type: SET_MUSIC.SUCCESS,
        payload,
    };
};

const setMusicError = (payload) => {
    return {
        type: SET_MUSIC.ERROR,
        payload,
    };
};

// set sounds

const setSounds = (payload) => {
    return {
        type: SET_SOUNDS.REQUEST,
        payload,
    };
};

const setSoundsSuccess = (payload) => {
    return {
        type: SET_SOUNDS.SUCCESS,
        payload,
    };
};

const setSoundsError = (payload) => {
    return {
        type: SET_SOUNDS.ERROR,
        payload,
    };
};

// get ledger

const getLedger = (payload) => {
    return {
        type: GET_LEDGER.REQUEST,
        payload,
    };
};

const getLedgerSuccess = (payload) => {
    return {
        type: GET_LEDGER.SUCCESS,
        payload,
    };
};

const getLedgerError = (payload) => {
    return {
        type: GET_LEDGER.ERROR,
        payload,
    };
};

// send message chat

const sendMessageChat = (payload) => {
    return {
        type: SEND_MESSAGE_CHAT.REQUEST,
        payload,
    };
};

const sendMessageChatSuccess = (payload) => {
    return {
        type: SEND_MESSAGE_CHAT.SUCCESS,
        payload,
    };
};

const sendMessageChatError = (payload) => {
    return {
        type: SEND_MESSAGE_CHAT.ERROR,
        payload,
    };
};

export {
    JOIN_GAME,
    BET,
    CHECK,
    FOLD,
    RAISE,
    CALL,
    SIT_IN,
    SIT_OUT,
    CHANGE_SEATS,
    WAIT_BB,
    POST_BB,
    SIT_OUT_NEXT_BB,
    SIT_OUT_NEXT_HAND,
    BUY_IN,
    TOP_UP,
    MUCK,
    SHOW,
    GET_CHAT,
    GET_BALANCE,
    SET_AUTO_MUCK,
    SET_MUSIC,
    SET_SOUNDS,
    GET_LEDGER,
    SEND_MESSAGE_CHAT,
    joinGame,
    joinGameSuccess,
    joinGameError,
    bet,
    betSuccess,
    betError,
    check,
    checkSuccess,
    checkError,
    fold,
    foldError,
    foldSuccess,
    raise,
    raiseError,
    raiseSuccess,
    call,
    callError,
    callSuccess,
    sitIn,
    sitInError,
    sitInSuccess,
    sitOut,
    sitOutSuccess,
    sitOutError,
    changeSeats,
    changeSeatsSuccess,
    changeSeatsError,
    waitBB,
    waitBBSuccess,
    waitBBError,
    postBB,
    postBBError,
    postBBSuccess,
    sitOutNextBB,
    sitOutNextBBError,
    sitOutNextBBSuccess,
    sitOutNextHand,
    sitOutNextHandSuccess,
    sitOutNextHandError,
    buyIn,
    buyInSuccess,
    buyInError,
    topUp,
    topUpError,
    topUpSuccess,
    muck,
    muckError,
    muckSuccess,
    show,
    showError,
    showSuccess,
    getChat,
    getChatSuccess,
    getChatError,
    getBalance,
    getBalanceSuccess,
    getBalanceError,
    setAutoMuck,
    setAutoMuckSuccess,
    setAutoMuckError,
    setMusic,
    setMusicSuccess,
    setMusicError,
    setSounds,
    setSoundsSuccess,
    setSoundsError,
    getLedger,
    getLedgerSuccess,
    getLedgerError,
    sendMessageChat,
    sendMessageChatSuccess,
    sendMessageChatError,
};
