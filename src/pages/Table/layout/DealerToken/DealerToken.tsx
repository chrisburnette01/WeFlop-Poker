// @ts-nocheck
import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import useMeasure from 'react-use-measure';
import { animated, useSpring } from 'react-spring';

import { Typography } from '../../../../components';

interface TokenBaseProps {
    style: any;
    ref: any;
}

const TokenBase = styled(animated.div)<TokenBaseProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 18px;
    transform: translateY(50%);
    z-index: 1000;
    border: ${({ theme }) => `solid 2px ${theme.palette.secondary}`};
    & > span {
        margin-left: 2px;
    }
`;

const DealerToken = ({ playerCoordinates, activeSlot }) => {
    const [dealerRef, dealerCoord] = useMeasure();

    const coordHandler = (type) => {
        const num = type === 'from' ? 1 : 0;
        switch (activeSlot) {
            case 1:
            case 2:
                return {
                    bottom: `calc(${playerCoordinates[activeSlot - num].bottom}% + 6rem)`,
                    left: `calc(${playerCoordinates[activeSlot - num].left}% + 16rem)`,
                };
            case 3:
            case 4:
            case 5:
                return {
                    top: `${playerCoordinates[activeSlot - num].top}%`,
                    left: `calc(${playerCoordinates[activeSlot - num].left}% + 16rem)`,
                };
            case 6:
            case 7:
            case 8:
                return {
                    top: `${playerCoordinates[activeSlot - num].top}%`,
                    right: `calc(${playerCoordinates[activeSlot - num].right}% + 16rem)`,
                };
            case 9:
                return {
                    bottom: `calc(${playerCoordinates[activeSlot - num].bottom}% + 6rem)`,
                    right: `calc(${playerCoordinates[activeSlot - num].right}% + 16rem)`,
                };
        }
    };

    const [props, set, stop] = useSpring(() => ({
        config: { duration: 150 },
        from: coordHandler('from'),
    }));

    return (
        <TokenBase
            ref={dealerRef}
            style={props}
            activeSlot={activeSlot}
            playerCoordinates={playerCoordinates}
            onClick={() => {
                set(coordHandler());
            }}
        >
            <Typography textTransform="uppercase" component="span" color="yellow" fontWeight={700} variant="body1">
                d
            </Typography>
        </TokenBase>
    );
};

export default memo(DealerToken);
