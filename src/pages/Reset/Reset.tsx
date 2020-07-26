import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line } from '../../components';
import { Title, Subtitle, Form, Navigation } from '../../layout';
import { checkValidation } from '../../helpers';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';

const Reset = () => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const [isEmailSent, setIsEmailSent] = useState(false);

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

    const buttonSubmit = isValidated ? (
        <Button type="submit" title={isEmailSent ? null : 'Enter'} size="small" align="right" />
    ) : null;

    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <Container>
                <Navigation type={'basic'} />
                <div className="line-wrapper-page">
                    <Line width="long" align="right" className="form-line-left" />
                    <div className="content-wrapper-page">
                        <Title>Forgot Your Password?</Title>
                        <Subtitle>
                            <p>Enter the email address attached to your WeFlop account.</p>
                            <p>We’ll send you an email with the reset form.</p>
                        </Subtitle>
                        <Form resetForm={isEmailSent} onSubmit={handleSubmit(onSubmit)} buttonSubmit={buttonSubmit}>
                            <Input
                                placeholder="email adress"
                                type="email"
                                name="email"
                                validation={check.email}
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
            </Container>
        </>
    );
};

export default Reset;
