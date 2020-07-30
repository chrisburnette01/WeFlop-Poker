import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';

interface BaseInputProps {
    validated: boolean;
}

const BaseInput = styled('div')<BaseInputProps>`
    .wrapper {
        opacity: 0%;
        position: relative;
        animation: ${({ theme }) => theme.animations.text};
    }

    .input {
        position: relative;
        width: 291px;
        background: transparent;
        border-width: 0;
        border-radius: 4px;
        text-align: center;
        padding: 16px;
        font-size: ${({ theme }) => theme.typography.input!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        outline: none;
        color: ${({ theme, validated }) => (validated === true ? theme.palette.success : theme.palette.primary)};
        letter-spacing: ${({ theme }) => theme.typography.input?.letterSpacing};
        margin: 0 8px 0 8px;
        transition: all 0.4s ease-in-out;
    }
    .wrapper::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        border-radius: 2px;
        margin-left: 3px;
        transition: all 0.4s ease-in-out;
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.success : theme.palette.primary};
    }
    .wrapper::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 100%;
        border-radius: 2px;
        margin-right: 3px;
        transition: all 0.4s ease-in-out;
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.success : theme.palette.primary};
    }
    .input::placeholder {
        text-transform: uppercase;
        color: ${({ theme }) => theme.palette.primary};
    }
`;

interface InputProps {
    placeholder: string;
    type: string;
    validated?: boolean;
    errorMessage?: string;
    register?: React.Ref<HTMLInputElement>;
    name?: string;
    disabled?: boolean;
    defaultValue?: string;
    onFocus?: any;
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
}: InputProps) => {
    const show = !validated! && errorMessage !== undefined ? true : false;
    return (
        <BaseInput validated={validated!}>
            <div className="wrapper">
                <ToolTip message={errorMessage!} name={name} show={show} />
                <input
                    onFocus={onFocus}
                    defaultValue={defaultValue}
                    className="input"
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
