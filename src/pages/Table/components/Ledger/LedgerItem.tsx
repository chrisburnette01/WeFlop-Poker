import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../components';

interface LedgerItemBaseProps {
    balance: number;
}

const LedgerItemBase = styled.div<LedgerItemBaseProps>`
    display: flex;
    align-items: center;
    & + & {
        margin-top: 12px;
    }
    .player-name-ledger {
        width: 200px;
        display: block;
        text-align: right;
    }
    .round {
        margin: 0 24px 0 24px;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        background-color: ${({ balance, theme }) => (balance < 0 ? theme.palette.error : theme.palette.success)};
    }
`;

interface LedgerItemProps {
    name: string;
    id: number;
    balance: number;
}

const LedgerItem = ({ name, id, balance }: LedgerItemProps) => {
    return (
        <LedgerItemBase balance={balance}>
            <Typography
                variant="h3"
                component="span"
                textTransform="none"
                className="player-name-ledger"
                fontWeight={600}
            >
                {name}
            </Typography>
            <div className="round">
                <Typography variant="h3" component="span" textTransform="none" fontWeight={800}>
                    {id}
                </Typography>
            </div>
            <Typography variant="h3" component="span" textTransform="none" fontWeight={600}>
                {balance}
            </Typography>
        </LedgerItemBase>
    );
};

export default LedgerItem;
