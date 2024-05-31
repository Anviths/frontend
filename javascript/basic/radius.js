const PI=3.14;
let radius;
let circumference;

function mySubmit(){
    radius=document.getElementById("rad").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("output").textContent= circumference+"cm";
}