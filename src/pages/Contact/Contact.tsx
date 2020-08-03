import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, TextField, Typography } from '../../components';
import { Title, LineContent, Subtitle, Form, Navigation, Notification, PatreonIcon } from '../../layout';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, watch, handleSubmit } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });
    const [isClicked, setIsClicked] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const email = watch('textarea', '');

    const buttonSubmit = <Button variant="secondary" validated={Boolean(email)} title="Enter" />;
    const notification = <Typography component="span" variant="button2" color="primary">
                            message was sent
                        </Typography>;

    const onSubmit = (data) => {
        console.log(data);
        setIsMessageSent(true);
    };
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <div>
                    <LineContent>
                        <Title titleOnTop color="secondary">
                            GIVE US FEEDBACK!
                        </Title>
                        <div className="subtitles-wrapper-inner">
                            <Subtitle>We want to hear what you have to say.</Subtitle>
                            <Subtitle>We read all your messsages, even the not so nice ones…</Subtitle>
                            <Subtitle>Please also consider donating to our Patreon!</Subtitle>
                        </div>
                        <Form
                            onSubmit={handleSubmit(onSubmit)}
                            buttonSubmit={buttonSubmit}
                            isClicked={isClicked}
                            isRightIcon={true}
                            notification={isMessageSent ? notification : null}
                        >
                            <TextField
                                onFocus={() => setIsClicked(true)}
                                disabled={isMessageSent}
                                name="textarea"
                                register={register({
                                    required: true,
                                    minLength: 1,
                                })}
                            />
                            <Notification>
                                
                            </Notification>
                        </Form>
                    </LineContent>
                    
                </div>
            </Container>
        </>
    );
};

export default Contact;
