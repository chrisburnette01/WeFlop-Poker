import React from 'react';
import styled from 'styled-components';
import { Rectangle, Line, Typography } from '../';

interface BaseSecondaryButtonProps {}

const BaseSecondaryButton = styled('button')<BaseSecondaryButtonProps>`
    display: flex;
    max-height: 48px;
    align-items: center;
    position: absolute;
    bottom: -96px;
    min-width: 356px;
    width: 100%;
    margin: 0 -25px 0 -25px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    justify-content: space-between;
    padding: 0;

    .line-button {
        height: 48px;
        margin: 0 0 0 8px;
    }

    .line-button-last {
        margin: 0 8px 0 0;
    }
    .button-submit {
    }
    .lines-wrapper {
        display: flex;
        align-items: center;
    }
`;

interface SecondaryButtonProps {
    title: string;
    validated?: boolean;
}

const Secondary = ({ title, validated }: SecondaryButtonProps) => {
    const color = validated ? 'success' : 'primary';
    return (
        <BaseSecondaryButton>
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


export default Secondary;
