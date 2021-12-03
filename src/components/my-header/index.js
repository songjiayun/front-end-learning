import React, { useCallback } from 'react';
import { Row, Col, Button } from 'antd';
import styles from './index.module.less';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { updateCollapsed } from '../../store/config/action';

function MyHeader() {
    const dispatch = useDispatch();

    const collapsed = useMappedState(
        useCallback(({ config }) => {
            return config.collapsed || false;
        }, [])
    );
    // 切换菜单
    const toggleMenu = useCallback(() => {
        if (collapsed) {
            dispatch(updateCollapsed(false));
        } else {
            dispatch(updateCollapsed(true));
        }
    }, [collapsed, dispatch]);

    return (
        <Row align={'middle'} justify={'space-between'} className={styles['header-block']}>
            <Col>
                <Button type={'text'} icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} onClick={toggleMenu}></Button>
            </Col>
            <Col>
                <img className={styles['user-avatar']} src={require('@/assets/common/default-avatar.png').default} alt={''}></img>
            </Col>
        </Row>
    );
}

export default MyHeader;
