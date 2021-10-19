import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',
        }
    }
    onChangeHanler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmithandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
            this.setState({ posts: response.data })
        })
        .catch(error => {
            console.log(error);
            this.setState({ errorMsg: 'Error retrieving data' })
        })
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmithandler}>
                    <div><input type="text" name="userId" value={userId} onChange={this.onChangeHanler} /></div>
                    <div><input type="text" name="title" value={title} onChange={this.onChangeHanler} /></div>
                    <div><input type="text" name="body" value={body} onChange={this.onChangeHanler} /></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
