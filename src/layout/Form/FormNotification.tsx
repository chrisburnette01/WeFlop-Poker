import React from 'react';
import { Typography } from '../../components';
import styled from 'styled-components';

const NotificationAnimationWrapper = styled.div`
    animation: ${({ theme }) => theme.animations.emailNotification};
`;

const FormNotification = ({ children }) => {
    return (
        <NotificationAnimationWrapper>
            <div className="form-line-notification">
                <div className="notification-form">
                    {children}
                </div>
            </div>
        </NotificationAnimationWrapper>
    );
};

export default FormNotification;
