import React from "react"
import { Link } from "react-router-dom"

import GDSCLogo from "../../assets/images/gdsc-logo.png"

import GitHubLogo from "../../assets/images/socials/github.svg"
import FacebookLogo from "../../assets/images/socials/facebook.svg"
import TwitterLogo from "../../assets/images/socials/twitter.svg"
import InstagramLogo from "../../assets/images/socials/instagram.svg"
import LinkedINLogo from "../../assets/images/socials/linkedin.svg"

import HalfTriangle from "../../assets/images/shapes/half-triangle.png"
import ShapeGroup from "../../assets/images/shapes/shape-group.png"

import "./Footer.css"
import FooterColumn from "../footercolumn/FooterColumn"

const Footer = () => {
    return(
        <div>
            <div>
                <img src = {HalfTriangle} id = "triangle"></img>
            </div>
            <footer>
                <div className = "subbody sub-footer">

                    <div id = "footer-left-section">
                        
                        <div>
                            <Link to = "/">
                                <img src = {GDSCLogo} alt = "Club Logo" id = "gdsc-logo"></img>
                            </Link>
                        </div>
                        
                        <div id = "socials">

                            <div><Link><img src = {GitHubLogo} alt = "GitHub Icon" className = "social-img"></img></Link></div>
                            <div><Link><img src = {FacebookLogo} alt = "Facebook Icon" className = "social-img"></img></Link></div>
                            <div><Link><img src = {TwitterLogo} alt = "Twitter Icon" className = "social-img"></img></Link></div>
                            <div><Link><img src = {InstagramLogo} alt = "Instagram Icon" className = "social-img"></img></Link></div>
                            <div><Link><img src = {LinkedINLogo} alt = "Linkedin Icon" className = "social-img"></img></Link></div>

                        </div>

                    </div>

                    <div id = "footer-right-section">

                        
                        <FooterColumn 
                        columntitle = "Programs"
                        link1 = "Women Techmakers"
                        link2 = "Google Developer Group"
                        link3 = "Google Developer Experts"
                        link4 = "Google Developer Student Clubs"
                        link5 = "Accelerators"
                        
                        />

                        <FooterColumn 
                        columntitle = "Platforms"
                        link1 = "Android"
                        link2 = "Chrome"
                        link3 = "Firebase"
                        link4 = "Google Cloud Platform"
                        link5 = "All Products"
                        
                        />
                        
                        <FooterColumn 
                        columntitle = "Developer Console"
                        link1 = "Google API Console"
                        link2 = "Google Cloud Platform Console"
                        link3 = "Google Play Console"
                        link4 = "Firebase Console"
                        link5 = "Actions on Google Console"
                        link6 = "Case SDK Developer Console"
                        link7 = "Chrome Web Store Dashboard"
                        
                        />

                    </div>

                </div>
            </footer>
            <div>
                <img src = {ShapeGroup} id = "shape-group"></img>
            </div>
            
            <div className = "subbody" id = "disclaimer">

                <div>
                    <h6>Copyright © 2022 Google Inc. All rights reserved.</h6>
                </div>

                <div id = "disclaimer-right-container">

                    <div><Link><h6>Terms</h6></Link></div>
                    
                    <div><h6>|</h6></div>
                    
                    <div><Link><h6>Privacy</h6></Link></div>
                    
                    <div><h6>|</h6></div>
                    
                    <div><Link><h6>Sitemap</h6></Link></div>
                    
                    <div><h6>|</h6></div>
                    
                    <div><Link><h6>Region & Language</h6></Link></div>


                </div>

            </div>
        </div>
    )
}

export default Footer