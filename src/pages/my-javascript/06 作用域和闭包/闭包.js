// 函数作为返回值
// function create() {
//     const a = 100;
//     return function () {
//         console.log(a);
//     };
// }

// const fn = create();
// const a = 200;
// fn(); // 100

// 函数作为参数
function print(fn) {
    const a = 200;
    fn();
}

const a = 100;
function fn() {
    console.log(a);
}

print(fn); // 100

// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！

// 闭包隐藏数据，只提供API
function creatCache() {
    const data = {}; // 闭包中的数据
    return {
        set: function (key, val) {
            data[key] = val;
        },
        get: function (key) {
            return data[key];
        }
    };
}

const c = creatCache();
c.set('a', 100);
console.log(c.get('a'));
