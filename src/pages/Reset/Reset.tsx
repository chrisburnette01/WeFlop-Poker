import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line } from '../../components';
import { Title, Subtitle, Form, Navigation, FormNotification } from '../../layout';
import { checkValidation } from '../../helpers';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';

import './style.scss';

const Reset = () => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setIsEmailSent(true);
    };

    const isActive = {
        email: watch('email', ''),
    };

    const check = {
        email: checkValidation(isActive.email, errors.email),
    };

    const isValidated = check.email;
    const buttonSubmit = <Button variant="secondary" validated={isValidated} title="send reset" />;

    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <Container>
                <Navigation type={'basic'} />
                <div className="line-wrapper-page line-wrapper-page-reset-email">
                    <div className="form-wrapper-inner">
                        <Line width="long" align="right" className="form-line-left" />
                        <div className="content-wrapper-page">
                            <Title>Forgot Your Password?</Title>
                            <Subtitle>Enter the email address associated with your account.</Subtitle>
                            <Subtitle>We’ll send you an email with a reset form.</Subtitle>
                            <Form onSubmit={handleSubmit(onSubmit)} buttonSubmit={buttonSubmit} isClicked={isClicked}>
                                <Input
                                    onFocus={() => setIsClicked(true)}
                                    placeholder="email adress"
                                    type="email"
                                    name="email"
                                    validated={check.email}
                                    disabled={isEmailSent}
                                    register={register({
                                        required: {
                                            value: true,
                                            message: 'This field is required',
                                        },
                                        minLength: {
                                            value: 4,
                                            message: 'Email should be at least 4 symbols',
                                        },
                                        maxLength: {
                                            value: 254,
                                            message: 'Email should not be longer then 254 symbols',
                                        },
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Email should have form user@email.com',
                                        },
                                    })}
                                    errorMessage={errors.email && errors.email.message}
                                />
                            </Form>
                        </div>
                    </div>
                    {isEmailSent ? <FormNotification email={isActive.email} /> : null}
                </div>
            </Container>
        </>
    );
};

export default Reset;
