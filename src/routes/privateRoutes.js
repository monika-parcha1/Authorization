import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoutes({component: Component,...rest}) {
    let isAdmin = localStorage.getItem("role") === "admin"
    return (
        <div>
            <Route {...rest} render={props => (
            isAdmin  ?
                <Component {...props} />
            : <Redirect to="/welcome" />
        )} />  
        </div>
    );
}

export default PrivateRoutes;