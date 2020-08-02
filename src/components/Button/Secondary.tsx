import React from 'react';
import styled from 'styled-components';
import { Rectangle, Line, Typography } from '../';

const BaseSecondaryButton = styled('button')``;

interface SecondaryButtonProps {
    title: string;
    validated?: boolean;
}

const Secondary = ({ title, validated }: SecondaryButtonProps) => {
    const color = validated ? 'success' : 'primary';
    return (
        <BaseSecondaryButton className='base_button__secondary'>
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
