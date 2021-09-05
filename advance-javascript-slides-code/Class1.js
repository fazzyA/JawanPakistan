// // Variables

// let presidentName = "ArifAlvi"
// {
//     let myStudentName = "Yusra"
//     console.log(myStudentName) //, 
//     console.log(presidentName) //, 
// }

// {
//     let myStudentName = "Yusra"
// }

// var i = 100; //100
// i =  100+1; //101
// console.log(i) //101
// ////////why use let

// for(let i = 0; i<5;i++){
//  console.log(i)  // 0 1 2 3 4  
// }

// console.log(i) // 101
// //////////////////CONST////
// const companyName = "Shan"
// const pi = 3.14;
// //  pi= 3.14;// can not reassign constant

// // var name1;
// {
//     const name1 = "xyz"
//     console.log(name1);
// }
// // console.log(name1);

// //////////Local storage
// localStorage.setItem("name", "faiza")
// localStorage.setItem("role", "teacher")
// console.log(localStorage.getItem("product"))


// localStorage.removeItem("name")
// localStorage.removeItem("role")

// //////////session storage
let loginInfo = {
     user:"Faiza",
     isActive: true,
     role:"admin"
}
sessionStorage.setItem("auth", JSON.stringify(loginInfo))
let myValue = JSON.parse(sessionStorage.getItem("auth"));
console.log(myValue)
sessionStorage.removeItem("auth")

