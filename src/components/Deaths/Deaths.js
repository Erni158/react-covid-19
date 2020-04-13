import React from 'react'

const Deaths = (props) => {
    return(
        <div className="deaths">
            <span>Zmarło: {props.deaths}</span>
        </div>
    )
}

export default Deaths