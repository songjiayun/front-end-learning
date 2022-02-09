let a = 0;

function fn1() {
    let a1 = 100;

    function fn2() {
        let a2 = 200;

        function fn3() {
            let a3 = 300;
            return console.log(a + a1 + a2 + a3);; // 600
        }

        fn3()
    }

    fn2()

}

fn1() 

// ES6块级作用域
// if (true) {
//     let x = 100;
// }

// console.log(x); // x is not defined
