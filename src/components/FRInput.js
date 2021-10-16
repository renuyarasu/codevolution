import React from 'react'

export const FRInput = React.forwardRef((pros, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
