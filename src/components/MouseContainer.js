import React, { useState } from 'react';
import HookMouseMove from './HookMouseMove';

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseMove/>}
        </div>
    )
}

export default MouseContainer
