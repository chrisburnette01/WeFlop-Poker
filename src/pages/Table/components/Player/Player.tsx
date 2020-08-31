// @ts-nocheck
import React, { useEffect, useState, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { Typography, TextField, Button } from '../../../../components';
import plus from '../../../../assets/images/plus.svg';
import { Card, Balance, Dealer } from '../';
import { useSpring, animated, useTransition } from 'react-spring';
import useMeasure from 'react-use-measure';

const CENTER = [
    {
        top: '-500%',
        left: '0',
        right: '0',
    },
    {
        top: '-500%',
        left: '400%',
        right: '-400%',
    },
    {
        top: '0',
        left: '500%',
        right: '-500%',
    },
    {
        top: '500%',
        left: '400%',
        right: '-400%',
    },
    {
        top: '500%',
        left: '200%',
        right: '-200%',
    },
    {
        top: '500%',
        left: '-200%',
        right: '200%',
    },
    {
        top: '500%',
        left: '-400%',
        right: '400%',
    },
    {
        top: '0',
        left: '-500%',
        right: '500%',
    },
    {
        top: '-500%',
        left: '-400%',
        right: '400%',
    },
];

const POT_ALIGNMENT = [
    {
        top: '0.9rem',
        left: '0',
    },
    {
        top: '0.9rem',
        left: '-13.3rem',
    },
    {
        top: '1.2rem',
        left: '-13.3rem',
    },
    {
        top: '6rem',
        left: '-13.3rem',
    },
    {
        top: '-8rem',
        left: '0',
    },
    {
        top: '-8rem',
        left: '0',
    },
    {
        top: '-6rem',
        left: '9rem',
    },
    {
        top: '1.2rem',
        left: '9rem',
    },
    {
        top: '9rem',
        left: '9rem',
    },
];

const FINISHED = 'FINISHED';
const CHANGED = 'CHANGED';

interface BorderProps {
    color: 'primary' | 'secondary' | 'initial' | string;
    align: 'left' | 'right';
}

interface LineProps {
    size: 'small' | 'big';
    color: 'primary' | 'secondary' | 'initial' | string;
}

interface DividerProps {
    size: 'small' | 'big';
    color: 'primary' | 'secondary' | 'initial' | string;
}

interface BasePlayerProps {
    type: 'buy-in' | 'empty' | 'player';
    dealer?: boolean;
    currentSlot: number;
    pot?: number;
    lastAction?: {
        type: 'bet' | 'call' | 'raise' | 'sit-in' | 'sit-out' | 'active' | 'finished-round' | 'win' | 'lose';
        params?: Record;
    };
}

interface DealerTokeProps {
    currentSlot: number;
}

const TimerLine = styled(animated.div)`
    width: 100%;
    background: ${({ theme, lastAction }) =>
        lastAction ? (lastAction.type === 'win' ? 'transparent' : theme.palette.primary) : theme.palette.primary};
    height: 0.6rem;
    margin: 0.2rem;
    transition: width 10s, background 0.4s ease-in;
    border-radius: 0.1rem;
`;

const BasePlayer = styled('div')<BasePlayerProps>`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;

    .last-action {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: -1;
    }
    .player-content {
        display: flex;
        flex: 1;
        flex-direction: column;
        background: ${({ theme }) => theme.palette.background};
    }

    .block-container {
        flex: 1;
        flex-direction: column;
    }

    .line-container {
        display: flex;
        margin: 0.2rem;
        margin-bottom: 0;
        flex: 1;
        justify-content: space-between;
        align-items: center;

        span {
            flex: 1;
            justify-content: center;
            text-align: center;
        }
    }

    .line-container-middle {
        margin: 0.2rem 0.3rem 0 0.3rem;
    }

    .bottom-gutter {
        margin-bottom: 0.2rem;
    }

    .icon {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 3.2rem;
        border: 0.2rem solid white;
        top: calc(50% - 1.6rem);
        left: calc(50% - 1.6rem);
        cursor: pointer;
    }

    .top,
    .bottom {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
        top: -4rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .bottom {
        top: 8rem;
    }

    .input {
        margin: 0 0.2rem;
    }
    .pot-container {
        position: absolute;
        display: flex;
        width: 10rem;
        ${({ index }) => {
            switch (index) {
                case 1:
                    return 'top: -9rem; left: 50%; transform: translateX(-50%); justify-content: center;';
                case 2:
                    return 'top: -9rem; left: 13.3rem; justify-content: flex-end;';
                case 3:
                    return 'top: -1.2rem; left: 13.3rem; justify-content: flex-end;';
                case 4:
                    return 'top: 6rem; left: 13.3rem; justify-content: flex-end;';
                case 5:
                case 6:
                    return 'top: 8rem; left: 50%; transform: translateX(-50%); justify-content: center;';
                case 7:
                    return 'top: 6rem; left: -9rem; justify-content: flex-start;';
                case 8:
                    return 'top: -1.2rem; left: -9rem; justify-content: flex-start;';
                case 9:
                    return 'top: -9rem; left: -9rem; justify-content: flex-start;';
            }
        }}
    }
    .pot-inner {
        position: relative;
    }
    .pot {
        ${({ index }) => {
            switch (index) {
                case 1:
                case 5:
                case 6:
                    return 'transform: translateX(-50%);';
            }
        }}
    }
    .balance-text-bottom {
        margin: 0 0.2rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .line-small {
        width: 0.4rem;
        height: 100%;
        border-radius: 0.1rem;
        background: ${({ theme }) => theme.palette.secondary};
    }
`;

const Square = styled('div')`
    background: ${({ theme }) => theme.palette.secondary};
    height: 0.8rem;
    width: 0.8rem;
    margin: 0 1.2rem;
    border-radius: 0.2rem;
`;

const Border = styled('div')<BorderProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: 100%;
    width: 0.8rem;
    border-radius: ${({ align }) => (align === 'left' ? '0.4rem 0 0 0.4rem' : '0 0.4rem 0.4rem 0')};
`;

const Line = styled('div')<LineProps>`
    background: ${({ theme, color, type }) =>
        type === 'empty' ? 'unset' : theme.palette[color] ? theme.palette[color] : theme.palette.common[color]};
    height: 100%;
    width: ${({ size }) => (size === 'small' ? '0.6rem' : '0.8rem')};
    border-radius: 0.1rem;
    border: ${({ type, theme }) => (type === 'empty' ? `0.1rem solid ${theme.palette.initial}` : 'unset')};
    transition: background 0.4s ease-in;
`;

const Divider = styled('div')<DividerProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: ${({ size }) => (size === 'small' ? '0.1rem' : '0.2rem')};
    margin: 0 0.2rem;
    border-radius: 0.1rem;
`;

interface PlayerProps {
    className?: string;
    username: string;
    balance: number;
    slot?: number;
    dealer?: boolean;
    pot?: number;
    timeLeft: number;
    balanceRef: any;
    alignment: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    lastAction?: {
        type: 'bet' | 'call' | 'raise' | 'sit-in' | 'sit-out' | 'active' | 'finished-round' | 'win' | 'lose';
        params?: Record;
    };
    index: number;
    onAccept?: () => void;
    displayNone?: boolean;
}

const Player = forwardRef(
    (
        {
            className,
            username,
            balance,
            slot,
            pot,
            timeLeft,
            lastAction,
            balanceRef,
            alignment,
            index,
            onAccept,
            displayNone,
            dealer
        }: PlayerProps,
        ref: any,
    ) => {
        const [timeWidth, setTimeWidth] = useState(100);
        const [type, setType] = useState(!slot ? 'empty' : slot && !balance ? 'buy-in' : 'player');
        const [timelineStyles, setTimelineStyles] = useState({ width: '100%', transition: 'width 10s' });
        const [flipped, setFlipped] = useState(false);
        const [potAnimationType, setPotAnimationType] = useState<string | undefined>();
        const [action, setAction] = useState({ action: '', show: false });

        const [potRef, potBounds] = useMeasure();

        let BIG_LINE_COLOR = 'secondary';
        let SMALL_LINE_COLOR = 'yellow';
        let BORDER_COLOR = 'secondary';
        let BIG_DIVIDER_COLOR = 'secondary';

        if (type === 'empty') {
            BIG_LINE_COLOR = 'initial';
            SMALL_LINE_COLOR = 'initial';
            BORDER_COLOR = 'initial';
            BIG_DIVIDER_COLOR = 'initial';
        }

        if (lastAction === 'active') {
            BORDER_COLOR = 'initial';
            BIG_DIVIDER_COLOR = 'initial';
        }

        useEffect(() => {
            if (lastAction === 'active') {
                setTimelineStyles({ width: '0', transition: `width ${timeLeft}s` });
            }
        }, [lastAction]);

        useEffect(() => {
            if (lastAction) {
                switch (lastAction.type) {
                    case 'bet':
                        newAction(`bet ${lastAction?.params.value}`);
                        newPot(CHANGED);
                        break;
                    case 'call':
                        newAction(`call ${lastAction?.params.value}`);
                        newPot(CHANGED);
                        break;
                    case 'raise':
                        newAction(`raise ${lastAction?.params.value}`);
                        newPot(CHANGED);
                        break;
                    case 'sit-in':
                        newAction('sit in');
                        break;
                    case 'sit-out':
                        newAction('sit out');
                        break;
                    case 'check':
                        newAction('check');
                        break;
                    case 'finished-round':
                        newPot(FINISHED);
                        break;
                    case 'win':
                        cardsAnimate('win', lastAction.params.cards);
                        break;
                    case 'lose':
                        cardsAnimate('lose', lastAction.params.cards);
                        break;
                }
            }
        }, [lastAction]);

        const cardsAnimate = (type, cards) => {
            setCardAnimation({
                to: async (next, cancel) => {
                    await next({ transform: 'translateY(-40%)', opacity: type === 'lose' ? 0.75 : 1 });
                    if (cards === 'show') {
                        setFlipped(true);
                    }
                },
            });
        };

        const [cardAnimation, setCardAnimation, stopCardAnimation] = useSpring<any>(() => ({
            to: async (next, cancel) => {
                await next({ opacity: 1, top: '0%', left: '0%', right: '0%' });
                setFlipped(index === 1);
            },
            from: {
                opacity: 0,
                top: CENTER[index - 1].top,
                left: CENTER[index - 1].left,
                right: CENTER[index - 1].right,
                transform: 'translateY(0%)',
            },
            config: { duration: 800 },
        }));

        const leaveAnimation =
            potAnimationType === FINISHED
                ? {
                      top: `${balanceRef.top - potBounds.top}`,
                      left: `${balanceRef.left - potBounds.left}`,
                      opacity: '0',
                  }
                : { opacity: '0' };

        const newPot = (type) => {
            if (type === CHANGED) {
                setPotAnimationType(CHANGED);
            } else {
                setPotAnimationType(FINISHED);
            }
        };

        const potComponent = useTransition(pot !== 0 && potAnimationType !== FINISHED, null, {
            from: {
                left: `${POT_ALIGNMENT[index - 1].left}`,
                top: `${POT_ALIGNMENT[index - 1].top}`,
                position: 'absolute',
                opacity: '0',
            },
            enter: {
                opacity: 1,
                left: POT_ALIGNMENT[index - 1].left === '0' ? '0' : index <= 6 ? '-6.6rem' : '0',
                top: '0',
                opacity: '1',
            },
            leave: leaveAnimation,
            config: { duration: 300 },
        });

        const newAction = (value) => {
            setAction({ action: value, show: true });
            setTimeout(() => {
                setAction((prev) => ({ ...prev, show: false }));
            }, 3000);
        };
        const lastActionComponent = useTransition(action.show, null, {
            from: { bottom: '0', opacity: '0' },
            enter: { opacity: '1', bottom: '-2rem' },
            leave: { opacity: '0', bottom: '0' },
            config: { duration: 300 },
        });

        return (
            !displayNone && (
                <div className={className}>
                    {type === 'player' && (
                        <div className="cards-player-wrapper">
                            <Card
                                variant="H1"
                                animated
                                style={{
                                    top: cardAnimation.top,
                                    left: cardAnimation.left,
                                    opacity: cardAnimation.opacity,
                                    transform: cardAnimation.transform,
                                    marginLeft: '0.25rem'
                                }}
                                flipped={flipped}
                            />
                            <Card
                                variant="H1"
                                animated
                                style={{
                                    marginRight: '0.25rem',
                                    top: cardAnimation.top,
                                    right: cardAnimation.right,
                                    opacity: cardAnimation.opacity,
                                    transform: cardAnimation.transform,
                                }}
                                flipped={flipped}
                            />
                        </div>
                    )}

                    {
                        dealer && <Dealer className="dealer-circle" />
                    }
                    <BasePlayer type={type} index={index!} ref={ref} lastAction={lastAction}>
                        <div className="pot-container">
                            <div className="pot-inner">
                                {potComponent.map(
                                    ({ item, key, props }) =>
                                        item && pot && (
                                            <Balance
                                                value={pot}
                                                key={key}
                                                size="small"
                                                className="pot"
                                                style={props}
                                                ref={potRef}
                                            />
                                        ),
                                )}
                            </div>
                        </div>
                        {lastActionComponent.map(
                            ({ item, key, props }) =>
                                item && (
                                    <animated.div className="last-action" style={props} key={key}>
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            textTransform="uppercase"
                                            fontWeight={200}
                                        >
                                            {action.action}
                                        </Typography>
                                    </animated.div>
                                ),
                        )}
                        {(type === 'buy-in' || type === 'top-up') && (
                            <div className="top">
                                <Square />
                                <Typography
                                    textTransform="uppercase"
                                    fontWeight={600}
                                    component="h3"
                                    variant="body1"
                                    color="secondary"
                                >
                                    {type}
                                </Typography>
                                <Square />
                            </div>
                        )}
                        {(type === 'buy-in' || type === 'top-up') && (
                            <div className="bottom">
                                <Button title="Confirm" variant="secondary" size="small" />
                            </div>
                        )}
                        {type === 'empty' && (
                            <div className="icon" onClick={onAccept}>
                                <img src={plus} alt="plus-icon" />
                            </div>
                        )}
                        <Border align="left" color={BORDER_COLOR} />
                        <div className="player-content">
                            <Divider size="big" color={BIG_DIVIDER_COLOR} />
                            <div className="line-container">
                                <Line size="big" color={BIG_LINE_COLOR} />
                                {type === 'player' && (
                                    <Typography variant="h6" component="span">
                                        {username}
                                    </Typography>
                                )}
                                {(type === 'buy-in' || type === 'top-up') && (
                                    <TextField size="small" width="inherit" className="input" />
                                )}
                                <Line size="big" color={BIG_LINE_COLOR} />
                            </div>
                            <div className="line-container line-container-middle">
                                <Line
                                    size="small"
                                    color={
                                        lastAction
                                            ? lastAction.type === 'win'
                                                ? 'success'
                                                : SMALL_LINE_COLOR
                                            : SMALL_LINE_COLOR
                                    }
                                    type={type}
                                />
                                {type === 'player' && (
                                    <div className="block-container">
                                        <Divider
                                            size="small"
                                            color={
                                                lastAction
                                                    ? lastAction.type === 'win'
                                                        ? 'success'
                                                        : 'yellow'
                                                    : 'yellow'
                                            }
                                        />
                                        <TimerLine style={timelineStyles} lastAction={lastAction} />
                                        <Divider
                                            size="small"
                                            color={
                                                lastAction
                                                    ? lastAction.type === 'win'
                                                        ? 'success'
                                                        : 'yellow'
                                                    : 'yellow'
                                            }
                                        />
                                    </div>
                                )}
                                <Line
                                    size="small"
                                    color={
                                        lastAction
                                            ? lastAction.type === 'win'
                                                ? 'success'
                                                : SMALL_LINE_COLOR
                                            : SMALL_LINE_COLOR
                                    }
                                    type={type}
                                />
                            </div>
                            <div className="line-container bottom-gutter">
                                <Line size="big" color={BIG_LINE_COLOR} />
                                {type === 'player' && (
                                    <Typography variant="h6" component="span">
                                        ${balance.toFixed(2)}
                                    </Typography>
                                )}
                                {(type === 'buy-in' || type === 'top-up') && (
                                    <div className="balance-text-bottom">
                                        <div className="line-small" />
                                        <Typography component="span" variant="h6" color="secondary">
                                            1
                                        </Typography>
                                        <div className="line-small" />
                                    </div>
                                )}
                                <Line size="big" color={BIG_LINE_COLOR} />
                            </div>
                            <Divider size="big" color={BIG_DIVIDER_COLOR} />
                        </div>
                        <Border align="right" color={BORDER_COLOR} />
                    </BasePlayer>
                </div>
            )
        );
    },
);

Player.defaultProps = {
    type: 'buy-in',
    index: 1,
    pot: 0,
};

export default styled(Player)`
    position: absolute;
    width: 10%;
    height: 7.5%;
    opacity: ${({ lastAction }) => (lastAction === 'sit-out' ? '0.5' : 'unset')};
    top: ${({ alignment }) => (alignment.top ? alignment.top : null)}%;
    bottom: ${({ alignment }) => (alignment.bottom ? alignment.bottom : null)}%;
    left: ${({ alignment }) => (alignment.left ? alignment.left : null)}%;
    right: ${({ alignment }) => (alignment.right ? alignment.right : null)}%;
    
    .cards-player-wrapper {
        height: 100%;
        position: absolute;
        bottom: 85%;
        left: 50%;
    }

    .dealer-circle {
        left: calc(100% + 1rem);
    }
`;
