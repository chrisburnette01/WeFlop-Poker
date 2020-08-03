import React from 'react';
import styled from 'styled-components';
import './index.scss';

const TextFieldBase = styled('div')`
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
    }

    .textarea {
        font-size: ${({ theme }) => theme.typography.input!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme }) => theme.palette.primary};
        letter-spacing: ${({ theme }) => theme.typography.input?.letterSpacing};
    }
    .wrapper::before {
        background-color: ${({ theme }) => theme.palette.primary};
    }
    .wrapper::after {
        background-color: ${({ theme }) => theme.palette.primary};
    }
    .input::placeholder {
        color: ${({ theme }) => theme.palette.primary};
    }
`;

interface TextFieldProps {
    placeholder?: string;
    register?: React.Ref<HTMLTextAreaElement>;
    name?: string;
    disabled?: boolean;
    defaultValue?: string;
    onFocus?: any;
}

const TextField = ({ placeholder, name, register, disabled, defaultValue, onFocus }: TextFieldProps) => {
    return (
        <TextFieldBase className="base_textarea">
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
        </TextFieldBase>
    );
};

export default TextField;
