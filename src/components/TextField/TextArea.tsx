import React from 'react';
import styled from 'styled-components';

const TextAreaBase = styled('div')`
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
        opacity: 0%;
        position: relative;
    }

    .textarea {
        font-size: ${({ theme }) => theme.typography.input1!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme }) => theme.palette.primary};
        letter-spacing: ${({ theme }) => theme.typography.input1?.letterSpacing};
        position: relative;
        width: 291px;
        height: 176px;
        background: transparent;
        border-width: 0;
        border-radius: 4px;
        padding: 10px;
        outline: none;
        margin: 0 8px 0 8px;
        resize: none;
    }
    .wrapper::before {
        background-color: ${({ theme }) => theme.palette.primary};
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        border-radius: 2px;
        margin-left: 3px;
    }
    .wrapper::after {
        background-color: ${({ theme }) => theme.palette.primary};
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 100%;
        border-radius: 2px;
        margin-right: 3px;
    }
    .input::placeholder {
        color: ${({ theme }) => theme.palette.primary};
        text-transform: uppercase;
    }
`;

interface TextAreaProps {
    className?: string;
    placeholder?: string;
    register?: React.Ref<HTMLTextAreaElement>;
    name?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onFocus?: any;
}

const TextArea = ({ placeholder, name, register, disabled, defaultValue, onFocus, className }: TextAreaProps) => {
    return (
        <TextAreaBase className={className}>
            <div className="wrapper">
                <textarea
                    onFocus={onFocus}
                    defaultValue={defaultValue}
                    className="textarea"
                    name={name}
                    ref={register}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </TextAreaBase>
    );
};

export default TextArea;
