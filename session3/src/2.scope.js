
// global
let outer = 1;

function func() {
    // local
    console.log(`This is outer: ${outer}`);

    let  inner = 10;
    console.log(`This is inner ${inner}`);
}

func();

console.log(`the inner variable defined in a scope: ${typeof inner}`);

function funcV2() {
    outer = 10;
}

funcV2();
console.log(outer);

{
    let inAScope = 100;
}
console.log(typeof inAScope);


// defined in both
let x = "Hello"
function funcV3() {
    let x = "World";
    console.log(x);
}
funcV3();
console.log(x);
