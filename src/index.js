import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import store from './store/index';
import Router from './router/router';

import './index.less';

import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <StoreContext.Provider value={store}>
            <Router />
        </StoreContext.Provider>
    </ConfigProvider>,
    document.getElementById('front-end-learning')
);
