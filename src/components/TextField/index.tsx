import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

interface InputProps {
    size?: 'large' | 'medium' | 'small';
    className?: string;
    placeholder?: string;
    type?: string;
    validated?: boolean;
    errorMessage?: string;
    register?: any;
    name?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onFocus?: any;
    variant?: 'input' | 'textarea';
    width?: string;
    tooltipAlign?: 'left' | 'right';
    autoresize?: boolean;
    rightLine?: boolean;
    onKeyDown?: any;
}

const TextField = ({
    size,
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
    tooltipAlign,
    className,
    autoresize,
    rightLine,
    onKeyDown,
}: InputProps) => {
    switch (variant) {
        case 'input':
            return (
                <Input
                    className={className}
                    size={size!}
                    width={width}
                    placeholder={placeholder}
                    validated={validated!}
                    type={type}
                    name={name}
                    errorMessage={errorMessage}
                    register={register!}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onFocus={onFocus}
                    tooltipAlign={tooltipAlign!}
                />
            );
        case 'textarea':
            return (
                <TextArea
                    onKeyDown={onKeyDown}
                    className={className}
                    size={size!}
                    width={width}
                    placeholder={placeholder}
                    name={name}
                    register={register!}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onFocus={onFocus}
                    autoresize={autoresize}
                    rightLine={rightLine}
                />
            );
        default:
            return null;
    }
};

TextField.defaultProps = {
    validated: false,
    variant: 'input',
    tooltipAlign: 'right',
    size: 'large',
};

export default TextField;
