import React, { useCallback } from 'react';
import { Menu } from 'antd';
import styles from './index.module.less';
import { useHistory } from 'react-router-dom';
import { useMappedState } from 'redux-react-hook';

function MyNaving() {
    let history = useHistory();

    const collapsed = useMappedState(
        useCallback(({ config }) => {
            return config.collapsed || false;
        }, [])
    );

    const menuHandle = useCallback(
        ({ key }) => {
            history.push(key);
        },
        [history]
    );

    return (
        <div className={styles['naving-block']}>
            {/* logo */}
            <div className={styles['logo-block']}>logo</div>
            {/* 导航 */}
            <Menu mode={'inline'} className={styles['menu-block']} onClick={menuHandle} inlineCollapsed={collapsed}>
                <Menu.Item key={'/home'}>home</Menu.Item>
                <Menu.Item key={'/project'}>project</Menu.Item>
            </Menu>
        </div>
    );
}

export default MyNaving;
