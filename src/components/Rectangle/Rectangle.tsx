import styled from 'styled-components';
import React from 'react';

interface BaseRectangleProps {
    size: 'small' | 'middle' | 'big';
    color: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'big';
}

const BaseRectangle = styled.span<BaseRectangleProps>`
    border-radius: ${({ border }) => (border === 'big' ? '4px' : '2px')};
    background-color: ${({ theme, color }) => theme.palette[color!] ? theme.palette[color!] : theme.palette.common[color!] };
    display: block;
    width: ${({ size }) => (size === 'small' ? '10px' : size === 'middle' ? '16px' : '32px')};
    height: ${({ size }) => (size === 'small' ? '10px' : size === 'middle' ? '16px' : '32px')};
    margin-bottom: ${({ size }) => (size === 'small' ? '2px' : null)};
    transition: all 0.4s ease-in-out;
`;

interface RectangleProps {
    size: 'small' | 'middle' | 'big';
    color?: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'big';
}

const Rectangle = ({ color, size, border }: RectangleProps) => {
    return (
        <div className="rectangle-wrapper">
            <BaseRectangle size={size} color={color!} border={border} />
        </div>
    );
};

Rectangle.defaultProps = {
    color: 'secondary',
    border: 'big',
};

export default Rectangle;
