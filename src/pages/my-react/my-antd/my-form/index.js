import React, { useCallback } from 'react';
import { Form, Select, Row, Col, Switch, Input, Button } from 'antd';
import styles from './index.module.less';
import { PlusCircleOutlined, MinusCircleOutlined, PlusOutlined, CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

/**
 * pick对象
 */
const pickType = [
    { value: 1, name: '马嘉祺' },
    { value: 2, name: '丁程鑫' },
    { value: 3, name: '宋亚轩' },
    { value: 4, name: '刘耀文' },
    { value: 5, name: '张真源' },
    { value: 6, name: '严浩翔' },
    { value: 7, name: '贺峻霖' }
];

/**
 * 资料添加-微博
 */
const weiboMaterialTNT = [
    {
        key: 1,
        description: '马嘉祺'
    },
    {
        key: 2,
        description: '丁程鑫'
    },
    {
        key: 3,
        description: '宋亚轩'
    },
    {
        key: 4,
        description: '刘耀文'
    },
    {
        key: 5,
        description: '张真源'
    },
    {
        key: 6,
        description: '严浩翔'
    },
    {
        key: 7,
        description: '贺峻霖'
    }
];

/**
 * 资料添加-小红书
 */
const redbookMaterialTNT = [
    {
        key: 1,
        description: '马嘉祺'
    },
    {
        key: 2,
        description: '丁程鑫'
    },
    {
        key: 3,
        description: '宋亚轩'
    },
    {
        key: 4,
        description: '刘耀文'
    },
    {
        key: 5,
        description: '张真源'
    },
    {
        key: 6,
        description: '严浩翔'
    },
    {
        key: 7,
        description: '贺峻霖'
    }
];

// 自定义组件-switch
function MySwitch({ value, onChange, ...props }) {
    const handleChange = useCallback(
        (checked) => {
            onChange(checked ? props['active-value'] : props['inactive-value']);
        },
        [onChange, props]
    );
    return <Switch checked={value === props['active-value']} onChange={handleChange}></Switch>;
}

// 自定义组件-增减
function MySwitchList() {
    return (
        <Form.List name={'pickReason'} initialValue={['']}>
            {(fields, { add, remove }) => {
                return (
                    <div style={{ marginLeft: 140 }}>
                        {fields.map((field) => {
                            return (
                                <Form.Item key={field.key}>
                                    <Row gutter={10} align={'middle'} key={field.key}>
                                        <Col>
                                            <Form.Item {...field} noStyle>
                                                <Input style={{ width: 360 }} placeholder={'请输入pick原因'}></Input>
                                            </Form.Item>
                                        </Col>
                                        <Col style={{ fontSize: 0 }}>
                                            <PlusCircleOutlined className={styles['dynamic-delete-button']} onClick={() => add('', field.name + 1)} />
                                        </Col>
                                        <Col style={{ fontSize: 0 }}>{fields.length >= 2 && <MinusCircleOutlined className={styles['dynamic-delete-button']} onClick={() => remove(field.name)} />}</Col>
                                    </Row>
                                </Form.Item>
                            );
                        })}
                    </div>
                );
            }}
        </Form.List>
    );
}

function MyForm() {
    // 添加微博物料
    const handleAddWeibo = useCallback((e) => {
        console.log('添加微博物料');
    }, []);

    return (
        <React.Fragment>
            <Row wrap={false} gutter={[40, 10]} align={'top'}>
                <Col flex={'0 0 80%'}>
                    <Form>
                        <div className={styles['card-title']}>select</div>
                        <div className={styles['card-body']}>
                            <Form.Item name={'pickType'} label={'pick谁'} labelCol={{ flex: '140px' }} wrapperCol={{ flex: '360px' }}>
                                <Select mode={'multiple'} placeholder={'请选择您pick的哥哥~'}>
                                    {pickType &&
                                        pickType.map((item) => {
                                            return (
                                                <Select.Option key={item.value} value={item.value}>
                                                    {item.name}
                                                </Select.Option>
                                            );
                                        })}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className={styles['card-title']}>switch</div>
                        <div className={styles['card-body']}>
                            <Form.Item name={'pickSwitch'} label={'turn on or off'} labelCol={{ flex: '140px' }} wrapperCol={{ flex: '360px' }}>
                                <MySwitch active-value={1} inactive-value={0}></MySwitch>
                            </Form.Item>
                            <Form.Item shouldUpdate={(newObj, oldObj) => newObj.pickSwitch !== oldObj.pickSwitch} noStyle>
                                {({ getFieldValue }) => getFieldValue('pickSwitch') === 1 && <MySwitchList />}
                            </Form.Item>
                        </div>

                        <div className={styles['card-title']}>资料添加</div>
                        <div className={styles['card-body']}>
                            <Row gutter={[24, 24]} align={'top'}>
                                <Col flex={'450px'}>
                                    <div className={styles['push-block']}>
                                        <Row align={'middle'} justify={'space-between'}>
                                            <Col>
                                                <strong>微博物料</strong>
                                            </Col>
                                            <Col>
                                                <Button type={'link'} icon={<PlusOutlined />} onClick={handleAddWeibo}></Button>
                                            </Col>
                                        </Row>
                                        <Row gutter={[10, 20]} align={'top'} style={{ marginTop: 10 }}>
                                            {weiboMaterialTNT &&
                                                weiboMaterialTNT.map((item) => {
                                                    return (
                                                        <Col span={8} key={item.key}>
                                                            <Row wrap={false} gutter={8} align={'middle'}>
                                                                <Col>
                                                                    <CheckSquareOutlined />
                                                                </Col>
                                                                <Col>{item.description}</Col>
                                                                <Col>
                                                                    <DeleteOutlined />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    );
                                                })}
                                        </Row>
                                    </div>
                                </Col>
                                <Col flex={'450px'}>
                                    <div className={styles['push-block']}>
                                        <Row align={'middle'} justify={'space-between'}>
                                            <Col>
                                                <strong>小红书物料</strong>
                                            </Col>
                                            <Col>
                                                <Button type={'link'} icon={<PlusOutlined />}></Button>
                                            </Col>
                                        </Row>
                                        <Row gutter={[10, 20]} align={'top'} style={{ marginTop: 10 }}>
                                            {redbookMaterialTNT &&
                                                redbookMaterialTNT.map((item) => {
                                                    return (
                                                        <Col span={8} key={item.key}>
                                                            <Row wrap={false} gutter={8} align={'middle'}>
                                                                <Col>
                                                                    <CheckSquareOutlined />
                                                                </Col>
                                                                <Col>{item.description}</Col>
                                                                <Col>
                                                                    <DeleteOutlined />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    );
                                                })}
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default React.memo(MyForm);
