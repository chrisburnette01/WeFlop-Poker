import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Player, ButtonsPanel, GameSection, Balance } from './components';
import { Container } from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetPassword, RESET_PASSWORD } from '../../store/actions/application';

const Table = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);

    const balance = {
        main: 21,
        sides: [11.29, 25.45, 25.68],
    };

    return (
        <>
            <Helmet>
                <title>Table #{id}</title>
            </Helmet>
            <Container>
                <div>
                    <GameSection totalPot={100} pot={32222.14} balance={balance} />
                </div>
                <div>
                    <ButtonsPanel balance={1000} />
                </div>
            </Container>
        </>
    );
};

export default Table;
