import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../components';

interface BorderProps {
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

const BasePlayer = styled('div')`
    display: flex;
    min-width: 148px;

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
            background: ${({ theme }) => theme.palette.initial};
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
        justify-content: center;
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
`;

const Border = styled('div')<BorderProps>`
    background: ${({ theme }) => theme.palette.secondary};
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

interface PlayerProps {}

const Player = ({}: PlayerProps) => {
    return (
        <BasePlayer>
            <Border align="left" />

            <div className="player-content">
                <Divider size="big" color="secondary" />
                <div className="line-container">
                    <Line size="big" color="secondary" />
                    <Typography variant="body1" component="span">
                        test
                    </Typography>
                    <Line size="big" color="secondary" />
                </div>
                <div className="line-container">
                    <Line size="small" color="yellow" />
                    <div className="block-container">
                        <Divider size="small" color="yellow" />
                        <div className="block" />
                        <Divider size="small" color="yellow" />
                    </div>
                    <Line size="small" color="yellow" />
                </div>
                <div className="line-container bottom-gutter">
                    <Line size="big" color="secondary" />
                    <Typography variant="body1" component="span">
                        test
                    </Typography>
                    <Line size="big" color="secondary" />
                </div>
                <Divider size="big" color="secondary" />
            </div>
            <Border align="right" />
        </BasePlayer>
    );
};

export default Player;
