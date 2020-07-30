import styled from 'styled-components';
import React from 'react';

interface BaseLineProps {
    width: string;
    align?: 'left' | 'right';
    color?: 'primary' | 'secondary' | 'button';
}

const BaseLine = styled.span<BaseLineProps>`
    border-radius: ${({ width }) => (width === 'short' ? '2px' : '4px')};
    background-color: ${({ theme, color }) =>
        color === 'primary'
            ? '#E9E9E9'
            : color === 'secondary'
            ? '#031D38'
            : color === 'button'
            ? theme.palette.primary
            : theme.palette.secondary};
    display: block;
    min-width: ${({ width }) => (width === 'short' ? '12px' : '16px')};
    margin-right: ${({ width, align }) => (align === 'left' ? '16px' : null)};
    margin-left: ${({ width, align }) => (align === 'right' ? '16px' : width === 'short' ? '7px' : null)};
    height: ${({ width }) => (width === 'short' ? '12px' : '16px')};
    animation: ${({ theme }) => theme.animations.line};
`;

interface LineProps {
    width: string;
    align?: 'left' | 'right';
    color?: 'primary' | 'secondary' | 'button';
    className?: string;
}

const Line = ({ width, align, color, className }: LineProps) => {
    return (
        <div className={className}>
            <BaseLine width={width} align={align} color={color} />
        </div>
    );
};

export default Line;
