import React, { Component } from 'react';
import Header from '../header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Layout({children}) {
    return (
         <Router>
         <Header/>
       <Switch>
          {children}    
       </Switch>
       </Router>
    );
}

export default Layout;