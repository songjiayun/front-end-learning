/**
 * 控制结构
 */

/**
 * 01 if else
 */

/* var params = 'kittens';
if (params === 'puppies') {
    params += ' woof';
} else if (params === 'kittens') {
    params += ' meow';
} else {
    params += '!';
}
console.log('params:', params); */

// params: kittens meow

/**
 * 02 while do-while
 */

/**
 * 03 for
 */

/**
 * 04 for...of 【遍历数组里的每一项】
 *
 * for(let value of array){
 * 		// do something with value
 * }
 *
 */

/* var arr = [
    { name: 'nick', age: 18 },
    { name: 'freddy', age: 24 },
    { name: 'mike', age: 26 },
    { name: 'james', age: 34 }
];
for (var item of arr) {
    console.log(item.name, item.age);
} */

/**
 * nick 18
 * freddy 24
 * mike 26
 * james 34
 */

/**
 * 区别1
 * for...of无法遍历对象
 */
/* var userMsg = {
    0: 'nick',
    1: 'freddy',
    2: 'mike',
    3: 'james'
};

for (var key in userMsg) {
    console.log(key, userMsg[key]);
}
console.log('-----------分割线-----------');
for (var item of userMsg) {
    console.log(item);
} */

/**
 * 0 nick
 * 1 freddy
 * 2 mike
 * 3 james
 * -----------分割线-----------
 * TypeError: userMsg is not iterable
 */

/**
 * 区别2
 * 遍历输出结果不同
 * for...in  循环遍历的是数组的键值（索引）
 * for...of  循环遍历的是数组的值
 */

/* var arr = ['nick', 'freddy', 'mike', 'james'];
for (var key in arr) {
    console.log(key);
}
console.log('-----------分割线-----------');
for (var item of arr) {
    console.log(item);
} */

/**
 * 0
 * 1
 * 2
 * 3
 * -----------分割线-----------
 * nick
 * freddy
 * mike
 * james
 */

/**
 * 区别3
 * for...in  会遍历自定义属性
 * for...of  不会遍历自定义属性
 *
 * 给数组添加一个自定义属性name，并且赋值“数组”。
 * 然后遍历输出，会发现新定义的属性也被for...in输出来
 * 而，for...of不会对name进行输出
 */

/* var arr = ['nick', 'freddy', 'mike', 'james'];
arr.name = '数组';

for (var key in arr) {
    console.log(key + ': ' + arr[key]);
}
console.log('-----------分割线-----------');
for (var item of arr) {
    console.log(item);
} */

/**
 * 0: nick
 * 1: freddy
 * 2: mike
 * 3: james
 * name: 数组
 * -----------分割线-----------
 * nick
 * freddy
 * mike
 * james
 */

/* var obj = {a:1,b:2,c:3}
for(var item of obj){
	console.log(item);
} */
// TypeError: obj is not iterable

/**
 * 05 for...in
 */

/**
 * 06 &&  和  ||
 * && 和 || 运算符使用短路逻辑，这意味着他们是否会执行第二个操作数取决于第一个操作数。 这对于在访问它们的属性之前检查空对象很有用
 *
 * && 和 || 的作用:进行布尔值的且和或的运算。当运算到某一个变量就得出最终结果之后，就返回哪个变量。
 *
 * 在javascript中：
 * 以下内容会被当成false处理："" , false , 0 , null , undefined , NaN
 * 其他都是true。注意：字符串"false"也会被当做true处理，在未转型的情况下他是字符串，属于一个对象，所以是true。
 *
 * 结论：
 * a&& b :如果执行a后返回true，则执行b并返回b的值；如果执行a后返回false，则整个表达式返回a的值，b不执行；
 * a || b :如果执行a后返回true，则整个表达式返回a的值，b不执行；如果执行a后返回false，则执行b并返回b的值；
 * && 优先级高于 ||;
 */

/* console.log('&&', 'hjl' && 1); // 1
console.log('&&', 'hjl' && 0); // 0
console.log('&&', 0 && 1); // 0
console.log('&&', 0 && 0); // 0 

console.log('||', 'hjl' || 1);  // 'hjl'
console.log('||', 'hjl' || 0); // 'hjl'
console.log('||', 0 || 1); // 1
console.log('||', 0 || 0); // 0 */

/* var a = {},
    b = 0,
    c = Number.NaN,
    d = 1,
    e = 'Hello';
console.log(a || (b && c) || (d && e)); // {} */

/**
 * 1、(b && c)：b是false，此时不需要判断c，因为不管c是true是false，最终结果一定是false，因此返回当前判断对象b，也就是0；
 * 2、(d && e)：d是true，这个时候判断e，此时不管e是true，是false，返回结果一定是e，e为true，因此返回"Hello"；
 * 3、(a || b)：a是true，此时不管b是true是false，结果都是true，所以不判断b，所以返回当前判断对象a，因此返回new Object()；
 * 4、(a || e)：同上，因此返回a。
 * 这个表达式最终结果为a，也就是{}
 */

/**
 * 07 三目运算符
 */

/**
 * 08 switch
 *
 * switch (action) {
 *   case 'draw':
 *     drawIt();
 *     break;
 *   case 'eat':
 *     eatIt();
 *     break;
 *   default:
 *     doNothing();
 * }
 */

/*  switch (1 + 3) {
  case 2 + 2:
    console.log('sss');;
    break;
  default:
    console.log('hhh');;
}
// sss */

/**
 * Objects
 */

/**
 * 创建
 * var obj = new Object()
 * var obj = {}
 */

var obj = {
    name: 'Carrot',
    _for: 'Max', // 'for' is a reserved word, use '_for' instead.
    details: {
        color: 'orange',
        size: 12
    }
};
// 获取值
console.log(obj.details.color); // orange
console.log(obj['details']['size']); // 12

// 构建对象原型
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 构建对象实例
var you = new Person('You', 24);
console.log('you', you);
// you Person { name: 'You', age: 24 }

