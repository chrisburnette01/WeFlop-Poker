import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../components';

interface NavButtonProps {
    align: 'left' | 'right';
    title: string;
    className?: string;
    onClick?: () => void;
    active?: boolean | undefined;
    noMargin?: boolean;
}

interface NavButtonBaseProps {
    align: 'left' | 'right';
    onClick?: () => void;
    noMargin?: boolean;
    checkBox?: boolean;
}

const NavButtonBase = styled.div<NavButtonBaseProps>`
    cursor: pointer;
    margin: ${({ align, noMargin }) => (noMargin ? 0 : align === 'left' ? '-6px 0 -6px 44px' : '-6px 44px -6px 0')};
    display: flex;
    align-items: center;
    & > * + * {
        margin-left: ${({ noMargin }) => (noMargin ? '6px' : '10px')};
    }
    &:hover .rect-nav {
        background-color: ${({ theme }) => theme.palette.yellow};
    }
`;

interface RectangleProps {
    active?: boolean | undefined;
    className?: string;
}

const Rectangle = styled.div<RectangleProps>`
    width: 16px;
    height: 24px;
    background-color: ${({ theme, active }) => (active ? theme.palette.yellow : theme.palette.initial)};
    border-radius: 2px;
    transition: background-color 0.4s ease-in-out;
`;

const NavButton = ({ align, title, className, onClick, active, noMargin }: NavButtonProps) => {
    return (
        <NavButtonBase className={className} align={align} onClick={onClick} noMargin={noMargin}>
            {align === 'left' && <Rectangle className="rect-nav" active={active} />}
            <Typography
                variant="h4"
                color={active ? 'yellow' : 'initial'}
                component="span"
                fontWeight={700}
                textTransform="uppercase"
            >
                {title}
            </Typography>
            {align === 'right' && <Rectangle className="rect-nav" active={active} />}
        </NavButtonBase>
    );
};

export default NavButton;
