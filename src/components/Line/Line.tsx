import styled from 'styled-components';
import React from 'react';
import './index.scss';

interface BaseLineProps {
    width: string;
    align?: 'left' | 'right';
    color: 'primary' | 'secondary' | 'button' | 'initial' | string;
}

const BaseLine = styled.span<BaseLineProps>`
    border-radius: ${({ width }) => (width === 'short' ? '2px' : '4px')};
    background-color: ${({ theme, color }) => theme.palette[color] ? theme.palette[color] : theme.palette.common[color]};
    display: block;
    width: ${({ width }) => (width === 'short' ? '12px' : '16px')};
    margin-right: ${({ width, align }) => (align === 'left' ? '16px' : null)};
    margin-left: ${({ width, align }) => (align === 'right' ? '16px' : width === 'short' ? '7px' : null)};
    height: ${({ width }) => (width === 'short' ? '12px' : '16px')};
    animation: ${({ theme }) => theme.animations.line};
`;

interface LineProps {
    width: string;
    height?: 'long' | 'short';
    align?: 'left' | 'right';
    color?: 'primary' | 'secondary' | 'button' | 'initial' | string;
    className?: string;
}

const Line = ({ width, height, align, color, className }: LineProps) => {
    return (
        <div className="line" style={height ? {height: height == 'long' ? '60px' : '48px'} : undefined}>
            <BaseLine className={className} width={width} align={align} color={color!} />
        </div>
    );
};

Line.defaultProps = {
    color: 'primary'
};

export default Line;
