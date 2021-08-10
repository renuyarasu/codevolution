import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'VedaGna'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'VedaGna'
            })
        }, 2000)
    }
    render() {
        console.log('****** | Parent Component Render | ******');
        return (
            <div>
                <h1>Parent Component</h1>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
