import React from 'react'
import { Link } from 'react-router-dom'

import "./FooterColumn.css"

const FooterColumn = (props) => {
  return (
    <div className = "footer-links-column">

        <h5 style = {{color: "#000000"}}><b>{props.columntitle}</b></h5>
        <ul>
            <Link>
                <li className = "footer-link">{props.link1}</li>
            </Link>
            <Link>
                <li className = "footer-link">{props.link2}</li>
            </Link>
            <Link>
                <li className = "footer-link">{props.link3}</li>
            </Link>
            <Link>
                <li className = "footer-link">{props.link4}</li>
            </Link>
            <Link>
                <li className = "footer-link">{props.link5}</li>
            </Link>
            <Link>
                <li className = "footer-link">{props.link6}</li>
            </Link>
            <Link>
                <li className = "footer-link">{props.link7}</li>
            </Link>
        </ul>

    </div>
  )
}

export default FooterColumn