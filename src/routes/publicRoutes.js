import React from "react";
import { Route, } from "react-router-dom";

function PublicRoutes({ component: Component, ...rest }) {
  return (
    <div>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
}

export default PublicRoutes;
