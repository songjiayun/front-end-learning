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

// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name);
        this.major = major;
    }

    teach() {
        console.log(this.name + ' 教授 ' + this.major);
    }
}

// 实例
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

// 实例
const lifei = new Teacher('李飞', '时代峰峻');
console.log(lifei.name);
console.log(lifei.number);
lifei.teach();
lifei.eat();
/**
 * 李飞
 * undefined
 * 李飞 教授 时代峰峻
 * 李飞 eat something!
 */
