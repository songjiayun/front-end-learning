import React, { useMemo, useEffect } from 'react';
import styles from './index.module.less';
import { Row, Col, Button, message, Affix } from 'antd';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clipboardJS from 'clipboard';

function Prototype() {
    const jscode_one = useMemo(() => {
        return `
        class Student {
            // 属性
            constructor(name, number) {
                this.name = name;
                this.number = number;
                this.gender = 'male';
            }
        
            // 方法
            sayHi() {
                console.log('姓名：' + this.name + ' 学号：' + this.number);
            }
        }
        
        // 通过类 new 对象/实例
        const hejunlin = new Student('贺峻霖', 100);
        
        console.log(hejunlin.name);
        console.log(hejunlin.number);
        hejunlin.sayHi();
        /**
         * 贺峻霖
         * 100
         * 姓名：贺峻霖 学号：100
         */
        
        const yanhaoxiang = new Student('严浩翔',101);
        console.log(yanhaoxiang.name);
        console.log(yanhaoxiang.number);
        yanhaoxiang.sayHi();
        /**
         * 严浩翔
         * 101
         * 姓名：严浩翔 学号：101
         */
        `;
    }, []);

    const jscode_two = useMemo(() => {
        return `
        // 父类
        class People {
            // 属性
            constructor(name) {
                this.name = name;
            }
        
            // 方法
            eat() {
                console.log(this.name + ' eat something!');
            }
        }
        
        // 子类
        class Student extends People {
            constructor(name, number) {
                super(name);
                this.number = number;
            }
        
            sayHi() {
                console.log('姓名：' + this.name + ' 学号：' + this.number);
            }
        }
        
        const hejunlin = new Student('贺峻霖', 100);
        
        console.log(hejunlin.name);
        console.log(hejunlin.number);
        hejunlin.sayHi();
        hejunlin.eat();
        /**
         * 贺峻霖
         * 100
         * 姓名：贺峻霖 学号：100
         * 贺峻霖 eat something!
         */
        `;
    }, []);

    useEffect(() => {
        const copyCode = new clipboardJS('#copy-code-one');
        copyCode.on('success', () => {
            message.success('复制代码成功');
        });
    }, []);

    useEffect(() => {
        const copyCode = new clipboardJS('#copy-code-two');
        copyCode.on('success', () => {
            message.success('复制代码成功');
        });
    }, []);

    return (
        <React.Fragment>
            <Row wrap={false} gutter={[40, 10]} align={'top'}>
                <Col flex={'400px'}>
                    <Affix offsetTop={10}>
                        <div className={styles['item-block-left']}>
                            <h3>原型和原型链</h3>
                            <ol>
                                <li>如何准确判断一个变量是不是数组？</li>
                                <li>手写一个简易的jQuery，考虑插件和扩展性？</li>
                                <li>class的原型本质，怎么理解？</li>
                            </ol>
                        </div>
                        <div className={styles['item-block-left']} style={{ marginTop: 20 }}>
                            <h3>知识点</h3>
                            <ol>
                                <li>class和继承</li>
                                <li>类型判断instanceof</li>
                                <li>原型和原型链</li>
                            </ol>
                        </div>
                    </Affix>
                </Col>
                <Col flex={'auto'}>
                    <div className={styles['item-block-right']}>
                        <h3>class</h3>
                        <ul>
                            <li>constructor</li>
                            <li>属性</li>
                            <li>方法</li>
                        </ul>
                        <div className={styles['right-code-block']}>
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} style={a11yDark}>
                                {jscode_one}
                            </SyntaxHighlighter>
                            <Button id={'copy-code-one'} data-clipboard-text={jscode_one} className={styles['right-copy-btn']}>
                                复制代码
                            </Button>
                        </div>
                    </div>

                    <div className={styles['item-block-right']} style={{ marginTop: 20 }}>
                        <h3>继承</h3>
                        <ul>
                            <li>extends</li>
                            <li>super</li>
                            <li>扩展或重写方法</li>
                        </ul>
                        <div className={styles['right-code-block']}>
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} style={a11yDark}>
                                {jscode_two}
                            </SyntaxHighlighter>
                            <Button id={'copy-code-two'} data-clipboard-text={jscode_two} className={styles['right-copy-btn']}>
                                复制代码
                            </Button>
                        </div>
                    </div>

                    <div className={styles['item-block-right']} style={{ marginTop: 20 }}>
                        <h3>类型判断</h3>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Prototype;
