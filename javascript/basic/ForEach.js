// let numbers=[1,2,3,4,5,6,7,8];
// numbers.forEach(double);
// numbers.forEach(display);
// numbers.forEach(triple);

// function display(element){
//     console.log(element);
// }
// function double(element,index,array){
//     array[index]=element*2;
// }
// function triple(element,index,array){
//     array[index]=element*3;
// }

// 

// let numbers=[1,3,4,5,6,7,8,90,];
// let evenNumber=numbers.filter(isEven);
// let oddNumber=numbers.filter(isOdd);

//  console.log(evenNumber);
// function isEven(element){
//     return element%2===0;
// }
// function isOdd(element){
//     return element%2!==0;
// }
// const prices =[5,30,10,25,15,20];
// const total=prices.reduce(sum);
//  console.log(`${total.toFixed(2)}`);
// function sum(accumulator,element){
//     return accumulator+element;
// }
 
// const s=function(){
//     console.log("hello");
// }
// setTimeout(function(){
//     console.log("hello")
// },3000);


// const numbers=[1,2,3,4,5,6];
//  const squares=numbers.map(function(e){
//     return Math.pow(e,3);
//  });

//  console.log(squares);

//  const oddNum=numbers.filter(function(e){
//     return e%2===0;
//  });
//  console.log(oddNum);

//  const evenNum=numbers.filter(function(e){
//     return e%2!==0;
//  });
//  console.log(evenNum);
//  const primeNum=numbers.filter(function(e){
//     return e>=2;
//  })
//  console.log(primeNum);

//  const total=numbers.reduce(function(a,e){
//     return a+e;
//  });
//  console.log(total);
 
// function square(element){
//     return Math.pow(element,2);
// }

// const hello= (name)=>console.log(`hi ${name}`);
// hello("anvith");
    
const numbers=[1,2,3,4,5,6,7];
const square=numbers.map((e)=>{
    return Math.pow(e,2);
});
console.log(square);
const cube=numbers.map((e)=>Math.pow(e,3));
console.log(cube);
const evenNum=numbers.filter((e)=> e%2===0);
console.log(evenNum);
const oddNum=numbers.filter((e)=>e%2!==0);
console.log(oddNum);
const total=numbers.reduce((p,n)=>p+n );
 console.log(total);