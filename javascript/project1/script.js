const inputBox=document.getElementById("input-box");
const listContainer=document.querySelector(".list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('you have add some thing');
    }
    else{
       let li= document.createElement('li');
       li.innerHTML=inputBox.value;
       listContainer.appendChild(li);
       let span=document.createElement("span");
       span.innerHTML="\u00d7"
       li.appendChild(span);
    }
    inputBox.value='';
    savedData();
    
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        savedData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedData();
    }
},false);

function savedData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    localStorage.innerHTML=localStorage.getItem("data");
}
showTask();