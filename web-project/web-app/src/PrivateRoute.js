import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import api from './api';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const currentUser = api.getCurrentUser();

    return (
        <Route {...rest} render={props => (
            currentUser ? <Component {...props} /> : <Navigate to="/login" />
        )}
    />
    );
};

export default PrivateRoute;