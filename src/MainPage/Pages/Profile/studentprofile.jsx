/**
 * TermsCondition Page
 */
 import React, { Component } from 'react';
 import {PlaceHolder,Attachment,Avatar_05,Avatar_02,Avatar_13,Avatar_16,User,Avatar_09,Avatar_10, StudentCard } from '../../../Entryfile/imagepath'
 import $ from "jquery"
 export default class EmployeeProfile extends Component {
    

   render() {
     return (
         <div className="page-wrapper">
             {/* Chat Main Row */}
            <div className="chat-main-row">
                {/* Chat Main Wrapper */}
                <div className="chat-main-wrapper">
                {/* Chats View */}
                <div className="col-lg-9 message-view task-view">
                    <div className="chat-window">
                    <div className="fixed-header" style={{backgroundColor:'#F92145', color:'white'}}>
                        <div className="navbar">
                        <ul className="nav custom-menu">
                            <li className="nav-item active">
                            <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-home'></i> Dashboard</a>
                            </li>
                            <li className="nav-item">
                            <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-inbox'></i> Inbox</a>
                            </li>
                            <li className="nav-item">
                            <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-graduation-cap'></i> My Courses</a>
                            </li>
                            <li className="nav-item">
                            <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-users'></i> Refer A Friend</a>
                            </li>
                        </ul>
                        <ul className="nav custom-menu">
                            <li className="nav-item">
                            <a href="" className="nav-link" style={{fontSize:'14px', color:'white'}}><i className="fa fa-plus-circle" /> Post a project</a>
                            </li>
                            <li className="nav-item">
                            <a href="" className="nav-link" style={{fontSize:'14px', color:'white'}}><i className="fa fa-video-camera" /></a>
                            </li>
                            <li className="nav-item dropdown dropdown-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="nav-link dropdown-toggle" href="" style={{fontSize:'14px', color:'white'}}><i className="fa fa-cog" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="" className="dropdown-item">Settings</a>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div style={{padding:'30px'}}>
                        <div className="card">
                            <div className="card-header">
                                    <span className="card-title mb-0">My Profile</span>
                                    <a href='/light/app/main/student-profileedit'><i className="fa fa-edit text-info" style={{fontSize:'21px', marginLeft:'90%'}}/></a>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 text-center">
                                        {/* <div className="profile-img-wrap"> */}
                                            {/* <div className="profile-img"> */}
                                                <a href="#"><img alt="" style={{ borderRadius:'50%'}} className="img-circle" src={Avatar_02} /></a>
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row" style={{fontSize:'14px', textAlign:'right'}}>
                                            <div className="col-md-10"></div>
                                            <div className="col-md-2">
                                                <span className="text-center" style={{backgroundColor:'#12D06C', color:'white', textAlign:'center'}}>FREE &nbsp;</span> Member
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h3>Dorothy Williamson</h3>
                                            </div>
                                            <div className="col-md-2" style={{textAlign:'right'}}>
                                                <small className="text-muted">Verified </small><span className='status online' style={{fontSize:'9px', color:'white'}}><i className="fa fa-check" /></span>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginTop:'25px'}}>
                                            <div className="col-md-5">
                                                <small style={{color:'#707070'}}>Nick Name</small><br/>
                                                <label>Mind Master</label>
                                            </div>
                                            <div className="col-md-3">
                                                <small style={{color:'#707070'}}>Gender</small><br/>
                                                <label>Female</label>
                                            </div>
                                            <div className="col-md-4">
                                                <small style={{color:'#707070'}}>Mobile</small><br/>
                                                <label>+971 00 1230 456</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <small style={{color:'#707070'}}>Location</small><br/>
                                                <label>Sharjah, United Arab Emirates</label>
                                            </div>
                                            <div className="col-md-3">
                                                <small style={{color:'#707070'}}>Date of Birth</small><br/>
                                                <label>22 March 1989</label>
                                            </div>
                                            <div className="col-md-4">
                                                <small style={{color:'#707070'}}>WhatsApp</small><br/>
                                                <label>+971 00 1230 456</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small style={{color:'#707070'}}>Preferred Language</small><br/>
                                                <button className="btn btn-outline-light">English</button>&nbsp;
                                                <button className="btn btn-outline-light">Arabic</button>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* /Chats View */}
                {/* Chat Right Sidebar */}
                <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="task_window">
                    <div className="sidebar-inner slimscroll">
                        <div className='fixed-header' style={{backgroundColor:'#0D6EFD', height:'54px'}}>
                        <ul className="nav">
                            <li className="nav-item"><a className="nav-link active" href="#profile_tab" data-toggle="tab"  style={{fontSize:'14px', color:'white'}}><i className="fa fa-comment-o" /> Live Chat</a></li>
                        </ul>
                        </div>
                    <div className="sidebar-menu">
                        
                        <ul>
                        <li style={{backgroundColor:'#EFF2F8', padding:'18px 20px'}}> 
                            <input type="text" className="form-control input-sm" placeholder="Search User" style={{height:'32px', borderRadius:'20px'}}/>
                        </li>
                        <li>
                            <a href="">
                            <span className="chat-avatar-sm user-img">
                                <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                            </span> 
                            <span className="chat-user" style={{fontSize:'12px', color:'#5A5A5A', width:'100%'}}>Dorothy Wiliamson<br/><span style={{fontSize:'11px', color:'#979797'}}>Online</span><span style={{fontSize:'10px', color:'#5A5A5A', marginLeft:'70%'}}>5 Min</span></span> 
                            </a>
                        </li>
                        
                        <li>
                            <a href="">
                            <span className="chat-avatar-sm user-img">
                                <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                            </span> 
                            <span className="chat-user" style={{fontSize:'12px', color:'#5A5A5A', width:'100%'}}>Dorothy Wiliamson<br/><span style={{fontSize:'11px', color:'#979797'}}>Online</span><span style={{fontSize:'10px', color:'#5A5A5A', marginLeft:'70%'}}>5 Min</span></span> 
                            </a>
                        </li>
                        
                        <li>
                            <a href="">
                            <span className="chat-avatar-sm user-img">
                                <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                            </span> 
                            <span className="chat-user" style={{fontSize:'12px', color:'#5A5A5A', width:'100%'}}>Dorothy Wiliamson<br/><span style={{fontSize:'11px', color:'#979797'}}>Online</span><span style={{fontSize:'10px', color:'#5A5A5A', marginLeft:'70%'}}>5 Min</span></span> 
                            </a>
                        </li>
                        
                        <li>
                            <a href="">
                            <span className="chat-avatar-sm user-img">
                                <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                            </span> 
                            <span className="chat-user" style={{fontSize:'12px', color:'#5A5A5A', width:'100%'}}>Dorothy Wiliamson<br/><span style={{fontSize:'11px', color:'#979797'}}>Online</span><span style={{fontSize:'10px', color:'#5A5A5A', marginLeft:'70%'}}>5 Min</span></span> 
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* /Chat Right Sidebar */}
                </div>
                {/* /Chat Main Wrapper */}
            </div>
            {/* /Chat Main Row */}
           </div>
        
     );
   }
 }
 