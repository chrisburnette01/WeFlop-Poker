import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line } from '../../components';
import { Title, Subtitle, Form, Navigation } from '../../layout';
import { checkValidation } from '../../helpers';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const [isClicked, setIsClicked] = useState(false);

    const onSubmit = (data) => console.log(data);

    const isActive = {
        email: watch('email', ''),
        password: watch('password', ''),
    };

    const check = {
        email: checkValidation(isActive.email, errors.email),
        password: checkValidation(isActive.password, errors.password),
    };

    const isValidated = check.email && check.password;
    const buttonSubmit = <Button variant="secondary" validated={isValidated} title="Enter" />;

    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <Container>
                <Navigation type={'basic'} />
                <div className="line-wrapper-page">
                    <Line width="long" align="right" className="form-line-left" />
                    <div className="content-wrapper-page">
                        <Title>Welcome back!</Title>
                        <Subtitle>WeFlop is a player-supported online poker platform.</Subtitle>
                        <Subtitle>We are committed to building the features you want.</Subtitle>
                        <Subtitle>Our beta supports home games with simple, intuitive ledgers.</Subtitle>
                        <Form onSubmit={handleSubmit(onSubmit)} buttonSubmit={buttonSubmit} isClicked={isClicked}>
                            <Input
                                onFocus={() => setIsClicked(true)}
                                placeholder="email adress"
                                type="email"
                                name="email"
                                validated={check.email}
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
                            <Input
                                onFocus={() => setIsClicked(true)}
                                placeholder="password"
                                type="password"
                                name="password"
                                validated={check.password}
                                register={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password should have at least 8 symbols',
                                    },
                                    maxLength: {
                                        value: 24,
                                        message: 'Password should not be longer then 24 symbols',
                                    },
                                    pattern: {
                                        // eslint-disable-next-line
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                                        message:
                                            'Passwords must contain at least one lower case letter, at least one upper case letter, have a least one 0-9 digit, and have at least one special character',
                                    },
                                })}
                                errorMessage={errors.password && errors.password.message}
                            />
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SignIn;
