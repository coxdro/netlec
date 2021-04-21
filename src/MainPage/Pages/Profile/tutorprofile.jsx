/**
 * TermsCondition Page
 */
 import React, { Component } from 'react';
 import {PlaceHolder,Attachment,Avatar_05,Avatar_02,Avatar_13,Avatar_16,User,Avatar_09,Avatar_10, StudentCard, TutorVideo, TutorEducation, Sun, Mon, Tue, Wed, Thu, Fri, Sat } from '../../../Entryfile/imagepath'
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
                                    <a href='/light/tutor/main/tutor-profileedit'><i className="fa fa-edit text-info" style={{fontSize:'21px', marginLeft:'90%'}}/></a>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 text-center" style={{verticalAlign:'center'}}>
                                        {/* <div className="profile-img-wrap"> */}
                                            {/* <div className="profile-img"> */}
                                                <a href="#"><img alt="" style={{width:'50%', borderRadius:'50%'}} className="img-circle" src={Avatar_02} /></a>
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row" style={{fontSize:'14px', textAlign:'right'}}>
                                            <div className="col-md-10"></div>
                                            <div className="col-md-2">
                                                <span className="text-center" style={{backgroundColor:'#FFAA00', color:'white', textAlign:'center'}}>Pro &nbsp;</span> Member
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
                                        <div className="row">
                                            <div className="col-md-10">
                                                <small style={{color:'#707070'}}>Rating</small><br/>
                                                <label style={{color:'#FFAA00', fontSize:'16px'}}><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star-half-full"/> 4.5</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <small style={{color:'#707070'}}>Nick Name</small><br/>
                                                <label>Mind Master</label>
                                            </div>
                                            <div className="col-md-3">
                                                <small style={{color:'#707070'}}>Gender</small><br/>
                                                <label>Male</label>
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
                                <div className="row" style={{padding:'0 4%'}}>
                                    <div className="col-md-12">
                                        <ul className="nav nav-tabs nav-tabs-bottom">
                                            <li className="nav-item"><a className="nav-link active" href="#bottom-tab1" data-toggle="tab">Education Profile</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#bottom-tab2" data-toggle="tab">Availability Day and Time</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="bottom-tab1">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Total Experience</small><br/>
                                                                <label style={{fontSize:'16px'}}>7 Years</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Teaching Experience</small><br/>
                                                                <label style={{fontSize:'16px'}}>7 Years</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Charges per Hour</small><br/>
                                                                <label style={{fontSize:'16px'}}>80 AED</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Language Skill</small><br/>
                                                                <label style={{fontSize:'16px'}}>English - Intermidiate</label><br/>
                                                                <label style={{fontSize:'16px'}}>Arabic - Native</label><br/>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Subjects/ Services</small><br/>
                                                                <label style={{fontSize:'16px'}}>Maths School Level</label><br/>
                                                                <label style={{fontSize:'16px'}}>English PG Level</label><br/>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Uploaded video</small><br/>
                                                                <img src={TutorVideo}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="row">
                                                            <div className="col-md-11">
                                                                <small style={{fontSize:'12px', color:'#959595'}}>About me</small><br/>
                                                                <p style={{fontSize:'12px'}}>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.</p>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Education/ Certificates</small>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{border: '1px solid #DFE3F3', borderRadius:'4px', padding:'5px 0'}}>
                                                            <div className="col-md-1" style={{textAlign:'right'}}>
                                                                <img src={TutorEducation}/>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <label style={{fontSize:'18px'}}>University of Jazeera</label><br/>
                                                                <label style={{fontSize:'14px', color:'#5A5A5A'}}>Bachelor degree 2009 - 2013</label>
                                                            </div>
                                                            <div className="col-md-2 text-center" style={{paddingTop:'10px'}}>
                                                                <i className="fa fa-check-circle text-center text-success"/><br/>
                                                                <small className="text-success text-center">verified</small>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{border: '1px solid #DFE3F3', borderRadius:'4px', padding:'5px 0', marginTop:'5px'}}>
                                                            <div className="col-md-1" style={{textAlign:'right'}}>
                                                                <img src={TutorEducation}/>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label style={{fontSize:'18px'}}>University of Jazeera</label><br/>
                                                                <label style={{fontSize:'14px', color:'#5A5A5A'}}>Bachelor degree 2009 - 2013</label>
                                                            </div>
                                                        </div><br/>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                <small style={{fontSize:'12px', color:'#959595'}}>Experiance Certificates</small>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{border: '1px solid #DFE3F3', borderRadius:'4px', padding:'5px 0'}}>
                                                            <div className="col-md-1" style={{textAlign:'right'}}>
                                                                <img src={TutorEducation}/>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label style={{fontSize:'18px'}}>Head of department</label><br/>
                                                                <label style={{fontSize:'14px', color:'#5A5A5A'}}>University of California 2008 - 2012</label>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{border: '1px solid #DFE3F3', borderRadius:'4px', padding:'5px 0', marginTop:'5px'}}>
                                                            <div className="col-md-1" style={{textAlign:'right'}}>
                                                                <img src={TutorEducation}/>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label style={{fontSize:'18px'}}>Physics faculty</label><br/>
                                                                <label style={{fontSize:'14px', color:'#5A5A5A'}}>University of Sharjah - 2013 - Present</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{marginTop:'33px'}}>
                                                    <div className='row'>
                                                        <div className="col-md-12">
                                                            <small style={{fontSize:'12px', color:'#959595'}}>Total Experience</small>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='row' style={{textAlign:'center'}}>
                                                            <div style={{width:'13.3%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#F5F7FE', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Sun} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#E9EEFF', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Mon} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#D5DCF6', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Tue} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#C2CCF2', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Wed} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#D5DCF6', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Thu} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#E9EEFF', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Fri} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                                <div className='card' style={{minHeight:'323px', backgroundColor:'#F5F7FE', padding:'30px 10%'}}>
                                                                    <div >
                                                                        <img src={Sat} style={{borderRadius:'50%', width:'100%'}}/>
                                                                    </div>
                                                                    <div style={{backgroundColor:'white', textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                                        <span>09:00AM</span><br/>
                                                                        <span>11:00AM</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="bottom-tab2">
                                                Tab content 2
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
 