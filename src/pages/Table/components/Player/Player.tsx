import React from 'react';
import styled from 'styled-components';

const Line = styled('div')`
    border: 3px solid ${({ theme }) => theme.palette.secondary};
    border-radius: 3px;
    width: 62px;
`;

interface PlayerProps {
    
}

const Player = ({}: PlayerProps) => {
    return (
        <>
            <Line />
        </>
    );
};

export default Player;
