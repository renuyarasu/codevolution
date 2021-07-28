import React from 'react';

class Greet extends React.Component {
    state = {  }
    render() { 
        return (  
            // <h1>Class Component with Props</h1>
            <h1>{this.props.name} a.k.a {this.props.lname}</h1>

        );
    }
}
 
export default Greet;