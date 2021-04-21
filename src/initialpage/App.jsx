import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// We will create these two pages in a moment
//Authendication
import LoginPage from './loginpage'
import RegistrationPage from './RegistrationPage'
import TutorRegistrationPage from './TutorRegistrationPage'
import ForgotPassword from './forgotpassword'
import OTP from './otp'
import LockScreen from './lockscreen'

import Home from './Home';

//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import TutorLayout from './Sidebar/TutorLayout';
import chatlayout from './Sidebar/chatlayout';

//Error Page
import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';


// import 'Assets/css/font-awesome.min.css';

import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// import UserPage from './pages/UserPage'
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
// const InitialPath = ({ component: Component, ...rest, authUser }) =>
//    <Route
//       {...rest}
//       render={props =>
//          authUser
//             ? <Component {...props} />
//             : <Redirect
//                to={{
//                   pathname: '/login',
//                   state: { from: props.location }
//                }}
//             />}
//    />;

export default class App extends Component {
    componentDidMount(){
        if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
        || location.pathname.includes("otp")|| location.pathname.includes("lockscreen") ) {
            // $('body').addClass('account-page');
        }else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
            $('body').addClass('error-page');
        }
        if (location.pathname.includes('student_profile') || location.pathname.includes('tutor_profile')) {
            $('.chat-contents').hide();
        }
        if(location.pathname.includes('student-profileedit') || location.pathname.includes('tutor-profileedit')) {
            $('#btn_profile_group').hide();
        }
    }
       render(){
            const { location, match, user } = this.props;
            
            
            // if (location.pathname === '/') {
            // if (user === null) {
            //     return (<Redirect to={'/login'} />);
            // } else {
            //     return (<Redirect to={'/light/app/main/dashboard'} />);
            // }
            // }
            if (location.pathname === '/') {
                 
                   return (<Redirect to={'/home'} />);
                
             }
            return (
                <Switch>
                    {/* <InitialPath
                        path={`${match.url}app`}
                        // authUser={user}
                        component={DefaultLayout}
                    /> */}
                    {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} /> */}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/forgotpassword" component={ForgotPassword} />
                    <Route path="/register" component={RegistrationPage} />
                    <Route path="/tutorregister" component={TutorRegistrationPage} />
                    <Route path="/otp" component={OTP} />
                    <Route path="/lockscreen" component={LockScreen} />
                    <Route path="/home" component={Home} />

                    <Route path="/app" component={DefaultLayout} />
                    <Route path="/tutor" component={TutorLayout} />
                    <Route path="/conversation" component={chatlayout} />
                    
                    <Route path="/error-404" component={Error404} />
                    <Route path="/error-500" component={Error500} />
                </Switch>
            )
        }
         
}
