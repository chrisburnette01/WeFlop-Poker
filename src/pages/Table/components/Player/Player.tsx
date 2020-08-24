// @ts-nocheck
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Typography, TextField, Button } from '../../../../components';
import plus from '../../../../assets/images/plus.svg';
import { Card, Balance } from '../../components';
import { useSpring, animated, useTransition } from 'react-spring';
import useMeasure from 'react-use-measure';

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
}

interface DealerTokeProps {
    currentSlot: number;
}

const TimerLine = styled(animated.div)`
    width: 100%;
    background: ${({ theme }) => theme.palette.primary};
    height: 6px;
    margin: 2px;
    transition: width 10s;
    border-radius: 1px;
`;

const BasePlayer = styled('div')<BasePlayerProps>`
    display: flex;
    width: 148px;
    position: absolute;
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
        width: 32px;
        height: 32px;
        border-radius: 32px;
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
        width: 148px;
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
        width: 100px;
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
    height: 8px;
    width: 8px;
    margin: 0 12px;
    border-radius: 2px;
`;

const Border = styled('div')<BorderProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: 56px;
    width: 8px;
    border-radius: ${({ align }) => (align === 'left' ? '4px 0 0 4px' : '0 4px 4px 0')};
`;

const Line = styled('div')<LineProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: ${({ size }) => (size === 'small' ? '12px' : '16px')};
    width: ${({ size }) => (size === 'small' ? '6px' : '8px')};
    border-radius: 1px;
`;

const Divider = styled('div')<DividerProps>`
    background: ${({ theme, color }) => (theme.palette[color] ? theme.palette[color] : theme.palette.common[color])};
    height: ${({ size }) => (size === 'small' ? '1px' : '2px')};
    margin: 0 2px;
    border-radius: 1px;
`;

const DealerToken = styled('div')<DealerTokeProps>`
    top: 50%;
    transform: translateY(-50%);
    ${({ currentSlot }) => {
        switch (currentSlot) {
            case 2:
            case 3:
            case 4:
            case 5:
                return 'left: -38px;';
            case 1:
            case 6:
            case 7:
            case 8:
            case 9:
                return 'right: -38px;';
        }
    }}
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 18px;
    border: ${({ theme }) => `solid 2px ${theme.palette.secondary}`};
    & > span {
        margin-left: 2px;
    }
`;

interface PlayerProps {
    className?: string;
    type: 'buy-in' | 'empty' | 'player';
    username: string;
    balance: number;
    slot?: number;
    activeSlot?: boolean;
    dealer?: boolean;
    pot?: number;
    timeLeft: number;
    centerRef: any;
    balanceRef: any;
    lastAction?: string;
    isAction?: boolean;
}

const Player = ({
    className,
    username,
    balance,
    type,
    slot,
    pot,
    dealer,
    activeSlot,
    timeLeft,
    centerRef,
    balanceRef,
    lastAction,
    isAction
}: PlayerProps) => {
    const ref = useRef<any>();
    const [timeWidth, setTimeWidth] = useState(100);
    const [timelineStyles, setTimelineStyles] = useState({ width: '100%', transition: 'width 10s' });
    const [flipped, setFlipped] = useState(false);
    const [potRef, potBounds] = useMeasure();
    const topProps = ['-500%', '-500%', '0%', '500%', '500%', '500%', '500%', '0%', '-500%'];
    const leftProps = ['0%', '400%', '500%', '400%', '200%', '-200%', '-400%', '-500%', '-400%'];
    const rightProps = ['0%', '-400%', '-500%', '-400%', '-200%', '200%', '400%', '500%', '400%'];

    const props = useSpring<any>({
        to: async (next, cancel) => {
            await next({ opacity: 1, top: '0%', left: '0%', right: '0%' });
            await setFlipped(true);
        },

        from: { opacity: 0, top: topProps[slot - 1], left: leftProps[slot - 1], right: rightProps[slot - 1] },
        config: { duration: 300 },
    });

    useEffect(() => {
        if (activeSlot) {
            setTimelineStyles({ width: '0px', transition: `width ${timeLeft}s` });
        }
    }, [activeSlot]);

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

    const potPropsTop = [90, 90, 12, 60, -80, -80, -60, 12, 90];
    const potPropsLeft = [0, -133, -133, -133, 0, 0, 90, 90, 90];

    const potComponent = useTransition(pot, null, {
        from: {
            left: `${potPropsLeft[slot - 1]}px`,
            top: `${potPropsTop[slot - 1]}px`,
            position: 'absolute',
            opacity: '0',
        },
        enter: {
            opacity: 1,
            left: potPropsLeft[slot - 1] === 0 ? '0' : slot <= 6 ? '-66px' : '0',
            top: '0',
            opacity: '1',
        },
        leave: {
            top: `${balanceRef.top - potBounds.top}px`,
            left: `${balanceRef.left - potBounds.left}px`,
            opacity: '0',
        },
        config: { duration: 300 },
    });

    const lastActionComponent = useTransition(isAction, null, {
        from: { bottom: '0px', opacity: '0' },
        enter: { opacity: '1', bottom: '-20px' },
        leave: { opacity: '0', bottom: '0px' },
        config: { duration: 300 },
    });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowPot(false);
    //     }, 5000);
    // }, []);

    return (
        <div className={className} ref={ref}>
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
            <BasePlayer type={type} currentSlot={slot!}>
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

                {dealer && (
                    <DealerToken currentSlot={slot!}>
                        <Typography
                            textTransform="uppercase"
                            component="span"
                            color="yellow"
                            fontWeight={700}
                            variant="body1"
                        >
                            d
                        </Typography>
                    </DealerToken>
                )}
                {lastActionComponent.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div className="last-action" style={props} key={key}>
                                <Typography variant="h6" component="span" textTransform="uppercase" fontWeight={200}>
                                    {lastAction}
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
};

Player.defaultProps = {
    type: 'buy-in',
    slot: 1,
};

interface PlayerPropsWrap {
    slot: number;
}

export default styled(Player)`
    position: relative;
    .cards-player-wrapper {
        height: 55px;
        display: flex;
        margin: 0 14px 0 14px;
        width: 120px;
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
