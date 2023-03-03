import React from 'react'
import SDGs from "../../assets/images/sdgs-expanded.png"
import "./SDGSection.css"

import { Link } from 'react-router-dom'

const SDGSection = () => {
  return (
    <section className = "subbody">
    
        <h2 className = "section-heading">What are the<br />
        United Nations 17 Sustainable Development Goals?</h2>

        <span id = "spacer"></span>

        <div id = "sdg-body">

            <div id = "sdg-text">
                <div>
                    <p>
                        Created by the United Nations in 2015, with support from all 193 United Nations Member States, the 17 Sustainable Development Goals aim to end poverty, ensure prosperity, and protect the planet.
                        <br /><br />
                        The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. 
                        <br /><br />
                        At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership.
                    </p>
                </div>
                
                <div>
                    <Link>
                        <button>
                            <b>Learn More</b>
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <img src = {SDGs} alt = "SDGs" id = "sdg-img"></img>
            </div>

        </div>
    
    </section>
  )
}

export default SDGSection