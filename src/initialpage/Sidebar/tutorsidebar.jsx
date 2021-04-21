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
                              <h3 className="user-name m-t-10 mb-0" style={{fontSize:'15px'}}>Matthew Schneider</h3>
                              <small className="text-muted">M.Sc. (Physics), B.Ed </small><br/>
                              <small className="text-muted">Male</small><br/>
                              <small className="text-muted"><i className="fa fa-location" />Sharjah, United Arab Emirates</small>
                              <a href="" className="edit-btn1">Pro<br/><span style={{backgroundColor:'white', color:'#5A5A5A'}}>Member</span></a>
                              
                            </div>
                            <div style={{padding:'0 25px 0 25px', color:'#5A5A5A', fontSize:'14px'}}>                                
                                <label>Conducted</label>
                                <label style={{marginLeft:'25%'}}>dh/Hour</label>
                            </div>
                            <div style={{paddingLeft:'25px',color:'#5A5A5A', fontSize:'16px'}}>                                
                                <label>120 Classes</label>
                                <label style={{marginLeft:'10%'}}>AED 160</label>
                            </div>
                            <div style={{padding:'25px 0 0 25px',color:'#5A5A5A', fontSize:'14px'}}>                                
                                <label>Rating</label>
                                <label style={{marginLeft:'15%',color:'#FFAA00', fontSize:'16px'}}><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star-half-full"/> 4.5</label>
                            </div>
                            
                            <div className="chat-profile-info">
                              <ul className="user-det-list" style={{fontSize:'12px'}}>
                                <li>
                                  <span>Languages:</span>&nbsp;
                                  <span className="text-muted">English, Hindi</span>
                                </li>
                                <li>
                                  <span>Status:</span>&nbsp;
                                  <span className="text-muted">285 Hrs./ 4Yrs Experience</span>
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
                            <div className="chat-profile-info">
                                <ul className="user-det-list" style={{fontSize:'12px'}}>
                                    <li>
                                        <span>Teaches:</span><br/>
                                        <button className="btn btn-outline-light btn-sm">English</button>&nbsp;
                                        <button className="btn btn-outline-light btn-sm">Science</button>&nbsp;
                                        <button className="btn btn-outline-light btn-sm">Mathmatics</button>&nbsp;
                                        <button className="btn btn-outline-light btn-sm">IT</button>&nbsp;
                                        <button className="btn btn-outline-light btn-sm">Test Preper</button>&nbsp;
                                        <button className="btn btn-outline-light btn-sm">Science</button>&nbsp;
                                        <button className="btn btn-outline-light btn-sm">IT JEE</button>&nbsp;
                                    </li>
                                    <li>
                                        <span>Category:</span><br/>
                                        <button className="btn btn-outline-light btn-sm">IT Trainer</button>&nbsp;
                                    </li>
                                </ul>
                            </div>
                            <div style={{textAlign:'center'}} id="btn_profile_group">
                              <a href="/light/tutor/main/tutor_profile"><button className="btn btn-outline-info btn-sm" style={{fontSize:'12px'}}>View Profile</button></a>&nbsp;
                              <a href="/light/tutor/main/tutor-profileedit"><button className="btn btn-info btn-sm" style={{fontSize:'12px'}}>Update Profile</button></a>
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
 