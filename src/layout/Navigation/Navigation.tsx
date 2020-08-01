import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components';

import './style.scss';

interface NavigationProps {
    type: 'auth' | 'basic' | 'game';
}

const Navigation = ({ type }: NavigationProps) => {
    const location = useLocation();

    switch (type) {
        case 'basic':
            return (
                <div id="nav">
                    <Button
                        bottomGutter
                        title={'Sign up'}
                        to="/signup"
                        component="link"
                        active={location.pathname === '/signup'}
                    />
                    <Button
                        bottomGutter
                        title={'Sign in'}
                        to="/signin"
                        component="link"
                        active={location.pathname === '/signin'}
                    />
                    <Button
                        title={'Reset'}
                        to="/reset/password"
                        component="link"
                        active={location.pathname === '/reset/password'}
                    />
                </div>
            );
        case 'auth':
            return (
                <div id="nav">
                    <Button
                        bottomGutter
                        title={'Updates'}
                        to="/updates"
                        component="link"
                        active={location.pathname === '/updates'}
                    />
                    <Button
                        bottomGutter
                        title={'Play'}
                        to="/play"
                        component="link"
                        active={location.pathname === '/play'}
                    />
                    <Button
                        bottomGutter
                        title={'Contact'}
                        to="/contact"
                        component="link"
                        active={location.pathname === '/contact'}
                    />
                    <Button title={'Exit'} to="/logout" component="link" active={location.pathname === '/logout'} />
                </div>
            );
        case 'game':
            return (
                <div id="nav">
                    <Button
                        bottomGutter
                        title={'Sign up'}
                        to="/signup"
                        component="link"
                        active={location.pathname === '/signup'}
                    />
                    <Button
                        bottomGutter
                        title={'Sign in'}
                        to="/signin"
                        component="link"
                        active={location.pathname === '/signin'}
                    />
                    <Button
                        title={'Reset'}
                        to="/reset/password"
                        component="link"
                        active={location.pathname === '/reset/password'}
                    />
                </div>
            );
    }
};

export default Navigation;
