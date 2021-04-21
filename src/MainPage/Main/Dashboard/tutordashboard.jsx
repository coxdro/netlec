/**
 * Signin Firebase
 */

 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import {PlaceHolder,Attachment,Avatar_05,Avatar_02,Avatar_13,Avatar_16,User,Avatar_09,Avatar_10, StudentCard} from '../../../Entryfile/imagepath'
 
 class ChatPage extends Component {
   
    render() {
       return (
          <div className="page-wrapper">
             <Helmet>
                <title>Chat - HRMS Admin Template</title>
                <meta name="description" content="Chat"/>					
          </Helmet>
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
                         <a href="" className="dropdown-item">Delete Conversations</a>
                         <a href="" className="dropdown-item">Settings</a>
                       </div>
                     </li>
                   </ul>
                 </div>
               </div>
               <div className="chat-contents">
                 <div style={{padding:'20px 40px'}}>
                    <h3>Tutor Dashboard</h3>
                    <label style={{color:'#F92145', fontSize:'18px'}}>Hello Matthew Schneider, welcome back!</label>
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
       {/* Drogfiles Modal */}
       <div id="drag_files" className="modal custom-modal fade" role="dialog">
         <div className="modal-dialog modal-dialog-centered modal-md" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title">Drag and drop files upload</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">×</span>
               </button>
             </div>
             <div className="modal-body">
               <form id="js-upload-form">
                 <div className="upload-drop-zone" id="drop-zone">
                   <i className="fa fa-cloud-upload fa-2x" /> <span className="upload-text">Just drag and drop files here</span>
                 </div>
                 <h4>Uploading</h4>
                 <ul className="upload-list">
                   <li className="file-list">
                     <div className="upload-wrap">
                       <div className="file-name">
                         <i className="fa fa-photo" />
                         photo.png
                       </div>
                       <div className="file-size">1.07 gb</div>
                       <button type="button" className="file-close">
                         <i className="fa fa-close" />
                       </button>
                     </div>
                     <div className="progress progress-xs progress-striped">
                       <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                     </div>
                     <div className="upload-process">37% done</div>
                   </li>
                   <li className="file-list">
                     <div className="upload-wrap">
                       <div className="file-name">
                         <i className="fa fa-file" />
                         task.doc
                       </div>
                       <div className="file-size">5.8 kb</div>
                       <button type="button" className="file-close">
                         <i className="fa fa-close" />
                       </button>
                     </div>
                     <div className="progress progress-xs progress-striped">
                       <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                     </div>
                     <div className="upload-process">37% done</div>
                   </li>
                   <li className="file-list">
                     <div className="upload-wrap">
                       <div className="file-name">
                         <i className="fa fa-photo" />
                         dashboard.png
                       </div>
                       <div className="file-size">2.1 mb</div>
                       <button type="button" className="file-close">
                         <i className="fa fa-close" />
                       </button>
                     </div>
                     <div className="progress progress-xs progress-striped">
                       <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                     </div>
                     <div className="upload-process">Completed</div>
                   </li>
                 </ul>
               </form>
               <div className="submit-section">
                 <button className="btn btn-primary submit-btn">Submit</button>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* /Drogfiles Modal */}
       {/* Add Group Modal */}
       <div id="add_group" className="modal custom-modal fade" role="dialog">
         <div className="modal-dialog modal-dialog-centered modal-md" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title">Create a group</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">×</span>
               </button>
             </div>
             <div className="modal-body">
               <p>Groups are where your team communicates. They’re best when organized around a topic — #leads, for example.</p>
               <form>
                 <div className="form-group">
                   <label>Group Name <span className="text-danger">*</span></label>
                   <input className="form-control" type="text" />
                 </div>
                 <div className="form-group">
                   <label>Send invites to: <span className="text-muted-light">(optional)</span></label>
                   <input className="form-control" type="text" />
                 </div>
                 <div className="submit-section">
                   <button className="btn btn-primary submit-btn">Submit</button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
       {/* /Add Group Modal */}
       {/* Add Chat User Modal */}
       <div id="add_chat_user" className="modal custom-modal fade" role="dialog">
         <div className="modal-dialog modal-dialog-centered modal-md" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title">Direct Chat</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">×</span>
               </button>
             </div>
             <div className="modal-body">
               <div className="input-group m-b-30">
                 <input placeholder="Search to start a chat" className="form-control search-input" type="text" />
                 <span className="input-group-append">
                   <button className="btn btn-primary">Search</button>
                 </span>
               </div>
               <div>
                 <h5>Recent Conversations</h5>
                 <ul className="chat-user-list">
                   <li>
                     <a href="#">
                       <div className="media">
                         <span className="avatar align-self-center">
                           <img src={Avatar_16} alt="" />
                         </span>
                         <div className="media-body align-self-center text-nowrap">
                           <div className="user-name">Jeffery Lalor</div>
                           <span className="designation">Team Leader</span>
                         </div>
                         <div className="text-nowrap align-self-center">
                           <div className="online-date">1 day ago</div>
                         </div>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="#">
                       <div className="media ">
                         <span className="avatar align-self-center">
                           <img src={Avatar_13} alt="" />
                         </span>
                         <div className="media-body align-self-center text-nowrap">
                           <div className="user-name">Bernardo Galaviz</div>
                           <span className="designation">Web Developer</span>
                         </div>
                         <div className="align-self-center text-nowrap">
                           <div className="online-date">3 days ago</div>
                         </div>
                       </div>
                     </a>
                   </li>
                   <li>
                     <a href="#">
                       <div className="media">
                         <span className="avatar align-self-center">
                           <img src={Avatar_02} alt="" />
                         </span>
                         <div className="media-body text-nowrap align-self-center">
                           <div className="user-name">John Doe</div>
                           <span className="designation">Web Designer</span>
                         </div>
                         <div className="align-self-center text-nowrap">
                           <div className="online-date">7 months ago</div>
                         </div>
                       </div>
                     </a>
                   </li>
                 </ul>
               </div>
               <div className="submit-section">
                 <button className="btn btn-primary submit-btn">Submit</button>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* /Add Chat User Modal */}
       {/* Share Files Modal */}
       <div id="share_files" className="modal custom-modal fade" role="dialog">
         <div className="modal-dialog modal-dialog-centered modal-md" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title">Share File</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">×</span>
               </button>
             </div>
             <div className="modal-body">
               <div className="files-share-list">
                 <div className="files-cont">
                   <div className="file-type">
                     <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                   </div>
                   <div className="files-info">
                     <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                     <span className="file-author"><a href="#">Bernardo Galaviz</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                   </div>
                 </div>
               </div>
               <div className="form-group">
                 <label>Share With</label>
                 <input className="form-control" type="text" />
               </div>
               <div className="submit-section">
                 <button className="btn btn-primary submit-btn">Share</button>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* /Share Files Modal */}
     </div>
       );
    }
 }
 
 export default ChatPage;
 