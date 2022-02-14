# javascrip 题库

## 【Q4】

**1. 函数 call 和 apply 的区别？**

```
fn.call(this,p1,p2,p3)

fn.apply(this,arguments)
```

**2. 事件代理（委托）是什么？**

**3. 闭包是什么，有什么特性，有什么负面影响？**

-   回顾作用域和自由变量
-   回顾闭包应用场景：函数作为参数被传入；函数作为返回值被返回
-   回顾自由变量的查找，要在函数定义的地方（而非函数执行的地方）

_影响：变量会常驻内存，得不到释放，闭包不要乱用！！！！！_

## 【Q5】

**1. 如何阻止事件冒泡和默认行为？**

```
event.stopPropagation()

event.preventDefault()
```

**2. 查找、添加、删除、移动 DOM 节点的方法？**

_回顾之前讲解内容！！！_

**3. 如何减少 DOM 操作？**

-   缓存 DOM 查询结果
-   多次 DOM 操作，合并到一次插入

## 【Q6】

**1. 解释 jsonp 的原理，为什么不是真正的 ajax?**

-   浏览器的同源策略（服务端没有同源策略）和跨域（协议、域名、端口）
-   哪些 html 标签可以绕过跨域

**2. document load 和 ready 的区别？**

-   回顾
-   load ，全部加载完毕
-   ready , dom 渲染完毕

**3. == 和 === 的不同？**

-   == 会尝试类型转换
-   === 严格相等
-   哪些场景用 == ？

## 【Q7】

**1. 函数声明与函数表达式区别**

-   函数声明 function fn(){...}
-   函数表达式 const fn = function(){...}
-   函数声明会在代码执行前预加载，而函数表达式不会

**2. new Object() 和 Object.create()的区别？**

-   {} 等同于 new Object()，原型 Object.prototype
-   Object.create(null)是没有原型的
-   Object.create({...})可指定原型
-   Object.create 创建一个空对象，将空对象的原型指向已传入的对象

**3. 关于 this 的场景题**

-   在函数执行的时候才知道

## 【Q8】

**1. 关于作用域和自由变量的场景题-1**

```
let i;
for(i = 1; i <= 3; i++){
	setTimeOut(
		function(){
			console.log(i)
		},0)
}
// 返回什么？
```

**2. 判断字符串以字母开头，后面字母数字下划线，长度 6-30**

`const reg = /^[a-zA-Z]\w{5,29}$/`

```
^ 开头
[] 选择，多选 1
\w 字母数字下划线
```

-   学习正则表达式规则
-   手写常见正则表达式

```
邮政编码
/\d{6}/

小写英文字母( + 一次或多次)
/^[a-z]+$/

英文字母
/^[a-zA-Z]+$/

日期格式
/^\d{4}-\d{1,2}-\d{1,2}$/

用户名 6 到 18 位
/^[a-zA-z]\w{5,17}$/

IP 地址(一般)
/\d+\.\d+\.\d+\.\d+/
```

**3. 关于作用域和自由变量的场景题-2**

```
let a = 100
function test(){
	alert(a);
	a=10
	alert(a)
}
test()
alert(a)

100 10 10
```

## 【Q9】

**1. 手写字符串 trim 方法，保证浏览器兼容性**

```
String.prototype.trim = function(){
return this.replace(/^\s+/,''/).replace(/\s+$/,''/)
}
```

// 考察了原型、this、正则表达式

**2. 如何获取多个数字中的最大值**

-   法 1：

```
function max(){
const nums = Array.prototype.slice.call(arguments) // 变为数组

    let max = 0
    nums.forEach(n=>{
        if(n>max){
            max=n
        }
    })
    return max

}
```

-   法 2：
    `Math.max(10,20,30)`

**3. 如何用 js 实现继承**

-   class 继承（很重要）

-   prototype 继承（不推荐）

## 【Q10】

**1. 如何捕获 JS 程序中的异常**

```
try{
// todo
} catch(ex){
console.error(ex) // 手动捕获 catch
} finally(){
// todo
}
```

```
// 自动捕获
window.onerror = function(message,source,lineNum,colNum,error){
// 第一、对跨域的 js，如 CDN，不会有详细的报错信息
// 第二、对于压缩的 js，还要配合 sourceMap 反查到未压缩的行、列
}
```

**2. 什么是 JSON**

-   json 是一种数据格式，本质是一段字符串

-   json 格式和 js 对象结构一致，对 js 语言更友好

-   window.JSON 是一个全局对象：JSON.stringfy（转成字符串） JSON.parse（转成对象）

-   json 属性（也就是 key 值）要用双引号

**3. 获取当前页面的 url 参数**

-   传统方式，查找 location.search 会获取？。。。

-   新 API URLSearchParams

```
function query(name){
const search = location.search.substr(1)
const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
const res = search.match(reg)
if(res===null){
return null
}
 return res[2]
}
```

```
function query(name){
const search = location.search;
const p = new URLSearchParams(search)
return p.get(name)
}
```

## 【Q11】

**1. 将 URL 参数解析为 JS 对象**

```
function queryToObj(){
const res = {}
const search = location.search.substr(1)
search.split('&').forEach((paramStr)=>{
const arr = paramSTr.split('=)
const key = arr[0]
const val = arr[1]
res[key] = val
})
return res
}
```

```
function queryToObj(){
const res = {}
const pList = new URLSearchParams(location.search)
pList.forEach((val,key)=>{
res[key] = val
})
return res
}
```

**2. 手写数组 flatern，考虑多层级**

**3. 数组去重**

-   遍历挨个元素，去重

-   使用 Set

-   考虑计算效率

## 【Q12】

**1 手写深拷贝（之前讲过）**

**2. 介绍一下 RAF requestAnimateFrame**
动画流畅，更新频率为 60 帧/s，即 16.67ms 更新一次视图

setTimeout 手动控制频率
RAF 浏览器会自动控制
后台标签或隐藏 iframe 中，RAF 会暂停，而 setTimeout 依然执行

**3. 前端性能如何优化？一般从几个方面考虑**

原则：多使用内存、缓存，减少计算，减少网络请求

方向：加载页面，页面渲染，页面操作流畅
