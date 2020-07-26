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
            <div style={{ paddingBottom: '5px' }}>
                <Typography component="h1">{children}</Typography>
            </div>
        </div>
    );
};

export default Title;
