import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BaseButtonProps {
    styles: 'button1' | 'button2';
    align: 'left' | 'right';
    as: React.ElementType;
    to?: string;
    type?: 'button' | 'submit';
    active: boolean;
    bottomGutter: boolean;
    color?: 'primary' | 'secondary' | 'initial' | string;
    disabled?: boolean;
}

const BaseButton = styled('div')<BaseButtonProps>`
    display: flex;
    outline: none;
    text-decoration: none;
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    font-family: ${({ theme, styles }) => theme.typography.fontFamily};
    font-weight: ${({ theme, styles }) => theme.typography[styles]!.fontWeight};
    font-size: ${({ theme, styles }) => theme.typography[styles]!.fontSize};
    text-transform: ${({ theme, styles }) => theme.typography[styles]!.textTransform};
    letter-spacing: ${({ theme, styles }) => theme.typography[styles]!.letterSpacing};
    color: ${({ theme, color }) => theme.palette[color!]};
    ${({ theme, active }) => (active ? `color: ${active ? theme.palette.secondary : theme.palette.primary};` : null)}
    text-align: ${({ align }) => align};
    align-self: ${({ align }) => (align === 'right' ? 'flex-end' : null)};
    height: ${({ styles }) => (styles === 'button1' ? '64px' : '48px')};
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
    margin-bottom: ${({ bottomGutter }) => (bottomGutter ? '64px' : null)};

    .line {
        background-color: ${({ theme, color }) => theme.palette[color!]};
        ${({ theme, active }) =>
            active ? `background-color: ${active ? theme.palette.secondary : theme.palette.primary};` : null};
        margin-bottom: 3px;
        border-radius: 4px;
        width: 16px;
        height: 16px;
    }

    .title {
        margin: ${({ align }) => (align === 'left' ? '0 0 0 16px' : '15px 16px 0 0')};
        animation: ${({ theme }) => theme.animations.text};
        opacity: 0;

    }
`;

interface PrimaryButtonProps {
    title: string | null;
    size?: 'small' | 'big';
    align?: 'left' | 'right';
    onClick?: () => void;
    component?: 'button' | 'link';
    type?: 'button' | 'submit';
    to?: string;
    active?: boolean;
    bottomGutter?: boolean;
    color?: 'primary' | 'secondary' | 'initial' | string;
    disabled?: boolean;
}

const Primary = ({
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
    disabled,
}: PrimaryButtonProps) => {
    return (
        <BaseButton
            disabled={disabled}
            as={component === 'link' ? Link : 'button'}
            type={type}
            to={to}
            onClick={onClick}
            align={align!}
            styles={size === 'big' ? 'button1' : 'button2'}
            active={active!}
            bottomGutter={bottomGutter!}
            color={color!}
        >
            {(align === undefined || align === 'left') && <span className="line" />}
            <span className="title">{title}</span>
            {align && align === 'right' && <span className="line" />}
        </BaseButton>
    );
};

Primary.defaultProps = {
    size: 'big',
    active: false,
    bottomGutter: false,
    color: 'primary',
    align: 'left',
    component: 'button',
    type: 'button',
};

export default Primary;
