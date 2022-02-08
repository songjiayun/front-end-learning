function deepClone(obj = {}) {
    if (typeof obj != 'object' || obj == null) {
        // obj是null，或者不是数组和对象，直接返回
        return obj;
    }

    // 初始化返回结果
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    for (let key in obj) {
        // 保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            //递归调用
            result[key] = deepClone(obj[key]);
        }
    }

    // 返回结果
    return result;
}

console.log(deepClone({ a: 1 }));

// !!!! Object.assign()不是深拷贝  是第一层级的浅拷贝

const obj = { a: 10, b: 20, c: 30 };

const obj1 = Object.assign({}, obj, { e: 100 });

console.log('obj ===> ', obj);
console.log('obj1 ===> ', obj1);

// obj ===>  { a: 10, b: 20, c: 30 }
// obj1 ===>  { a: 10, b: 20, c: 30, e: 100 }
