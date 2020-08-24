/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	SEND_MESSAGE_CHAT,
	sendMessageChatSuccess
} from '../store/actions/table';

interface SocketProviderProps {
    children: any;
}

type SocketContextType = {
    socket?: WebSocket
};

const socketContextState: SocketContextType = {
};

export const SocketContext = React.createContext<SocketContextType>(socketContextState);

export const SocketProvider = ({ children }: SocketProviderProps) => {
	const dispatch = useDispatch();
	const socket = new WebSocket('ws://localhost:8989');

	useEffect(() => {
		socket.onopen = () => {
			socket.send(JSON.stringify({}));
		}

		socket.onmessage = (event) => {
			const data = JSON.parse(event.data)
			switch (data.type) {
				case SEND_MESSAGE_CHAT.REQUEST:
					dispatch(sendMessageChatSuccess({}))
					break
				default:
					break
			}
		}
	}, []);

    return (
        <SocketContext.Provider value={{socket}}>
                {children}
        </SocketContext.Provider>
    );
};
