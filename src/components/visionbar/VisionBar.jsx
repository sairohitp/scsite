import React from 'react'
import Groups from "../../assets/images/group.svg"
import Finalists from "../../assets/images/workspace-premium.svg"
import Winners from "../../assets/images/social-leaderboard.svg"

import VisionCard from '../visionbox/VisionCard'

import "./VisionBar.css"

const lightblue = {
    backgroundColor: "#90CAF9"
}

const lightred = {
    backgroundColor: "#EF9A9A"
}

const lightgreen = {
    backgroundColor: "#A5D6A7"
}

const VisionBar = () => {
  return (
    <section className = "subbody">

        <h2 className = "section-heading">Rewards and Benefits</h2>

        <span id = "spacer"></span>

        <div id = "vision-bar">
        
            <VisionCard 
            image = {Groups}
            imgbg = {lightblue}
            title = "Top 100 teams"
            description = "Win a T-shirt, certificate, and mentorship from Google and other experts to improve and submit a solution for the top prize."
            />

            <VisionCard 
            image = {Winners} 
            imgbg = {lightred}
            title = "Top 3 winners"
            description = "Win a $3,000 cash prize per team member and a feature in the Google Developers Blog and global Demo Day livestream, plus mentorship with a Google expert, swag, and a certificate."
            />

            <VisionCard 
            image = {Finalists} 
            imgbg = {lightgreen}
            title = "Top 10 finalists"
            description = "Win a $1,000 cash prize per team member and a feature in the Google Developers Blog and global Demo Day livestream, plus mentorship with a Google expert, swag, and a certificate."
            />
        
        </div>

    </section>
  )
}

export default VisionBar