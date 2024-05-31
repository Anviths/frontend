const a=[10,20,30,40,50];
const [x,y,...rest]=a;
console.log(a);
console.log(x);
console.log(y);
console.log(rest);


const car={"name":"tata",
            "color":"black",
             "price":"data" }
 console.log(car);
 const [...rema]=[car.name,car.color,car.name,car.price];
             
 console.log(rema);            

 const app=["jhon",'jonny','janardhan','jamun'];
 
 const rap=app.map(()=>{return app[0]})
 console.log(rap);
const num=[10,40,50,70,80,100,20];
 const max=num.map((e)=>{
    return e*e;
 })
 console.log(max);

 const max2=num.reduce((e,max)=>{
    return max<e?max:e;
 })
 console.log(max2);
 