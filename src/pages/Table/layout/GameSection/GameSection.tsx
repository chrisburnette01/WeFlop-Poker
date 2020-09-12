// @ts-nocheck
import React, { useState, useEffect } from 'react';

import { Typography } from '../../../../components';
import { Card, Balance } from '../../components';

import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

interface GameSectionProps {
    totalPot?: number;
    currentPot?: number;
    sidePots?: number[];
    className?: string;
    action: any;
    cards?: string[];
}

const GameSection = ({ totalPot, currentPot, sidePots, cards, className, action }: GameSectionProps) => {
    const [flipped, setFlipped] = useState([false, false, false, false, false]);
    const [potStatus, setPotStatus] = useState(true);

    const [winRef, winBounds] = useMeasure();

    useEffect(() => {
        if (action) {
            switch (action.type) {
                case 'win':
                    winAnimate();
                    break;
                case 'pot':
                    setPotStatus('pot');
            }
        }
    }, [action]);

    const winAnimate = async () => {
        await setPotStatus('win');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await setPotStatus(null);
    };

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

    const animationConfig = (num, delay) => {
        return {
            from: { transform: 'translateY(-200%)', opacity: '0' },
            enter: (item) => async (next, cancel) => {
                await new Promise((resolve) => setTimeout(resolve, delay));
                await next({ transform: 'translateY(0%)', opacity: '1' });
                await setFlippedHandler(num);
            },
            leave: {},
            config: { duration: 500 },
        };
    };

    const cardOne = useTransition(cards[0], null, animationConfig(0, 0));
    const cardTwo = useTransition(cards[1], null, animationConfig(1, 100));
    const cardThree = useTransition(cards[2], null, animationConfig(2, 200));
    const cardFour = useTransition(cards[3], null, animationConfig(3, 300));
    const cardFive = useTransition(cards[4], null, animationConfig(4, 400));

    // const cardTwo = useTransition(cards[1], null, animationConfig(1, 100));
    // const cardThree = useTransition(cards[2], null, animationConfig(2, 200));
    // const cardFour = useTransition(cards[3], null, animationConfig(3, 300));
    // const cardFive = useTransition(cards[4], null, animationConfig(4, 400));

    const potComponent = useTransition(potStatus, null, {
        from: { opacity: 0, top: '1rem' },
        enter: { opacity: 1 },
        leave: potStatus === null ? { top: '-100%', opacity: 0 } : { opacity: 0 },
        config: { duration: 300 },
    });

    return (
        <div className={className}>
            <div className="wrapper">
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
                                item && <Card style={props} flipped={flipped[2]} variant={cards[2]}/>,
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
                    <Balance value={sidePots.length > 2 && sidePots[2]} size="small" className={`balance-gutter ${(sidePots[2] === 0 || !sidePots[2]) && "disable"}`} />
                    <Balance value={sidePots.length > 0 && sidePots[0]} size="small" className={`balance-gutter ${(sidePots[0] === 0 || !sidePots[0]) && "disable"}`} />
                    <Balance value={currentPot} size="big" className={`balance-gutter ${currentPot === undefined && "disable"}`} />
                    <Balance value={sidePots.length > 1 && sidePots[1]} size="small" className={`balance-gutter ${(sidePots[1] === 0 || !sidePots[1]) && "disable"}`} />
                    <Balance value={sidePots.length > 3 && sidePots[3]} size="small" className={`balance-gutter ${(sidePots[3] === 0 || !sidePots[3]) && "disable"}`} />
                </div>
            </div>
        </div>
    );
};

GameSection.defaultProps = {
    sidePots: [],
    cards: []
}

export default styled(GameSection)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .total-pot-wrapper {
        position: absolute;
        top: 0;
    }

    .wrapper-cards {
        width: 33.8rem;
        display: flex;
        justify-content: space-between;
        margin: 6.4rem 0 1rem 0;
        position: relative;
    }

    .wrapper-balances {
        display: flex;
        align-items: center;
    }

    .balance-gutter {
        margin: 0 0.25rem;
    }

    .disable {
        opacity: 0;
    }

    .card-item {
        width: 5.8rem;
        height: 7.9rem;
    }

    .skeleton {
        position: absolute;
        border: 0.3rem solid ${({ theme }) => theme.palette.secondary};
        border-radius: 0.3rem;
        height: inherit;
        width: inherit;
    }
`;
