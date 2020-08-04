import React, { useState } from 'react';
import styled from 'styled-components';

import { Description } from '../';

import { Typography } from '../../components';

interface PollItemProps {
    active?: boolean;
}

const PollItem = styled.div<PollItemProps>`
    margin-left: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & + & {
        margin-top: 2px;
    }

    .poll-vote-icon {
        height: 16px;
        width: 16px;
        display: block;
        background-color: ${({ active, theme }) => (active ? theme.palette.secondary : theme.palette.primary)};
        border-radius: 8px;
    }
    .poll-vote-text {
        margin-left: 9px;
    }
`;

const Poll = ({ content, optional }) => {
    const [active, setActive] = useState<number | undefined>(content.selected ? content.selected : undefined);

    const optionalText =
        optional !== undefined ? (
            <div style={{ marginTop: '4px' }}>
                <Description content={optional} />
            </div>
        ) : null;

    const onClickHandler = (id) => {
        setActive(id);
    };

    const totalVotes = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.votes;
        return content.options.reduce(reducer, 0);
    };

    return (
        <div>
            {content.options.map((element, index) => {
                const star = index === active ? '*' : null;
                const votes = active !== null ? ` (${Math.round((element.votes / totalVotes()) * 100)}%)` : null;
                return (
                    <PollItem
                        key={`${element.title}${index}`}
                        active={index === active ? true : false}
                        onClick={() => onClickHandler(index)}
                    >
                        <span className="poll-vote-icon" />
                        <div className="poll-vote-text">
                            <Typography
                                component="a"
                                variant="input"
                                color={index === active ? 'secondary' : 'primary'}
                            >
                                {star}
                                {element.title}
                                {votes}
                                {star}
                            </Typography>
                        </div>
                    </PollItem>
                );
            })}
            {optionalText}
        </div>
    );
};

export default Poll;
