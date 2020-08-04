import React from 'react';
import styled from 'styled-components';

interface ButtonPlayBase {
    title?: string;
    active?: boolean;
    align: 'left' | 'right';
    onClick?: any;
}

const ButtonPlayBase = styled.div<ButtonPlayBase>`
    display: flex;
    cursor: pointer;
    .line {
        display: block;
        width: 16px;
        height: ${({ active }) => (active ? '48px' : '16px')};
        border-radius: 4px;
        background-color: ${({ theme, active }) => (active ? theme.palette.yellow : theme.palette.initial)};
        margin-bottom: 3px;
        margin: ${({ align }) => (align === 'left' ? '10px 8px 0 0' : '10px 0 0 8px')};
        transition: height 0.2s ease-in;
    }
    .title {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-weight: ${({ theme }) => theme.typography.buttonPlay!.fontWeight};
        font-size: ${({ theme }) => theme.typography.buttonPlay!.fontSize};
        text-transform: ${({ theme }) => theme.typography.buttonPlay!.textTransform};
        letter-spacing: ${({ theme }) => theme.typography.buttonPlay!.letterSpacing};
        color: ${({ theme, active }) => (active ? theme.palette.yellow : theme.palette.initial)};
    }
`;

interface ButtonPlayProps {
    title?: string;
    active?: boolean;
    align: 'left' | 'right';
    onClick?: any;
}

const ButtonPlay = ({ title, active, align, onClick }: ButtonPlayProps) => {
    return (
        <ButtonPlayBase active={active} align={align} onClick={onClick}>
            {align === 'left' ? <span className="line" /> : null}
            <span className="title">{title}</span>
            {align === 'right' ? <span className="line" /> : null}
        </ButtonPlayBase>
    );
};

export default ButtonPlay;
