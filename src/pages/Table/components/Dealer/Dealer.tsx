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

const DealerBase = styled(animated.div)<TokenBaseProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 1.8rem;
    transform: translateY(50%);
    border: ${({ theme }) => `solid 0.2rem ${theme.palette.secondary}`};
    & > span {
        margin-left: 0.2rem;
    }
`;

const Dealer = ({ playerCoordinates, activeSlot, className }) => {

    return (
        <DealerBase className={className}>
            <Typography textTransform="uppercase" component="span" color="yellow" fontWeight={700} variant="body1">
                d
            </Typography>
        </DealerBase>
    );
};

export default memo(Dealer);
