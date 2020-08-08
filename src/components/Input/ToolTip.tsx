import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

interface BaseToolTipProps {
    align?: 'left';
}

interface ToolTipProps {
    message: string;
    name: string | undefined;
    show: boolean | undefined;
    align?: 'left';
}

const BaseToolTip = styled('div')<BaseToolTipProps>`
    .tooltip {
        width: ${({ align }) => (align !== 'left' ? '400px' : 'unset')};
    }
    .tooltip-img {
        right: ${({ align }) => (align !== 'left' ? '-63px' : null)};
        left: ${({ align }) => (align === 'left' ? '-32px' : null)};
    }
    .tooltip-text {
        font-size: ${({ theme }) => theme.typography.tooltip!.fontSize};
        font-weight: ${({ theme }) => theme.typography.tooltip!.fontWeight};
        letter-spacing: ${({ theme }) => theme.typography.tooltip!.letterSpacing};
        text-transform: ${({ theme }) => theme.typography.tooltip!.textTransform};
        color: ${({ theme, align }) => (align !== 'left' ? theme.palette.primary : theme.palette.secondary)};
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }
    #img-1 {
        fill: ${({ theme, align }) => (align !== 'left' ? theme.palette.primary : theme.palette.secondary)};
    }
`;

const ToolTip = ({ message, name, show, align }: ToolTipProps) => {
    return (
        <BaseToolTip className="base_tooltip" align={align}>
            <CSSTransition timeout={1000} in={show} classNames="tooltip" unmountOnExit>
                <>
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        className="tooltip-img"
                        data-tip
                        data-for={`tooltip-${name}`}
                    >
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="img-1" transform="translate(-512.000000, -368.000000)" fillRule="nonzero">
                                <g id="minus-outline" transform="translate(512.000000, 368.000000)">
                                    <path
                                        d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,21.6 C17.3019336,21.6 21.6,17.3019336 21.6,12 C21.6,6.6980664 17.3019336,2.4 12,2.4 C6.6980664,2.4 2.4,6.6980664 2.4,12 C2.4,17.3019336 6.6980664,21.6 12,21.6 Z M18,10.8 L18,13.2 L6,13.2 L6,10.8 L18,10.8 Z"
                                        id="Shape"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <ReactTooltip
                        id={`tooltip-${name}`}
                        effect="solid"
                        place={align === 'left' ? 'left' : 'right'}
                        border={false}
                        multiline={true}
                        className="tooltip"
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
