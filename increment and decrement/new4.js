// let username;
// document.getElementById("lol").onclick = function(){

// username = document.getElementById("by");
// console.log(username.innerHTML);

// }
// document.getElementById("lol").innerHTML= "hi-sweet";

// let x =1;

// document.getElementById("lol").onclick = function(){
//     while (x<=4){

// console.log("hi")

// }
// }

let count = 0;
document.getElementById("add").onclick = function (){
    
    
        count +=1;
        document.getElementById("change").innerHTML=count;
        
   
 

}
document.getElementById("sub").onclick = function(){
    count-=1;
    document.getElementById("change").innerHTML=count;

}
document.getElementById("reset").onclick =function (){
   count =0;
    document.getElementById("change").innerHTML=count;
}

