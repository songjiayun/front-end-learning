import React, {PureComponent } from 'react';

class Son extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('son render');
        return <div>{this.props.value}</div>;
    }
}

export default Son;
