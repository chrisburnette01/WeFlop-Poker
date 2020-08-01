import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Title, LineContent, Subtitle, Navigation, Container, UpdatesItem } from '../../layout';
import { Rectangle, Line } from '../../components';

import './style.scss'

const Updates = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Helmet>
                <title>Updates</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <div>
                    <LineContent>
                        <Title titleOnTop>BETA V1.01</Title>
                        <div className="subtitles-wrapper-inner">
                            <Subtitle>We are constantly working to make WeFlop a better product for you.</Subtitle>
                            <Subtitle>This is where we post our updates and poll our community.</Subtitle>
                        </div>
                        <Line width="long" className="line-bottom-updates" />
                    </LineContent>
                    <div className="patch-notes">
                        <Rectangle size="big" />
                        <UpdatesItem />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Updates;
