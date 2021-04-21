/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Admindashboard from './admindashboard';
import Tutordashboard from './tutordashboard';
import StudentDashboard from './studentdashboard';
import StudentProfile from '../../Pages/Profile/studentprofile';
import StudentUpdate from '../../Pages/Profile/studentprofileedit';
import TutorProfile from '../../Pages/Profile/tutorprofile';
import TutorUpdate from '../../Pages/Profile/tutorprofileedit';
import EducationUpdate from '../../Pages/Profile/educationprofileedit';

const DashboardRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route path={`${match.url}/dashboard`} component={StudentDashboard} />
      <Route path={`${match.url}/tutordashboard`} component={Tutordashboard} />
      <Route path={`${match.url}/student_profile`} component={StudentProfile} />
      <Route path={`${match.url}/student-profileedit`} component={StudentUpdate} />
      <Route path={`${match.url}/tutor_profile`} component={TutorProfile} />
      <Route path={`${match.url}/tutor-profileedit`} component={TutorUpdate} />
      <Route path={`${match.url}/education-profileedit`} component={EducationUpdate} />
   </Switch>
  
);

export default DashboardRoute;
