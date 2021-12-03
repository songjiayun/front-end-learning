import React from 'react';
import { Row, Col, Affix } from 'antd';
import styles from './index.module.less';

import MyNaving from '@/components/my-naving';
import MyHeader from '@/components/my-header';
import RouterLayout from '@/router/routerLayout';

import { useMappedState } from 'redux-react-hook';

function Main() {
    const collapsed = useMappedState(({ config }) => {
        return config.collapsed || false;
    });

    return (
        <React.Fragment>
            <Row wrap={false}>
                <Col flex={collapsed ? '80px' : '210px'} className={styles['naving-block']}>
                    <Affix>
                        <MyNaving></MyNaving>
                    </Affix>
                </Col>
                <Col flex={'auto'}>
                    <MyHeader></MyHeader>
                    <div className={styles['content-block']}>
                        <RouterLayout></RouterLayout>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Main;
