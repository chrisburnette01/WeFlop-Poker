import React from 'react';
import styled from 'styled-components';

import { Typography } from '../../../../components';

interface CheckboxBaseProps {
    onClick: () => void;
}

const CheckboxBase = styled.div<CheckboxBaseProps>`
    cursor: pointer;
    display: flex;
    align-items: center;
    & + & {
        margin-top: 6px;
    }
    .name-checkbox {
        width: 260px;
        text-align: right;
    }
    .checkbox-activity {
        width: 41px;
        text-align: left;
    }
`;

interface RectangleProps {
    active: boolean | undefined;
}

const Rectangle = styled.div<RectangleProps>`
    margin: 0 10px;
    width: 16px;
    height: 24px;
    background-color: ${({ theme, active }) => (active ? theme.palette.yellow : theme.palette.initial)};
    border-radius: 2px;
    transition: background-color 0.4s ease-in-out;
`;

interface CheckboxProps {
    active: boolean | undefined;
    title: string;
    onClick: () => void;
}

const Checkbox = ({ active, title, onClick }: CheckboxProps) => {
    return (
        <CheckboxBase onClick={onClick}>
            <Typography
                variant="h4"
                color={active ? 'yellow' : 'initial'}
                component="span"
                fontWeight={700}
                textTransform="uppercase"
                className="name-checkbox"
            >
                {title}
            </Typography>
            <Rectangle className="rect-nav" active={active} />
            <Typography
                variant="h4"
                color={active ? 'yellow' : 'initial'}
                component="span"
                fontWeight={700}
                textTransform="uppercase"
                className="checkbox-activity"
            >
                {active ? 'on' : 'off'}
            </Typography>
        </CheckboxBase>
    );
};

export default Checkbox;
