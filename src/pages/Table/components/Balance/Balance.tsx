import React from 'react';
import styled from 'styled-components';

import { Typography } from '../../../../components';

interface BaseBalanceProps {
    size: 'small' | 'big';
}

const BaseBalance = styled.div<BaseBalanceProps>`
    height: ${({ size }) => (size === 'big' ? '30px' : '24px')};
    min-width: ${({ size }) => (size === 'big' ? '90px' : '66px')};
    width: 100%;
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
}

const Balance = ({ size, value }) => {
    return (
        <div>
            <BaseBalance size={size}>
                <div className="icon-outer">
                    <div className="icon-inner" />
                </div>
                <Typography
                    component="span"
                    variant={size === 'big' ? 'balanceBig' : 'balanceSmall'}
                    className="typography-balance"
                >
                    {value.toFixed(2)}
                </Typography>
            </BaseBalance>
        </div>
    );
};

export default Balance;
