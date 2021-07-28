import React from 'react'

export default function Greet() {
    return (
        React.createElement(
            'div', {id:'hello', className:'hello'}, React.createElement('h1', null, 'Hello React')
        )
    )
}
