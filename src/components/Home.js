import React from 'react'
import '../css/home.css'

function Home(props) {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className="info">
          <h1>{props.heading}</h1>
          <p>{props.subHeading}</p>
          <div id="alert">
            <h3>Admin Email: {props.adminId} </h3>
            <h3>Client Email: {props.clientId}</h3>
          </div>
          <div className='inputField'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder={props.placeholder} />
          </div>
          <div className='inputField'>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
          </div>
          <div id="forgotSection">
            <div>
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <a href="">Forgot password?</a>
          </div>
          <button className="btn">Login</button>
          <div className="creAcc">
            <span>New on our platform?</span>
            <a href="">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
