import React, { Component } from 'react';

class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, this.props);
        if (nextProps.value === this.props.value) {
            return false;
        }
        return true;
    }

    render() {
        console.log('son render');
        return <div>{this.props.value}</div>;
    }
}

export default Son;
