import React from 'react';

import { Typography } from '../../../../components';
import { Card, Balance } from '../../components';

import styled from 'styled-components';

interface GameSectionProps {
    totalPot: number;
    balance: any;
    pot: number;
    className?: string;
    centerRef: any;
    balanceRef: any;
}

const GameSection = ({ totalPot, balance, pot, className, centerRef, balanceRef }: GameSectionProps) => {
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
                </div>
                <div className="wrapper-cards">
                    <div className="card-item">
                        <div className="skeleton" />
                        <Card />
                    </div>
                    <div className="card-item">
                        <div className="skeleton" />
                        <Card />
                    </div>
                    <div className="card-item" id="center-card">
                        <div className="skeleton" />
                        <Card variant="H1" ref={centerRef} />
                    </div>
                    <div className="card-item">
                        <div className="skeleton" />
                        <Card />
                    </div>
                    <div className="card-item">
                        <div className="skeleton" />
                        <Card />
                    </div>
                </div>
                <div className="wrapper-balances">
                    <Balance value={pot} size="small" className="balance-gutter" />
                    <Balance value={pot} size="small" className="balance-gutter" />
                    <Balance value={pot} size="big" className="balance-gutter" ref={balanceRef} />
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

    .card-item {
        width: 58px;
        height: 79px;
    }

    .skeleton {
        position: absolute;
        border: 3px solid ${({ theme }) => theme.palette.secondary};
        border-radius: 3px;
        height: inherit;
        width: inherit;
    }
`;
