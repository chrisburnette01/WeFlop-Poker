import React from 'react';
import { Rectangle, Typography } from '../../components';
import styled from 'styled-components';

interface SubtitleProps {
    children: string;
    className?: string;
}

const Subtitle = ({ children, className }: SubtitleProps) => {
    return (
        <div className={className}>
            <Rectangle size="small" border="small" color="secondary" />
            <div className="subtitles-wrapper">
                <Typography component="h3" variant="body1" fontStyle="italic">
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default styled(Subtitle)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 3px;
    margin-top: 10px;
    margin-bottom: 10px;

    .subtitles-wrapper {
        margin-left: 8px;
    }
`;
