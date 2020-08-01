import React from 'react';
import './style.scss';
import { Line, Typography } from '../../components';

interface TitleProps {
    children: any;
    titleOnTop?: boolean;
}

const Title = ({ children, titleOnTop }: TitleProps) => {
    const padding = titleOnTop ? '0 0 20px 0' : '10px 0 10px 0';
    return (
        <div className="wrapper-title">
            <Line width="long" align="left" color="secondary" />
            <div style={{ padding: padding }}>
                <Typography component="h1" variant="title" color="primary">
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default Title;
