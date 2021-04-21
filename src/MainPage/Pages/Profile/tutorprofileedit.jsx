/**
 * TermsCondition Page
 */
 import React, { Component } from 'react';
 import {PlaceHolder,Attachment,Avatar_05,Avatar_02,Avatar_13,Avatar_16,User,Avatar_09,Avatar_10, StudentCard } from '../../../Entryfile/imagepath'
 
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
                    <div  style={{padding:'30px'}}>
                        <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Edit Profile</h5>
                        </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-9">
                                            
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">First Name</label>
                                                    <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" defaultValue="Dorothy" required />
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Last Name</label>
                                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Last Name" defaultValue="Williamson" required />
                                                    
                                                </div>
                                            </div><br/>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Nick Name</label>
                                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Nick Name" required />
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Nationality</label>
                                                    <select className="custom-select" required>
                                                        <option value>United Arab Emirates</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                    
                                                </div>
                                            </div><br/>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Mobile Number</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupPrepend">+971</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="" aria-describedby="inputGroupPrepend" required />
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">WhatsApp</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupPrepend">+971</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="" aria-describedby="inputGroupPrepend" required />
                                                        
                                                    </div>
                                                </div>
                                            </div><br/>
                                            <div className="form-row">
                                                <div className="col-md-3">
                                                    <label htmlFor="validationCustom01">Gender</label>
                                                    <select className="custom-select" required>
                                                        <option value={1}>Male</option>
                                                        <option value={2}>Female</option>
                                                    </select>
                                                    
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="validationCustom01">Date of birth</label>
                                                    <input type="date" className="form-control" id="validationCustom01" placeholder="DD/MM/YYYY" required />
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Nationality</label>
                                                    <select className="custom-select" required>
                                                        <option value>United Arab Emirates</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                    
                                                </div>
                                            </div><br/>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="edit-profile-img">
                                                <img src={Avatar_02} alt="" />
                                                <span className="change-img">Change Image</span>
                                            </div>
                                            <div className="text-center" style={{paddingTop:'20px'}}>
                                                <button className="btn btn-outline-primary" type="">Upload Profile</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9"></div>
                                        <div className="col-md-3 text-center" style={{textAlign:'center'}}>
                                            <button className="btn btn-primary" type="submit">Update Now</button>
                                        </div>
                                        
                                    </div>
                                </form>
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
 