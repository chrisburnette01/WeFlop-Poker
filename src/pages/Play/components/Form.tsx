import React from 'react';

import { Rectangle, Button, Input, Typography } from '../../../components';
import { Notification } from '../../../layout';

import { checkValidation } from '../../../helpers';
import { useForm } from 'react-hook-form';

interface FormProps {
    onSubmit: (data: any) => void;
    notification: JSX.Element | null;
}

const Form = ({ onSubmit, notification }: FormProps) => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });
    const isActive = {
        name: watch('name', ''),
        blinds: watch('blinds', ''),
        max_buyin: watch('max_buyin', 150),
        min_buyin: watch('min_buyin', 50),
    };

    const check = {
        name: checkValidation(isActive.name, errors.name),
        blinds: checkValidation(isActive.blinds, errors.blinds),
        max_buyin: !errors.max_buyin,
        min_buyin: !errors.min_buyin,
        time: !errors.time,
    };
    const isValidated = check.name && check.blinds && check.max_buyin && check.min_buyin && check.time;

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="inner-inputs-play">
                <div className="input-and-title-wrapper">
                    <Input
                        variant="secondary"
                        validated={check.name}
                        type="name"
                        width={234}
                        name="name"
                        register={register({
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                            minLength: {
                                value: 4,
                                message: 'Game name should be at least 4 symbols',
                            },
                            maxLength: {
                                value: 254,
                                message: 'Game name should not be longer then 254 symbols',
                            },
                        })}
                        errorMessage={errors.name && errors.name.message}
                    />
                    <Typography component="span" variant="playInputTitle" color="yellow" className="title-create-table">
                        TABLE NAME
                    </Typography>
                </div>
                <div className="input-and-title-wrapper">
                    <Input
                        validated={check.blinds}
                        variant="secondary"
                        type="number"
                        name="blinds"
                        width={114}
                        register={register({
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                            max: {
                                value: 999,
                                message: 'SMALL BLIND MUST BE BETWEEN $.01 & $999',
                            },
                            min: {
                                value: 0.01,
                                message: 'SMALL BLIND MUST BE BETWEEN $.01 & $999',
                            },
                        })}
                        errorMessage={errors.blinds && errors.blinds.message}
                    />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Typography component="span" variant="playInputTitle" color="yellow" className="title-create-table">
                        BLINDS
                    </Typography>
                </div>
                <div className="input-and-title-wrapper">
                    <Input
                        validated={check.max_buyin}
                        variant="secondary"
                        type="number"
                        name="max_buyin"
                        width={114}
                        defaultValue={150}
                        register={register({
                            validate: (value) =>
                                value > isActive.min_buyin || 'MAX BUY-IN MUST BE GREATER THAN MIN BUY-IN',
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                            max: {
                                value: 999,
                                message: 'MAX BUY-IN MUST BE BETWEEN 10 & 999 BIG BLINDS',
                            },
                            min: {
                                value: 10,
                                message: 'MAX BUY-IN MUST BE BETWEEN 10 & 999 BIG BLINDS',
                            },
                        })}
                        errorMessage={errors.max_buyin && errors.max_buyin.message}
                    />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Typography component="span" variant="playInputTitle" color="yellow" className="title-create-table">
                        MAX BUY-IN
                    </Typography>
                </div>
                <div className="input-and-title-wrapper">
                    <Input
                        validated={check.min_buyin}
                        variant="secondary"
                        type="number"
                        name="min_buyin"
                        width={114}
                        defaultValue={50}
                        register={register({
                            validate: (value) =>
                                value < isActive.max_buyin || 'MIN BUY-IN MUST BE LESS THAN MAX BUY-IN',
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                            max: {
                                value: 999,
                                message: 'MIN BUY-IN MUST BE BETWEEN 10 & 999 BIG BLINDS',
                            },
                            min: {
                                value: 10,
                                message: 'MIN BUY-IN MUST BE BETWEEN 10 & 999 BIG BLINDS',
                            },
                        })}
                        errorMessage={errors.min_buyin && errors.min_buyin.message}
                    />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Typography component="span" variant="playInputTitle" color="yellow" className="title-create-table">
                        MIN BUY-IN
                    </Typography>
                </div>
                <div className="input-and-title-wrapper">
                    <Input
                        variant="secondary"
                        validated={check.time}
                        type="number"
                        name="time"
                        width={74}
                        defaultValue={30}
                        register={register({
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                            max: {
                                value: 999,
                                message: 'TIME BANK MUST BE BETWEEN 10 and 999 SECONDS',
                            },
                            min: {
                                value: 10,
                                message: 'TIME BANK MUST BE BETWEEN 10 and 999 SECONDS',
                            },
                        })}
                        errorMessage={errors.time && errors.time.message}
                    />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Rectangle size="input" color="yellow" className="rect-play-input" />
                    <Typography component="span" variant="playInputTitle" color="yellow" className="title-create-table">
                        TIME BANK
                    </Typography>
                </div>
            </div>
            <Rectangle size="middle" color="yellow" />
            <div className="play-button-notification-wrapper">
                <Button variant="secondary" validated={isValidated} form='play' title="create" />
            </div>
            <Notification type="play">{notification}</Notification>
        </form>
    );
};

export default Form;
