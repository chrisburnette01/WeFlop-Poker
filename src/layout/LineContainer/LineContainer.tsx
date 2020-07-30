import React from 'react';
import { Line } from '../../components';
import './style.scss';

interface LineContainerProps {
    height?: string;
    color?: 'primary' | 'secondary';
    align?: string | undefined;
}

const LineContainer = ({ height, color, align }: LineContainerProps) => {
    return (
        <div className="lines-container" style={height ? { height } : {}}>
            <Line color={color} width="long" align={!align ? 'left' : undefined} />
            <Line width="long" align="right" />
        </div>
    );
};

export default LineContainer;
