import React, { useState } from 'react';
import { Line, Typography, SlideDown, Rectangle } from '../../components';
import { Poll, Description } from '../';
import styled from 'styled-components';
import moment from 'moment';

interface UpdateItemProps {
    element?: any;
    className?: string;
}

const UpdateItem = ({ element, className }: UpdateItemProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const list =
        element.type === 'poll' ? (
            <div style={{ marginTop: '8px' }}>
                <Poll content={element.content} updateId={element.id} optional={element.optionalText} />
            </div>
        ) : element.type === 'text' ? (
            <Description content={element.content} />
        ) : null;

    return (
        <div className={className}>
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
        </div>
    );
};

export default styled(UpdateItem)`
    .updates-note-item {
        height: 48px;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 8px 0 0 -98px;
        &-line {
            height: 48px;
        }
        &-wrapper {
            display: flex;
            flex-direction: row;
        }
        &-text-wrapper {
            margin-left: 11px;
        }
        &-date-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-right: 11px;
        }
    }
    .rectangle-wrapper-item {
        margin-top: 8px;
    }
`;
