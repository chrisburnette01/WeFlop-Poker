import React from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
    children: React.ReactNode;
    path: string;
    exact: boolean;
}

const PublicRoute = ({ children, ...rest }: PublicRouteProps) => {
    return <Route {...rest} render={() => children} />;
};

export default PublicRoute;
