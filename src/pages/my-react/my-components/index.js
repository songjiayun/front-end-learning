/**
 * 纯组件
 */
import React from 'react';
import styles from './index.module.less';
import { Tabs } from 'antd';

import Pure from './pure/index';

function MyComponents() {
    return (
        <div className={styles['content-block']}>
            <Tabs defaultActiveKey={'1'}>
                <Tabs.TabPane tab={'纯组件'} key={'1'}>
                    <Pure />
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

export default React.memo(MyComponents);
