import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, TextField, Typography, Line } from '../../components';
import { Title, LineContent, Subtitle, Form, Navigation, Notification, PatreonIcon, Content } from '../../layout';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { sendFeedback, SEND_FEEDBACK } from '../../store/actions/application';

const Contact = () => {
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);
    const { register, watch, handleSubmit } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });
    const [isClicked, setIsClicked] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const feedback = watch('feedback', '');

    const buttonSubmit = <Button variant="secondary" className="button-form" validated={Boolean(feedback)} title="Enter" />;
    const notification = (
        <Typography component="span" variant="button2" color="primary">
            message was sent
        </Typography>
    );

    const onSubmit = (data) => {
        setIsMessageSent(true);
        dispatch(sendFeedback(data));
    };
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <Content>
                    <LineContent>
                        <Title titleOnTop color="secondary">
                            GIVE US FEEDBACK!
                        </Title>
                        <div className="subtitles-wrapper-inner">
                            <Subtitle>We want to hear what you have to say.</Subtitle>
                            <Subtitle>We read all your messsages, even the not so nice ones…</Subtitle>
                            <Subtitle>Please also consider donating to our Patreon!</Subtitle>
                        </div>
                        <Line color="secondary" width="large" height="short" align="left" />
                        <div className="d-flex">
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                buttonSubmit={buttonSubmit}
                                isClicked={isClicked}
                                isRightIcon={true}
                                notification={isMessageSent ? notification : null}
                            >
                                <TextField
                                    variant="textarea"
                                    onFocus={() => setIsClicked(true)}
                                    disabled={isMessageSent}
                                    name="feedback"
                                    register={(ref) =>
                                        register(ref, {
                                            required: true,
                                            minLength: 1,
                                        })
                                    }
                                />
                            </Form>
                            <PatreonIcon />
                        </div>
                    </LineContent>
                </Content>
            </Container>
        </>
    );
};

export default Contact;
