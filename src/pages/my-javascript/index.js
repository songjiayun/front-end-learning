import React from 'react';
import styles from './index.module.less';
import { Tabs } from 'antd';

import Prototype from './prototype/index';

function JavaScript() {
    return (
        <div className={styles['content-block']}>
            <Tabs defaultActiveKey={'1'}>
                <Tabs.TabPane tab={'原型和原型链'} key={'1'}>
                    <Prototype />
                </Tabs.TabPane>
                <Tabs.TabPane tab={'Tab 2'} key={'2'}>
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab={'Tab 3'} key={'3'}>
                    Content of Tab Pane 3
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
}

export default JavaScript;
