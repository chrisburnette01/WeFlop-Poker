import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { Typography } from '../../../../components';

interface BaseBalanceProps {
    size: 'small' | 'big';
    style?: any;
}

const BaseBalance = styled(animated.div)<BaseBalanceProps>`
    height: ${({ size }) => (size === 'big' ? '30px' : '24px')};
    min-width: ${({ size }) => (size === 'big' ? '90px' : '66px')};
    border-radius: ${({ size }) => (size === 'big' ? '10px' : '9px')};
    border: solid 1px rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    padding: 5px;
    .icon-outer {
        width: ${({ size }) => (size === 'big' ? '18px' : '12px')};
        height: ${({ size }) => (size === 'big' ? '18px' : '12px')};
        border-radius: 12px;
        border: ${({ theme, size }) => `solid ${size === 'big' ? '3px' : '2px'} ${theme.palette.yellow}`};
        padding: ${({ size }) => (size === 'big' ? '3px' : '2px')};
    }
    .icon-inner {
        width: ${({ size }) => (size === 'big' ? '6px' : '4px')};
        height: ${({ size }) => (size === 'big' ? '6px' : '4px')};
        border-radius: 9px;
        background: ${({ theme }) => theme.palette.yellow};
    }
    .typography-balance {
        margin: ${({ size }) => (size === 'big' ? '0 0 0 8px' : '0 0 1px 5px')};
    }
`;

interface BalanceProps {
    size: 'small' | 'big';
    value: number;
    style?: any;
    className?: string;
}

const Balance = React.forwardRef(({ size, value, className, style }: BalanceProps, ref: any) => {
    return (
        <BaseBalance size={size} className={className} ref={ref} style={style}>
            <div className="icon-outer">
                <div className="icon-inner" />
            </div>
            <Typography component="span" variant={size === 'big' ? 'body1' : 'h6'} className="typography-balance">
                {value.toFixed(2)}
            </Typography>
        </BaseBalance>
    );
});

export default Balance;
