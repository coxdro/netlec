/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo, SignBack, Facebook, Twitter, Instagram} from '../Entryfile/imagepath.jsx'

class ForgotPassword extends Component {

   render() {
      return (
          <div className="main-wrapper">
            <Helmet>
                    <title>Forgot Password - HRMS Admin Template</title>
                    <meta name="description" content="Login page"/>					
            </Helmet>
            <div className="row">
              <div className="account-content col-md-5" style={{paddingTop:'100px'}}>
                <div className="container">
                  {/* Account Logo */}
                  <div className="account-logo">
                    <a href="/light/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
                  </div>
                  {/* /Account Logo */}
                  <div className="account-box">
                    <div className="account-wrapper">
                      <h3 className="account-title">Forgot Password?</h3>
                      <p>Enter the email address associated with your account.</p>
                      {/* Account Form */}
                      <form>
                        <div className="form-group">
                          <input className="form-control" id="forget_useremail" type="email" placeholder="Email" />
                        </div>
                        <label className="text-danger" style={{fontSize:'14px'}} id="valid_forget">
                          Enter Valid User Email
                        </label>
                        <div className="form-group text-center">
                          <button className="btn btn-primary account-btn" id="btn_forget" type="button">Get Reset Link</button>
                        </div>
                        <div className="account-footer">
                          <p>Back to <a href="/light/login">Login</a></p>
                        </div>
                      </form>
                      {/* /Account Form */}
                    </div>
                  </div><br/>
                  <div className="" style={{marginTop:'81.12px',textAlign:'center'}}>
                    <a href='https://www.facebook.com'><img src={Facebook}/></a>
                    <a href="https://www.instagram.com"><img src={Instagram} style={{marginLeft:'5%'}}/></a>
                    <a href="https://www.twitter.com"><img src={Twitter} style={{marginLeft:'5%'}}/></a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <img src={SignBack} style={{width:'100%'}} />
              </div>
            </div>
          
        </div>
      );
   }
}


export default ForgotPassword;
