import React, { useState } from 'react';
import { Line, Typography, SlideDown, Rectangle } from '../../components';
import { Poll, Description } from '../';
import moment from 'moment';

const UpdateItem = ({ data }) => {
    const [open, setOpen] = useState(data.map(() => false));
    return data.map((element, index) => {
        const list =
            element.type === 'poll' ? (
                <div style={{ marginTop: '8px' }}>
                    <Poll data={element.content} option={element.optionalText} />
                </div>
            ) : element.type === 'text' ? (
                <Description data={element.content} />
            ) : null;
        return (
            <>
                <div
                    className="updates-note-item"
                    onClick={() =>
                        setOpen((prev) => {
                            return [...prev.slice(0, index), !prev[index], ...prev.slice(index + 1)];
                        })
                    }
                >
                    <div className="updates-note-item-date-wrapper">
                        <Typography variant="date" component="span">
                            {moment(element.date).format('MM.DD.YYYY')}
                        </Typography>
                        <Typography variant="date" component="span">
                            {moment(element.date).format('HH:mm')}
                        </Typography>
                    </div>
                    <Line
                        className="updates-note-item-line"
                        width="long"
                        color={open[index] ? 'secondary' : 'primary'}
                    />
                    <div className="updates-note-item-text-wrapper">
                        <Typography variant="button2" component="a">
                            {element.title}
                        </Typography>
                    </div>
                </div>
                <SlideDown open={open[index]}>{list}</SlideDown>
                <div className="rectangle-wrapper-item">
                    <Rectangle size="big" />
                </div>
            </>
        );
    });
};

export default UpdateItem;
