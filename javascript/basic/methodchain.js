//spread operator = ...allows an iterable such as an 
                    //    array or string to be expanded into seperate ElementInternals

                    // let username="Bro Code";
                    // let a=["hello" ,"world"]
                    // let letter =[...username,...a];
                    // console.log(letter);

   //callback = function that is passed as an argument to another function
   sum(add);
   
   function sum(callback){
    console.log("sum");
    callback();
   }
   function add(){
    console.log("add")
   }