# React

## React 组件

**1. 在 React 中，一切都是组件**

组件是 React 应用 UI 的构建块。这些组件将整个 UI 分成小的独立并可重用的部分。每个组件彼此独立，而不会影响 UI 其余部分

**2. 解释 React 中的 render()的目的**

每个 React 组件强制要求必须有一个 render()。它返回一个 React 元素，是原生 DOM 组件的表示。如果需要渲染多个 HTML 元素，则必须将它们组合在一个封闭标记内，例如 <form>、<group>、<div> 等。此函数必须保持纯净，即必须每次调用时都返回相同的结果。

**3. 如何将两个或多个组件嵌入到一个组件中**

```
class MyComponent extends React.Component{
	render(){
        return(
			<div>
            	<h1>Hello</h1>
                <Header/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return
			<h1>Header Component</h1>
   };
}

ReactDOM.render(
    <MyComponent/>, document.getElementById('content')
);
```

**4. 什么是 Props**

-   props 是 react 中属性的简写
-   只读组件，必须保持纯，即不可变
-   总是在整个应用中从父组件传递到子组件。子组件永远不能将 prop 送回父组件。
-   有助于维护单向数据流，通常用于呈现动态生成的数据

**1. React 中的状态是什么？是如何使用的**

-   状态是 React 组件的核心，是数据的来源
-   状态是确定组件呈现和行为的对象
-   与 props 不同，他们是可变的，并创建动态和交互式组件
-   this.state()

**React 中 key 的必要性**

-   key 用于识别唯一的虚拟 DOM 元素以及驱动 UI 的相应数据
-   它们通过回收 DOM 中的当前元素所有的元素来帮助 react 优化渲染
-   key 必须是唯一的数字或字符串
-   react 只是重新排序元素而不是重新渲染
-   提高应用程序的性能

[key 的必要性——简书](https://www.jianshu.com/p/0218ff2591ec)
