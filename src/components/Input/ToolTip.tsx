import React from 'react';
import ToolTipIcon from '../../assets/images/minus-outline.svg';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

interface BaseToolTipProps {}

interface ToolTipProps {
    message: string;
    name: string | undefined;
    show: boolean | undefined;
}

const BaseToolTip = styled('div')<BaseToolTipProps>`
    .tooltip-text {
        font-size: ${({ theme }) => theme.typography.tooltip!.fontSize};
        font-weight: ${({ theme }) => theme.typography.tooltip!.fontWeight};
        letter-spacing: ${({ theme }) => theme.typography.tooltip!.letterSpacing};
        text-transform: ${({ theme }) => theme.typography.tooltip!.textTransform};
        color: ${({ theme }) => theme.palette.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }
`;

const ToolTip = ({ message, name, show }: ToolTipProps) => {
    return (
        <BaseToolTip className='base_tooltip'>
            <CSSTransition timeout={1000} in={show} classNames="tooltip" unmountOnExit>
                <>
                    <img
                        src={ToolTipIcon}
                        className="tooltip-img"
                        alt="tooltip-icon"
                        data-tip
                        data-for={`tooltip-${name}`}
                    />
                    <ReactTooltip
                        id={`tooltip-${name}`}
                        effect="solid"
                        place="right"
                        border={false}
                        backgroundColor="transparent"
                    >
                        <span className="tooltip-text">{message}</span>
                    </ReactTooltip>
                </>
            </CSSTransition>
        </BaseToolTip>
    );
};

export default ToolTip;
