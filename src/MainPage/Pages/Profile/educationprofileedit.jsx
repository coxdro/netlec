/**
 * TermsCondition Page
 */
 import React, { Component } from 'react';
 import {PlaceHolder,Attachment,Avatar_05,Avatar_02,Avatar_13,Avatar_16,User,Avatar_09,Avatar_10, StudentCard,  TutorVideo, TutorEducation, Sun, Mon, Tue, Wed, Thu, Fri, Sat, Video } from '../../../Entryfile/imagepath'
 
 export default class EmployeeProfile extends Component {


   render() {
     return (
         <div className="page-wrapper">
            <div className="chat-main-row">
                <div className="chat-main-wrapper">
                {/* Profile View */}
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
                            <h5 className="card-title mb-0">Lecture Education Profile</h5>
                        </div>
                            <div className="card-body" style={{padding:'50px 5%'}}>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-row">
                                                <label htmlFor="validationCustom01">About me</label>
                                                <textarea className="form-control" style={{minHeight:'139px', backgroundColor:'#F5F7FE'}} placeholder="Enter bio"></textarea>
                                                    
                                            </div><br/>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Total Experience</label>
                                                    <input type="text" className="form-control" id="validationCustom01" style={{backgroundColor:'#F5F7FE'}} placeholder="First Name" defaultValue="Dorothy" required />
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="validationCustom01">Teaching Experience</label>
                                                    <input type="text" className="form-control" id="validationCustom01" style={{backgroundColor:'#F5F7FE'}} placeholder="Last Name" defaultValue="Williamson" required />
                                                    
                                                </div>
                                            </div><br/>
                                            <div className="form-row">
                                                <div className='col-md-12'>
                                                    <label htmlFor="validationCustom01">Language Skill</label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-11">
                                                    <button type="button" className='btn btn-outline-light'>English - Intermidiate <i className="fa fa-times-circle text-danger" /></button>
                                                    <button type="button" className='btn btn-outline-light'>Arabic - Native <i className="fa fa-times-circle text-danger" /></button>
                                                </div>
                                                <div className="col-md-1">
                                                    <button type="button" style={{float:'right'}} className="btn btn-outline-info btn-sm">Hide</button>
                                                </div>
                                            </div><br/>
                                            <div className="form-row" style={{backgroundColor:'#F5F7FE', padding:'23px 4%'}}>
                                                <div className="col-md-6">
                                                    <select className="custom-select" required>
                                                        <option value>Select language</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <select className="custom-select" required>
                                                        <option value>Select level</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div><br/>
                                            <div className="form-row">
                                                <div className='col-md-12'>
                                                    <label htmlFor="validationCustom01">Subject/ Services</label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-10">
                                                    <button type="button" className='btn btn-outline-light'>Maths - Schoole level <i className="fa fa-times-circle text-danger" /></button>
                                                    <button type="button" className='btn btn-outline-light'>Arabic - Pg level <i className="fa fa-times-circle text-danger" /></button>
                                                </div>
                                                <div className="col-md-2">
                                                    <button type="button" style={{float:'right'}} className="btn btn-info btn-sm">Add New</button>
                                                </div>
                                            </div><br/>
                                            <div className="form-row" style={{backgroundColor:'#F5F7FE', padding:'23px 4%'}}>
                                                <div className="col-md-6">
                                                    <select className="custom-select" required>
                                                        <option value>Select subject</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <select className="custom-select" required>
                                                        <option value>Select level</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div><br/>
                                            
                                        </div>
                                        <div className="col-md-6">
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <small style={{fontSize:'12px', color:'#959595'}}>Education/ Certificates</small>
                                                </div>
                                            </div>
                                            <div className="row" style={{border: '1px solid #DFE3F3', borderRadius:'4px', padding:'5px 0'}}>
                                                <div className="col-md-1" style={{textAlign:'right'}}>
                                                    <img src={TutorEducation}/>
                                                </div>
                                                <div className="col-md-8">
                                                    <label style={{fontSize:'18px'}}>University of Jazeera</label><br/>
                                                    <label style={{fontSize:'14px', color:'#5A5A5A'}}>Bachelor degree 2009 - 2013</label>
                                                </div>
                                                <div className="col-md-2 text-center" style={{paddingTop:'10px'}}>
                                                    <i className="fa fa-check-circle text-center text-success"/><br/>
                                                    <small className="text-success text-center">verified</small>
                                                </div>
                                                <div className='col-md-1 text-center' style={{paddingTop:'20px'}}>
                                                    <i className="fa fa-times-circle" style={{fontSize:'20px', color:'#DFE3F3'}}/>
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
                                                <div className='col-md-1 text-center' style={{paddingTop:'20px'}}>
                                                    <i className="fa fa-times-circle" style={{fontSize:'20px', color:'#DFE3F3'}}/>
                                                </div>
                                            </div><br/>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <a data-toggle="modal" data-target="#add_education" id="btn_add_education" style={{float:'right'}} className="btn btn-outline-info">Add New</a>
                                                </div>
                                            </div><br/>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <small style={{fontSize:'12px', color:'#959595'}}>Experiance</small>
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
                                                <div className='col-md-1 text-center' style={{paddingTop:'20px'}}>
                                                    <i className="fa fa-times-circle" style={{fontSize:'20px', color:'#DFE3F3'}}/>
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
                                                <div className='col-md-1 text-center' style={{paddingTop:'20px'}}>
                                                    <i className="fa fa-times-circle" style={{fontSize:'20px', color:'#DFE3F3'}}/>
                                                </div>
                                            </div><br/>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <a data-toggle="modal" data-target="#add_experience" id="btn_add_experience" style={{float:'right'}} className="btn btn-outline-info">Add New</a>
                                                </div>
                                            </div><br/>
                                            <div className="form-row">
                                                <div className='col-md-12'>
                                                    <label htmlFor="validationCustom01">Charges per Hour</label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <input type="text" className="form-control input-sm" placeholder="AED." style={{backgroundColor:'#F5F7FE'}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <label htmlFor="validationCustom01">Subject/ Services</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <input type="file"/> */}
                                        <div className="col-md-6" style={{padding:'42px 10%', textAlign:'center', border:'2px dashed #DFE3F3', fontSize:'16px', color:'#5A5A5A'}}>
                                            Drop your file here or Browse<br/>
                                            <small style={{fontSize:'12px', color:'#979797'}}>Max.File size 20MB</small>
                                        </div>
                                        <div className='col-md-6'>
                                            <h4 style={{marginLeft:'8%'}}>Your link</h4>
                                            <div className='row'>
                                                <div className="col-md-1"><label style={{fontSize:'14px', float:'left'}}>Or</label></div>
                                                <div className="col-md-11"><input type='url' className="form-control" placeholde="https://..."/></div>
                                            </div>
                                             
                                        </div>
                                    </div><br/>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <label htmlFor="validationCustom01">Uploaded files</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <button type="button" className="btn btn-outline-light col-md-12">
                                                <div className="row">
                                                    <div className='col-md-2'>
                                                        <img src={Video}/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div>
                                                            <label style={{fontSize:'14px'}}>Filename.avi</label><label style={{marginLeft:'55%'}}>75%</label>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-1 text-center' style={{paddingTop:'15px'}}>
                                                        <i className="fa fa-times-circle text-danger" style={{fontSize:'20px'}}/>
                                                    </div>
                                                </div>
                                                
                                                
                                            </button>
                                        </div>
                                        <div className="col-md-5">
                                            <button type="button" className="btn btn-outline-light col-md-12">
                                                <div className="row">
                                                    <div className='col-md-2'>
                                                        <img src={Video}/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div>
                                                            <label style={{fontSize:'14px'}}>Filename.avi</label><label style={{marginLeft:'55%'}}>100%</label>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-1 text-center' style={{paddingTop:'15px'}}>
                                                        <i className="fa fa-times-circle text-danger" style={{fontSize:'20px'}}/>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop:'30px'}}>
                                        <div className='col-md-6'>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label htmlFor="validationCustom01">Choose Day</label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-12">
                                                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                                                        <li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">SUN</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">MON</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab3" data-toggle="tab">TUE</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab4" data-toggle="tab">WED</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab5" data-toggle="tab">THU</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab6" data-toggle="tab">FRI</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab7" data-toggle="tab">SAT</a></li>
                                                    </ul>
                                                    <div className="tab-content" style={{backgroundColor:"#F5F7FE"}}>
                                                        <div className="tab-pane show active" id="solid-rounded-justified-tab1">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="solid-rounded-justified-tab2">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="solid-rounded-justified-tab3">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="solid-rounded-justified-tab4">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="solid-rounded-justified-tab5">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="solid-rounded-justified-tab6">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="solid-rounded-justified-tab7">
                                                            <div className='row' style={{paddingTop:'35px', paddingBottom:'35px'}}>
                                                                <div className="col-md-2"></div>
                                                                <div className='col-md-3'>
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                                <div className="col-md-1">to</div>
                                                                <div className="col-md-3">
                                                                    <input type="time" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:'center'}}>
                                                                <button type="button" className="btn btn-info">Add Day</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label htmlFor="validationCustom01">Availability Day and Time</label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div style={{width:'13.3%'}}>
                                                    <div className='card' style={{minHeight:'323px', backgroundColor:'#F5F7FE', padding:'30px 10%'}}>
                                                        <div >
                                                            <img src={Sun} style={{borderRadius:'50%', width:'100%'}}/>
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
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
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
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
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            <span>09:00AM</span><br/>
                                                            <span>11:00AM</span>
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            <span>12:00AM</span><br/>
                                                            <span>02:00PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                    <div className='card' style={{minHeight:'323px', backgroundColor:'#C2CCF2', padding:'30px 10%'}}>
                                                        <div >
                                                            <img src={Wed} style={{borderRadius:'50%', width:'100%'}}/>
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
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
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            <span>09:00AM</span><br/>
                                                            <span>11:00AM</span>
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            <span>09:00PM</span><br/>
                                                            <span>11:00PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{width:'13.3%', marginLeft:'1%'}}>
                                                    <div className='card' style={{minHeight:'323px', backgroundColor:'#E9EEFF', padding:'30px 10%'}}>
                                                        <div >
                                                            <img src={Fri} style={{borderRadius:'50%', width:'100%'}}/>
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
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
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            <span>09:00AM</span><br/>
                                                            <span>11:00AM</span>
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            
                                                        </div>
                                                        <div style={{textAlign:'center', marginTop:'12px', color:'#333333', fontSize:'12px', padding:'7px 2%'}}>
                                                            <span>09:00PM</span><br/>
                                                            <span>11:00PM</span>
                                                        </div>
                                                    </div>
                                                </div>
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
                {/* /Profile View */}
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

            
                {/* Add Education Modal */}
                <div id="add_education" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Add Education</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>University</label>
                                    <input className="form-control" placeholder="Enter here" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Course Name</label>
                                    <input className="form-control" placeholder="Enter here" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Starting Year</label>
                                    <select className="select">
                                        <option>2021</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>End Year</label>
                                    <select className="select">
                                        <option>2021</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-12">
                                    <input type="checkbox"/> Highest qualification
                                </div>
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-info submit-btn">Add Education</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                {/* /Add Eduacation Modal */}

                {/* Add Experience Modal */}
                <div id="add_experience" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Add Experience</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Department/Institution</label>
                                    <input className="form-control" placeholder="Enter here" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Designation</label>
                                    <input className="form-control" placeholder="Enter here" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Starting Year</label>
                                    <select className="select">
                                        <option>2021</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>End Year</label>
                                    <select className="select">
                                        <option>2021</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-12">
                                    <input type="checkbox"/> I am currently working in this role
                                </div>
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-info submit-btn">Add Experience</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                {/* /Add Experience Modal */}
           </div>

           
        
     );
   }
 }
 