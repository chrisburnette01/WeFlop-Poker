import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Title, LineContent, Subtitle, Navigation, Container, UpdateItem, Content } from '../../layout';
import { Rectangle, Line } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getUpdates, GET_UPDATES } from '../../store/actions/application';

const Updates = () => {
    const dispatch = useDispatch();
    const application = useSelector((state: RootState) => state.application);

    useEffect(() => {
        dispatch(getUpdates());
    }, []);

    return (
        <>
            <Helmet>
                <title>Updates</title>
            </Helmet>
            <Container>
                <Navigation type={'auth'} />
                <Content>
                    <LineContent>
                        <Title titleOnTop color="secondary">
                            BETA V1.01
                        </Title>
                        <div className="subtitles-wrapper-inner">
                            <Subtitle>We are constantly working to make WeFlop a better product for you.</Subtitle>
                            <Subtitle>This is where we post our updates and poll our community.</Subtitle>
                        </div>
                        <Line color="secondary" width="large" height="short" align="left" />
                    </LineContent>
                    <div style={{ margin: '8px 0 0 16px' }}>
                        <Rectangle height="extralarge" width="extralarge" />
                        {application.updates &&
                            application.updates.map((element, index) => <UpdateItem element={element} />)}
                    </div>
                </Content>
            </Container>
        </>
    );
};

export default Updates;
