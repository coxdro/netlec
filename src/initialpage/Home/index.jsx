/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';


const JobRoute = ({ match }) => (
   <div className="dashboard-wrapper">
      <Switch>
         <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
         <Route path={`${match.url}/home`} component={Home} />
      </Switch>
   </div>
);

export default JobRoute;
