let demo = {height : 170};
let demo2 = demo;
demo2.height = 150;
console.log(demo);// 150,显然改变了原来demo中的值


let demo = {height : 170};
let demo2 = {};
Object.assign(demo2, demo);
demo2.height = 180;
console.log(demo);// 170，demo中的数值没有发生变化