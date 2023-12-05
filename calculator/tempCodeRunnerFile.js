// prime_number (20);
// function prime_number (x){
//     for(let i=2;i<=x;i++){
//         if(x % i ==0 && i !=x){
           
//             console.log("composite");
//             console.log(Number);
//             break;
//         }
//         else if (i == x){
//             console.log('prime number')
//         }

//     }

// }
 
// showstars(5);
// function showstars(rows){
//     for(let row = 1;row<=rows;row++){
//         let x=' ';
    
   
// for( let i=0;i< row;i++){
// x+="*";

// }console.log(x)
// }
// }
// let output = '';
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 4; j++) {
//         output += j; // output 2  stebay alate malet nw in setehone lela nech out setehon lela nch
//     }
    
//     output += "<br>"; // Add a newline after printing each sequence of '1234'
   
// }

// console.log(output);


// function no(x){
  
//     while(x<= 3){
//         console.log("output  no more")
//         console.log("output");
//         console.log("output");
//         x+=1;
//     }
// }
// no(1);


//  let operator;
// operator=String(operator);
// let num1;
// num1= Number(num1);
// let num2;
// num2=Number(num2);

// let result;


// document.getElementById("calculate").onclick = function () {

   


// num1= parseFloat.getElementById("num1").value;
// operator=document.getElementById("operator").value;
// num2=parseFloat.getElementById("num2").value;

// switch (operator){
//     case "+":
//       result= num1 + num2; 
//       break;
//     case "-":
//         result= num1-num2;
//         break;       
        
//     default:
//         console.log("false statement ");
// }
// console.log(result);

// };

let result;
let num1;
let num2;
let operator;
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("calculate").onclick = function () {
    
    
       
    num1 = parseFloat(document.getElementById("num1").value); 
    
    operator = document.getElementById("operator").value;

    num2 = parseFloat(document.getElementById("num2").value); 
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            result = num1/num2;
            break;
        default:
            console.log("Invalid operator");
    }
 
  var text = document.getElementById("text").innerHTML=num1+operator+num2+"="+result;
}
})
