import React from 'react';
import { Line } from '../../components';
import { Title, Subtitle } from '../';

import './style.scss';

const LineContent = ({ children }) => {
    return (
        <div className="title-wrapper-container">
            <Line color="secondary" width="long" align="right" />
            <div className="title-wrapper-text">
                { children }
            </div>
        </div>
    );
};

export default LineContent;
