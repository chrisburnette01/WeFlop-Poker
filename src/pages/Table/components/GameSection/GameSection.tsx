import React from 'react';
import './style.scss';

import { Typography } from '../../../../components';
import { Card, Balance } from '../';

interface GameSectionProps {
    totalPot: number;
    balance: Record<string, unknown>;
    pot: number;
}

const GameSection = ({ totalPot, balance, pot }) => {
    return (
        <div>
            <div className="wrapper-gamesection">
                <Typography component="span" variant="gameSectionTitle" className="wrapper-text">
                    {`TOTAL POT: $${totalPot.toFixed(2)}`}
                </Typography>
                <div className="gamesection-text">
                    <Typography component="span" variant="gameSectionItalic" className="wrapper-text">
                        {`MAIN [${balance.main.toFixed(2)}]`}
                    </Typography>
                    {balance.sides.map((el) => (
                        <Typography
                            key={Date.now.toString()}
                            component="span"
                            variant="gameSectionItalic"
                            className="wrapper-text"
                        >
                            {`\u00A0/ SIDE [${el.toFixed(2)}]`}
                        </Typography>
                    ))}
                </div>
                <div className="wrapper-cards-gamesection">
                    <Card color="yellow" />
                    <Card color="yellow" />
                    <Card color="yellow" />
                    <Card color="yellow" />
                    <Card color="yellow" />
                </div>
                <Balance value={pot} size="big" />
            </div>
        </div>
    );
};

export default GameSection;
