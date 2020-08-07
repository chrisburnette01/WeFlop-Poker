import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line, Typography, SlideDown, Rectangle } from '../../components';
import { Title, LineContent, Subtitle, Navigation, Container, TableItem, Content, Notification } from '../../layout';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { checkValidation } from '../../helpers';
import { getTables, GET_TABLES } from '../../store/actions/application';

import './style.scss';

const Play = () => {
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);
    const [isCreated, setIsCreated] = useState(false);

    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'all',
        shouldFocusError: true,
    });

    const onSubmit = (data) => {
        setIsCreated(true);
        console.log(data);
    };

    const isActive = {
        name: watch('name', ''),
        blinds: watch('blinds', ''),
    };

    const check = {
        name: checkValidation(isActive.name, errors.name),
        blinds: checkValidation(isActive.blinds, errors.blinds),
        max_buyin: !errors.max_buyin,
        min_buyin: !errors.min_buyin,
        time: !errors.time,
    };

    const isValidated = check.name && check.blinds && check.max_buyin && check.min_buyin && check.time;

    const removeGame = (id) => {
        // setData((prev) => data.filter((el) => el.game_number !== id));
    };

    const notification = isCreated ? (
        <Typography component="span" variant="button2" color="primary">
            TABLE CREATED.
        </Typography>
    ) : null;

    const [active, setActive] = useState({
        create: false,
        tables: false,
        archive: false,
        active: false,
    });

    const activeStateHandler = (first, second) => {
        setActive((prev) => {
            if (active[second]) {
                return {
                    ...prev,
                    [second]: false,
                    [first]: !active[first],
                };
            }
            return {
                ...prev,
                [first]: !active[first],
            };
        });
    };

    const buttonHandler = (title) => {
        switch (title) {
            case 'archive':
                !active[title] && dispatch(getTables({ type: title }));
                activeStateHandler('archive', 'active');
                break;
            case 'active':
                !active[title] && dispatch(getTables({ type: title }));
                activeStateHandler('active', 'archive');
                break;
            case 'tables':
                activeStateHandler('tables', 'create');
                break;
            case 'create':
                activeStateHandler('create', 'tables');
                break;
        }
    };
    return (
        <>
            <Helmet>
                <title>Play</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <Content>
                    <div className="content-inner-play">
                        <LineContent>
                            <Title titleOnTop color="secondary">
                                HOME GAMES
                            </Title>
                            <div className="subtitles-wrapper-inner">
                                <Subtitle>Click “CREATE” to customize your own poker game. </Subtitle>
                                <Subtitle>To invite your friends, simply share the table’s link.</Subtitle>
                                <Subtitle>Every game you create or join via link is saved in “TABLES.”</Subtitle>
                            </div>
                            <Line color="secondary" width="long" height="short" align="left" />
                        </LineContent>
                    </div>
                    <div className="play-options">
                        <div className="button-wrapper-play">
                            <div className="left-button-wrapper">
                                <Button
                                    variant="play"
                                    title="create"
                                    active={active.create}
                                    align="right"
                                    onClick={() => buttonHandler('create')}
                                />
                            </div>
                            <Rectangle size="big" className="rect-play-wrapper" />
                            <div className="right-button-wrapper">
                                <Button
                                    variant="play"
                                    title="tables"
                                    active={active.tables}
                                    align="left"
                                    onClick={() => buttonHandler('tables')}
                                />
                            </div>
                        </div>
                        <SlideDown open={active.create}>
                            <div className="create-table-slidedown">
                                <Subtitle className="subtitle-create">
                                    More customizability coming soon. Let us know what you want!
                                </Subtitle>
                                <Line color="yellow" width="long" height="short" align="left" />
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
                                            <Typography
                                                component="span"
                                                variant="playInputTitle"
                                                color="yellow"
                                                className="title-create-table"
                                            >
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
                                                })}
                                                errorMessage={errors.blinds && errors.blinds.message}
                                            />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Typography
                                                component="span"
                                                variant="playInputTitle"
                                                color="yellow"
                                                className="title-create-table"
                                            >
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
                                                    required: {
                                                        value: true,
                                                        message: 'This field is required',
                                                    },
                                                })}
                                                errorMessage={errors.max_buyin && errors.max_buyin.message}
                                            />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Typography
                                                component="span"
                                                variant="playInputTitle"
                                                color="yellow"
                                                className="title-create-table"
                                            >
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
                                                    required: {
                                                        value: true,
                                                        message: 'This field is required',
                                                    },
                                                })}
                                                errorMessage={errors.min_buyin && errors.min_buyin.message}
                                            />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Typography
                                                component="span"
                                                variant="playInputTitle"
                                                color="yellow"
                                                className="title-create-table"
                                            >
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
                                                })}
                                                errorMessage={errors.time && errors.time.message}
                                            />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Rectangle size="input" color="yellow" className="rect-play-input" />
                                            <Typography
                                                component="span"
                                                variant="playInputTitle"
                                                color="yellow"
                                                className="title-create-table"
                                            >
                                                TIME BANK
                                            </Typography>
                                        </div>
                                    </div>
                                    <Rectangle size="middle" color="yellow" />
                                    <div className="play-button-notification-wrapper">
                                        <Button variant="secondary" form="play" validated={isValidated} title="create" />
                                    </div>
                                    <Notification type="play">{notification}</Notification>
                                </form>
                            </div>
                        </SlideDown>
                        <SlideDown open={active.tables}>
                            <div className="buttons-bottom-play">
                                <div className="tables-subtitles-wrapper">
                                    <Subtitle>Active tables are currently playable games.</Subtitle>
                                    <Subtitle>When a game is over, the creator of a game can “archive” it.</Subtitle>
                                    <Subtitle>
                                        Archived games are unplayable, but you can still access their ledgers.
                                    </Subtitle>
                                    <Subtitle>“HIDE” lets you hide the games you don’t want to see anymore.</Subtitle>
                                </div>
                            </div>
                            <div className="buttons-and-options-wrapper">
                                <div className="buttons-inside-wrapper">
                                    <div className="left-button-wrapper bottom">
                                        <Button
                                            variant="play"
                                            title="archive"
                                            active={active.archive}
                                            align="right"
                                            onClick={() => buttonHandler('archive')}
                                        />
                                    </div>
                                    <Line width="long" height="short" className="line-bottom-updates" color="yellow" />
                                    <div className="right-button-wrapper bottom">
                                        <Button
                                            variant="play"
                                            title="active"
                                            active={active.active}
                                            align="left"
                                            onClick={() => buttonHandler('active')}
                                        />
                                    </div>
                                </div>
                                <SlideDown open={active.active}>
                                    {application.tables?.active?.map((table) => (
                                        <TableItem
                                            key={Math.random()}
                                            table={table}
                                            onRemove={removeGame}
                                            type="active"
                                        />
                                    ))}
                                    <Rectangle
                                        size="small"
                                        border="small"
                                        color="yellow"
                                        className="play-rect-bottom"
                                    />
                                </SlideDown>
                                <SlideDown open={active.archive}>
                                    {application.tables?.archive?.map((table) => (
                                        <TableItem
                                            key={Math.random()}
                                            table={table}
                                            onRemove={removeGame}
                                            type="archive"
                                        />
                                    ))}
                                    <Rectangle
                                        size="small"
                                        border="small"
                                        color="yellow"
                                        className="play-rect-bottom play-rect-bottom-left"
                                    />
                                </SlideDown>
                            </div>
                        </SlideDown>
                    </div>
                </Content>
            </Container>
        </>
    );
};

export default Play;
