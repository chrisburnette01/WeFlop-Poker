import styled from 'styled-components';
import React from 'react';

interface BaseLineProps {
    width: 'long' | 'short';
    align?: 'left' | 'right';
    color: 'primary' | 'secondary' | 'button' | 'initial' | string;
}

const BaseLine = styled.span<BaseLineProps>`
    border-radius: ${({ width }) => (width === 'short' ? '2px' : '4px')};
    background-color: ${({ theme, color }) =>
        theme.palette[color] ? theme.palette[color] : theme.palette.common[color]};
    display: block;
    height: inherit;
    width: ${({ width }) => (width === 'short' ? '12px' : '16px')};
    margin-right: ${({ align }) => (align === 'left' ? '16px' : null)};
    margin-left: ${({ width, align }) => (align === 'right' ? '16px' : width === 'short' ? '7px' : null)};
    animation: ${({ theme }) => theme.animations.line};
`;

interface LineProps {
    width: 'long' | 'short';
    height?: 'long' | 'short';
    align?: 'left' | 'right';
    color?: 'primary' | 'secondary' | 'button' | 'initial' | string;
    className?: string;
    wrapperClassName?: string;
}

const Line = ({ width, height, align, color, className, wrapperClassName }: LineProps) => {
    return (
        <div
            className={`${wrapperClassName ? wrapperClassName : ''} line`}
            style={height ? { height: height == 'long' ? '60px' : '48px' } : { height: 'inherit' }}
        >
            <BaseLine className={className} width={width} align={align} color={color!} />
        </div>
    );
};

Line.defaultProps = {
    color: 'primary',
};

export default Line;
