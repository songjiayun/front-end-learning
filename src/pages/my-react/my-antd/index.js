import React from 'react';
import styles from './index.module.less';
import { Tabs } from 'antd';

import MyForm from './my-form/index';

function MyReact() {
    return (
        <div className={styles['content-block']}>
            <Tabs defaultActiveKey={'1'}>
                <Tabs.TabPane tab={'form表单'} key={'1'}>
                    <MyForm />
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

export default React.memo(MyReact);
