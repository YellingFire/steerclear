import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import LoginForm from '../Auth/LoginForm';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={(props) => {
        const typeUser = sessionStorage.getItem('typeUser');
        const userId = sessionStorage.getItem('userId');
        const username = sessionStorage.getItem('username');
        if (typeUser && userId && username) {
            return <Component { ...props } />;
        } else {
            return <Redirect to={ rest.redirectUrl } />
        }
    }} />
);

ProtectedRoute.propTypes = {
    redirectUrl: PropTypes.string.isRequired
}

export default ProtectedRoute;