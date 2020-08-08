import React, { useState } from 'react';

import { Range } from 'react-range';
import styled from 'styled-components';
import Button from './Button';

const BaseButtonsPanel = styled.div`
    .range-track {
        height: 7px;
        width: 100%;
        background: ${({ theme }) => theme.palette.background};
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
        padding: 8px 0;
        background-color: ${({ theme }) => theme.palette.secondary};
    }
`;

const ButtonsPanel = () => {
    const [rangeValue, setRangeValue] = useState<number[]>([0]);
    return (
        <BaseButtonsPanel>
            <Button title="test" size='small' border='right' justifyContent="flex-start" />
            <Button title="test" size='large' border='left' alignItems="flex-end" />
            <Button title="test" size='medium' border='right' backgroundColor="background" />
            <Button title="test" size='large' />
            <Button title="test" size='small' />
            <div className="slider-wrapper">
                <Range
                    step={0.1}
                    min={0}
                    max={100}
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
        </BaseButtonsPanel>
    );
};

export default ButtonsPanel;
