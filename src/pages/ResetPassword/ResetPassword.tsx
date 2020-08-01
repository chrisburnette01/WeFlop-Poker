import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line } from '../../components';
import { Title, LineContent, Subtitle, Form } from '../../layout';
import { checkValidation } from '../../helpers';
import Container from '../../layout/Container/Container';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const [isClicked, setIsClicked] = useState(false);

    const email = 'test@test.test';

    const onSubmit = (data) => console.log(data);

    const isActive = {
        password: watch('password', ''),
        password_repeat: watch('password_repeat', ''),
    };

    const check = {
        password: checkValidation(isActive.password, errors.password),
        password_repeat: checkValidation(isActive.password_repeat, errors.password_repeat),
    };

    const isValidated = check.password && check.password_repeat;
    const buttonSubmit = <Button variant="secondary" validated={isValidated} title="reset" />;

    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <Container>
                <Button title={'Reset'} active disabled />
                <LineContent>
                    <Title>Change Your Password</Title>
                    <div className="subtitles-wrapper-inner">
                        <Subtitle>Change the password of the account attached to:</Subtitle>
                        <Subtitle>{email}</Subtitle>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)} buttonSubmit={buttonSubmit} isClicked={isClicked}>
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
                        <Input
                            onFocus={() => setIsClicked(true)}
                            placeholder="retype password"
                            type="password"
                            name="password_repeat"
                            validated={check.password && check.password_repeat}
                            register={register({
                                validate: (value) => value === isActive.password || 'The passwords do not match',
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
                            errorMessage={errors.password_repeat && errors.password_repeat.message}
                        />
                    </Form>
                </LineContent>
            </Container>
        </>
    );
};

export default ResetPassword;
