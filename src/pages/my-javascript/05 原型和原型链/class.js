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

const yanhaoxiang = new Student('严浩翔', 101);
console.log(yanhaoxiang.name);
console.log(yanhaoxiang.number);
yanhaoxiang.sayHi();
/**
 * 严浩翔
 * 101
 * 姓名：严浩翔 学号：101
 */
