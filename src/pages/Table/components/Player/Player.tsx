import React from 'react';
import styled from 'styled-components';
import { Typography, TextField } from '../../../../components';
import plus from '../../../../assets/images/plus.svg'

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
}

const BasePlayer = styled('div')<BasePlayerProps>`
    position: relative;
    display: flex;
    width: 148px;
    .player-content {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .block-container {
        flex: 1;
        flex-direction: column;

        .block {
            flex: 1;
            background: ${({ theme }) => theme.palette.background};
            height: 6px;
            margin: 2px;
            border-radius: 1px;
        }
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

    .input {
        margin: 0 2px;
    }
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

interface PlayerProps {
    className?: string;
    type: 'buy-in' | 'empty' | 'player';
    username: string;
    balance: number;
}

const Player = ({ className, username, balance, type }: PlayerProps) => {
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

    return (
        <div className={className}>
            <BasePlayer type={type}>
                {type === 'empty' && 
                <div className="icon">
                    <img src={plus} alt="plus-icon"/>
                </div>}
                <Border align="left" color={BORDER_COLOR}/>
                <div className="player-content">
                    <Divider size="big" color={BIG_DIVIDER_COLOR}/>
                    <div className="line-container">
                        <Line size="big" color={BIG_LINE_COLOR} />
                        {type === 'player' && 
                        <Typography variant="h6" component="span">
                            {username}
                        </Typography>}
                        {type === 'buy-in' && 
                        <TextField size='small' width='inherit' className="input" />}
                        <Line size="big" color={BIG_LINE_COLOR} />
                    </div>
                    <div className="line-container">
                        <Line size="small" color={SMALL_LINE_COLOR} />
                        {type === 'player' && 
                        <div className="block-container">
                            <Divider size="small" color="yellow" />
                            <div className="block" />
                            <Divider size="small" color="yellow" />
                        </div>}
                        <Line size="small" color={SMALL_LINE_COLOR} />
                    </div>
                    <div className="line-container bottom-gutter">
                        <Line size="big" color={BIG_LINE_COLOR} />
                        {type === 'player' && 
                        <Typography variant="h6" component="span">
                            ${balance.toFixed(2)}
                        </Typography>}
                        {type === 'buy-in' && 
                        <TextField size='small' width='inherit' className="input" />}
                        <Line size="big" color={BIG_LINE_COLOR} />
                    </div>
                    <Divider size="big" color={BIG_DIVIDER_COLOR}/>
                </div>
                <Border align="right" color={BORDER_COLOR}/>
            </BasePlayer>
        </div>
    );
};


Player.defaultProps = {
    type: 'empty'
}

export default Player;
