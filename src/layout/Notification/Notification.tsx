import React from 'react';
import { Typography } from '../../components';
import styled from 'styled-components';

const NotificationAnimationWrapper = styled.div`
    animation: ${({ theme }) => theme.animations.emailNotification};
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
