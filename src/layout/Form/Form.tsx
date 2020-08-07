import React from 'react';
import { Line } from '../../components';
import { PatreonIcon } from '../';
import { Notification } from '../';
import styled from 'styled-components';

interface FormProps {
    children?: JSX.Element[] | JSX.Element;
    onSubmit?: any;
    buttonSubmit?: JSX.Element;
    isClicked?: boolean;
    isRightIcon?: boolean;
    notification?: JSX.Element[] | JSX.Element | null;
}

interface FormAnimationProps {
    isClicked?: boolean;
}

const FormAnimationWrapper = styled.div<FormAnimationProps>`
    animation: ${({ theme, isClicked }) => (isClicked ? null : theme.animations.inputs)};
    & > * {
        margin-top: 16px;
    }
`;

const Form = ({ children, onSubmit, buttonSubmit, isClicked, isRightIcon, notification }: FormProps) => {
    return (
        <div className="form-inner">
            <form onSubmit={onSubmit} className="form" noValidate>
                <FormAnimationWrapper isClicked={isClicked}>{children}</FormAnimationWrapper>
                <div className="lines-container">
                    <Line color="secondary" width="long" height="short" align="left" />
                    <Line color="secondary" width="long" height="short" align="right" />
                </div>
                {buttonSubmit}
                <Notification type="auth">{notification}</Notification>
            </form>
            <Line color="secondary" width="long" align="left" className="form-line-right" />
            {isRightIcon && <PatreonIcon />}
        </div>
    );
};

export default Form;
