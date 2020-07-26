import React from 'react';
import { Line } from '../../components';
import './style.scss';

interface LineContainerProps {
    height?: string;
    rightContent?: React.ReactNode;
    rightline?: boolean;
    color?: 'primary' | 'secondary';
    align?: string | undefined;
}

const LineContainer = ({ rightContent, height, rightline, color, align }: LineContainerProps) => {
    return (
        <div className="lines-container" style={height ? { height } : {}}>
            <Line color={color} width="long" align={!align ? 'left' : undefined} />
            {rightContent ? rightContent : rightline ? <Line width="long" align="right" /> : null}
        </div>
    );
};

export default LineContainer;
