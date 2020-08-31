import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Player, Balance } from './components';
import { Container } from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from '../../helpers';
import { RootState } from '../../store';
import { resetPassword, RESET_PASSWORD } from '../../store/actions/application';

import { Chat, Ledger, Leave, Settings } from './modals';
import { Menu, ButtonsPanel, GameSection, ActionMenu } from './layout';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';

interface TableProps {
    className?: string;
}

const PLAYERS_ALIGNMENT = [
    { bottom: 1, left: 45 },
    { bottom: 15, left: 20 },
    { top: 50, left: 5 },
    { top: 30, left: 20 },
    { top: 10, left: 35 },
    { top: 10, right: 35 },
    { top: 30, right: 20 },
    { top: 50, right: 5 },
    { bottom: 15, right: 20 }
];

/*
const PLAYERS_ALIGNMENT = [
    {top: 85, left: 45},
    {top: 75, left: 20},
    {top: 45, left: 5},
    {top: 20, left: 20},
    {top: 5, left: 35},
    {top: 5, left: 55},
    {top: 20, left: 75},
    {top: 45, left: 85},
    {top: 75, left: 75},
]
*/

const Table = ({ className }: TableProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);
    const [pot, setPot] = useState<number | undefined>(0);
    const size = useWindowSize();
    const isHeightHigher = size.height! > size.width!/(16/9);

    const betButtonHandler = () => {
        // setPot(undefined);
        // setLastAction(false);
        setActionState({ type: 'finished-round', params: { value: 1 } });
    };

    const [lastActionState, setActionState] = useState<{
        type: 'bet' | 'call' | 'raise' | 'sit-in' | 'sit-out' | 'active' | 'finished-round' | 'win' | 'lose';
        params?: any;
    }>({
        type: 'call',
        params: { value: 10 },
    });

    const [potAction, setPotAction] = useState<any>();

    const [centerRef, centerCoordinates] = useMeasure();
    const [balanceRef, balanceCoordinates] = useMeasure();

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
            setPot(100);
            // setActionState({ type: 'call', params: { value: 1 } });
        }, 6000);

        setTimeout(() => {
            setActionState({ type: 'finished-round', params: { value: 1 } });
            setPot(150);
        }, 10000);
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setActionState({ type: 'lose', params: { cards: 'show' } });
    //     }, 6000);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setPotAction({ type: 'pot', params: { slot: 1 } });
        }, 6000);
        setTimeout(() => {
            setPotAction({ type: 'win', params: { slot: 1 } });
        }, 9000);
    }, []);

    return (
        <>
            <Helmet>
                <title>Table #{id}</title>
            </Helmet>
            <div className={className} style={{ width: isHeightHigher ? size.width : size.height!*(16/9), height: isHeightHigher ? size.width!/(16/9) : size.height!, marginTop: isHeightHigher ? (size.height!-(size.width!/(16/9)))/2 : undefined, marginLeft: !isHeightHigher ? (size.width!-(size.height!*(16/9)))/2 : undefined }}>
                <div>{activeModal}</div>
                <Menu navState={navState} setNavState={setNavStateHandler} type="blind" />
                <div id="game">
                    <GameSection
                        totalPot={100}
                        pot={32222.14}
                        balance={balance}
                        centerRef={centerRef}
                        balanceRef={balanceRef}
                        action={potAction}
                    />
                    <Player
                        index={1}
                        username="glenn"
                        balance={99}
                        slot={1}
                        timeLeft={30}
                        dealer
                        pot={pot}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[0]}
                    />
                    <Player
                        index={2}
                        username="glenn"
                        balance={99}
                        slot={2}
                        timeLeft={30}
                        pot={300}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[1]}
                    />
                    <Player
                        index={3}
                        username="glenn"
                        pot={300}
                        balance={99}
                        slot={3}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[2]}
                        timeLeft={30}
                    />
                    <Player
                        index={4}
                        username="glenn"
                        pot={300}
                        balance={99}
                        slot={4}
                        timeLeft={30}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[3]}
                    />
                    <Player
                        index={5}
                        username="glenn"
                        balance={99}
                        slot={5}
                        timeLeft={30}
                        pot={300}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[4]}
                    />
                    <Player
                        index={6}
                        username="glenn"
                        balance={99}
                        slot={6}
                        timeLeft={30}
                        pot={300}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[5]}
                    />
                    <Player
                        index={7}
                        username="glenn"
                        balance={99}
                        slot={7}
                        timeLeft={30}
                        pot={300}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[6]}
                    />
                    <Player
                        onAccept={() => console.log('test')}
                        index={8}
                        username="glenn"
                        balance={99}
                        timeLeft={30}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[7]}
                    />
                    <Player
                        index={9}
                        username="glenn"
                        balance={99}
                        slot={9}
                        timeLeft={30}
                        pot={300}
                        balanceRef={balanceCoordinates}
                        alignment={PLAYERS_ALIGNMENT[8]}
                        lastAction={lastActionState}
                    />
                </div>
                <div id="action-menu">
                    <ButtonsPanel type="bet" balance={1000} />
                </div>
            </div>
        </>
    );
};

export default styled(Table)`
    position: absolute;
    overflow: hidden;
    box-shadow: 1px 0 30px #00000082;

    #game {
        height: 85%;
        position: relative;
    }

    #action-menu {
        height: 15%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
`;
