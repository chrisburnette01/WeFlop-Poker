import styled from 'styled-components';
import React from 'react';

interface BaseLineProps {
    width: 'large' | 'medium' | 'small';
    align?: 'left' | 'right';
    color: 'primary' | 'secondary' | 'button' | 'initial' | string;
}

const BaseLine = styled.span<BaseLineProps>`
    border-radius: ${({ width }) => (width === 'large' ? '0.4rem' : width === 'medium' ? '0.2rem' : '0.1rem')};
    background-color: ${({ theme, color }) =>
        theme.palette[color] ? theme.palette[color] : theme.palette.common[color]};
    display: block;
    height: inherit;
    width: ${({ width }) => (width === 'large' ? '1.6rem' : width === 'medium' ? '1.2rem' : '0.8rem')};
    margin-right: ${({ align }) => (align === 'left' ? '1.6rem' : null)};
    margin-left: ${({ width, align }) => (align === 'right' ? '1.6rem' : null)};
    animation: ${({ theme }) => theme.animations.line};
`;

interface LineProps {
    width: 'large' | 'medium' | 'small';
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
            style={height ? { height: height == 'long' ? '6rem' : '4.8rem' } : { height: 'inherit' }}
        >
            <BaseLine className={className} width={width} align={align} color={color!} />
        </div>
    );
};

Line.defaultProps = {
    color: 'primary',
};

export default Line;
