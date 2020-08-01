import React from 'react';
import { Line } from '../../components';
import './style.scss';

interface LinesProps {
    height?: string;
    color?: 'primary' | 'secondary';
    align?: string | undefined;
}

const Lines = ({ height, color, align }: LinesProps) => {
    return (
        <div className="lines-container" style={height ? { height } : {}}>
            <Line color={color} width="long" align={!align ? 'left' : undefined} />
            <Line color={color} width="long" align="right" />
        </div>
    );
};

Lines.defaultProps = {
    color: 'primary'
};

export default Lines;
