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
    className?: string;
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

const Form = ({ children, onSubmit, buttonSubmit, isClicked, isRightIcon, notification, className }: FormProps) => {
    return (
        <div className={className}>
            <form onSubmit={onSubmit} className="form" noValidate>
                <FormAnimationWrapper isClicked={isClicked}>{children}</FormAnimationWrapper>
                <div className="lines-container">
                    <Line color="secondary" width="large" height="short" align="left" />
                    <Line color="secondary" width="large" height="short" align="right" />
                </div>
                {buttonSubmit}
                <Notification type="auth">{notification}</Notification>
            </form>
            <Line
                color="secondary"
                wrapperClassName="line-form-fix"
                width="large"
                align="left"
                className="form-line-right"
            />
            {isRightIcon && <PatreonIcon />}
        </div>
    );
};

export default styled(Form)`
    display: flex;
    flex-direction: row;
    .line-form-fix {
        margin-top: 16px;
    }
    .line-wrapper-page {
        display: flex;
        padding-left: 25px;
        max-width: 756px;
        width: 100%;
    }
    .form-line-right {
        margin: 0 8px 0 8px !important;
    }
    .form {
        position: relative;
        & > *:not(:first-child) {
            margin-top: 16px;
        }
    }
`;
