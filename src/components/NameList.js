import React, { Component } from 'react'

const names = ['VedaGna','Hindu','Renu'];
const nameList = names.map((name, index) => <h1 key={index}>{index}. {name}</h1>)
class NameList extends Component {
    render() {
        return (
            <div>
              {nameList}
            </div>
        )
    }
}

export default NameList
