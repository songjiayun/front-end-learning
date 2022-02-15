import React, { Component } from 'react';
import FunctionSon from './son';

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
               <FunctionSon value={this.props.value} name="hejunlin"/>
            </div>
        );
    }
}

export default Father;
