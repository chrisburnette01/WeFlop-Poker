import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../components';
import LedgerItem from './LedgerItem';

import { ModalBase } from '../';

interface LedgerProps {
    className?: string;
    name: string;
}

const Ledger = ({ className, name }: LedgerProps) => {
    const data = [
        {
            name: 'glenn',
            id: 1,
            balance: -14,
        },
        {
            name: 'glenn',
            id: 2,
            balance: 2,
        },
        {
            name: 'mike',
            id: 3,
            balance: 0,
        },
        {
            name: 'joshua',
            id: 4,
            balance: 100000,
        },
    ];
    return (
        <ModalBase>
            <div className={className}>
                <Typography variant="h1" component="span" className="ledger-title">
                    {name}
                </Typography>
                <div className="ledger-list-wrapper">
                    {data.map((el) => (
                        <LedgerItem name={el.name} id={el.id} balance={el.balance} key={el.id} />
                    ))}
                </div>
            </div>
        </ModalBase>
    );
};

export default styled(Ledger)`
    padding: 105px 60px 60px 60px;
    display: flex;
    .ledger-list-wrapper {
        align-self: center;
        margin-right: 75px;
    }
    .ledger-title {
        position: absolute;
        top: 65px;
        left: 50%;
        transform: translateX(-50%);
    }
`;
