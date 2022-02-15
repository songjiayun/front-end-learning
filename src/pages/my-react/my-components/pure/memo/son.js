import React, { memo } from 'react';

const FunctionSon = memo(function (params) {
    console.log('Son render', params);
    return <div>Son</div>;
});

export default FunctionSon;
