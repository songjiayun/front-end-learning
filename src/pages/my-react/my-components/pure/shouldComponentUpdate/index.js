import React, { Component } from 'react';
import Son from './son';

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    onClick = () => {
        this.setState({
            value: this.state.value + 1
        });
    };

    render() {
        console.log('father render');
        return (
            <div style={{ marginTop: 30 }}>
                <button onClick={this.onClick}>click me</button>
                <Son />
            </div>
        );
    }
}

export default Father;
