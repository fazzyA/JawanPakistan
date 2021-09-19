/// setInterval setTimeout arrow function, default values, map, map of object

// let num = 0;

// function doStuff(){
//    console.log(`Faiza`)
//    num++;
//    console.log(num)
// } 


// console.log(num)
// setTimeout(doStuff, 5000)

// console.log(num)
// // prints 0 0 Faiza 1


// function clock() {
//    //shows time
//    var d = new Date();
//    var hours = d.getHours();
//    var min = d.getMinutes();
//    var sec = d.getSeconds();

//    console.log(`Current time = ${hours}:${min}:${sec}`)

// }
// setInterval(clock, 1000);

///////print array

// function showArray(){
// let arr = [1,2,3,4]
// console.log(arr)
// }
// let time = +prompt(`enter seconds`)
// time *= 1000;

// setTimeout(showArray,time)

//// arrow functions with no args/////

// function printName(){
//    console.log(`old func`);
// }

// printName2 = () => {
//    console.log(`new func`);
// }
// printName2();

//// arrow functions with  args/////
// function showName(name) {
//    console.log(name)
// }
// showName('faiza')

// showName1 = (name) => {
//    console.log(name)
// }
// showName1('faiza');

//// arrow functions with  args and return/////
// function myFunc(){
//    return [1,2,3]
// }
// let a = myFunc();

// //myFunc1 = () => {    return 2+2 }
//  myFunc1 = () =>   2+2 

// let b = myFunc1();

// console.log(b)


///////

// let a = 10;
// num = (b) => {
//  b++
//  console.log(b)
// }
// num(a)

///return object

// let obj = {name:"faiza"}
// retObj1 = () => [1,2]

// retObj = () => a = {name:'fff'}

// console.log(retObj(obj))

//////////
let records = [
   {id: 1, name: 'Nashra', fname: 'abc', qual:'BS'},
   {id: 2,name: 'Almas', fname: 'abc', qual:'Matric'},
   {id: 3,name: 'Yusra', fname: 'abc', qual:'BS'},
   {id: 4,name: 'Faraj', fname: 'abc', qual:'Inter'}
]
let a = [1,2,3]
// for(let i = 0; i<records.length;i++){
//   if(records[i].qual == "BS") {
//      console.log(records[i].name)
//   }
   
// }
let arr = [2,4,6,8]
let str = ['Nahsra','Almas']

// showVal = (a) => a

records.map((a)=>{
    if(a.qual == "BS"){
      console.log(a.name)
    }
 })

 
//console.log(newArr)
