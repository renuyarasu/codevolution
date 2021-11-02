import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [fisrtName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${fisrtName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name: </label>
                <input {...bindFirstName} type="text" />
            </div>
            <div>
                <label>Last Name: </label>
                <input {...bindLastName} type="text" />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UserForm
