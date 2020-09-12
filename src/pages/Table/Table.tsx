import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from '../../helpers';
import { RootState } from '../../store';
import { Chat, Ledger, Leave, Settings } from './modals';
import { Menu, ButtonsPanel, GameSection, ActionMenu, Player } from './layout';
import { SocketContext } from '../../providers';
import { choosePanel, joinGame } from '../../store/actions/table';

import useMeasure from 'react-use-measure';
import styled from 'styled-components';

interface TableProps {
    className?: string;
}

const PLAYERS_ALIGNMENT = [
    { bottom: 7, left: 45 },
    { bottom: 15, left: 20 },
    { top: 50, left: 5 },
    { top: 30, left: 20 },
    { top: 10, left: 35 },
    { top: 10, right: 35 },
    { top: 30, right: 20 },
    { top: 50, right: 5 },
    { bottom: 15, right: 20 },
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
    const { socket } = useContext(SocketContext);
    const table = useSelector((state: RootState) => state.table);
    const [pot, setPot] = useState<number | undefined>(0);
    const size = useWindowSize();
    const [navState, setNavState] = useState<string | undefined>();
    const isHeightHigher = size.height! > size.width! / (16 / 9);

    const [potAction, setPotAction] = useState<any>();

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

    const activeModal =
        navState === 'chat' ? (
            <Chat />
        ) : navState === 'ledger' ? (
            <Ledger />
        ) : navState === 'leave' ? (
            <Leave onCancel={() => setNavState(undefined)} onLeave={() => console.log('leave')} />
        ) : navState === 'settings' ? (
            <Settings />
        ) : null;

    const setNavStateHandler = (modal) => {
        setNavState(modal);
    };

    /*    useEffect(() => {
        const player = table.players.find((player) => player.slot === table.slot);
        if(player.active && player.status === "won" && player.status ==="lost") {
            if (table.settings.showCards) {
                dispatch(SHOW);
            } else {
                dispatch(MUCK);
            }
            
        }
    }, [table])*/

    // useEffect(() => {
    //     setTimeout(() => {
    //         setPot(100);
    //         // setActionState({ type: 'call', params: { value: 1 } });
    //     }, 6000);

    //     setTimeout(() => {
    //         setActionState({ type: 'finished-round', params: { value: 1 } });
    //         setPot(150);
    //     }, 10000);
    // }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setActionState({ type: 'lose', params: { cards: 'show' } });
    //     }, 6000);
    // }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setPotAction({ type: 'pot', params: { slot: 1 } });
    //     }, 6000);
    //     setTimeout(() => {
    //         setPotAction({ type: 'win', params: { slot: 1 } });
    //     }, 9000);
    // }, []);

    const isActive = table.players.find((player) => player.slot === table.slot && player.active);
    const actionMenuType = table.players.find(
        (player) => player.slot === table.slot && (player.status === 'won' || player.status === 'lost'),
    );

    const addPlayer = (slot) => {
        dispatch(choosePanel({ slot, username: 'test' }));
    };

    const join = (slot, balance) => {
        dispatch(
            joinGame(
                {
                    slot,
                    balance: { main: parseFloat(balance) },
                    username: 'test',
                    cards: ['H1', 'H1'],
                    color: '#028561',
                },
                socket,
            ),
        );
    };

    return (
        <>
            <Helmet>
                <title>Table #{id}</title>
            </Helmet>
            <div
                className={className}
                style={{
                    width: isHeightHigher ? size.width : size.height! * (16 / 9),
                    height: isHeightHigher ? size.width! / (16 / 9) : size.height!,
                    marginTop: isHeightHigher ? (size.height! - size.width! / (16 / 9)) / 2 : undefined,
                    marginLeft: !isHeightHigher ? (size.width! - size.height! * (16 / 9)) / 2 : undefined,
                }}
            >
                <div>{activeModal}</div>
                <Menu navState={navState} setNavState={setNavStateHandler} type="blind" />
                <div id="game">
                    <GameSection
                        cards={table.cards}
                        sidePots={table.balance?.sidePots}
                        totalPot={table.balance?.totalPot}
                        currentPot={table.balance?.currentPot}
                        action={potAction}
                    />

                    {table.player &&
                        !table.slot &&
                        table.players.map((player) => {
                            const slot =
                                player.slot + (10 - table.player!.slot!) > 9
                                    ? player.slot + (10 - table.player!.slot!) - 9
                                    : player.slot + (10 - table.player!.slot!);

                            return (
                                <Player
                                    username={player.username}
                                    cards={player.cards}
                                    alignment={PLAYERS_ALIGNMENT[slot - 1]}
                                    index={slot}
                                    slot={slot}
                                    key={slot}
                                    balance={player.balance?.main}
                                    dealer={player.isDealer}
                                    active={player.active}
                                    pot={player.balance?.pot}
                                    timeLeft={player.timeLeft}
                                    lastAction={player.lastAction}
                                    onUpdateBalance={(balance) => join(player.slot, balance)}
                                    status={player.status}
                                />
                            );
                        })}
                    {table.player && !table.slot && (
                        <Player
                            username={table.player!.username}
                            alignment={PLAYERS_ALIGNMENT[0]}
                            index={table.player!.slot}
                            slot={table.player!.slot}
                            balance={table.player!.balance?.main}
                            lastAction={table.player!.lastAction}
                            status={table.player?.status}
                            onUpdateBalance={(balance) => join(table.player!.slot, balance)}
                        />
                    )}

                    {!table.player &&
                        !table.slot &&
                        PLAYERS_ALIGNMENT.map((alignment, index) => {
                            const player = table.players.find((player) => player.slot == index + 1);
                            if (player) {
                                return (
                                    <Player
                                        cards={player.cards}
                                        username={player.username}
                                        alignment={alignment}
                                        index={index + 1}
                                        slot={player.slot}
                                        key={player.slot}
                                        balance={player.balance?.main}
                                        active={player.active}
                                        dealer={player.isDealer}
                                        pot={player.balance?.pot}
                                        timeLeft={player.timeLeft}
                                        lastAction={player.lastAction}
                                        status={player.status}
                                    />
                                );
                            }

                            return (
                                <Player
                                    alignment={alignment}
                                    index={index + 1}
                                    key={index}
                                    lastAction={{}}
                                    onAccept={() => addPlayer(index + 1)}
                                />
                            );
                        })}

                    {table.slot &&
                        !table.player &&
                        table.players.map((player) => {
                            const slot =
                                player.slot + (10 - table.slot!) > 9
                                    ? player.slot + (10 - table.slot!) - 9
                                    : player.slot + (10 - table.slot!);

                            return (
                                <Player
                                    cards={player.cards}
                                    username={player.username}
                                    alignment={PLAYERS_ALIGNMENT[slot - 1]}
                                    index={slot}
                                    slot={player.slot}
                                    key={player.slot}
                                    balance={player.balance?.main}
                                    active={player.active}
                                    dealer={player.isDealer}
                                    pot={player.balance?.pot}
                                    timeLeft={player.timeLeft}
                                    lastAction={player.lastAction}
                                    status={player.status}
                                />
                            );
                        })}
                </div>
                <div id="action-menu">
                    {isActive && table.status === 'betting' && (
                        <ButtonsPanel type={table.balance?.totalPot ? 'call' : 'bet'} balance={1000} />
                    )}
                    {!isActive && table.status === 'betting' && (
                        <ActionMenu
                            type={
                                actionMenuType?.status === 'won' || actionMenuType?.status === 'lost'
                                    ? 'muck'
                                    : 'check-fold'
                            }
                        />
                    )}
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
