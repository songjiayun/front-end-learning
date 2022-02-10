1、如何准确判断一个变量是不是数组

2、手写一个简易的jQuery，考虑插件和扩展性

3、class原型本质，怎么理解

# class和继承
class

1、constructor

2、属性

3、方法

继承

1、extends

2、super

3、扩展或重写方法

# 类型判断instanceof


# 原型和原型链
原型关系
1、每个class都有显示原型prototype
2、每个实例都有隐式原型__proto__
3、实例的__proto__指向对应class的prototype

基于原型的执行原则
1、获取属性或执行方法时
2、先在自身属性和方法寻找
3、如果找不到，则自动去隐式原型__proto__中查找

原型链（画一遍）

再看instanceof

class是ES6语法规范，由ECMA委员会发布

ECMA只规定语法规则，即我们代码的书写规范，不规定如何实现

以上实现方式都是V8引擎的实现方式，也是主流的


小结：
class 和 继承，结合上面手写jQuery的示例来理解

instanceof

原型和原型链：图示 & 执行规则