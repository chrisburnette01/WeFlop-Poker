import React from 'react';

import { Typography, Line } from '../../components';
import './style.scss';

const Description = ({ data }) => {
    return data.map((element, index) => {
        const textArray = element.split('\n');
        const text = textArray.map((element, index) => {
            return <p key={index}>{element}</p>;
        });
        return (
            <div className="desc-wrapper-item" key={`${element}${index}`}>
                <Line width="short" color="secondary" />
                <div className="desc-wrapper-text">
                    <Typography component="p" variant="input">
                        {text}
                    </Typography>
                </div>
            </div>
        );
    });
};

export default Description;
