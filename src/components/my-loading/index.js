import React from 'react';
import { Row, Spin } from 'antd';

function Loading() {
    return (
        <Row align={'middle'} justify={'center'} style={{ height: 300 }}>
            <Spin></Spin>
        </Row>
    );
}

export default Loading;
