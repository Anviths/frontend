let sub=document.getElementById('subscribe');
let visa=document.getElementById("visa");
let master=document.getElementById("master");
let paypal=document.getElementById("paypal");
let submit=document.getElementById("submit");
let subResult=document.getElementById("subResult");
let payment=document.getElementById("payment");

submit.onclick=function(){
    if(sub.checked){
       subResult.innerHTML="your subscribed"
    }
    else{
        subResult.innerHTML="your not subscribed";
    }
    if(visa.checked)
     payment.innerHTML="Visa"
    if(master.checked)
     payment.innerHTML="Visa"
    if(paypal.checked)
     payment.innerHTML="Visa"
}
