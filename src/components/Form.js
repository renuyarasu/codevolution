import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topics: 'react'
        }
    }
    hadleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    hadleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    hadleTopicsChange = (event) => {
        this.setState({
            topics: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="50%" height='50' align="left" valign="top"><label>Username: </label> </td>
                            <td width="50%" align="left" valign="top"> <input type="text" value={this.state.username} onChange={this.hadleUsernameChange} /></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><label>Comments: </label></td>
                            <td align="left" valign="top"><textarea cols="30" rows="5" value={this.state.comments} onChange={this.hadleCommentsChange}></textarea></td>
                        </tr>
                        <tr>
                            <td align="left" height='40' valign="top"><label>Topics: </label></td>
                            <td align="left" valign="top"><select value={this.state.topics} onChange={this.hadleTopicsChange}>
                                <option value="react">React</option>
                                <option value="angular">Angular</option>
                                <option value="vue">Vue</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><label>&nbsp; </label></td>
                            <td align="left" valign="top"><button type="submit">Submit</button></td>
                        </tr>
                    </tbody>
                </table>

            </form>
        )
    }
}

export default Form
