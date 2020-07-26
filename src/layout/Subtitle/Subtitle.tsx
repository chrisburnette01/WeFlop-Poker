import React from 'react';
import './style.scss';
import { Line, Typography } from '../../components';

interface SubtitleProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <div className="wrapper-subtitle">
            <Line width="short" align="left" />
            <div style={{ padding: '5px 0 5px 0' }}>
                <Typography component="h3" variant="subtitle1">
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default Subtitle;
