1、同步和异步的区别？
	基于JS是单线程语言
	异步不会阻塞代码执行 
	同步会阻塞代码执行

2、手写Promise加载一张图片

3、前端使用异步的场景有哪些？

单线程和异步
	遇到等待（网络请求，定时任务）不能卡住；
	需要异步；
	回调callback函数；

应用场景
	网络请求，ajax
	定时任务，setTimeout

callback hell 和 Promise

* JS是单线程语言，只能同时做一件事

* 浏览器和nodejs已经支持JS启动进程，如Web Worker

* JS 和 DOM 渲染共用同一个线程，因为JS可以修改DOM结构

小结：
1、单线程和异步，异步和同步的区别
2、前端异步的应用场景：网络请求 & 定时任务
3、Promise解决callback hell
	