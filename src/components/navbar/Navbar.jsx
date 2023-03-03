import React from 'react'
import { Link } from "react-router-dom"

import Logo from "../../assets/images/logo.png"

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className = "navcontainer subbody">
        <Link to = "/">
          <div>
            <img src = {Logo} alt = "2023 Solution Challenge"  id = "navlogo"></img>
          </div>
        </Link>
        
        <div className = "navlinks">
            
            <div className = "navbutton"><Link to = "/"><p>Challenge</p></Link></div>
            <div className = "navbutton"><Link to = "/timeline"><p>Timeline</p></Link></div>
            <div className = "navbutton"><Link to = "/un-sdgs"><p>UN 17 SDGs</p></Link></div>
            <div className = "navbutton"><Link to = "/resources"><p>Resources</p></Link></div>
            <div className = "navbutton"><Link to = "/demo-day"><p>Demo Day</p></Link></div>
            <div className = "navbutton"><Link to = "/faqs"><p>FAQs</p></Link></div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar