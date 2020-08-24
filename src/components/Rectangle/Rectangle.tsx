import styled from 'styled-components';
import React from 'react';

interface BaseRectangleProps {
    width: 'extrasmall' | 'small' | 'medium' | 'large' | 'extralarge' | 'initial' | string;
    height: 'extrasmall' | 'small' | 'medium' | 'large' | 'extralarge' | 'initial' | string;
    color: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'large';
}

const BaseRectangle = styled.span<BaseRectangleProps>`
    border-radius: ${({ border }) => (border === 'large' ? '4px' : '2px')};
    background-color: ${({ theme, color }) =>
        theme.palette[color!] ? theme.palette[color!] : theme.palette.common[color!]};
    display: block;
    width: ${({ width }) =>
        width === 'extrasmall'
            ? '8px'
            : width === 'small'
            ? '10px'
            : width === 'medium'
            ? '12px'
            : width === 'large'
            ? '16px'
            : width === 'extralarge'
            ? '40px'
            : width === 'initial'
            ? '100%'
            : width};
    height: ${({ height }) =>
        height === 'extrasmall'
            ? '8px'
            : height === 'small'
            ? '10px'
            : height === 'medium'
            ? '12px'
            : height === 'large'
            ? '16px'
            : height === 'extralarge'
            ? '40px'
            : height === 'initial'
            ? '100%'
            : height};
    transition: background-color 0.4s ease-in-out;
`;

interface RectangleProps {
    width?: 'extrasmall' | 'small' | 'medium' | 'large' | 'extralarge' | 'initial' | string;
    height?: 'extrasmall' | 'small' | 'medium' | 'large' | 'extralarge' | 'initial' | string;
    color?: 'primary' | 'secondary' | 'success' | string;
    border?: 'small' | 'large';
    className?: string;
}

const Rectangle = ({ color, width, height, border, className }: RectangleProps) => {
    return (
        <div className={`rectangle-wrapper ${className ? className : ''}`}>
            <BaseRectangle width={width!} height={height!} color={color!} border={border} />
        </div>
    );
};

Rectangle.defaultProps = {
    color: 'secondary',
    border: 'large',
    width: 'initial',
    height: 'initial'
};

export default Rectangle;
