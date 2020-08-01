import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import { ThemeProvider } from '../providers';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import './style.scss';
import '../assets/animations/animations.scss';

import { Welcome, SignUp, SignIn, Reset, ResetPassword, Updates } from '../pages';

const App = () => {
    const application = useSelector((state: RootState) => state.application);

    return (
        // <ThemeProvider mode={application.isAuthenticated ? 'dark' : 'light'}>
        <ThemeProvider mode={'dark'}>
            <Helmet defaultTitle="We Flop" titleTemplate="We Flop - %s" />
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/" exact>
                        <Welcome />
                    </PublicRoute>
                    <PublicRoute path="/signup" exact>
                        <SignUp />
                    </PublicRoute>
                    <PublicRoute path="/signin" exact>
                        <SignIn />
                    </PublicRoute>
                    <PublicRoute path="/reset/password" exact>
                        <Reset />
                    </PublicRoute>
                    <PublicRoute path="/reset/password/:token" exact>
                        <ResetPassword />
                    </PublicRoute>
                    <PublicRoute path="/updates" exact>
                        <Updates />
                    </PublicRoute>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
