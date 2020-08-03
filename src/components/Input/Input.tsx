import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';
import './index.scss';

interface BaseInputProps {
    validated: boolean;
}

const BaseInput = styled('div')<BaseInputProps>`
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
    }

    .input {
        font-size: ${({ theme }) => theme.typography.input!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme, validated }) => (validated === true ? theme.palette.success : theme.palette.primary)};
        letter-spacing: ${({ theme }) => theme.typography.input?.letterSpacing};
    }
    .wrapper::before {
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.success : theme.palette.primary};
    }
    .wrapper::after {
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.success : theme.palette.primary};
    }
    .input::placeholder {
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
        <BaseInput validated={validated!} className="base_input">
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
