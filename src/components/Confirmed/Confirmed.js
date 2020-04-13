import React from 'react'
import './confirmed.css'

const Confirmed = (props) => {
    return(
        <div className="confirmed">
            <span>Potwierdzonych: {props.confirmed}</span>
        </div>
    )
}

export default Confirmed