import React from 'react'
import { UserContext, NameContext } from "../App";

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <NameContext.Consumer>
                                {
                                    channel => {
                                        return <h1>User Context Value{user}, <br/>Surname Context Value {channel}.</h1>
                                    }
                                }
                            </NameContext.Consumer>
                        )
                        
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
