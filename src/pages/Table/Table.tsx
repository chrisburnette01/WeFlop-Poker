import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Player, Balance } from './components';
import { Container } from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetPassword, RESET_PASSWORD } from '../../store/actions/application';

import { Chat, Ledger, Leave, Settings } from './modals';
import { Menu, ButtonsPanel, GameSection, ActionMenu } from './layout';

import styled from 'styled-components';

interface TableProps {
    className?: string;
}

const Table = ({ className }: TableProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);

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
                        <Player username="glenn" balance={99} className="flex-end" />
                        <Player username="glenn" balance={99} className="flex-start" type="player" />
                        <Player username="glenn" balance={99} className="flex-start" type="player" />
                        <Player username="glenn" balance={99} className="flex-end" />
                    </div>
                    <div className="row row-center">
                        <Player username="glenn" balance={99} />
                        <GameSection totalPot={100} pot={32222.14} balance={balance} />
                        <Player username="glenn" balance={99} />
                    </div>
                    <div className="row row-bottom">
                        <Player username="glenn" balance={99} className="flex-start" type="player" />
                        <Player username="glenn" balance={99} className="flex-end" type="player" />
                        <Player username="glenn" balance={99} className="flex-start" />
                    </div>
                    <div className="panel">
                        <ButtonsPanel balance={1000} type="bet" />
                       
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
    }
    .row-center {
        max-height: 300px;
    }
    .row-bottom {
        max-width: 960px;
        max-height: 150px;
    }
    .panel {
        display: flex;
        flex: 1;
        margin-top: 12px;
        align-items: flex-end;
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
