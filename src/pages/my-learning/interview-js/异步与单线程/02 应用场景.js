const { $CombinedState } = require('redux');

// ajax
console.log('start');
$.get('./data1.json', function (data1) {
    console.log(data1);
});
console.log('end');

// 图片加载
console.log('start');
let img = document.createElement('img');
img.onload = function () {
    console.log('loaded');
};
img.src = '/xxx.png';
console.log('end');

// setTimeout

// setInterval