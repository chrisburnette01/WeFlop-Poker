import React from 'react';
import { Line, Typography } from '../../components';

interface TitleProps {
    children: any;
    titleOnTop?: boolean;
    color?: 'secondary' | 'primary';
}

const Title = ({ children, titleOnTop, color }: TitleProps) => {
    const padding = titleOnTop ? '0 0 20px 0' : '10px 0 10px 0';
    return (
        <div className="wrapper-title">
            <Line width="long" align="left" color="secondary" />
            <div style={{ padding: padding }}>
                <Typography component="h1" variant="title" color={color === 'secondary' ? 'secondary' : 'primary'}>
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default Title;
