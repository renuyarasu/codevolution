import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            item: 'Bread',
        }
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleItemChange = event => {
        this.setState({
            item: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.item}`)

    }
    render() {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Name: </label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                    <br />
                    <div>
                        <label>Comments: </label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange} cols="22" rows="3"></textarea>
                    </div>
                    <div>
                        <label>Items: </label>
                        <select value={this.state.item} onChange={this.handleItemChange}>
                            <option value="Bread">Bread</option>
                            <option value="Cereal">Cereal</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Milk">Milk</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
