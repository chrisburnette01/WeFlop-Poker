import React from 'react';
import { Line, Typography } from '../../components';
import styled from 'styled-components';

interface TitleProps {
    children: any;
    titleOnTop?: boolean;
    color?: 'secondary' | 'primary';
    className?: string;
}

const Title = ({ children, titleOnTop, color, className }: TitleProps) => {
    const padding = titleOnTop ? '0 0 20px 0' : '10px 0 10px 0';
    return (
        <div className={className}>
            <Line width="long" align="left" color="secondary" />
            <div style={{ padding: padding }}>
                <Typography component="h1" variant="title" color={color === 'secondary' ? 'secondary' : 'primary'}>
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default styled(Title)<TitleProps>`
    display: flex;
    flex-direction: row;
`;
