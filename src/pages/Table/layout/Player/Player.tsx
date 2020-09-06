// @ts-nocheck
import React, { useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components';
import { Typography, TextField, Button } from '../../../../components';
import { useWindowSize } from '../../../../helpers';
import plus from '../../../../assets/images/plus.svg';
import { Card, Balance, Dealer } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Square, Border, Line, Divider, TimerLine } from './components';
import { useSpring, animated, useTransition, config } from 'react-spring';
import useMeasure from 'react-use-measure';

const CENTER = [
    {
        top: -500,
        left: 0,
        right: 0,
    },
    {
        top: -500,
        left: 400,
        right: -400,
    },
    {
        top: 0,
        left: 500,
        right: -500,
    },
    {
        top: 500,
        left: 400,
        right: -400,
    },
    {
        top: 500,
        left: 200,
        right: -200,
    },
    {
        top: 500,
        left: -200,
        right: 200,
    },
    {
        top: 500,
        left: -400,
        right: 400,
    },
    {
        top: 0,
        left: -500,
        right: 500,
    },
    {
        top: -500,
        left: -400,
        right: 400,
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

const FINISHED = 'finished';
const CHANGED = 'changed';

interface BasePlayerProps {
    type: 'buy-in' | 'empty' | 'player';
    dealer?: boolean;
    currentSlot: number;
    pot?: number;
    lastAction?: {
        type?: 'bet' | 'call' | 'raise' | 'check';
        params?: Record<string, any>;
    };
}

interface DealerTokeProps {
    currentSlot: number;
}

const BasePlayer = styled('div')<BasePlayerProps>`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;

    .last-action {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
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

interface PlayerProps {
    className?: string;
    username?: string;
    balance?: number;
    slot?: number;
    dealer?: boolean;
    pot?: number;
    timeLeft?: number;
    onUpdateBalance?: (arg0?: any) => void;
    alignment: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    index: number;
    onAccept?: () => void;
    status?: 'selected' | 'sitted-in' | 'sitted-out' | 'folded' | 'won' | 'lost';
    lastAction?: {
        type?: 'bet' | 'call' | 'raise' | 'check';
        params?: Record<string, any>;
    };
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
            index,
            onAccept,
            dealer,
            alingment,
            onUpdateBalance,
            status,
        }: PlayerProps,
        ref: any,
    ) => {
        const [topUp, setTopUp] = useState(100);
        const [flipped, setFlipped] = useState(false);
        const size = useWindowSize();
        const [potAnimationType, setPotAnimationType] = useState<'finished' | 'changed' | undefined>();
        const [action, setAction] = useState("");
        const [timeWidth, setTimeWidth] = useState(100);
        const table = useSelector((state: RootState) => state.table);
        const [potRef, potBounds] = useMeasure();

        const type = !slot ? 'empty' : slot && !balance ? 'buy-in' : 'player';

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
            if (lastAction) {
                switch (lastAction.type) {
                    case 'bet':
                        newAction(`bet ${lastAction?.params.value}`);
                        newPot(FINISHED);
                        break;
                    case 'call':
                        newAction(`call ${lastAction?.params.value}`);
                        newPot(CHANGED);
                        break;
                    case 'raise':
                        newAction(`raise ${lastAction?.params.value}`);
                        newPot(CHANGED);
                        break;
                    case 'check':
                        newAction('check');
                        break;
                    case 'muck':
                        newAction('muck');
                        break;
                    case 'show':
                        newAction('show');
                        break;
                }
            }
        }, [lastAction]);

        useEffect(() => {
            if (status) {
                switch (status) {
                    case 'sitted-in':
                        newAction('sit in');
                        break;
                    case 'sitted-out':
                        newAction('sit out');
                        break;
                    case 'folded':
                        newAction('fold');
                        break;
                }
            }
        }, [status]);

        useEffect(() => {
            switch (table.status) {
                case 'finished-round':
                    newPot(FINISHED);
                    break;
            }
        }, [table.status]);

        useEffect(() => {
            if (lastAction) {
                if (lastAction.type === 'active') {
                    const interval = 100 / timeLeft;
                    const timer = setInterval(() => {
                        setTimeWidth((prev) => prev - interval);
                    }, 1000);
                    setTimeout(() => {
                        clearInterval(timer);
                    }, timeLeft * 100);
                }
            }
        }, []);

        const timerAnimation = useSpring({ to: { width: `${timeWidth}%` }, config: config.gentle });

        const cardSet =
            table.status === 'started' || table.status === 'betting'
                ? true
                : table.status === 'finished-round'
                ? false
                : false;

        const cards = useTransition(cardSet, null, {
            from: {
                opacity: 0,
                top: `${CENTER[index - 1].top}%`,
                left: `${CENTER[index - 1].left}%`,
                right: `${CENTER[index - 1].right}%`,
                transform: 'translateY(0%)',
            },
            update: () => async (next) => {
                const animation =
                    status !== 'folded'
                        ? { transform: 'translateY(-40%)', opacity: status === 'lost' ? 0.75 : 1 }
                        : { opacity: 0.25 };
                if (status === 'folded' || status === 'won' || status === 'lost') {
                    await next(animation);
                    if (lastAction.type === 'show') {
                        setFlipped(true);
                    }
                    if (table.status === 'finished-round' && status === 'folded') {
                        await next({ opacity: 0 });
                    }
                }
            },
            enter: (item) => async (next, cancel) => {
                await next({ opacity: 1, top: '0%', left: '0%', right: '0%' });
                setFlipped(index === 1);
            },
            leave: {
                opacity: 0,
                top: `${CENTER[index - 1].top}%`,
                left: `${CENTER[index - 1].left}%`,
                right: `${CENTER[index - 1].right}%`,
            },
            config: { duration: 300 },
        });

        const leaveAnimation =
            potAnimationType === FINISHED
                ?   {
                        top: `${((size.height/2) - potBounds.top)/10}rem`,
                        left: `${((size.width/2) - potBounds.left)/10}rem`,
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

        const potComponent = useTransition(pot, null, {
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
            setAction(value);

            setTimeout(() => {
                setAction((prev) => prev === value ? null : prev);
            }, 3000)
        };
        const lastActionComponent = useTransition(action, null, {
            from: { bottom: '0rem', opacity: '0' },
            enter: { opacity: '1', bottom: '-2rem' },
            leave: { opacity: '0', bottom: '0rem' },
            config: { duration: 300 },
        });

        return (
            <div className={className}>
                <div className="cards-player-wrapper">
                    {type === 'player' &&
                        cards.map(
                            ({ item, key, props }, index) =>
                                item && (
                                    <>
                                        <Card
                                            variant="H1"
                                            animated
                                            style={
                                                {
                                                    marginLeft: '1.4rem',
                                                    top: props.top,
                                                    left: props.left,
                                                    opacity: props.opacity,
                                                    transform: props.transform,
                                                }
                                            }
                                            flipped={flipped}
                                        />
                                        <Card
                                            variant="H1"
                                            animated
                                            style={{
                                                marginRight: '1.4rem',
                                                top: props.top,
                                                right: props.right,
                                                opacity: props.opacity,
                                                transform: props.transform,
                                            }}
                                            flipped={flipped}
                                        />
                                    </>
                                ),
                        )}
                </div>

                {dealer && <Dealer className="dealer-circle" />}
                <BasePlayer type={type} index={index!} ref={ref} lastAction={lastAction}>
                    {pot ? <div className="pot-container">
                        <div className="pot-inner">
                            {potComponent.map(
                                ({ item, key, props }) =>
                                    item !== 0 && <Balance
                                        value={item}
                                        key={key}
                                        size="small"
                                        className="pot"
                                        style={props}
                                        ref={potRef}
                                    />
                            )}
                        </div>
                    </div> : null}
                    {lastActionComponent.map(
                        ({ item, key, props }) =>
                                <animated.div className="last-action" style={props} key={key}>
                                    <Typography
                                        variant="h6"
                                        component="span"
                                        textTransform="uppercase"
                                        fontWeight={200}
                                    >
                                        {item}
                                    </Typography>
                                </animated.div>
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
                            <Button
                                title="Confirm"
                                variant="secondary"
                                size="small"
                                onClick={() => onUpdateBalance(topUp)}
                            />
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
                                <TextField
                                    size="small"
                                    width="inherit"
                                    value={topUp}
                                    className="input"
                                    onChange={(e) => setTopUp(e.target.value)}
                                />
                            )}
                            <Line size="big" color={BIG_LINE_COLOR} />
                        </div>
                        <div className="line-container line-container-middle">
                            <Line size="small" color={status === 'won' ? 'success' : SMALL_LINE_COLOR} type={type} />
                            {type === 'player' && (
                                <div className="block-container">
                                    <Divider size="small" color={status === 'won' ? 'success' : 'yellow'} />
                                    <TimerLine style={timerAnimation} lastAction={lastAction} />
                                    <Divider size="small" color={status === 'won' ? 'success' : 'yellow'} />
                                </div>
                            )}
                            <Line size="small" color={status === 'won' ? 'success' : SMALL_LINE_COLOR} type={type} />
                        </div>
                        <div className="line-container bottom-gutter">
                            <Line size="big" color={BIG_LINE_COLOR} />
                            {type === 'player' && balance && (
                                <Typography variant="h6" component="span">
                                    ${balance && balance.toFixed(2)}
                                </Typography>
                            )}
                            {(type === 'buy-in' || type === 'top-up') && (
                                <div className="balance-text-bottom">
                                    <div className="line-small" />
                                    <Typography component="span" variant="h6" color="secondary">
                                        {topUp}
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
    margin-bottom: 5.5rem;
    opacity: ${({ status }) => (status === 'sitted-out' ? '0.5' : 'unset')};
    top: ${({ alignment }) => (alignment.top ? alignment.top : null)}%;
    bottom: ${({ alignment }) => (alignment.bottom ? alignment.bottom : null)}%;
    left: ${({ alignment }) => (alignment.left ? alignment.left : null)}%;
    right: ${({ alignment }) => (alignment.right ? alignment.right : null)}%;

    .cards-player-wrapper {
        height: 100%;
        position: relative;
    }

    .dealer-circle {
        left: calc(100% + 1rem);
    }
`;
