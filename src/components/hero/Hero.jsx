import React from 'react'
import { Link } from 'react-router-dom'

import HeroImage from "../../assets/images/hero-image.png"

import "./Hero.css"

const Hero = () => {
  return (
    <section id = "hero-section" className = "subbody">

        <div id = "hero-text">

            <div>

                <h2>
                    Welcome to the
                </h2>
                <h1>
                    2023 Solution Challenge!
                </h1>
                <br /><br />
                <p>
                Registration is officially open for the 2023 Solution Challenge!
                <br /><br />
                Build a solution to a local problem using Google technologies, in accordance with 
                one or more of the United Nations 17 Sustainable Development Goals. 
                <br /><br />
                The Solution Challenge is open to members of Google Developer Student Clubs. 
                Join a Google Developer Student Club (GDSC) on the GDSC community page.
                <br /><br />
                1. Register below.<br />
                2. Form a team and build a solution.<br />
                3. Submit your solution between March 17 and March 31, 2023.
                </p>

            </div>
            
            <div>
                <Link to = "/register"><button><b>Register Now</b></button></Link>
            </div>

        </div>

        <div>
            <img src = {HeroImage} alt = "Hero" id = "hero-image"></img>
        </div>

    </section>
  )
}

export default Hero