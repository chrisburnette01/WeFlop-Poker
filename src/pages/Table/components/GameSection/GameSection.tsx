import React from 'react';

import { Typography } from '../../../../components';
import { Card, Balance } from '../';

import styled from 'styled-components';

interface GameSectionProps {
    totalPot: number;
    balance: any;
    pot: number;
    className?: string;
}

const GameSection = ({ totalPot, balance, pot, className }: GameSectionProps) => {
    return (
        <div className={className}>
            <div className="wrapper">
                <Typography component="span" variant="h2" color="yellow">
                    {`TOTAL POT: $${totalPot.toFixed(2)}`}
                </Typography>
                <div>
                    <Typography component="span" variant="h6">
                        {`MAIN [${balance.main.toFixed(2)}]`}
                    </Typography>
                    {balance.sides.map((el) => (
                        <Typography
                            key={Date.now.toString()}
                            component="span"
                            variant="h6"
                            className="wrapper-text"
                        >
                            {` / SIDE [${el.toFixed(2)}]`}
                        </Typography>
                    ))}
                </div>
                <div className="wrapper-cards">
                    <Card />
                    <Card />
                    <Card variant="H1" />
                    <Card />
                    <Card />
                </div>
                <div className="wrapper-balances">
                    <Balance value={pot} size="small" className="balance-gutter" />
                    <Balance value={pot} size="small" className="balance-gutter" />
                    <Balance value={pot} size="big" className="balance-gutter" />
                    <Balance value={pot} size="small" className="balance-gutter" />
                    <Balance value={pot} size="small" className="balance-gutter" />
                </div>
            </div>
        </div>
    );
};

export default styled(GameSection)`
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .wrapper-cards {
        width: 338px;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 10px 0;
    }

    .wrapper-balances {
        display: flex;
        align-items: center;
    }

    .balance-gutter {
        margin: 0 2.5px;
    }
`;
