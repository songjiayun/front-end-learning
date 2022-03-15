/**
 * 用两个栈实现队列
 */

/**
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */

/**
 * 示例 1：
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 * 
 * 示例 2：
 * 输入：
 * ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：[null,-1,null,null,5,2]
 */

/**
 * 队列是先入先出
 * 栈是后入先出
 * 
 * 首先，两个栈分工不同，一个为入队栈，一个为出队栈，各自负责入队和出队。
 * 入队操作，直接压入入队栈即可，出队操作需要优先检查出队栈是否有数据，若无，需要从入队栈倒入后再操作。
 */

var CQueue = function () {
    this.stackA = [];
    this.stackB = [];
};

CQueue.prototype.appendTail = function (value) {
    this.stackA.push(value);
};

CQueue.prototype.deleteHead = function () {
    if (this.stackB.length) {
        return this.stackB.pop();
    } else {
        while (this.stackA.length) {
            this.stackB.push(this.stackA.pop());
        }
        if (!this.stackB.length) {
            return -1;
        } else {
            return this.stackB.pop();
        }
    }
};
