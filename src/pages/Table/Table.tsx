import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Player, Balance } from './components';
import { Container } from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetPassword, RESET_PASSWORD } from '../../store/actions/application';

import { Chat, Ledger, Leave, Settings } from './modals';
import { Menu, ButtonsPanel, GameSection, ActionMenu } from './layout';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';

interface TableProps {
    className?: string;
}

const Table = ({ className }: TableProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);

    const [pot, setPot] = useState<number | undefined>(300);
    const [lastAction, setLastAction] = useState<boolean>(true);

    const betButtonHandler = () => {
        setPot(undefined);
        setLastAction(false);
    };

    // const [centerCoordinates, setCenterCoordinates] = useState(0);

    const [centerRef, centerCoordinates] = useMeasure();

    const [balanceRef, balanceCoordinates] = useMeasure();

    // console.log(centerCoordinates.top);

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

    // useEffect(() => {
    //     setCenterCoordinates(centerRef!.current.getBoundingClientRect().top);
    // }, [centerRef]);

    return (
        <>
            <Helmet>
                <title>Table #{id}</title>
            </Helmet>
            <Container className={className} type="table">
                <div>{activeModal}</div>
                <Menu navState={navState} setNavState={setNavStateHandler} type="blind" />
                <div className="table-main">
                    <div className="row row-top">
                        <Player
                            username="glenn"
                            balance={99}
                            className="flex-end"
                            type="player"
                            slot={4}
                            timeLeft={30}
                            dealer
                            pot={300}
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
                        <Player
                            username="glenn"
                            balance={99}
                            className="flex-start"
                            type="player"
                            slot={5}
                            timeLeft={30}
                            activeSlot
                            pot={300}
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
                        <Player
                            username="glenn"
                            pot={300}
                            balance={99}
                            className="flex-start"
                            type="player"
                            slot={6}
                            centerRef={centerCoordinates}
                            timeLeft={30}
                            balanceRef={balanceCoordinates}
                        />
                        <Player
                            username="glenn"
                            pot={300}
                            balance={99}
                            className="flex-end"
                            type="player"
                            slot={7}
                            timeLeft={30}
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
                    </div>
                    <div className="row row-center">
                        <Player
                            username="glenn"
                            balance={99}
                            slot={3}
                            timeLeft={30}
                            pot={300}
                            type="player"
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
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
                            slot={8}
                            timeLeft={30}
                            pot={300}
                            type="player"
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
                    </div>
                    <div className="row row-bottom">
                        <Player
                            username="glenn"
                            balance={99}
                            className="flex-start"
                            slot={2}
                            timeLeft={30}
                            type="player"
                            pot={300}
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
                        <Player
                            username="glenn"
                            balance={99}
                            className="flex-end"
                            type="player"
                            slot={1}
                            timeLeft={30}
                            pot={pot}
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                            lastAction="call 10"
                            isAction={lastAction}
                        />
                        <Player
                            username="glenn"
                            balance={99}
                            className="flex-start"
                            slot={9}
                            timeLeft={30}
                            pot={300}
                            type="player"
                            centerRef={centerCoordinates}
                            balanceRef={balanceCoordinates}
                        />
                    </div>
                    <div className="panel">
                        <ButtonsPanel balance={1000} type="bet" betButtonHandler={() => betButtonHandler()} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default styled(Table)`
    .table-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .row-top {
        max-width: 1060px;
        max-height: 150px;
        margin-bottom: 40px;
    }
    .row-center {
        max-height: 300px;
    }
    .row-bottom {
        margin-top: 70px;
        max-width: 960px;
        max-height: 150px;
    }
    .panel {
        display: flex;
        flex: 1;
        margin-top: 12px;
        align-items: flex-end;
        margin-top: 80px;
    }
    .flex-end {
        align-self: flex-end;
    }
    .flex-start {
        align-self: flex-start;
    }
    .center {
        align-self: center;
    }
`;
