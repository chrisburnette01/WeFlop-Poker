import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Line, Typography } from '../../components';
import { Title, LineContent, Subtitle, Navigation, Container, Content } from '../../layout';

import { Form, Tabs } from './components';

const Play = () => {
    const [isCreated, setIsCreated] = useState(false);

    const onSubmit = (data) => {
        setIsCreated(true);
        console.log(data);
    };

    const notification = isCreated ? (
        <Typography component="span" variant="button2" color="primary">
            TABLE CREATED.
        </Typography>
    ) : null;

    return (
        <>
            <Helmet>
                <title>Play</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <Content>
                    <div style={{ marginLeft: '136px' }}>
                        <LineContent>
                            <Title titleOnTop color="secondary">
                                HOME GAMES
                            </Title>
                            <div className="subtitles-wrapper-inner">
                                <Subtitle>Click “CREATE” to customize your own poker game. </Subtitle>
                                <Subtitle>To invite your friends, simply share the table’s link.</Subtitle>
                                <Subtitle>Every game you create or join via link is saved in “TABLES.”</Subtitle>
                            </div>
                            <Line color="secondary" width="large" height="short" align="left" />
                        </LineContent>
                    </div>
                    <Tabs form={<Form onSubmit={onSubmit} notification={notification} />} />
                </Content>
            </Container>
        </>
    );
};

export default Play;
