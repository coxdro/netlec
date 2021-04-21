import { Button } from "bootstrap";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {headerlogo,IconPaperPlane, IconStudent, IconTutor, PlayStore, AppStore, homecontent} from '../../Entryfile/imagepath.jsx'

class JobsList extends Component
{
     
  UNSAFE_componentWillMount()
    {
      localStorage.removeItem('jobview')
        // this.fetchfolders()
    }
    onclickviewjobs(){
        localStorage.setItem("jobview","true")
        this.props.history.push('/horizontal')
        // window.location.reload()
        // this.props.history.push('/horizontal/jobview')
   }
    
    render(){
        return (
          <div className="main-wrapper">
          {/* Header */}
          <div className="header">
            {/* Logo */}
            <div className="header-left" style={{marginLeft:'15%'}}>
              <a href="/light/app/main/dashboard" className="logo">
                <img src={headerlogo} width={100} height={40} alt="" />
              </a>
            </div>
            {/* /Logo */}
            {/* Header Menu */}
            <ul className="nav user-menu" style={{marginRight:'15%'}}>
                <li className="nav-item">
                    <a className="nav-link" href="/light/login">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/light/login">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/light/login">HELP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/light/login">CONTACT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/light/login"><button type="button" className="btn btn-outline-primary">Login</button></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/light/register"><button type="button" className="btn btn-primary">Sign up</button></a>
                </li>
            </ul>
            {/* /Header Menu */}
            {/* Mobile Menu */}
            <div className="dropdown mobile-user-menu">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
              <div className="dropdown-menu dropdown-menu-right">
              <a className="nav-link" href="/light/login">HOME</a>
              <a className="nav-link" href="/light/login">ABOUT</a>
              <a className="nav-link" href="/light/login">HELP</a>
              <a className="nav-link" href="/light/login">CONTACT</a>
                <a className="dropdown-item" href="/light/login"><button type="button" className="btn btn-outline-primary">Login</button></a>
                <a className="dropdown-item" href="/light/register"><button type="button" className="btn btn-primary">Sign up</button></a>
              </div>
            </div>
            {/* /Mobile Menu */}
          </div>
          {/* /Header */}
          {/* Page Wrapper */}
          <div className="page-wrapper job-wrapper">
            {/* Page Content */}
            <div className="content" style={{ paddingTop:"100px"}}>
                <div className="row" style={{backgroundImage:`url(${homecontent})`}}>
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-2" style={{paddingTop:"175px"}}>
                        <p style={{color: "#0D6EFD", fontSize: '20px'}}>Register Now</p>
                        <h2 style={{color:"#F92145"}}>Let's Get Started!</h2>
                        <label style={{fontSize:"14px", color:"#5A5A5A"}}>Discover amazing teachers, post tuition jobs, take enriching courses</label>
                    </div>
                    <div className="col-md-2" style={{paddingTop:"25px"}}>
                        <div className="card flex-fill">
                            <div className="card-body text-center" style={{paddingTop:'51px', paddingBottom:'51px'}}>
                                <img src={IconStudent}/>
                                <h4 style={{fontSize:'35px', color: '#0D6EFD',marginTop:'50px'}}>Students</h4>
                                <label style={{border:'2px solid #0D6EFD', width:'19px', opacity: '1'}}></label>
                                <p>Discover amazing teachers, post tuition jobs, take enriching courses</p>
                                <a className="btn btn-info" style={{fontSize:'14px'}}>Find a Great Teacher</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card flex-fill" style={{backgroundColor: '#F92145', height:'100%'}}>
                            <div className="card-body text-center" style={{paddingTop:'51px', paddingBottom:'51px'}}>
                                <img src={IconTutor}/>
                                <h4 style={{fontSize:'40px', color: 'white',marginTop:'50px'}}>Tutors & Trainers</h4>
                                <label style={{border:'2px solid white', width:'19px', opacity: '1', height: '0px'}}></label>
                                <p style={{color:'white'}}>Find tuition jobs, build your teaching career, teach online courses</p>
                                <a className="btn btn-light form-control" href='/light/tutorregister' style={{fontSize:'16px', maxWidth:'174px', color: '#F92145'}}>Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:'91.81px'}}>
                    <div className="col-md-3"></div>
                    <div style={{maxWidth:'388px'}}>
                        <label style={{fontSize: '22px', fontWeight: 'bold', font:'normal normal 600 22px/33px Poppins'}}>Newsletter Sign Up</label>
                        <p style={{fontSize: '13px', letterSpacing : '0px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                    </div>
                    <div style={{width:'280px', marginLeft: '1%'}}>
                        <div className="input-group">
                            <input type='email' placeholder="Enter Email Address" className="form-control" style={{height:'55.78px', Width:'100%'}} aria-describedby="inputGroupPrepend"/>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend"><img src={IconPaperPlane}/></span>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft:'1%'}}>
                        <a href='https://play.google.com'><img src={PlayStore}/></a>
                    </div>
                    <div style={{marginLeft:'1%'}}>
                        <a href='https://www.apple.com'><img src={AppStore}/></a>
                    </div>
                </div>
            </div>
          </div>
          {/* /Page Wrapper */}
        </div>
          
        );
    }
       
}

  
  
export default JobsList;