const input=document.getElementById("input-box");
const listContainer=document.querySelector(".listContainer");

function addTask(){
    console.log(input.value)
if(input.value===''){
    alert("write some thing!");
}
else{
    let li =document.createElement("li");
    li.innerHTML=input.value;
    listContainer.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
    savedData();
}
input.value='';
}

listContainer.addEventListener('click',function(e){
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedData();
   }
   else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    savedData();
   }
},false);

function savedData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getData(){
    localStorage.getItem("data");
}
getData();