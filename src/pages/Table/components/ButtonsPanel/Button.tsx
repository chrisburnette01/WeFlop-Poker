import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../components';

interface BaseButtonProps {
    backgroundColor: 'background' | 'primary' | 'secondary' | 'initial' | string;
    border?: 'left' | 'right';
    size: 'small' | 'medium' | 'large';
    justifyContent: 'center' | 'flex-end' | 'flex-start';
    alignItems: 'center' | 'flex-end' | 'flex-start';
    onClick?: () => void;
}

const BaseButton = styled.div<BaseButtonProps>`
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
    width: ${({ size }) => (size === 'small' ? '49px' : size === 'medium' ? '106px' : '114px')};
    height: ${({ size }) => (size === 'small' ? '26px' : size === 'medium' ? '44px' : '55px')};
    display: flex;
    border-radius: ${({ border, size }) => {
        switch (size) {
            case 'small':
                return border !== undefined ? (border === 'left' ? '13px 4px 4px 13px' : '4px 13px 13px 4px') : '4px';
            case 'medium':
                return border !== undefined ? (border === 'left' ? '25px 6px 6px 25px' : '6px 25px 25px 6px') : '6px';
            case 'large':
                return border !== undefined
                    ? border === 'left'
                        ? '28px 10px 10px 28px'
                        : '10px 28px 28px 10px'
                    : '10px';
        }
    }};
    padding: ${({ size }) => (size === 'small' ? '2px' : size === 'medium' ? '3px' : '4px')};
    background: ${({ theme }) => theme.palette.secondary};

    .border-wrapper {
        display: flex;
        flex: 1;
        background: ${({ theme, backgroundColor }) =>
            theme.palette[backgroundColor] ? theme.palette[backgroundColor] : theme.palette.common[backgroundColor]};
        border-radius: ${({ border, size }) => {
            switch (size) {
                case 'small':
                    return border !== undefined
                        ? border === 'left'
                            ? '13px 4px 4px 13px'
                            : '4px 13px 13px 4px'
                        : '4px';
                case 'medium':
                    return border !== undefined
                        ? border === 'left'
                            ? '25px 6px 6px 25px'
                            : '6px 25px 25px 6px'
                        : '6px';
                case 'large':
                    return border !== undefined
                        ? border === 'left'
                            ? '28px 10px 10px 28px'
                            : '10px 28px 28px 10px'
                        : '10px';
            }
        }};
        border: 1px solid ${({ theme }) => theme.palette.background};
        padding: ${({ size }) => (size === 'small' ? '0 2px 0 2px' : size === 'medium' ? '3px' : '4px')};
        justify-content: ${({ justifyContent }) => justifyContent};
        align-items: ${({ alignItems }) => alignItems};
    }
`;

interface ButtonProps {
    title: string | number[];
    backgroundColor?: 'background' | 'primary' | 'secondary' | 'initial' | string;
    border?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    justifyContent?: 'center' | 'flex-end' | 'flex-start';
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    bold?: boolean | undefined;
    onClick?: () => void;
}

const Button = ({ size, border, justifyContent, alignItems, title, backgroundColor, bold, onClick }: ButtonProps) => {
    const variant = () => {
        switch (size) {
            case 'large':
                return bold ? 'h3' : 'h3';
            case 'medium':
                return 'h4';
            case 'small':
                return 'h6';
        }
    };

    return (
        <BaseButton
            size={size!}
            border={border}
            backgroundColor={backgroundColor!}
            justifyContent={justifyContent!}
            alignItems={alignItems!}
            onClick={onClick}
        >
            <div className="border-wrapper">
                <Typography variant={variant()} component="span" textTransform="uppercase">
                    {title}
                </Typography>
            </div>
        </BaseButton>
    );
};

Button.defaultProps = {
    backgroundColor: 'secondary',
    justifyContent: 'center',
    alignItems: 'center',
    size: 'small',
};

export default Button;
