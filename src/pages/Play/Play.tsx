import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Line, Typography, SlideDown, Rectangle } from '../../components';
import { Title, LineContent, Subtitle, Form, Navigation, Container, TableItem, Content } from '../../layout';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getTables, GET_TABLES } from '../../store/actions/application';

import './style.scss';

const Play = () => {
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);

    const removeGame = (id) => {
        // setData((prev) => data.filter((el) => el.game_number !== id));
    };

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
                                <SlideDown open={active.create}>
                                    <p>fsafsafas</p>
                                </SlideDown>
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
