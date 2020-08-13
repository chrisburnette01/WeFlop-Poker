import React from 'react';
import styled from 'styled-components';
import ChatItem from './ChatItem';
import { Typography } from '../../../../components';

import { ModalBase } from '../';

const ChatBase = styled.div`
    align-self: flex-end;
    .chat-wrapper {
        overflow: auto;
        max-width: 1200px;
        width: 100%;
        display: flex;
        padding: 70px;
        flex-direction: column;
    }

    .input-wrapper-chat {
        display: flex;
        width: 100%;
    }
    .input-message-chat {
        width: 100%;
        max-width: 878px;
        background: transparent;
        outline: none;
        padding: 0;
        border: none;
        font-size: ${({ theme }) => theme.typography.body1?.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-weight: ${({ theme }) => theme.typography.body1?.fontWeight};
        letter-spacing: ${({ theme }) => theme.typography.body1?.letterSpacing};
        color: ${({ theme }) => theme.palette.initial};
    }
    .line {
        height: inherit;
        width: 8px;
        background-color: ${({ theme }) => theme.palette.initial};
        margin: 0 12px 0 12px;
        border-radius: 1px;
    }
    .chat-player-name {
        width: 150px;
        display: block;
        text-align: right;
    }
    .rect-divider {
        margin: 6px 0 44px 162px;
        width: 8px;
        height: 8px;
        border-radius: 1px;
        background-color: ${({ theme }) => theme.palette.secondary};
    }
`;

interface ChatProps {
    name: string;
}

const Chat = ({ name }) => {
    const data = [
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutpat mi. Curabitur ut lacus velit. Fusce volutpat odio eu blandit iaculis. In pulvinar, eros vitae hendrerit gravida, tellus turpis suscipit nibh, sed aliquam erat libero eget sem. Maecenas',
            user: { username: 'glenn', color: 'yellow' },
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            user: { username: 'glenn', color: 'yellow' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutpat mi. ',
            user: { username: 'jacob', color: 'success' },
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            user: { username: 'jacob', color: 'success' },
        },
        {
            message: 'Lorem ipsum dolor sit',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
    ];
    return (
        <ModalBase>
            <ChatBase>
                <div className="chat-wrapper">
                    <div className="messages-wrapper">
                        {data.map((el, id) => (
                            <ChatItem
                                key={`${el.message}${el.user.username}`}
                                color={el.user.color}
                                message={el.message}
                                name={
                                    id !== 0
                                        ? el.user.username === data[id - 1].user.username
                                            ? ''
                                            : el.user.username
                                        : el.user.username
                                }
                            />
                        ))}
                    </div>
                    <div className="rect-divider" />
                    <form className="input-wrapper-chat">
                        <Typography variant="body1" component="span" className="chat-player-name">
                            {name}
                        </Typography>
                        <div className="line" />
                        <input className="input-message-chat" />
                    </form>
                </div>
            </ChatBase>
        </ModalBase>
    );
};

export default Chat;
