import React, { useState } from 'react';
import { Line, Typography, SlideDown } from '../../components';
import './style.scss';

const UpdateItem = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="updates-note-item">
                <div className="updates-note-item-date-wrapper">
                    <Typography variant="date" component="span">
                        12.07.2020
                    </Typography>
                    <Typography variant="date" component="span">
                        03.39
                    </Typography>
                </div>
                <Line className="updates-note-item-line" width="long" color={open ? 'initial' : 'primary'} />
                <div className="updates-note-item-text-wrapper" onClick={() => setOpen((prev) => !prev)}>
                    <Typography variant="button2" component="a">
                        Patch note 1.7
                    </Typography>
                </div>
            </div>
            <SlideDown open={open}>
                <p>fasfsafasfasfas</p>
                <p>safasfasfsafa</p>
            </SlideDown>
        </>
    );
};

export default UpdateItem;
