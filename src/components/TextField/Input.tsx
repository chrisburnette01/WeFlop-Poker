import React from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';

interface BaseInputProps {
    validated: boolean;
    width?: string;
    size: 'large' | 'medium' | 'small';
}

const BaseInput = styled('div')<BaseInputProps>`
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
        opacity: 0%;
        position: relative;
        width: 100%;
        max-width: ${({ width }) => width ? width : null};
    }

    .input {
        text-align: center;
        font-size: ${({ theme, size }) => size === 'large' ? theme.typography.input1!.fontSize : theme.typography.input3!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme, validated, size }) => (validated === true && size === 'large' ? theme.palette.success : theme.palette.primary)};
        letter-spacing: ${({ theme, size }) => size === 'large' ? theme.typography.input1!.letterSpacing : theme.typography.input3!.letterSpacing};
        position: relative;
        width: ${({ width }) => width ? width : '291px'};
        background: transparent;
        border-width: 0;
        padding: ${({ size }) => size === 'large' ? '0 10px' : size === 'medium' ? '0 8px' : '0 4px'};
        outline: none;
        transition: all 0.4s ease-in-out;
        height: ${({ size }) => size === 'large' ? '48px' : size === 'medium' ? '32px' : '16px'};
    }

    .wrapper::after, .wrapper::before {
        background-color: ${({ theme, validated, size }) =>
            validated === true ? (size === 'large' ? theme.palette.success : theme.palette.secondary) : theme.palette.primary};
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: ${({ size }) => size === 'large' ? '10px' : size === 'medium' ? '8px' : '4px' };
        height: 100%;
        border-radius: ${({ size }) => (size === 'large' || size === 'medium') ? '2px' : '1px' } ;
        transition: all 0.4s ease-in-out;
    }

    .wrapper::before {
        left: 0;
    }
`;

interface InputProps {
    className?: string;
    size: 'large' | 'medium' | 'small';
    placeholder?: string;
    type: string;
    validated: boolean;
    errorMessage?: string;
    register?: React.Ref<HTMLInputElement>;
    name?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onFocus?: any;
    width?: string;
    tooltipAlign: 'left' | 'right';
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
    width,
    tooltipAlign,
    size,
    className
}: InputProps) => {
    const show = !validated && errorMessage !== undefined ? true : false;
    return (
        <BaseInput validated={validated} width={width} size={size} className={className}>
            <div className="wrapper" >
                <ToolTip message={errorMessage!} name={name} show={show} align={tooltipAlign} />
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
    type: 'text'
}

export default Primary;
