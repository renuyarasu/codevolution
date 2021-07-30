import React, { Component } from 'react'

export class UserGreet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // Conditional Rendering: Short Circuit Logical Operator

        return this.state.isLoggedIn && <h1>Welcome VedaGna</h1>

        // Conditional Rendering: Ternary operation approach
       /*  return(
            this.state.isLoggedIn ? <h1>Welcome VedaGna</h1> : <h1>Welcome Guest</h1>
        ) */

        // Conditional Rendering: Element Variables approach
        /* let message
        if (this.state.isLoggedIn) {
            message = <h1>Welcome VedaGna</h1>
        } else {
            message = <h1>Welcome Guest</h1>
        }
        return <div>{message}</div> */

        // Conditional Rendering: if/else
         /*  if(this.state.isLoggedIn){
             return <h1>Welcome VedaGna</h1>
         }else{
             return <h1>Welcome Guest</h1>
         } */
         /*
          return (
             <div>
                 <h1>Welcome VedaGna</h1>
                 <h1>Welcome Guest</h1>
             </div>
         ) */
    }
}

export default UserGreet
