import styled from 'styled-components';
import React from 'react';

interface BaseRectangleProps {
    size: 'small' | 'medium' | 'big' | 'button' | 'line' | 'input';
    color: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'big';
}

const BaseRectangle = styled.span<BaseRectangleProps>`
    border-radius: ${({ border }) => (border === 'big' ? '4px' : '2px')};
    background-color: ${({ theme, color }) =>
        theme.palette[color!] ? theme.palette[color!] : theme.palette.common[color!]};
    display: block;
    width: ${({ size }) =>
        size === 'small'
            ? '10px'
            : size === 'medium'
            ? '16px'
            : size === 'button'
            ? '12px'
            : size === 'line'
            ? '100%'
            : size === 'input'
            ? '32px'
            : '40px'};
    height: ${({ size }) =>
        size === 'small'
            ? '10px'
            : size === 'medium'
            ? '16px'
            : size === 'button'
            ? '12px'
            : size === 'line'
            ? '12px'
            : size === 'input'
            ? '32px'
            : '40px'};
    transition: background-color 0.4s ease-in-out;
`;

interface RectangleProps {
    size: 'small' | 'medium' | 'big' | 'button' | 'line' | 'input';
    color?: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'big';
    className?: string;
}

const Rectangle = ({ color, size, border, className }: RectangleProps) => {
    return (
        <div className={`rectangle-wrapper ${className ? className : ''}`}>
            <BaseRectangle size={size} color={color!} border={border} />
        </div>
    );
};

Rectangle.defaultProps = {
    color: 'secondary',
    border: 'big',
};

export default Rectangle;
