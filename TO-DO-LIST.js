// const letters = ['a','a','a','b','b','c','d'];
// let count ={};
// letters.forEach(item =>{
//     if (count[item]){
//     count[item]++;
// }
//     else{
//         count[item]=1;
//     }
   
// });
// console.log(count)
// let y = ['exercise', 'like', 'yes'];
//  y.forEach(word => [...word]);

// console.log(y);

document.getElementById("add").onclick = function() {
    
    var father = document.getElementById("father");
    var inputValue = document.getElementById("input").value;
    if(inputValue !== ""){
    var listItem = document.createElement('li');
    listItem.textContent = inputValue;
    
    father.appendChild(listItem);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);

    span.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevents event bubbling
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    });

    document.getElementById("input").value = ""; // Clear input value
}

}

    


    
    


