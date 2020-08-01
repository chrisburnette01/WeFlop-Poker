import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line } from '../../components';
import { Title, LineContent, Subtitle, Form, Navigation } from '../../layout';
import { checkValidation } from '../../helpers';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { signIn, SIGN_IN } from '../../store/actions/application';

const SignIn = () => {
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const [isClicked, setIsClicked] = useState(false);

    const onSubmit = (data) => {
        dispatch(signIn(data));
    };

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

    useEffect(() => {
        if (application.isLoading[SIGN_IN.REQUEST]) {
            console.log("Started SIGN_IN request...")
        } else {
            console.log("SIGN_IN request finished!")
        }
        
    }, [application.isLoading[SIGN_IN.REQUEST]]);

    useEffect(() => {
        console.log("Error updated: ", application.error[SIGN_IN.ERROR])
    }, [application.error[SIGN_IN.ERROR]]);

    useEffect(() => {
        console.log("User updated: ", application.user)
    }, [application.user]);

    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <Container>
                <Navigation type={'basic'} />
                <LineContent>
                    <Title>Welcome back!</Title>
                    <div className="subtitles-wrapper-inner">
                        <Subtitle>WeFlop is a player-supported online poker platform.</Subtitle>
                        <Subtitle>We are committed to building the features you want.</Subtitle>
                        <Subtitle>Our beta supports home games with simple, intuitive ledgers.</Subtitle>
                    </div>
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
                </LineContent>
            </Container>
        </>
    );
};

export default SignIn;
