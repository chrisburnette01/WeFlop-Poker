import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';

interface SecondaryBaseInputProps {
    validated: boolean;
    width?: number;
}

const BaseInput = styled('div')<SecondaryBaseInputProps>`
    width: ${({ width }) => `${width}px}`};
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
        opacity: 0%;
        position: relative;
        max-width: 234px;
        width: 100%;
    }
    .input {
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
    .wrapper::before {
        margin: 0;
        height: 32px;
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.secondary : theme.palette.initial};

        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        border-radius: 2px;
        transition: all 0.4s ease-in-out;
    }
    .wrapper::after {
        margin: 0;
        height: 32px;
        background-color: ${({ theme, validated }) =>
            validated === true ? theme.palette.secondary : theme.palette.initial};
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        border-radius: 2px;
        transition: all 0.4s ease-in-out;
    }
    .input::placeholder {
        color: ${({ theme }) => theme.palette.primary};
    }
`;

interface SecondaryInputProps {
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
    align?: 'left';
}

const Secondary = ({
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
    align,
}: SecondaryInputProps) => {
    const show = !validated! && errorMessage !== undefined ? true : false;
    return (
        <BaseInput validated={validated!} width={width}>
            <div className="wrapper">
                <ToolTip message={errorMessage!} name={name} show={show} align="left" />
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

Secondary.defaultProps = {
    validated: false,
};

export default Secondary;
