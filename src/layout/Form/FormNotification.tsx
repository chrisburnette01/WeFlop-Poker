import React from 'react';
import { LineContainer } from '../index';
import { Typography } from '../../components';

const FormNotification = () => {
    return (
        <div className="form-line-notification">
            <LineContainer height={'48px'} color="secondary" align="center" />
            <div className="notification-form">
                <Typography component="span" variant="button2" color="secondary">
                    Your email was sent
                </Typography>
            </div>
        </div>
    );
};

export default FormNotification;
