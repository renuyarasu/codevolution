import React, { useState, useEffect } from 'react';

function HookUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect - Changing Document Title');
        document.title = `You Clicked ${count} Times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
        </div>
    )
}

export default HookUseEffect
