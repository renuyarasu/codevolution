import React from 'react'

export default function Greet(props) {
    const{name, lName} = props
    return (
        <div>
            <h1>Hello {name} {lName}</h1>
        </div>
    )
}
