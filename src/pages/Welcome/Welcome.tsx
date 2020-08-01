import React from 'react';
import './style.scss';
import { Helmet } from 'react-helmet';
import { Button, Line, Typography } from '../../components';

const Welcome = () => {
    return (
        <>
            <Helmet>
                <title>Welcome</title>
            </Helmet>
            <div className="wrapper-enter">
                <div className="inner-enter">
                    <div className="inner-enter-content">
                        <div className="button-wrapper-enter">
                            <Button title={'Enter'} color="initial" component="link" to={'/signup'} />
                        </div>
                        <div className="content-enter">
                            <div className="content-inner">
                                <Line width="long" color="darkblue" />
                                <Line width="long" color="gray" />
                                <Line width="long" color="darkblue" />
                            </div>
                            <div className="typography-enter">
                                <Typography component="h1" variant="display1" color="initial">
                                    all bets are on
                                </Typography>
                            </div>
                            <div className="content-inner content-inner-footer">
                                <Line width="long" color="darkblue" />
                                <Line width="long" color="gray" />
                                <Line width="long" color="darkblue" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
