import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalsDemo() {
    return ReactDOM.createPortal (
        <h1>PortalsDemo</h1>,
        document.getElementById('portals-root')
    )
}
