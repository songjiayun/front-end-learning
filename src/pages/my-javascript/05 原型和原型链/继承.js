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

console.log('typeof People', typeof People); // function

console.log('__proto__', hejunlin.__proto__); // People {}
console.log('prototype', Student.prototype); // People {}
 