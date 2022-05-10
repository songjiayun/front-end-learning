// let fn1 = function () {};

// console.log('fn1 typeof', typeof fn1);

/***********************************************************************************/

// let arr = [1, 2, 3];
// console.log('join', arr.join()); // join 1,2,3

// let str = 'asfg,345,fg';
// console.log('split', str.split(',')); // split [ 'asfg', '345', 'fg' ]

/***********************************************************************************/

// let arr = [1, 2, 3, 4];

// console.log('push', arr.push(15)); // 5
// console.log('pop', arr.pop()); // 15
// console.log('unshift', arr.unshift(-1)); // 5
// console.log('shift', arr.shift()); // -1

/***********************************************************************************/

// 纯数组(不改变原数组、[])
// let arr = [1, 2, 3, 4];
// let arr1 = arr.concat([67]);
// console.log('concat', arr); // concat [ 1, 2, 3, 4 ]
// console.log('concat', arr1); // concat [ 1, 2, 3, 4, 67 ]

// let arr = [1, 2, 3, 4];
// let arr2 = arr.map((item) => item * 2);
// console.log('map', arr); // map [ 1, 2, 3, 4 ]
// console.log('map', arr2); // map [ 2, 4, 6, 8 ]

// let arr = [1, 2, 3, 4];
// let arr3 = arr.filter((item) => item > 2);
// console.log('filter', arr); // filter [ 1, 2, 3, 4 ]
// console.log('filter', arr3); // filter [ 3, 4 ]

// let arr = [1, 2, 3, 4];
// let arr4 = arr.slice(1, 3);
// console.log('slice', arr); // filter [ 1, 2, 3, 4 ]
// console.log('slice', arr4); // filter [ 2, 3 ]

// 纯数组(不改变原数组、[])
// let arr = [1, 2, 3, 4];
// let arr5 = arr.forEach((item) => console.log(item + 1));
// console.log('forEach', arr); // forEach [ 1, 2, 3, 4 ]
// console.log('forEach', arr5); // forEach 2 3 4 5

// let arr = [1, 2, 3, 4];
// let arr6 = arr.some((item) => item > 2);
// console.log('some', arr); // some [ 1, 2, 3, 4 ]
// console.log('some', arr6); // some true

// let arr = [1, 2, 3, 4];
// let arr7 = arr.some((item) => item > 2);
// console.log('every', arr); // every [ 1, 2, 3, 4 ]
// console.log('every', arr7); // every true

// let arr = [1, 2, 3, 4];
// let arr8 = arr.splice(2, 2, 'we', 'are', 'man');
// console.log('splice', arr); // splice [ 1, 2, 'we', 'are', 'man' ]
// console.log('splice', arr8); // splice [ 3, 4 ]

/***********************************************************************************/
// let i;

// for (i = 1; i <= 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 0);
// }

const obj1 = { x: 100, y: 200 };
const obj2 = obj1;
let x1 = obj1.x;
obj2.x = 101;
x1 = 102;
console.log(obj1);

if({}){console.log('true');}else{
	console.log('false');
}
