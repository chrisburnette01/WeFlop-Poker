import React from 'react';
import { Typography } from '../../components';
import styled from 'styled-components';

const NotificationAnimationWrapper = styled.div`
    animation: ${({ theme }) => theme.animations.emailNotification};
`;

const FormNotification = ({ email }) => {
    return (
        <NotificationAnimationWrapper>
            <div className="form-line-notification">
                <div className="notification-form">
                    <Typography component="span" variant="button2" color="primary">
                        AN EMAIL WAS SENT TO:
                    </Typography>
                    <Typography component="span" variant="h2" color="primary">
                        {email}
                    </Typography>
                </div>
            </div>
        </NotificationAnimationWrapper>
    );
};

export default FormNotification;
