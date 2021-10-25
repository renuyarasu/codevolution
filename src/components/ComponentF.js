import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <h1>User Context Value {user}, <br/> Channel Context Value {channel}.</h1>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
