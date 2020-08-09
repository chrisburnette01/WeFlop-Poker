import React from 'react';
import styled from 'styled-components';
import { Rectangle, Line, Typography } from '../';

interface BaseSecondaryButtonProps {
    variant: 'auth' | 'play';
}

const BaseSecondaryButton = styled('button')<BaseSecondaryButtonProps>`
    display: flex;
    width: 100%;
    align-items: center;
    height: 48px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    justify-content: space-between;
    padding: 0;
    bottom: ${({ variant }) => (variant === 'auth' ? '-96px' : 'unset')};
    margin: ${({ variant }) => (variant === 'auth' ? '0 -25px 0 -25px' : '48px 0 0 0')};
    position: ${({ variant }) => (variant === 'auth' ? 'absolute' : 'unset')};
    min-width: ${({ variant }) => (variant === 'auth' ? '356px' : '238px')};
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
}

const Secondary = ({ title, validated, form }: SecondaryButtonProps) => {
    const color = validated ? 'success' : 'primary';
    return (
        <BaseSecondaryButton variant={form!} type='submit'>
            <div className="lines-wrapper">
                <Rectangle size="middle" color={color} border="big" />
                <Line width="long" className="line-button" />
            </div>
            <Typography component="span" variant="button2">
                {title}
            </Typography>
            <div className="lines-wrapper">
                <Line width="long" className="line-button line-button-last" />
                <Rectangle size="middle" color={color} border="big" />
            </div>
        </BaseSecondaryButton>
    );
};

Secondary.defaultProps = {
    form: 'auth',
};

export default Secondary;