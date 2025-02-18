let input=document.getElementById("inputbar");
let add=document.getElementById("Add");
let list=document.getElementById("list");
add.addEventListener("click", function (){
    let task=document.createElement("li");
    task.innerHTML=input.value;
    list.appendChild(task);
})