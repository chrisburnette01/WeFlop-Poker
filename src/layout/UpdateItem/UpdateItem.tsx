import React, { useState } from 'react';
import { Line, Typography, SlideDown, Rectangle } from '../../components';
import { Poll, Description } from '../';
import moment from 'moment';

const UpdateItem = ({ element }) => {
    const [open, setOpen] = useState<boolean>(false);

    const list =
        element.type === 'poll' ? (
            <div style={{ marginTop: '8px' }}>
                <Poll content={element.content} optional={element.optionalText} />
            </div>
        ) : element.type === 'text' ? (
            <Description content={element.content} />
        ) : null;

    return (
        <>
            <div className="updates-note-item" onClick={() => setOpen((prev) => !prev)}>
                <div className="updates-note-item-date-wrapper">
                    <Typography variant="date" component="span">
                        {moment(element.date).format('MM.DD.YYYY')}
                    </Typography>
                    <Typography variant="date" component="span">
                        {moment(element.date).format('HH:mm')}
                    </Typography>
                </div>
                <Line className="updates-note-item-line" width="long" color={open ? 'secondary' : 'primary'} />
                <div className="updates-note-item-text-wrapper">
                    <Typography variant="button2" component="a">
                        {element.title}
                    </Typography>
                </div>
            </div>
            <SlideDown open={open}>{list}</SlideDown>
            <div className="rectangle-wrapper-item">
                <Rectangle size="big" />
            </div>
        </>
    );
};

export default UpdateItem;
