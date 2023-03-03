import React from 'react'
import "./VisionCard.css"

const VisionCard = (props) => {
  return (
    <div className = "vision-card">
            <div className = "vision-profile" style = {props.imgbg}>
                <img src = {props.image} alt = "" className = "vision-profile-img"></img>
            </div>

            <div className = "vision-card-textbox">
                <div>
                    <h2>
                        {props.title}
                    </h2>
                </div>
                <span id = "spacer"></span>
                <div>
                    <h5>
                        {props.description}
                    </h5>
                </div>
            </div>
    </div>
  )
}

export default VisionCard