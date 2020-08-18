import React from 'react';
import styled from 'styled-components';

import { Typography } from '../../../../components';

interface ChatItemBaseProps {
    color: 'primary' | 'secondary' | 'button' | 'initial' | string;
}

const ChatItemBase = styled.div<ChatItemBaseProps>`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    height: inherit;
    height: 100%;
    .chat-item-name {
        width: 150px;
        display: block;
        text-align: right;
    }
    .line-chat {
        height: inherit;
        min-width: 8px;
        background-color: ${({ theme, color }) =>
            theme.palette[color] ? theme.palette[color] : theme.palette.common[color]};
        margin: 0 12px 0 12px;
        border-radius: 1px;
    }
    .message-wrapper {
        display: flex;
        max-width: 910px;
        width: 100%;
    }
    .chat-item-message {
        width: 100%;
    }
`;

interface ChatItemProps {
    color: 'primary' | 'secondary' | 'button' | 'initial' | string;
    name?: string;
    message: string;
}

const ChatItem = ({ color, name, message }: ChatItemProps) => {
    return (
        <ChatItemBase color={color}>
            <Typography variant="body1" component="span" className="chat-item-name">
                {name}
            </Typography>
            <div className="message-wrapper">
                <div className="line-chat" />
                <Typography variant="body1" component="span" className="chat-item-message">
                    {message}
                </Typography>
            </div>
        </ChatItemBase>
    );
};

export default ChatItem;
