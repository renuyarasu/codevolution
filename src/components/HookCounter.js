import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            Count: {count}<br/><br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Decrement</button>
            <button onClick={() => setCount(count - 1)}>Increment</button>
        </div>
    )
}

export default HookCounter
