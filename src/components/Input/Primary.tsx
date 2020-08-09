import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';

interface BaseInputProps {
    validated: boolean;
}

const BaseInput = styled('div')<BaseInputProps>`
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
        opacity: 0%;
        position: relative;
    }

    .input {
        text-align: center;
        font-size: ${({ theme }) => theme.typography.input!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme, validated }) => (validated === true ? theme.palette.success : theme.palette.primary)};
        letter-spacing: ${({ theme }) => theme.typography.input?.letterSpacing};
        position: relative;
        width: 291px;
        background: transparent;
        border-width: 0;
        border-radius: 4px;
        padding: 16px;
        outline: none;
        margin: 0 8px 0 8px;
        transition: all 0.4s ease-in-out;
    }
    .wrapper::before {
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.success : theme.palette.primary};
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
    }
    .wrapper::after {
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.success : theme.palette.primary};
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
    }
    .input::placeholder {
        color: ${({ theme }) => theme.palette.primary};
        text-transform: uppercase;
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
}

const Primary = ({
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

Primary.defaultProps = {
    validated: false,
};

export default Primary;
