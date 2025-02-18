let input=document.getElementById("inputbar");
let add=document.getElementById("Add");
let list=document.getElementById("list");
add.addEventListener("click", function (){
    let task=document.createElement("li");
    let contenttext=document.createElement('span');
    contenttext.innerHTML=input.value;
    task.appendChild(contenttext);
    
    let delbtn=document.createElement("button");
    delbtn.innerHTML="❌";
    delbtn.classList="delete";
    delbtn.addEventListener("click", function(){
        list.removeChild(task);
    })

    task.appendChild(delbtn);
    list.appendChild(task);


})