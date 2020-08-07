import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';
import './index.scss';

interface BaseInputProps {
    validated: boolean;
    width?: number;
}

const BaseInput = styled('div')<BaseInputProps>`
    width: ${({ width }) => `${width}px}`};
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
    }
    .wrapper-secondary {
        max-width: 234px;
        width: 100%;
    }

    .input-secondary {
        font-size: ${({ theme }) => theme.typography.playInput!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme }) => theme.palette.primary};
        letter-spacing: ${({ theme }) => theme.typography.playInput?.letterSpacing};
        position: relative;
        width: 100%;
        border-width: 0;
        padding: 13px 21px 13px 21px;
        outline: none;
        transition: all 0.4s ease-in-out;
        background: transparent;
        text-align: center;
        height: 32px;
    }
    .wrapper-secondary::before {
        margin: 0;
        height: 32px;
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.secondary : theme.palette.initial};
    }
    .wrapper-secondary::after {
        margin: 0;
        height: 32px;
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.secondary : theme.palette.initial};
    }
    .input-secondary::placeholder {
        color: ${({ theme }) => theme.palette.primary};
    }
`;

interface InputProps {
    placeholder?: string;
    type: string;
    validated?: boolean;
    errorMessage?: string;
    register?: React.Ref<HTMLInputElement>;
    name?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onFocus?: any;
    width?: number;
}

const Input = ({
    placeholder,
    validated,
    type,
    name,
    errorMessage,
    register,
    disabled,
    defaultValue,
    onFocus,
    width,
}: InputProps) => {
    const show = !validated! && errorMessage !== undefined ? true : false;
    return (
        <BaseInput validated={validated!} className="base_input" width={width}>
            <div className="wrapper wrapper-secondary">
                <ToolTip message={errorMessage!} name={name} show={show}/>
                <input
                    onFocus={onFocus}
                    defaultValue={defaultValue}
                    className="input-secondary"
                    name={name}
                    ref={register}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </BaseInput>
    );
};

Input.defaultProps = {
    validated: false,
};

export default Input;
