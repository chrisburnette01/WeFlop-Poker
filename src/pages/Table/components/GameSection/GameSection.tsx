import React from 'react';
import './style.scss';

import { Typography } from '../../../../components';
import { Card } from '../';

const GameSection = () => {
    return (
        <div>
            <div className="wrapper-gamesection">
                <Typography component="span" variant="gameSectionTitle" className="wrapper-text">
                    TOTAL POT: $132.29
                </Typography>
                <Typography component="span" variant="gameSectionItalic" className="wrapper-text">
                    MAIN [$21.00] / SIDE [$11.29] / SIDE [$21.00]
                </Typography>
                <div className="wrapper-cards-gamesection">
                    <Card color="yellow" />
                    <Card color="yellow" />
                    <Card color="yellow" />
                    <Card color="yellow" />
                    <Card color="yellow" />
                </div>
            </div>
        </div>
    );
};

export default GameSection;
