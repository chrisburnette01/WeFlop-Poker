import React from 'react';
import { Line, Typography } from '../../components';
import styled from 'styled-components';

interface TitleProps {
    children: any;
    color?: 'secondary' | 'primary';
    className?: string;
    style?: Record<string, unknown>;
}

const Title = ({ children, color, className, style }: TitleProps) => {
    return (
        <div className={className}>
            <Line width="large" align="left" color="secondary" />
            <div className="title-wrapper" style={style}>
                <Typography component="h1" variant="h1" textTransform="uppercase" color={color!}>
                    {children}
                </Typography>
            </div>
        </div>
    );
};

Title.defaultProps = {
    color: 'primary',
};

export default styled(Title)<TitleProps>`
    display: flex;
    flex-direction: row;
    .title-wrapper {
        padding: 0 0 2rem 0;
    }
`;
