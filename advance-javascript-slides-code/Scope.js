// ----------------------------
//  example : 1


var userName = "Faiza Aziz Khan";

function modifyUserName() {
        userName = "Muhammad Ali Mughal";
    };

function showUserName() {
        alert(userName);
    };

alert(userName); //

modifyUserName();
showUserName();// 



// --------------------------
//  example : 2


function createUserName() {
    userName = "Faiza Aziz Khan";
}

function modifyUserName() {
    if(userName)
        userName = "Muhammad Ali Mughal";
};

function showUserName() {
    alert(userName);  
}

createUserName();
showUserName(); // 

modifyUserName();
showUserName(); // 



// --------------------------
//  example : 3


function createUserName() {
    var userName = "Faiza Aziz Khan";
}

function showUserName() {
    alert(userName);
}

createUserName();
showUserName(); // 


// --------------------------
//  example : 4


var userName = "Faiza Aziz Khan";

function ShowUserName()
{
    var userName = "Muhammad Ali Mughal";

    alert(userName); // 
}

ShowUserName();

alert(userName); // 


// --------------------------
//  example : 5


function NoBlockLevelScope(){
    
    if (1 > 0)
    {
        var myVar = 22;

    }

    alert(myVar);
}

NoBlockLevelScope();


// --------------------------
//  example : 6


var age = 100;
function go(){
 var age = 200;
 var hair =  'black';
 console.log(age);
 console.log(hair);
}
go();
console.log(age);

//
//
// 

// --------------------------
//  example : 7


if (true) {
   // userName is in the global scope because of the 'var' keyword
   var userName = 'Faiza Aziz Khan';
   console.log(userName); // output 
   // age is in the local scope because of the 'let' keyword
   let age = 20;
   console.log(age); // output 20
   // skills is in the local scope because of the 'const' keyword
   const skills = 'JavaScript';
   console.log(skills); // output 'JavaScript'
}
console.log(userName); // output 
console.log(age); //output
console.log(skills); // output


// --------------------------