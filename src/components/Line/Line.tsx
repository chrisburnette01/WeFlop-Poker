import styled from 'styled-components';
import React from 'react';

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
    align?: 'left' | 'right';
    color?: 'primary' | 'secondary' | 'button' | 'initial' | string;
    className?: string;
}

const Line = ({ width, align, color, className }: LineProps) => {
    return (
        <div className={className}>
            <BaseLine width={width} align={align} color={color!} />
        </div>
    );
};

Line.defaultProps = {
    color: 'primary'
};

export default Line;
