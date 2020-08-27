import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Player, Balance } from './components';
import { Container } from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetPassword, RESET_PASSWORD } from '../../store/actions/application';

import { Chat, Ledger, Leave, Settings } from './modals';
import { Menu, ButtonsPanel, GameSection, ActionMenu, DealerToken } from './layout';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';

interface TableProps {
    className?: string;
}

const PLAYERS_ALIGNMENT = [
    { bottom: 5, left: 45 },
    { bottom: 20, left: 20 },
    { top: 40, left: 5 },
    { top: 20, left: 20 },
    { top: 5, left: 35 },
    { top: 5, right: 35 },
    { top: 20, right: 20 },
    { top: 40, right: 5 },
    { bottom: 20, right: 20 },
];

// const PLAYERS_ALIGNMENT = [
//     {top: 85, left: 45},
//     {top: 75, left: 20},
//     {top: 45, left: 5},
//     {top: 20, left: 20},
//     {top: 5, left: 35},
//     {top: 5, left: 55},
//     {top: 20, left: 75},
//     {top: 45, left: 85},
//     {top: 75, left: 75},
// ]

const Table = ({ className }: TableProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);
    const [isLoading, setIsLoading] = useState(true);

    const [pot, setPot] = useState<number | undefined>(300);

    const betButtonHandler = () => {
        // setPot(undefined);
        // setLastAction(false);
        setActionState({ type: 'finished-round', params: { value: 1 } });
    };

    const [lastActionState, setActionState] = useState<{
        type: 'bet' | 'call' | 'raise' | 'sit-in' | 'sit-out' | 'active' | 'finished-round';
        params: { value: number };
    }>({
        type: 'call',
        params: { value: 10 },
    });

    const [centerRef, centerCoordinates] = useMeasure();
    const [balanceRef, balanceCoordinates] = useMeasure();

    const [playerOneRef, playerOneCoordinates] = useMeasure();
    const [playerTwoRef, playerTwoCoordinates] = useMeasure();
    const [playerThreeRef, playerThreeCoordinates] = useMeasure();
    const [playerFourRef, playerFourCoordinates] = useMeasure();
    const [playerFiveRef, playerFiveCoordinates] = useMeasure();
    const [playerSixRef, playerSixCoordinates] = useMeasure();
    const [playerSevenRef, playerSevenCoordinates] = useMeasure();
    const [playerEightRef, playerEightCoordinates] = useMeasure();
    const [playerNineRef, playerNineCoordinates] = useMeasure();

    const balance = {
        main: 21,
        sides: [11.29, 25.45, 25.68],
    };

    const [navState, setNavState] = useState<string | undefined>();

    const activeModal =
        navState === 'chat' ? (
            <Chat name="glenn" />
        ) : navState === 'ledger' ? (
            <Ledger name="Alex’s Corner" />
        ) : navState === 'leave' ? (
            <Leave onCancel={() => setNavState(undefined)} onLeave={() => console.log('leave')} />
        ) : navState === 'settings' ? (
            <Settings />
        ) : null;

    const setNavStateHandler = (modal) => {
        setNavState(modal);
    };

    useEffect(() => {
        setTimeout(() => {
            setActionState({ type: 'call', params: { value: 1 } });
        }, 6000);
        setTimeout(() => {
            setActionState({ type: 'finished-round', params: { value: 1 } });
        }, 10000);
    }, []);

    useEffect(() => {
        if (playerOneCoordinates.x !== 0) {
            setIsLoading(false);
        }
    }, [playerOneCoordinates]);
    return (
        <>
            <Helmet>
                <title>Table #{id}</title>
            </Helmet>
            <div className={className}>
                <div>{activeModal}</div>
                <Menu navState={navState} setNavState={setNavStateHandler} type="blind" />
                {!isLoading ? <DealerToken playerCoordinates={PLAYERS_ALIGNMENT} activeSlot={1} /> : <div />}
                <GameSection
                    totalPot={100}
                    pot={32222.14}
                    balance={balance}
                    centerRef={centerRef}
                    balanceRef={balanceRef}
                />

                <Player
                    username="glenn"
                    balance={99}
                    className="flex-end"
                    type="player"
                    slot={1}
                    timeLeft={30}
                    dealer
                    pot={300}
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[0]}
                    ref={playerFourRef}
                    currentAction="sitted-out"
                />
                <Player
                    username="glenn"
                    balance={99}
                    className="flex-start"
                    type="player"
                    slot={2}
                    timeLeft={30}
                    currentAction="active"
                    pot={300}
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[1]}
                    ref={playerFiveRef}
                />
                <Player
                    username="glenn"
                    pot={300}
                    balance={99}
                    className="flex-start"
                    type="player"
                    slot={3}
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[2]}
                    timeLeft={30}
                    ref={playerSixRef}
                />
                <Player
                    username="glenn"
                    pot={300}
                    balance={99}
                    className="flex-end"
                    type="player"
                    slot={4}
                    timeLeft={30}
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[3]}
                    ref={playerSevenRef}
                />
                <Player
                    username="glenn"
                    balance={99}
                    slot={5}
                    timeLeft={30}
                    pot={300}
                    type="player"
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[4]}
                    ref={playerThreeRef}
                />

                <Player
                    username="glenn"
                    balance={99}
                    slot={6}
                    timeLeft={30}
                    pot={300}
                    type="player"
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[5]}
                    ref={playerEightRef}
                />
                <Player
                    username="glenn"
                    balance={99}
                    className="flex-start"
                    slot={7}
                    timeLeft={30}
                    type="player"
                    pot={300}
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[6]}
                    ref={playerTwoRef}
                />
                <Player
                    username="glenn"
                    balance={99}
                    className="flex-end"
                    type="player"
                    slot={8}
                    timeLeft={30}
                    pot={pot}
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[7]}
                    ref={playerOneRef}
                />
                <Player
                    username="glenn"
                    balance={99}
                    className="flex-start"
                    slot={9}
                    timeLeft={30}
                    pot={300}
                    type="player"
                    balanceRef={balanceCoordinates}
                    alignment={PLAYERS_ALIGNMENT[8]}
                    lastAction={lastActionState}
                    ref={playerNineRef}
                />
            </div>
        </>
    );
};

export default styled(Table)``;
