import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useHistory } from "react-router-dom";
import { Card } from './components';
import { Container } from '../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetPassword, RESET_PASSWORD } from '../../store/actions/application';

const Table = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);

    return (
        <>
            <Helmet>
                <title>Table #{id}</title>
            </Helmet>
            <Container>
                <div>
                    <Card variant="H1" />
                </div>
            </Container>
        </>
    );
};

export default Table;
