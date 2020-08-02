import React from 'react';
import { Helmet } from 'react-helmet';
import { Title, LineContent, Subtitle, Navigation, Container, UpdateItem } from '../../layout';
import { Rectangle, Line } from '../../components';

const data = [
    {
        title: 'Patch Notes v1.01',
        content: [
            'Added a new music track',
            'Implemented bet size customization that - filler that mimicks a two line input - * - filler \nends up going onto the next line and expanding the line to the left.',
            'Fixed bug that hid fold button in all-in situations',
        ],
        type: 'text',
        optionalText: 'Optional text',
        date: Date.now(),
    },
    {
        title: 'Poll: What should our next feature be?',
        content: [
            { title: 'Each of these bubbles are interactive', votes: 50 },
            { title: 'Voting choice', votes: 20 },
            { title: 'Voting choice', votes: 150 },
        ],
        optionalText: 'Optional text below the poll. If this text is added, then it is 12px below the poll question.',
        type: 'poll',
        date: Date.now(),
    },
    {
        title: 'Patch Notes v1.01',
        content: [
            'Added a new music track',
            'Implemented bet size customization that - filler that mimicks a two line input - * - filler \nends up going onto the next line and expanding the line to the left.',
            'Fixed bug that hid fold button in all-in situations',
        ],
        type: 'text',
        optionalText: 'Optional text',
        date: Date.now(),
    },
    {
        title: 'Poll: What should our next feature be?',
        content: [
            { title: 'Each of these bubbles are interactive', votes: 50 },
            { title: 'Voting choice', votes: 20 },
            { title: 'Voting choice', votes: 150 },
        ],
        optionalText: 'Optional text below the poll. If this text is added, then it is 12px below the poll question.',
        type: 'poll',
        date: Date.now(),
    },
];

const Updates = () => {
    return (
        <>
            <Helmet>
                <title>Updates</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <div>
                    <LineContent>
                        <Title titleOnTop color="secondary">
                            BETA V1.01
                        </Title>
                        <div className="subtitles-wrapper-inner">
                            <Subtitle>We are constantly working to make WeFlop a better product for you.</Subtitle>
                            <Subtitle>This is where we post our updates and poll our community.</Subtitle>
                        </div>
                        <Line width="long" className="line-bottom-updates" color="secondary" />
                    </LineContent>
                    <div className="patch-notes">
                        <Rectangle size="big" />
                        <UpdateItem data={data} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Updates;
