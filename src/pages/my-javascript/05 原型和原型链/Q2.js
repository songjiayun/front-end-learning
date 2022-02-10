// 手写一个简易的jQuery，考虑插件和扩展性
class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for (let i = 0; i < length; i++) {
            this[i] = result[i];
        }
        this.length = length;
        // 类数组 实际上 是一个对象
    }
    get(index) {
        return this[index];
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i];
            fn(elem);
        }
    }
    on(type, fn) {
        return this.each((elem) => {
            elem.addEventListener(type, fn, false);
        });
    }
}

// 可以扩展更多DOM API

const $p= new jQuery('p')

console.log($p.get(1));
