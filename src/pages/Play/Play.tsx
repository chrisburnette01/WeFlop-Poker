import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line, Typography } from '../../components';
import { Title, LineContent, Subtitle, Form, Navigation, Container } from '../../layout';
import { useForm } from 'react-hook-form';

const Play = () => {
    return (
        <>
            <Helmet>
                <title>Play</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <LineContent>
                </LineContent>
            </Container>
        </>
    );
};

export default Play;
