import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

//This is a function based component of react

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/*
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" style={{height: '30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
                        <div className="bg-danger rounded mx-2" style={{height: '30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
                        <div className="bg-success rounded mx-2" style={{height: '30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
                        <div className="bg-warning rounded mx-2" style={{height: '30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>

                    </div>*/}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
