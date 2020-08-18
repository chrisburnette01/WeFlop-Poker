import React from 'react';
import styled from 'styled-components';
import { Rectangle, Line, Typography } from '../';

interface BaseSecondaryButtonProps {
    variant: 'auth' | 'play';
    size: 'small' | 'big';
}

// bottom: ${({ variant }) => (variant === 'auth' ? '-96px' : 'unset')};
// margin: ${({ variant }) => (variant === 'auth' ? '0 -25px 0 -25px' : '48px 0 0 0')};
// position: ${({ variant }) => (variant === 'auth' ? 'absolute' : 'unset')};
// min-width: ${({ variant }) => (variant === 'auth' ? '356px' : '238px')};

const BaseSecondaryButton = styled('button')<BaseSecondaryButtonProps>`
    display: flex;
    align-items: center;
    width: inherit;
    height: ${({ size }) => (size === 'big' ? '48px' : '24px')};
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    justify-content: space-between;
    padding: 0;
    
    .line-button {
        margin: 0 0 0 8px;
    }

    .line-button-last {
        margin: 0 8px 0 0;
    }
    .lines-wrapper {
        display: flex;
        align-items: center;
        height: inherit;
    }
`;

interface SecondaryButtonProps {
    title: string;
    validated?: boolean;
    form?: 'auth' | 'play';
    size: 'small' | 'big';
    className?: string;
}

const Secondary = ({ title, validated, form, size, className }: SecondaryButtonProps) => {
    const color = validated ? 'success' : 'primary';
    return (
        <BaseSecondaryButton variant={form!} size={size} className={className} type='submit'>
            <div className="lines-wrapper">
                <Rectangle size={size === "big" ? "medium" : "small"} color={color} border={size} />
                <Line width={size === "big" ? "large" : "small"} className="line-button" />
            </div>
            <Typography component="span" variant={size === "big" ? "button2" : "h6"} textTransform="uppercase">
                {title}
            </Typography>
            <div className="lines-wrapper">
                <Line width={size === "big" ? "large" : "small"} className="line-button line-button-last" />
                <Rectangle size={size === "big" ? "medium" : "small"} color={color} border={size} />
            </div>
        </BaseSecondaryButton>
    );
};

Secondary.defaultProps = {
    form: 'auth'
};

export default Secondary;