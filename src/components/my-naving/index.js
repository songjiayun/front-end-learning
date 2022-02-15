import React, { useCallback } from 'react';
import { Menu } from 'antd';
import styles from './index.module.less';
import { useHistory } from 'react-router-dom';
import { useMappedState } from 'redux-react-hook';
import SubMenu from 'antd/lib/menu/SubMenu';
import { HomeOutlined, StarOutlined, SmileOutlined } from '@ant-design/icons';

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
            <div className={styles['logo-block']}>{!collapsed ? '前端学习基地' : <img height={30} src={require('@/assets/common/logo.png').default} alt={''} />}</div>
            {/* 导航 */}
            <Menu mode={'inline'} className={styles['menu-block']} onClick={menuHandle} inlineCollapsed={collapsed}>
                <Menu.Item key={'/home'} icon={<HomeOutlined />}>
                    home
                </Menu.Item>
                <SubMenu key={'/my-js'} title={'JavaScript'} icon={<StarOutlined />}>
                    <Menu.Item key={'/my-js/points'} icon={<SmileOutlined />}>
                        几个知识点
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={'/my-react'} title={'React'} icon={<StarOutlined />}>
                    <Menu.Item key={'/my-react/antd'} icon={<SmileOutlined />}>
                        antd
                    </Menu.Item>
                    <Menu.Item key={'/my-react/components'} icon={<SmileOutlined />}>
                        components
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}

export default MyNaving;
