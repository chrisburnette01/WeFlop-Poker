import styled from 'styled-components';
import React from 'react';

interface BaseRectangleProps {
    size: 'small' | 'middle' | 'big' | 'button';
    color: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'big';
}

const BaseRectangle = styled.span<BaseRectangleProps>`
    border-radius: ${({ border }) => (border === 'big' ? '4px' : '2px')};
    background-color: ${({ theme, color }) =>
        theme.palette[color!] ? theme.palette[color!] : theme.palette.common[color!]};
    display: block;
    width: ${({ size }) =>
        size === 'small' ? '10px' : size === 'middle' ? '16px' : size === 'button' ? '12px' : '40px'};
    height: ${({ size }) =>
        size === 'small' ? '10px' : size === 'middle' ? '16px' : size === 'button' ? '12px' : '40px'};
    transition: all 0.4s ease-in-out;
`;

interface RectangleProps {
    size: 'small' | 'middle' | 'big' | 'button';
    color?: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'big';
    className?: string;
}

const Rectangle = ({ color, size, border, className }: RectangleProps) => {
    return (
        <div className={`rectangle-wrapper ${className}`}>
            <BaseRectangle size={size} color={color!} border={border} />
        </div>
    );
};

Rectangle.defaultProps = {
    color: 'secondary',
    border: 'big',
};

export default Rectangle;
