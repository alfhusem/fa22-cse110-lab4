//var f = 0;
const list = [];

for (let i = 0; i < 3; i++) {
    const d = i + 100;
    //f = d + 20000;
    console.log(d + "  ");
    list.push(d);
}
//console.log(d);
//console.log(f);
console.log(list);

let str = "heeeey";
console.log(str[0]=="h");

function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num *2;
}

console.log(modifyArray([1,2,3], doSomething));

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}
printNums();