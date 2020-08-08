import React, { useState } from 'react';
import { getTables, GET_TABLES } from '../../../store/actions/application';
import { Button, Line, SlideDown, Rectangle } from '../../../components';
import { TableItem, Subtitle } from '../../../layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';

interface TabsProps {
    form: JSX.Element;
}

const Tabs = ({ form }) => {
    const removeGame = (id) => {
        // setData((prev) => data.filter((el) => el.game_number !== id));
    };
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);
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
                    {form}
                </div>
            </SlideDown>
            <SlideDown open={active.tables}>
                <div className="buttons-bottom-play">
                    <div className="tables-subtitles-wrapper">
                        <Subtitle>Active tables are currently playable games.</Subtitle>
                        <Subtitle>When a game is over, the creator of a game can “archive” it.</Subtitle>
                        <Subtitle>Archived games are unplayable, but you can still access their ledgers.</Subtitle>
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
                            <TableItem key={Date.now().toString()} table={table} onRemove={removeGame} type="active" />
                        ))}
                        <Rectangle size="small" border="small" color="yellow" className="play-rect-bottom" />
                    </SlideDown>
                    <SlideDown open={active.archive}>
                        {application.tables?.archive?.map((table) => (
                            <TableItem key={Date.now().toString()} table={table} onRemove={removeGame} type="archive" />
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
    );
};

export default Tabs;
