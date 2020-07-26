import React from 'react';
import { Line } from '../../components';
import { LineContainer } from '../';
import FormNotification from './FormNotification';

import './style.scss';

interface FormProps {
    children?: JSX.Element[] | JSX.Element;
    resetForm?: boolean;
    onSubmit?: any;
    buttonSubmit?: any;
}

const Form = ({ children, resetForm, onSubmit, buttonSubmit }: FormProps) => {
    const notification = resetForm ? <FormNotification /> : null;

    return (
        <div className="form-inner">
            <form onSubmit={onSubmit} className="form form-signup" noValidate>
                <LineContainer rightline />
                {children}
                <LineContainer height={'104px'} rightContent={buttonSubmit} />
            </form>
            <Line width="long" align="left" className="form-line-right" />
            {notification}
        </div>
    );
};

export default Form;
