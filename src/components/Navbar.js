import React from 'react'
import '../css/navbar.css'

function Navbar(props) {
  return (
    <div id="navbar">
        <h1 id="logo">{props.logo}</h1>
    </div>
  )
}

export default Navbar
