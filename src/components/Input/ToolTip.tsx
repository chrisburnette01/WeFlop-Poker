import React from 'react';
import ToolTipIcon from '../../assets/images/minus-outline.svg';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

interface ToolTipProps {
    message: string;
    name: string | undefined;
}

const BaseToolTip = styled('div')`
    .tooltip-img {
        width: 24px;
        height: 24px;
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        left: -63px;
    }
    .tooltip-text {
        font-size: ${({ theme }) => theme.typography.tooltip!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }
`;

const ToolTip = ({ message, name }: ToolTipProps) => {
    return (
        <BaseToolTip>
            <img src={ToolTipIcon} className="tooltip-img" alt="tooltip-icon" data-tip data-for={`tooltip-${name}`} />
            <ReactTooltip id={`tooltip-${name}`} type="error" effect="solid">
                <span className="tooltip-text">{message}</span>
            </ReactTooltip>
        </BaseToolTip>
    );
};

export default ToolTip;
