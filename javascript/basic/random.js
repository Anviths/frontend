let roll=document.getElementById("roll");
let label=document.getElementById("label1");

roll.onclick=function(){
    let attempt=3;
   
    let guess= window.prompt("guess number");
    while(attempt>0){
   let ans =Math.floor( Math.random()*100);
   if(ans==guess){
    label.innerHTML=ans;
    document.createElement("p").innerHTML="correct guess";
    break;
   }
   else{
    guess= window.prompt("wrong guess number again "+ans);
   }
 
   attempt--;
   if(attempt==1){
   let res=document.createElement("p").innerHTML="lost the game better luck next time";
   document.body.appendChild(res);
 }
}
}
