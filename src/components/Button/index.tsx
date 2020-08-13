import React from 'react';
import Primary from './Primary';
import Secondary from './Secondary';
import ButtonPlay from './ButtonPlay';

interface ButtonProps {
    title: string | null;
    variant?: 'primary' | 'secondary' | 'play';
    size?: 'small' | 'big';
    align?: 'left' | 'right';
    onClick?: any;
    component?: 'button' | 'link';
    type?: 'button' | 'submit';
    to?: string;
    active?: boolean;
    bottomGutter?: boolean;
    validated?: boolean;
    color?: 'primary' | 'secondary' | 'initial' | string;
    disabled?: boolean;
    form?: 'auth' | 'play';
}

const Button = ({
    title,
    onClick,
    align,
    size,
    component,
    type,
    to,
    active,
    bottomGutter,
    color,
    validated,
    variant,
    disabled,
    form,
}: ButtonProps) => {
    switch (variant) {
        case 'primary':
            return (
                <Primary
                    title={title}
                    onClick={onClick}
                    align={align}
                    size={size}
                    component={component}
                    type={type}
                    to={to}
                    active={active}
                    bottomGutter={bottomGutter}
                    color={color}
                    disabled={disabled}
                />
            );
        case 'secondary':
            return <Secondary title={title!} validated={validated} form={form} />;
        case 'play':
            return <ButtonPlay title={title!} active={active} align={align!} onClick={onClick} />;
        default:
            return null;
    }
};

Button.defaultProps = {
    size: 'big',
    active: false,
    bottomGutter: false,
    color: 'primary',
    align: 'left',
    component: 'button',
    type: 'button',
    variant: 'primary',
};

export default Button;
