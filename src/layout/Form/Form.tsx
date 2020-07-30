import React from 'react';
import { Line } from '../../components';
import { LineContainer } from '../';
import FormNotification from './FormNotification';
import styled from 'styled-components';

import './style.scss';

interface FormProps {
    children?: JSX.Element[] | JSX.Element;
    onSubmit?: any;
    buttonSubmit?: JSX.Element;
    isClicked?: boolean;
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

const Form = ({ children, onSubmit, buttonSubmit, isClicked }: FormProps) => {
    return (
        <div className="form-inner">
            <form onSubmit={onSubmit} className="form form-signup" noValidate>
                <LineContainer />
                <FormAnimationWrapper isClicked={isClicked}>{children}</FormAnimationWrapper>
                <LineContainer height={'48px'} />
                {buttonSubmit}
            </form>
            <Line width="long" align="left" className="form-line-right" />
        </div>
    );
};

export default Form;
