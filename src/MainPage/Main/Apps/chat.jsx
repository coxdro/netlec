/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {PlaceHolder,Attachment,Avatar_05,Avatar_02,Avatar_13,Avatar_16,User,Avatar_09,Avatar_10} from '../../../Entryfile/imagepath'

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
                    <li className="nav-item">
                      <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-home'></i> Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-inbox'></i> Inbox</a>
                    </li>
                    <li className="nav-item">
                      <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-inbox'></i> My Courses</a>
                    </li>
                    <li className="nav-item">
                      <a style={{marginRight:'10px'}} style={{fontSize:'14px', color:'white'}}><i className='fa fa-inbox'></i> Refer A Friend</a>
                    </li>
                  </ul>
                  <ul className="nav custom-menu">
                    <li className="nav-item">
                      <a className="nav-link task-chat profile-rightbar float-right" id="task_chat" href="#task_window"><i className="fa fa-user" /></a>
                    </li>
                    <li className="nav-item">
                      <a href="/light/conversation/voice-call" className="nav-link"><i className="fa fa-phone" /></a>
                    </li>
                    <li className="nav-item">
                      <a href="/light/conversation/video-call" className="nav-link"><i className="fa fa-video-camera" /></a>
                    </li>
                    <li className="nav-item dropdown dropdown-action">
                      <a aria-expanded="false" data-toggle="dropdown" className="nav-link dropdown-toggle" href=""><i className="fa fa-cog" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="" className="dropdown-item">Delete Conversations</a>
                        <a href="" className="dropdown-item">Settings</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-contents">
                <div className="chat-content-wrap">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Hello. What can I do for you?</p>
                                <span className="chat-time">8:30 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-line">
                          <span className="chat-date">October 8th, 2018</span>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/light/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_05} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>I'm just looking around.</p>
                                <p>Will you tell me something about yourself? </p>
                                <span className="chat-time">8:35 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Are you there? That time!</p>
                                <span className="chat-time">8:40 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Where?</p>
                                <span className="chat-time">8:35 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                <span className="chat-time">8:42 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/light/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_05} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>You wait for notice.</p>
                                <span className="chat-time">8:30 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <span className="chat-time">8:50 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK?</p>
                                <span className="chat-time">8:55 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content img-content">
                                <div className="chat-img-group clearfix">
                                  <p>Uploaded 3 Images</p>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                </div>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK!</p>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/light/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_05} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Uploaded 3 files</p>
                                <ul className="attach-list">
                                  <li><i className="fa fa-file" /> <a href="#">example.avi</a></li>
                                  <li><i className="fa fa-file" /> <a href="#">activity.psd</a></li>
                                  <li><i className="fa fa-file" /> <a href="#">example.psd</a></li>
                                </ul>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <span className="chat-time">8:50 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>OK?</p>
                                <span className="chat-time">8:55 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content img-content">
                                <div className="chat-img-group clearfix">
                                  <p>Uploaded 6 Images</p>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                  <a className="chat-img-attach" href="#">
                                    <img width={182} height={137} alt="" src={PlaceHolder} />
                                    <div className="chat-placeholder">
                                      <div className="chat-img-name">placeholder.jpg</div>
                                      <div className="chat-file-desc">842 KB</div>
                                    </div>
                                  </a>
                                </div>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/light/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_05} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <ul className="attach-list">
                                  <li className="pdf-file"><i className="fa fa-file-pdf-o" /> <a href="#">Document_2016.pdf</a></li>
                                </ul>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>	
                        <div className="chat chat-right">
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <ul className="attach-list">
                                  <li className="pdf-file"><i className="fa fa-file-pdf-o" /> <a href="#">Document_2016.pdf</a></li>
                                </ul>
                                <span className="chat-time">9:00 am</span>
                              </div>
                              <div className="chat-action-btns">
                                <ul>
                                  <li><a href="#" className="share-msg" title="Share"><i className="fa fa-share-alt" /></a></li>
                                  <li><a href="#" className="edit-msg"><i className="fa fa-pencil" /></a></li>
                                  <li><a href="#" className="del-msg"><i className="fa fa-trash-o" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/light/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_05} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <p>Typing ...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <div className="message-bar">
                  <div className="message-inner">
                    <a className="link attach-icon" href="#" data-toggle="modal" data-target="#drag_files"><img src={Attachment} alt="" /></a>
                    <div className="message-area">
                      <div className="input-group">
                        <textarea className="form-control" placeholder="Type message..." defaultValue={""} />
                        <span className="input-group-append">
                          <button className="btn btn-custom" type="button"><i className="fa fa-send" /></button>
                        </span>
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
              <div className="sidebar-menu">
                <ul>
                  <li> 
                    <a href="/light/app/main/dashboard"  style={{backgroundColor:'#0D6EFD'}}><i className="la la-home" /> <span>Back to Home</span></a>
                  </li>
                  <li className="menu-title"><span>Chat Groups</span> <a href="#" data-toggle="modal" data-target="#add_group"><i className="fa fa-plus" /></a></li>
                  <li> 
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={User} />
                      </span> 
                      <span className="chat-user">#General</span>
                    </a>
                  </li>
                  <li> 
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={User} />
                      </span> 
                      <span className="chat-user">#Video Responsive Survey</span>
                    </a>
                  </li>
                  <li> 
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={User} />
                      </span> 
                      <span className="chat-user">#500rs</span>
                    </a>
                  </li>
                  <li> 
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={User} />
                      </span> 
                      <span className="chat-user">#warehouse</span>
                    </a>
                  </li>
                  <li className="menu-title">Direct Chats <a href="#" data-toggle="modal" data-target="#add_chat_user"><i className="fa fa-plus" /></a></li>
                  <li>
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                      </span> 
                      <span className="chat-user">John Doe</span> <span className="badge badge-pill bg-danger">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={Avatar_09} /><span className="status offline" />
                      </span> 
                      <span className="chat-user">Richard Miles</span> <span className="badge badge-pill bg-danger">7</span>
                    </a>
                  </li>
                  <li>
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={Avatar_10} /><span className="status away" />
                      </span> 
                      <span className="chat-user">John Smith</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="/light/conversation/chat">
                      <span className="chat-avatar-sm user-img">
                        <img className="rounded-circle" alt="" src={Avatar_05} /><span className="status online" />
                      </span> 
                      <span className="chat-user">Mike Litorus</span> <span className="badge badge-pill bg-danger">2</span>
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
