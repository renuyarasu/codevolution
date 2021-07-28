import React from 'react'

const Greet = (props) => {
    return (
        <div>
            {/* <h1>Arrow Function with Props</h1> */}
            <h2>{props.name} a.k.a {props.lname}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default Greet
