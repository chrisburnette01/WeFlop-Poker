import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../components';
import LedgerItem from './LedgerItem';

import { Container } from '../../../../layout';

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
            balance: -100000,
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
            balance: -100000,
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
            balance: -100000,
        },
    ];
    return (
        <Container type="modal">
            <div className={className}>
                <Typography variant="h1" component="span" className="ledger-title" color="yellow">
                    {name}
                </Typography>
                <div className="ledger-list-wrapper">
                    {data.map((el) => (
                        <LedgerItem name={el.name} id={el.id} balance={el.balance} key={el.id} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default styled(Ledger)`
    display: flex;
    flex-direction: column;
    align-items: center;
    .ledger-list-wrapper {
        padding: 4rem 7.5rem 4rem 0;
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .ledger-title {
        margin-top: 8rem;
    }
`;
