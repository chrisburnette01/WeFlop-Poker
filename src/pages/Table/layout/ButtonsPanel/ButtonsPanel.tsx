import React, { useState } from 'react';

import { Range } from 'react-range';
import styled from 'styled-components';
import Button from './Button';

const BaseButtonsPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .range-track {
        height: 7px;
        width: 100%;
        background: ${({ theme }) => theme.palette.background};
        border-radius: 3.5px;
    }
    .range-thumb {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 17px;
        width: 17px;
        background-color: ${({ theme }) => theme.palette.primary};
        border-radius: 4px;
        outline: none;
        padding: 5px 4px;
    }
    .line-thumb-small {
        display: block;
        width: 2px;
        height: 5px;
        border-radius: 1px;
        background-color: ${({ theme }) => theme.palette.background};
    }
    .line-thumb-big {
        display: block;
        width: 3px;
        height: 7px;
        border-radius: 1px;
        background-color: ${({ theme }) => theme.palette.background};
    }
    .slider-wrapper {
        padding: 8px;
        background-color: ${({ theme }) => theme.palette.secondary};
        width: 217px;
        display: flex;
        align-items: center;
        position: relative;
        &::before {
            content: '';
            display: block;
            background-color: ${({ theme }) => theme.palette.secondary};
            width: 104%;
            position: absolute;
            top: 4px;
            height: 4px;
            left: -4px;
        }
        &::after {
            content: '';
            display: block;
            background-color: ${({ theme }) => theme.palette.secondary};
            width: 104%;
            position: absolute;
            bottom: 4px;
            height: 4px;
            left: -4px;
        }
    }
    .wrapper-slider-buttons {
        display: flex;
    }
    .button-section {
        background-color: ${({ theme }) => theme.palette.background};
        display: flex;
        z-index: 1;
        & > * + * {
            margin-left: 5px;
        }
    }
    .button-top-section {
        padding: 7px 5px;
        margin-bottom: -16px;
        border-radius: 0 0 16px 16px;
    }
    .button-bottom-section {
        padding: 7px 2px;
        margin-top: -16px;
        border-radius: 16px 16px 0 0;
    }
`;

interface ButtonsPanelProps {
    balance: number;
    type: 'bet' | 'call';
}

const ButtonsPanel = ({ balance, type }: ButtonsPanelProps) => {
    const min = 0.5;
    const [rangeValue, setRangeValue] = useState<number[]>([min]);

    const buttonPercentHandler = (percents) => {
        setRangeValue([(balance / 100) * percents]);
    };

    return (
        <BaseButtonsPanel>
            <div className="button-section button-top-section">
                <Button
                    title={type === 'bet' ? '33%' : 'MIN'}
                    size="small"
                    border="left"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    onClick={() => buttonPercentHandler(33)}
                />
                <Button
                    title={type === 'bet' ? '50%' : '3X'}
                    size="small"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    onClick={() => buttonPercentHandler(50)}
                />
                <Button
                    title={type === 'bet' ? '66%' : '5X'}
                    size="small"
                    alignItems="flex-end"
                    justifyContent="flex-start"
                    onClick={() => buttonPercentHandler(66)}
                />
                <Button
                    title={type === 'bet' ? '66%' : 'POT'}
                    size="small"
                    border="right"
                    alignItems="flex-end"
                    justifyContent="flex-start"
                    onClick={() => buttonPercentHandler(100)}
                />
            </div>
            <div className="wrapper-slider-buttons">
                <Button
                    title={rangeValue}
                    size="large"
                    border="left"
                    alignItems="center"
                    justifyContent="flex-end"
                    backgroundColor="background"
                    bold
                />
                <div className="slider-wrapper">
                    <Range
                        step={1}
                        min={min}
                        max={balance}
                        values={rangeValue}
                        onChange={(values) => setRangeValue(values)}
                        renderTrack={({ props, children }) => (
                            <div
                                className="range-track"
                                {...props}
                                style={{
                                    ...props.style,
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                }}
                                className="range-thumb"
                            >
                                <span className="line-thumb-small" />
                                <span className="line-thumb-big" />
                                <span className="line-thumb-small" />
                            </div>
                        )}
                    />
                </div>
                <Button
                    title={type === 'bet' ? 'bet' : 'raise'}
                    size="large"
                    border="right"
                    alignItems="center"
                    justifyContent="flex-start"
                    backgroundColor="secondary"
                    onClick={() => console.log('bet')}
                />
            </div>
            <div className="button-section button-bottom-section">
                <Button
                    size="medium"
                    border="left"
                    title="fold"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    onClick={() => console.log('fold')}
                />
                <Button
                    size="medium"
                    border="right"
                    title={type === 'bet' ? 'check' : 'call'}
                    alignItems="flex-end"
                    justifyContent="flex-start"
                    optionalText={type === 'bet' ? undefined : '.50'}
                    onClick={() => console.log('call')}
                />
            </div>
        </BaseButtonsPanel>
    );
};

export default ButtonsPanel;
