var url = '123';
var result;

var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        result = xhr.response;
        return result;
    }
};

// 如果新的ajax请求中的参数，是需要从上一个ajax请求中获取的，那么就得等到第一个ajax请求结束

// 这样一来，ajax请求变多了，就会出现【回调地狱】的可怕情况

// 因此，出现了【Promise】
