import "./LoginPage.css"
import React from 'react'
import {Link} from "react-router-dom"

function LoginPage() {
  return (
    <div className="login-main">
      <h1>Login</h1>

      {/* BUTTON LAUNCHING MODAL */}
      <button 
        type="button"
        className="btn btn-primary login-btn"
        data-toggle="modal"
        data-target="#signInModal"
      >Sign In
      </button>

      {/* MODAL */}
      <div 
        className="modal fade"
        id="signInModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle" 
        aria-hidden="true"
        >
        <div 
          className="modal-dialog modal-dialog-centered" 
          role="document"
          >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Welcome back!</h5>
              <button type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-input-container">
                <p>Username</p>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="form-input-container">
                <p>E-mail</p>
                <input type="text" placeholder="Enter your e-mail" />
              </div>
              <div className="form-input-container">
                <p>Password</p>
                <input type="text" placeholder="Enter your password" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button"
                className="btn btn-secondary" 
                data-dismiss="modal"
                >Back
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                >Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON LAUNCHING MODAL */}
      <button 
        type="button"
        className="btn btn-primary login-btn"
        data-toggle="modal"
        data-target="#signUpModal"
      >Sign Up
      </button>

      {/* MODAL */}
      <div 
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle" 
        aria-hidden="true"
        >
        <div 
          className="modal-dialog modal-dialog-centered" 
          role="document"
          >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Register now!</h5>
              <button type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div className="form-input-container">
              <p>Username</p>
                <input type="text" placeholder="Pick yourself a username" />
              </div>
              <div className="form-input-container">
                <p>E-mail</p>
                <input type="text" placeholder="yourEmail@gmail.com" />
              </div>
              <div className="form-input-container">
                <p>Password</p>
                <input type="text" placeholder="Type a strong password" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button"
                className="btn btn-secondary" 
                data-dismiss="modal"
                >Back
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                >Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <button 
        type="button"
        className="btn btn-primary login-btn"
        onClick={event =>  window.location.href='/'}
      >Use as a guest
      </button>

      
      <Link to="/">
        <p>click it</p>
      </Link>
    </div>
  )
}

export default LoginPage
