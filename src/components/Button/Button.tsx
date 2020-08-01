import React from 'react';
import Primary from './Primary';
import Secondary from './Secondary';

interface ButtonProps {
    title: string | null;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'big';
    align?: 'left' | 'right';
    onClick?: () => void;
    component?: 'button' | 'link';
    type?: 'button' | 'submit';
    to?: string;
    active?: boolean;
    bottomGutter?: boolean;
    validated?: boolean;
    color?: 'primary' | 'secondary' | 'initial' | string;
    disabled?: boolean;
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
    disabled
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
            return <Secondary title={title!} validated={validated} />;
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
