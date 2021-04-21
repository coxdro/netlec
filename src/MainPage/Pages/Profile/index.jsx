/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import StudentProfileedit from "./studentprofileedit"
import StudentProfile from "./studentprofile"


const subscriptionroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/student-profile`} />
        <Route path={`${match.url}/student-profileedit`} component={StudentProfileedit} />
        <Route path={`${match.url}/student-profile`} component={StudentProfile} />
    </Switch>
);

export default subscriptionroute;
