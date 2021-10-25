import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, NameContext } from "../App";


function ComponentE() {
    const user = useContext(UserContext)
    const name = useContext(NameContext)

    return (
        <div>
            <h1>{user} - {name}</h1>
        </div>
    )
}

export default ComponentE
