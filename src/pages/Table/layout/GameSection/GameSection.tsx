// @ts-nocheck
import React, { useState } from 'react';

import { Typography } from '../../../../components';
import { Card, Balance } from '../../components';

import styled from 'styled-components';
import { useTransition, useChain } from 'react-spring';

interface GameSectionProps {
    totalPot: number;
    balance: any;
    pot: number;
    className?: string;
    centerRef: any;
    balanceRef: any;
    // cards: string[];
}

const GameSection = ({ totalPot, balance, pot, className, centerRef, balanceRef }: GameSectionProps) => {
    const cards = ['H1', 'H1', 'H1', 'H1', 'H1'];

    const [flipped, setFlipped] = useState([false, false, false, false, false]);

    const setFlippedHandler = (num) => {
        setFlipped((prev) =>
            prev.map((el, id) => {
                if (id === num) {
                    return !el;
                }
                return el;
            }),
        );
    };

    const delayStart = 0;

    const animationConfig = (num, delay) => {
        return {
            from: { transform: 'translateY(-200%)', opacity: '0' },
            enter: (item) => async (next, cancel) => {
                await new Promise((resolve) => setTimeout(resolve, delay));
                await next({ transform: 'translateY(0%)', opacity: '1' });
                await setFlippedHandler(num);
            },
            leave: {},
            config: { duration: 2000 },
        };
    };

    const cardOne = useTransition(cards[0], null, animationConfig(0, 0));
    const cardTwo = useTransition(cards[1], null, animationConfig(1, 1000));
    const cardThree = useTransition(cards[2], null, animationConfig(2, 2000));
    const cardFour = useTransition(cards[3], null, animationConfig(3, 3000));
    const cardFive = useTransition(cards[4], null, animationConfig(4, 4000));

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
                        {cardOne.map(
                            ({ item, key, props }) =>
                                item && <Card style={props} flipped={flipped[0]} variant={cards[0]} />,
                        )}
                    </div>
                    <div className="card-item">
                        <div className="skeleton" />
                        {cardTwo.map(
                            ({ item, key, props }) =>
                                item && <Card style={props} flipped={flipped[1]} variant={cards[1]} />,
                        )}
                    </div>
                    <div className="card-item" id="center-card">
                        <div className="skeleton" />
                        {cardThree.map(
                            ({ item, key, props }) =>
                                item && <Card style={props} flipped={flipped[2]} variant={cards[2]} ref={centerRef} />,
                        )}
                    </div>
                    <div className="card-item">
                        <div className="skeleton" />
                        {cardFour.map(
                            ({ item, key, props }) =>
                                item && <Card style={props} flipped={flipped[3]} variant={cards[3]} />,
                        )}
                    </div>
                    <div className="card-item">
                        <div className="skeleton" />
                        {cardFive.map(
                            ({ item, key, props }) =>
                                item && <Card style={props} flipped={flipped[4]} variant={cards[4]} />,
                        )}
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .wrapper-cards {
        width: 33.8rem;
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
