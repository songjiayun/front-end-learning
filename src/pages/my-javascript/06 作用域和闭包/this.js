// function fn1() {
//     console.log(this);
// }

// fn1(); // window

// fn1.call({ x: 100 }); // { x: 100 }

// // bind会返回一个新的函数，再调用新的函数执行
// const fn2 = fn1.bind({ x: 200 }); // { x: 200 }
// fn2();

// const zhangsan = {
//     name: '张三',
//     sayHi() {
//         console.log(this); // 当前对象
//     },
//     wait() {
//         setTimeout(function () {
//             console.log(this); // window
//         });
//     }
// };

// zhangsan.sayHi();
// zhangsan.wait();

// const lisi = {
//     name: '李四',
//     sayHi() {
//         console.log(this); // 当前对象
//     },
//     // 箭头函数this永远取它上级作用域的this
//     wait() {
//         setTimeout(() => {
//             console.log(this); // 当前对象
//         });
//     }
// };

// lisi.sayHi();
// lisi.wait();

class People {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }
    sayHi() {
        console.log(this);
    }
}

const wangwu = new People('张三');
wangwu.sayHi() // People { name: '张三', age: 20 }
