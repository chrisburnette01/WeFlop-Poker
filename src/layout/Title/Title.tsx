import React from 'react';
import './style.scss';
import { Line, Typography } from '../../components';

interface TitleProps {
    children: any;
}

const Title = ({ children }: TitleProps) => {
    return (
        <div className="wrapper-title">
            <Line width="long" align="left" />
            <div style={{ padding: '10px 0 10px 0' }}>
                <Typography component="h1" variant="title" color="secondary">{children}</Typography>
            </div>
        </div>
    );
};

export default Title;
