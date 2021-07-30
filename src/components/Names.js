import React from 'react'

function Names() {
    const namelist = ['VedaGna', 'Hindu', 'Renu']
    return (
        <div>
            {
                namelist.map(name => <h1>{name}</h1>)
            }
        </div>
    )
}

export default Names
