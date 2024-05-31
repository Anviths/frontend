// import { add as adition,mul } from "./utilexp.js";

// const adds=adition(10,20,30);
// const muls=mul(10,20,30);

// console.log(adds);
// console.log(muls);

function walk(){
   
   return new Promise((resolve,reject)=>{
     
    setTimeout(()=>{
        const walk=true;
        if(walk){
        resolve("go for walk");
        }
        else
        reject("did't go for walk");
       },1500)
   });
}

function clean(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const clean=false;89525
            
            if(clean)
            resolve("clean home");
           else
           reject("you din't clean home");
        },1200);

    });
    

}

function eat(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const eat=true;
            if(eat)
            resolve("eat the snaks");
            else
            reject("you did't eat");
        },1200);

    });
   
    
    
}

// walk(()=>{clean(()=>{eat(()=>console.log("sleep"))})});
// walk().then(value =>{console.log(value); return clean()})
//        .then(value =>{console.log(value); return eat()})
//        .then(value =>{console.log(value);  console.log("sleep")})
//        .catch(error=>console.error(error));

       function walkDog(){

       }

       function cleanKitchen(){

       }
        function takeOutTrash(){

        }

        async function doChores(){
            try{
            const walkDogResult= await walk();
            console.log(walkDogResult);
            const cleanKitchenResult=await clean();
            console.log(cleanKitchenResult);

            const takeOutTrashResult=await eat();
            console.log(takeOutTrashResult);
            
            console.log("you finished all the chores")
            }
            catch(error){
                console.log(error);
            }
        }
        doChores();
