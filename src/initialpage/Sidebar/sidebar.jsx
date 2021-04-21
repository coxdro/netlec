/**
 * App Header
 */
 import React, { Component } from 'react';
 import { withRouter } from 'react-router-dom';
 import {User,Avatar_02,Avatar_05,Avatar_09,Avatar_10} from "../../Entryfile/imagepath"
 
 class Sidebar extends Component {
    render() {
     
     const {  location } = this.props
     let pathname = location.pathname
 
     return (
         <div className="sidebar" id="sidebar">
 
             <div className="chat-window video-window">
                <div className="fixed-header">
                  <ul className="nav" style={{backgroundColor:'#F92145', height:'54px', borderRightColor:'#F92145'}}>
                    <li className="nav-item"><a className="nav-link active" href="#profile_tab" data-toggle="tab"></a></li>
                  </ul>
                </div>
                <div className="tab-content chat-contents" style={{backgroundColor:'white'}}>
                  <div className="content-full tab-pane show active" id="profile_tab">
                    <div className="display-table">
                      <div className="table-row">
                        <div className="table-body">
                          <div className="table-content">
                            <div className="chat-profile-img">
                              <div className="edit-profile-img">
                                <img src={Avatar_02} alt="" />
                                <span className="change-img">Change Image</span>
                              </div>
                              <small className="text-muted">Verified </small><i className="fa fa-check-circle" style={{color:'#12D06C', fontSize:'12px'}} />
                              <h3 className="user-name m-t-10 mb-0" style={{fontSize:'15px'}}>Dorothy Williamson</h3>
                              <small className="text-muted">STD#125, Course name</small><br/>
                              <small className="text-muted">Female</small><br/>
                              <small className="text-muted">Sharjah, United Arab Emirates</small>
                              <a href="" className="edit-btn">FREE<br/><span style={{backgroundColor:'white', color:'#5A5A5A'}}>Member</span></a>
                              
                            </div>
                            <div style={{textAlign:'center'}} id="btn_profile_group">
                              <a href="/light/app/main/student_profile"><button className="btn btn-outline-primary btn-sm" style={{fontSize:'12px'}}>View Profile</button>&nbsp;</a>
                              <a href="/light/app/main/student-profileedit"><button className="btn btn-primary btn-sm" id="btn_update_profile" style={{fontSize:'12px'}}>Update Profile</button></a>
                            </div>
                            <div className="chat-profile-info">
                              <ul className="user-det-list" style={{fontSize:'12px'}}>
                                <li>
                                  <span>Languages:</span>&nbsp;
                                  <span className="text-muted">English, Hindi</span>
                                </li>
                                <li>
                                  <span>Phone:</span>&nbsp;
                                  <span className="text-muted">+971 50 1234 567</span> <i className="fa fa-check-circle" style={{color:'#12D06C', fontSize:'12px'}} />
                                </li>
                                <li>
                                  <span>Email:</span>&nbsp;
                                  <span className="text-muted">wiliam@domain.com</span> <i className="fa fa-check-circle" style={{color:'#12D06C', fontSize:'12px'}} />
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <label style={{fontSize:'12px', color:'#5A5A5A', marginLeft:'10%'}}>Account Balance</label>
                              <label style={{fontSize:'12px', color:'#0D6EFD', marginLeft:'10%'}}>Deposit Funds</label>
                            </div>
                            <div className="row">
                              <label style={{fontSize:'18px', color:'#5A5A5A', marginLeft:'10%'}}>AED 0.00</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
 
           
         </div>
        
       );
    }
 }
 
 export default withRouter(Sidebar);
 