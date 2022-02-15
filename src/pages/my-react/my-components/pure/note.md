### 纯数组

-   无论是 memo 还是 pureComponent，都是会对过去的 props，state 和 现在的 props，state 进行一次浅比较

-   判断两个对象的长度是否相等

-   每个 key 是否两个对象都有

-   是不是都是一个引用

比如，你的 props 更新了，但是更新的这个 value 是一个引用，那么浅比较依然会认为这两个 props 是相同的，因此不会去更新。

**总结**
PureComponent
ShouldComponentUpdate
memo
都是为了减少子组件不必要的渲染存在的，达到提升 react 性能的目的

**参考文档**
[纯组件](https://zhuanlan.zhihu.com/p/273293269)
