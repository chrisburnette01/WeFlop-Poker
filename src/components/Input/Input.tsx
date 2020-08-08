import React from 'react';
import Primary from './Primary';
import Secondary from './Secondary';

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
    variant?: 'primary' | 'secondary';
    width?: number;
    align?: 'left';
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
    variant,
    width,
    align,
}: InputProps) => {
    switch (variant) {
        case 'primary':
            return (
                <Primary
                    placeholder={placeholder}
                    validated={validated}
                    type={type}
                    name={name}
                    errorMessage={errorMessage}
                    register={register}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onFocus={onFocus}
                />
            );
        case 'secondary':
            return (
                <Secondary
                    width={width}
                    placeholder={placeholder}
                    validated={validated}
                    type={type}
                    name={name}
                    errorMessage={errorMessage}
                    register={register}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onFocus={onFocus}
                    align={align}
                />
            );
        default:
            return null;
    }
};

Input.defaultProps = {
    validated: false,
    variant: 'primary',
};

export default Input;
