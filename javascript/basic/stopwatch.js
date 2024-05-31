let hourtag=document.getElementById("hour");
let mintag=document.getElementById("min");
let sectag=document.getElementById("sec");

let pauseBtn=document.getElementById("pause");
let reset=document.getElementById("reset");
let hour=0;
let minute=0;
let second=0;
let timer=null;

function update(){
    if(second==60){
        second=0;
        if(minute<9){
            mintag.innerHTML="0"+ ++minute;
        }
        else{
            mintag.innerHTML=++minute;
        }
        
    }
    if(minute==60){
        minute=0;
        if(hour<59){
            hourtag.innerHTML="0"+ ++hour;
        }
        else{
        hourtag.innerHTML=++hour;
        }
        
    }
    if(second<9){
        sectag.innerHTML="0" + ++second;
    }
    else{
    sectag.innerHTML=++second;
    }
 
}

reset.onclick=function(){
    clearInterval(timer);
    hour,minute,second=0;
    hourtag.innerHTML="00"
    mintag.innerHTML="00"
    sectag.innerHTML="00"
}
function start(){
    if(timer!==null){
        clearInterval(timer);
    }
  timer=setInterval(update,1000);
}
function watchStop(){
    clearInterval(timer);
    
}