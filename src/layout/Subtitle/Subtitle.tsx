import React from 'react';
import { Rectangle, Typography } from '../../components';

interface SubtitleProps {
    children: string;
    className?: string;
}

const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <div className="wrapper-subtitle">
            <Rectangle size="small" border="small" color="secondary" />
            <div className="subtitles-wrapper">
                <Typography component="h3" variant="subtitle1">
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default Subtitle;
