import React from 'react'

export default function Click() {
    function clicked(params) {
        alert('Clicked')
    }
    return (
        <div>
            <button onClick={clicked}>Click</button>
        </div>
    )
}
