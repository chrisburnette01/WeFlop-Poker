import React from 'react';
import styled from 'styled-components';

interface PetreonIconProps {
    className?: string;
}

const PatreonIcon = ({ className }: PetreonIconProps) => {
    return (
        <a href="#" className={className}>
            <span className="patreon-icon-line" />
            <span className="patreon-icon-round" />
        </a>
    );
};

export default styled(PatreonIcon)<PetreonIconProps>`
    display: flex;
    margin-top: 16px;
    .patreon-icon-line {
        display: block;
        height: 51px;
        width: 10px;
        border-radius: 4px;
        background-color: #fff;
    }

    .patreon-icon-round {
        margin-left: 5px;
        display: block;
        height: 38px;
        width: 38px;
        border-radius: 50%;
        background-color: #fff;
    }
`;
