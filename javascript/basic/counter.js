let count=0;

const decreaseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("reset");
const increaseBtn=document.getElementById("increase");
const countLabel=document.getElementById("count");
decreaseBtn.onclick=function(){
    count--;
  countLabel.innerHTML=count;    
}
resetBtn.onclick=function(){
    count=0;
  countLabel.innerHTML=count;    
}
increaseBtn.onclick=function(){
    count++;
  countLabel.innerHTML=count;    
}
