import React from 'react';

import Demo01 from './pureComponent/index';
import Demo02 from './shouldComponentUpdate/index';
import Demo03 from './memo/index';

function Pure() {
    return (
        <React.Fragment>
            <Demo01 />
            <Demo02 />
            <Demo03 />
        </React.Fragment>
    );
}

export default React.memo(Pure);
