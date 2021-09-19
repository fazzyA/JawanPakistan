///template literal  destructuring, var hoisting, scope
/// ternary op
// const arr = [1,2];
// let name = "faiza";

// var userName = "Faiza Aziz Khan"; // global

// function modifyUserName() {
//         userName = "Muhammad Ali Mughal";
//     };

// function showUserName() {
//         alert(userName);
//     };

// alert(userName); // Faiza

// modifyUserName(); // MAM
// showUserName(); // MAM
/////////////eample 2//////////

// function createUserName() {
//     userName = "Faiza Aziz Khan";
// }

// function modifyUserName() {
//     if(userName)
//         userName = "Muhammad Ali Mughal";
// };

// function showUserName() {
//     console.log(userName);  
// }

// createUserName();
// showUserName(); // faiza

// modifyUserName();
// showUserName(); // MAM


//////Var hoisting////

// console.log(abc) // error
// let abc;
// console.log(abc) // 123

// const ST = ["Nashra", "Iqra", "Tooba", "xyz", "xyz", 
// "xyz", "xyz", "xyz", "xyz"]

// let [st1, st2, ...rest] = ST
// // let [st1, st2, st3, st4] = ["Nashra", "Iqra","Tooba", "xyz"]

// // let [st1, st2, st3] = ST

// console.log(st1)
// console.log(st2)
// console.log(rest)
// // console.log(st4) //ref error

// let myObj = {
//     firstName: "Faiza",
//     middleName: "Aziz",
//     lastName: "Khan",
//     qual: "MCS"
// }
// // console.log(myObj.firstName) 
// // console.log(myObj.middleName)
// // console.log(myObj.lastName)

// let {lastName , middleName, firstName, qual } = myObj
// // console.log(firstName + " "+middleName+" "+lastName+" : "+qual)
// let str = "abcd"
// let str2 = 'efgh'
// let newway = `new way 

// to store str`
// // console.log(str + "\n" + str2)
// // console.log(newway)
// // console.log(`my name is ${firstName} ${middleName} ${lastName} and my qualification is ${qual}`)
// //////

// let age = 18; 

// if(age>= 18) {
//     console.log(`you are allowed`)
// } else{
//     console.log(`you are not allowed`)
// }

// let value = (age >= 18) ? "you are allowed" : "you are not allowed"
// console.log(value)

// let gender = "male"

// let val = (gender == "male" ) ? "not alowed" : "allowed"

// let role = "teacher"
// let gender  = "female"
// let value2 = (gender == "female") ? "fallowed" 
// : (gender == "Male" && role == "teacher") 
// ? "mallowed" : "not allowed" 
// console.log(value2)
// let member = prompt('are you member')

// function fees(member){
//  return member == true ? 4000 :5000
// }
// let val = fees(member)
// console.log(val)


let a = [1,2]
let b = [3,4, [5,6]]
let c = [...a, b[0],b[1], ...b[2]] // [1,2,3,4,[5,6]]



// console.log(c[0]) //1
// c[0] = 2; //2
console.log(c)  // [1,2] 


const myNewValue;
myNewValue =10
console.log(myNewValue); //ref err
