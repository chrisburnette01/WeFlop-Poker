import React from 'react';
import { Typography } from '../../components';
import styled from 'styled-components';

const NotificationAnimationWrapper = styled.div`
    animation: ${({ theme }) => theme.animations.emailNotification};
    .notification-auth {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        text-align: center;
        position: absolute;
    }
    .notification-play {
        margin-top: 48px;
    }
`;

const Notification = ({ children, type }) => {
    return (
        <NotificationAnimationWrapper>
            <div className="form-line-notification">
                <div className={`notification-form ${type === 'auth' ? 'notification-auth' : 'notification-play'}`}>
                    {children}
                </div>
            </div>
        </NotificationAnimationWrapper>
    );
};

export default Notification;
