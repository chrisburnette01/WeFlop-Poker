import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';

interface BaseInputProps {
    validation?: boolean;
}

const BaseInput = styled('div')<BaseInputProps>`
    .wrapper {
        position: relative;
    }

    .input {
        width: 291px;
        background: transparent;
        border: 8px solid
            ${({ theme, validation }) => (validation === true ? theme.palette.success : theme.palette.primary)};
        border-width: 0 8px 0 8px;
        padding: 16px;
        font-size: ${({ theme }) => theme.typography.input!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        outline: none;
        color: ${({ theme, validation }) => (validation === true ? theme.palette.success : theme.palette.primary)};
        letter-spacing: ${({ theme }) => theme.typography.input?.letterSpacing};
        margin: 0 8px 0 8px;
    }
    .input::placeholder {
        text-transform: uppercase;
        color: ${({ theme }) => theme.palette.primary};
    }
`;

interface InputProps {
    placeholder: string;
    type: string;
    validation?: boolean;
    errorMessage?: string;
    register?: React.Ref<HTMLInputElement>;
    name?: string;
    disabled?: boolean;
    defaultValue?: string;
}

const Input = ({ placeholder, validation, type, name, errorMessage, register, disabled, defaultValue }: InputProps) => {
    const icon = validation === false ? <ToolTip message={errorMessage!} name={name} /> : null;
    return (
        <BaseInput validation={validation}>
            <div className="wrapper">
                {icon}
                <input
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

export default Input;
