/**
 * 包含min函数的栈
 */

/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
 

提示：

各函数的调用总次数不超过 20000 次
 */

// 在辅助栈中，存放着每一位主栈元素对应的最小值
// 
var MinStack = function() {
	this.x_stack = [];
	this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
	this.x_stack.push(x);
	this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
	this.x_stack.pop();
	this.min_stack.pop();
};

MinStack.prototype.top = function() {
	return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.min = function() {
	return this.min_stack[this.min_stack.length - 1];
};