// @ts-nocheck
import React, { useEffect, useState, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { Typography, TextField, Button } from '../../../../components';
import plus from '../../../../assets/images/plus.svg';
import { Card, Balance } from '../../components';
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
        top: '90px',
        left: '0',
    },
    {
        top: '90px',
        left: '-133px',
    },
    {
        top: '12px',
        left: '-133px',
    },
    {
        top: '60px',
        left: '-133px',
    },
    {
        top: '-80px',
        left: '0',
    },
    {
        top: '-80px',
        left: '0',
    },
    {
        top: '-60px',
        left: '90px',
    },
    {
        top: '12px',
        left: '90px',
    },
    {
        top: '90px',
        left: '90px',
    },
];

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
    currentAction?: 'active' | 'sitted-out';
}

interface DealerTokeProps {
    currentSlot: number;
}

const TimerLine = styled(animated.div)`
    width: 100%;
    background: ${({ theme }) => theme.palette.primary};
    height: 0.6rem;
    margin: 0.2rem;
    transition: width 10s;
    border-radius: 0.1rem;
`;

const BasePlayer = styled('div')<BasePlayerProps>`
    display: flex;
    position: relative;
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
        margin: 2px;
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

    .bottom-gutter {
        margin-bottom: 2px;
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
        border: 2px solid white;
        top: calc(50% - 16px);
        left: calc(50% - 16px);
    }

    .top,
    .bottom {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 1.48rem;
        top: -40px;
    }

    .bottom {
        top: 80px;
    }

    .input {
        margin: 0 2px;
    }
    .pot-container {
        position: absolute;
        display: flex;
        width: 10rem;
        ${({ currentSlot }) => {
            switch (currentSlot) {
                case 1:
                    return 'top: -90px; left: 50%; transform: translateX(-50%); justify-content: center;';
                case 2:
                    return 'top: -90px; left: 133px; justify-content: flex-end;';
                case 3:
                    return 'top: -12px; left: 133px; justify-content: flex-end;';
                case 4:
                    return 'top: 60px; left: 133px; justify-content: flex-end;';
                case 5:
                case 6:
                    return 'top: 80px; left: 50%; transform: translateX(-50%); justify-content: center;';
                case 7:
                    return 'top: 60px; left: -90px; justify-content: flex-start;';
                case 8:
                    return 'top: -12px; left: -90px; justify-content: flex-start;';
                case 9:
                    return 'top: -90px; left: -90px; justify-content: flex-start;';
            }
        }}
    }
    .pot-inner {
        position: relative;
    }
    .pot {
        ${({ currentSlot }) => {
            switch (currentSlot) {
                case 1:
                case 5:
                case 6:
                    return 'transform: translateX(-50%);';
            }
        }}
    }
`;

const Square = styled('div')`
    background: ${({ theme }) => theme.palette.secondary};
    height: 0.8rem;
    width: 0.8rem;
    margin: 0 12px;
    border-radius: 2px;
`;

const Border = styled('div')<BorderProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: 5.6rem;
    width: 0.8rem;
    border-radius: ${({ align }) => (align === 'left' ? '0.4rem 0 0 0.4rem' : '0 0.4rem 0.4rem 0')};
`;

const Line = styled('div')<LineProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: ${({ size }) => (size === 'small' ? '1.2rem' : '1.6rem')};
    width: ${({ size }) => (size === 'small' ? '0.6rem' : '0.8rem')};
    border-radius: 1px;
`;

const Divider = styled('div')<DividerProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: ${({ size }) => (size === 'small' ? '0.1rem' : '0.2rem')};
    margin: 0 2px;
    border-radius: 0.1rem;
`;

interface PlayerProps {
    className?: string;
    type: 'buy-in' | 'empty' | 'player';
    username: string;
    balance: number;
    slot?: number;
    currentAction?: 'active' | 'sitted-out';
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
        type: 'bet' | 'call' | 'raise' | 'sit-in' | 'sit-out' | 'active' | 'finished-round';
        params: Record;
    };
}

const Player = forwardRef(
    (
        {
            className,
            username,
            balance,
            type,
            slot,
            pot,
            currentAction,
            timeLeft,
            lastAction,
            balanceRef,
            alignment,
        }: PlayerProps,
        ref: any,
    ) => {
        const [timeWidth, setTimeWidth] = useState(100);
        const [timelineStyles, setTimelineStyles] = useState({ width: '100%', transition: 'width 10s' });
        const [flipped, setFlipped] = useState(false);
        const [potRef, potBounds] = useMeasure();

        const props = useSpring<any>({
            to: async (next, cancel) => {
                await next({ opacity: 1, top: '0%', left: '0%', right: '0%' });
                setFlipped(slot === 1);
            },

            from: { opacity: 0, top: CENTER[slot - 1].top, left: CENTER[slot - 1].left, right: CENTER[slot - 1].right },
            config: { duration: 800 },
        });

        useEffect(() => {
            if (currentAction === 'active') {
                setTimelineStyles({ width: '0px', transition: `width ${timeLeft}s` });
            }
        }, [currentAction]);

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

        if (currentAction === 'active') {
            BORDER_COLOR = 'initial';
            BIG_DIVIDER_COLOR = 'initial';
        }

        const [potStatus, setPotStatus] = useState(true);
        const [potAnimationType, setPotAnimationType] = useState('UPDATING');

        const leaveAnimation =
            potAnimationType === 'FINISHED'
                ? {
                      top: `${balanceRef.top - potBounds.top}`,
                      left: `${balanceRef.left - potBounds.left}`,
                      opacity: '0',
                  }
                : { opacity: '0' };

        const potHandler = (type) => {
            if (type === 'change') {
                setPotAnimationType('CHANGE');
                setPotStatus(false);
                setTimeout(() => {
                    setPotStatus(true);
                }, 100);
            } else {
                setPotAnimationType('FINISHED');
                setPotStatus(false);
            }
        };

        const potComponent = useTransition(potStatus, null, {
            from: {
                left: `${POT_ALIGNMENT[slot - 1].left}`,
                top: `${POT_ALIGNMENT[slot - 1].top}`,
                position: 'absolute',
                opacity: '0',
            },
            enter: {
                opacity: 1,
                left: POT_ALIGNMENT[slot - 1].left === '0' ? '0' : slot <= 6 ? '-66px' : '0',
                top: '0',
                opacity: '1',
            },
            leave: leaveAnimation,
            config: { duration: 300 },
        });

        const [action, setAction] = useState({ action: '', show: false });

        const actionHandler = (value) => {
            setAction({ action: value, show: true });
            setTimeout(() => {
                setAction((prev) => ({ ...prev, show: false }));
            }, 3000);
        };
        useEffect(() => {
            if (lastAction) {
                switch (lastAction.type) {
                    case 'bet':
                    case 'call':
                    case 'raise':
                        actionHandler(`${lastAction.type} ${lastAction?.params.value}`);
                        potHandler('change');
                        break;
                    case 'sit-in':
                        actionHandler('sit in');
                        break;
                    case 'sit-out':
                        actionHandler('sit out');
                        break;
                    case 'check':
                        actionHandler('check');
                        break;
                    case 'finished-round':
                        potHandler('finished');
                        break;
                }
            }
            // if (lastAction !== action) {
            //     // actionHandler(`${lastAction.type}`);
            //     setAction('a');
            // }
        }, [lastAction]);

        const lastActionComponent = useTransition(action.show, null, {
            from: { bottom: '0px', opacity: '0' },
            enter: { opacity: '1', bottom: '-20px' },
            leave: { opacity: '0', bottom: '0px' },
            config: { duration: 300 },
        });

        return (
            <div className={className}>
                {type === 'player' && (
                    <div className="cards-player-wrapper">
                        <div className="cards-inner">
                            <Card
                                variant="H1"
                                animated
                                left
                                style={{ top: props.top, left: props.left, opacity: props.opacity }}
                                flipped={flipped}
                            />
                            <Card
                                variant="H1"
                                animated
                                right
                                style={{ top: props.top, right: props.right, opacity: props.opacity }}
                                flipped={flipped}
                            />
                        </div>
                    </div>
                )}
                <BasePlayer type={type} currentSlot={slot!} ref={ref} currentAction={currentAction}>
                    <div className="pot-container">
                        <div className="pot-inner">
                            {potComponent.map(
                                ({ item, key, props }) =>
                                    item && (
                                        <Balance
                                            value={900}
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
                    {type === 'buy-in' && (
                        <div className="top">
                            <Square />
                            <Typography
                                textTransform="uppercase"
                                fontWeight={600}
                                component="h3"
                                variant="body1"
                                color="secondary"
                            >
                                Buy-in
                            </Typography>
                            <Square />
                        </div>
                    )}
                    {type === 'buy-in' && (
                        <div className="bottom">
                            <Button title="Confirm" variant="secondary" size="small" />
                        </div>
                    )}
                    {type === 'empty' && (
                        <div className="icon">
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
                            {type === 'buy-in' && <TextField size="small" width="inherit" className="input" />}
                            <Line size="big" color={BIG_LINE_COLOR} />
                        </div>
                        <div className="line-container">
                            <Line size="small" color={SMALL_LINE_COLOR} />
                            {type === 'player' && (
                                <div className="block-container">
                                    <Divider size="small" color="yellow" />
                                    <TimerLine style={timelineStyles} />
                                    <Divider size="small" color="yellow" />
                                </div>
                            )}
                            <Line size="small" color={SMALL_LINE_COLOR} />
                        </div>
                        <div className="line-container bottom-gutter">
                            <Line size="big" color={BIG_LINE_COLOR} />
                            {type === 'player' && (
                                <Typography variant="h6" component="span">
                                    ${balance.toFixed(2)}
                                </Typography>
                            )}
                            {type === 'buy-in' && <TextField size="small" width="inherit" className="input" />}
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
    slot: 1,
};

interface PlayerPropsWrap {
    slot: number;
}

export default styled(Player)`
    position: absolute;
    opacity: ${({ currentAction }) => (currentAction === 'sitted-out' ? '0.5' : 'unset')};
    top: ${({ alignment }) => (alignment.top ? alignment.top : null)}%;
    bottom: ${({ alignment }) => (alignment.bottom ? alignment.bottom : null)}%;
    left: ${({ alignment }) => (alignment.left ? alignment.left : null)}%;
    right: ${({ alignment }) => (alignment.right ? alignment.right : null)}%;
    .cards-player-wrapper {
        height: 5.5rem;
        display: flex;
        margin: 0 14px 0 14px;
        width: 12rem;
    }
    .cards-inner {
        position: relative;
        width: 100%;
        display: flex;
        & > * + * {
            margin-left: 4px;
        }
    }
`;
