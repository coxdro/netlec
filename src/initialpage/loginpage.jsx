/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo, SignBack, Facebook, Twitter, Instagram} from '../Entryfile/imagepath.jsx'

class Loginpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

   submit(event) {
    
   }


   render() {
     
      return (
         
         
        <div className="main-wrapper">
          <div className="row">
            <div className="col-md-5" style={{marginTop:'90px'}}>
                {/* Account Logo */}
                <div className="account-logo">
                  <a href="/light/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
                </div>
                {/* /Account Logo */}
                <div className="account-box">
                  <div className="account-wrapper">
                    <h1 className="account-title">Welcome back</h1>
                    <div className="account-footer">
                        <p>Don't have an account yet? <a href="/light/register">Register</a></p>
                    </div><br />
                    {/* Account Form */}
                    <form onSubmit={this.submit()}>
                      <div className="form-group">
                        <input className="form-control" id="username" type="email" onChange={this.handleChange} placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input className="form-control"  id="userpassword" type="password" onChange={this.handleChange} placeholder="Password" />
                      </div>
                      <div className="col-auto" style={{color:'#5A5A5A', fontSize:'14px'}}>
                        <input type="checkbox" />
                          Keep me logged in?
                      </div><br/>
                      <label className="text-danger" style={{fontSize:'14px'}} id="valid_login">
                        Enter Valid User name and Password
                      </label>
                      <div className="form-group text-center">
                        <button className="btn btn-primary account-btn" id="btn_signin" type="button">
                        Login</button>
                      </div>
                      <div className="col-auto">
                        <a className="text-muted" href="/light/forgotpassword">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                    {/* /Account Form */}
                  </div>
                </div>
                <div className="" style={{marginTop:'81.12px',textAlign:'center'}}>
                  <a href='https://www.facebook.com'><img src={Facebook}/></a>
                  <a href="https://www.instagram.com"><img src={Instagram} style={{marginLeft:'5%'}}/></a>
                  <a href="https://www.twitter.com"><img src={Twitter} style={{marginLeft:'5%'}}/></a>
                </div>
              </div>
              <div className="col-md-7">
                <img src={SignBack} style={{width:'100%', height:'100%'}}/>
              </div>
            </div>
            
          </div>
        
      );
   }
}

export default Loginpage;
