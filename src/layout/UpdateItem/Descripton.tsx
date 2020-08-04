import React from 'react';

import { Typography, Line } from '../../components';
import './style.scss';

const Description = ({ content }) => {
    const contentArray = content.split('\n');
    
    return contentArray.map((element, index) => {
        return (
            <div className="desc-wrapper-item" key={`${element}${index}`}>
                <Line width="short" color="yellow" />
                <div className="desc-wrapper-text">
                    <Typography component="p" variant="body1">
                        {element}
                    </Typography>
                </div>
            </div>
        );
    });
};

export default Description;
