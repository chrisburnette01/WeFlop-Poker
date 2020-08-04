import React, { useState } from 'react';
import styled from 'styled-components';
import { Line, Typography, SlideDown, Rectangle } from '../../components';

const TableItemBase = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 109px;
    cursor: pointer;
    .table-item-wrapper {
        height: 48px;
    }
    .table-item-wrapper-line {
        width: 12px;
        margin: 0 10px 0 10px;
    }
    .table-item-wrapper-line-bottom {
        height: auto;
        width: 12px;
        margin: 0 8px 0 8px;
    }
    .table-item-text {
        display: flex;
        flex-direction: column;
    }
    .button-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .button-play-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .table-item-container {
        display: flex;
        align-items: center;
        margin-left: 35px;
    }
    .rect-wrapper-play {
        margin: 0 0 0 4px;
    }
    .button-and-lines-play {
        display: flex;
    }
    .play-items-wrapper {
        display: flex;
    }
    .rectangle-small {
        margin: 2px 6px 0 0;
    }
    .info-play-wrapper {
        padding: 10px 0 10px 0;
    }
    .button-play-container {
        padding: 10px 0 10px 0;
    }
    .ledger-balance {
        margin: 0 4px 0 4px;
    }
    .ledger-item {
        display: flex;
        align-items: center;
    }
    .rectangle-ledger {
        margin-bottom: 1px;
    }
`;

const TableItem = () => {
    const [active, setActive] = useState(false);
    const [selectedButton, setSelectedButton] = useState<string | undefined>();

    // const activeMenu = () => {
    //     switch (selectedButton) {
    //         case 'play':
    //             return (
    //                 <>
    //                     <Rectangle size="small" color="secondary" border="small" className="rectangle-small" />
    //                     <Typography component="span" variant="playTablesItalic">
    //                         “Alex’s Corner” has opened in a new tab.
    //                     </Typography>
    //                 </>
    //             );
    //         case 'ledger':
    //             return (

    //             )
    //     }
    // };
    return (
        <>
            <TableItemBase>
                <div className="table-item-container" onClick={() => setActive((prev) => !prev)}>
                    <Typography component="span" variant="body1">
                        [3/9]
                    </Typography>
                    <Line
                        width="long"
                        color={active ? 'yellow' : 'primary'}
                        className="table-item-wrapper-line"
                        height="short"
                    />
                    <div className="table-item-text">
                        <Typography component="span" variant="play">
                            Alnenjlklnkl,nklmr
                        </Typography>
                        <Typography component="span" variant="playSmall">
                            Member
                        </Typography>
                    </div>
                </div>
                <SlideDown open={true}>
                    <div className="button-and-lines-play">
                        <div className="button-play-container">
                            <div className="button-wrapper" onClick={() => setSelectedButton('play')}>
                                <Typography component="span" variant="tableItemButton">
                                    PLAY
                                </Typography>
                                <Rectangle size="button" color="primary" border="small" className="rect-wrapper-play" />
                            </div>
                            <div className="button-wrapper" onClick={() => setSelectedButton('ledger')}>
                                <Typography component="span" variant="tableItemButton">
                                    ledger
                                </Typography>
                                <Rectangle size="button" color="primary" border="small" className="rect-wrapper-play" />
                            </div>
                            <div className="button-wrapper" onClick={() => setSelectedButton('info')}>
                                <Typography component="span" variant="tableItemButton">
                                    info
                                </Typography>
                                <Rectangle size="button" color="primary" border="small" className="rect-wrapper-play" />
                            </div>
                            <div className="button-wrapper" onClick={() => setSelectedButton('hide')}>
                                <Typography component="span" variant="tableItemButton">
                                    hide
                                </Typography>
                                <Rectangle size="button" color="primary" border="small" className="rect-wrapper-play" />
                            </div>
                        </div>
                        <Line width="long" color="yellow" className="table-item-wrapper-line" />
                        <div className="info-play-wrapper">
                            <div className="play-items-wrapper">
                                <div className="ledger-item">
                                    <Rectangle
                                        size="button"
                                        color="success"
                                        border="small"
                                        className="rectangle-ledger"
                                    />
                                    <Typography
                                        variant="playTablesMedium"
                                        component="span"
                                        color="success"
                                        className="ledger-balance"
                                    >
                                        22.17
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideDown>
            </TableItemBase>
        </>
    );
};

export default TableItem;
