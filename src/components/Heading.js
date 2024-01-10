import React from 'react'
import "../styles/Heading.css"

const Heading = ({text}) => {
    return (
        <div className="heading" >
            <div></div>
            <p><strong>{text}</strong></p>
            <div></div>
            
        </div>
    )
}

export default Heading