import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line } from '../../components';
import { Title, Subtitle, Form, Navigation, Container } from '../../layout';
import { checkValidation } from '../../helpers';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const onSubmit = (data) => console.log(data);

    const isActive = {
        name: watch('name', ''),
        email: watch('email', ''),
        password: watch('password', ''),
        password_repeat: watch('password_repeat', ''),
    };

    const check = {
        name: checkValidation(isActive.name, errors.name),
        email: checkValidation(isActive.email, errors.email),
        password: checkValidation(isActive.password, errors.password),
        password_repeat: checkValidation(isActive.password_repeat, errors.password_repeat),
    };

    const isValidated = check.name && check.email && check.password && check.password_repeat;

    const buttonSubmit = isValidated ? <Button type="submit" title={'Enter'} size="small" align="right" /> : null;

    return (
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <Container>
                <Navigation type={'basic'} />
                <div className="line-wrapper-page">
                    <Line width="long" align="right" className="form-line-left" />
                    <div className="content-wrapper-page">
                        <Title>WeFlop Beta v1.00</Title>
                        <Subtitle>
                            <p>WeFlop is a player-supported online poker platform.</p>
                            <p>WeFlop lets you host home games with simple, intuitive ledgers.</p>
                        </Subtitle>
                        <Subtitle>
                            <p>We build what you want.</p>
                            <p>We invite you to join our community.</p>
                        </Subtitle>
                        <Form onSubmit={handleSubmit(onSubmit)} buttonSubmit={buttonSubmit}>
                            <Input
                                placeholder="unique display name"
                                type="name"
                                name="name"
                                validation={check.name}
                                register={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Username should be at least 5 symbols',
                                    },
                                    maxLength: {
                                        value: 24,
                                        message: 'Username should not be longer then 254 symbols',
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]{5,24}$/,
                                        message: 'Username should consist from a-Z 0-9 symbols',
                                    },
                                })}
                                errorMessage={errors.name && errors.name.message}
                            />
                            <Input
                                placeholder="email adress"
                                type="email"
                                name="email"
                                validation={check.email}
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
                                placeholder="password"
                                type="password"
                                name="password"
                                validation={check.password}
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
                            <Input
                                placeholder="retype password"
                                type="password"
                                name="password_repeat"
                                validation={check.password_repeat}
                                register={register({
                                    validate: (value) => value === isActive.password || 'The passwords do not match',
                                })}
                                errorMessage={errors.password_repeat && errors.password_repeat.message}
                            />
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SignUp;
