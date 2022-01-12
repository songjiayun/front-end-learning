import axios from 'axios';
import cookies from 'js-cookie';

const instance = axios.create({
    withCredentials: true
});

const removeOfNull = function clean(obj) {
    for (let key in obj) {
        if (obj[key] === '' || obj[key] === null) {
            delete obj[key];
        }
    }
    return obj;
};

// http request 拦截器
instance.interceptors.request.use(
    (config) => {
        if (config.method === 'post') {
            config.data = JSON.stringify(config.data);
            config.headers['Content-Type'] = 'application/json;charset=utf-8';
        }
        // 请求头 Authorization
        config.headers['Authorization'] = cookies.get('Authorization') || '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// http reponse 拦截器
instance.interceptors.response.use(
    ({ data }) => {
        let { message, ...params } = data || {};
        if (params.code === 401) {
            let { PUBLIC_URL } = process.env || {};
            window.location.href = `${PUBLIC_URL}/login`;
        }
        return { msg: message, ...params };
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config ajax配置
 */
export function httpGet(url, params) {
    params = removeOfNull(params || {});
    return new Promise((resolve, reject) => {
        instance
            .get(url, { params })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * post请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config ajax配置
 */
export function httpPost(url, params) {
    params = removeOfNull(params || {});
    return new Promise((resolve, reject) => {
        instance
            .post(url, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
