const arr=[10,'hi','hello',56,52.6,'a',];
// console.log(arr.pop());
// arr.push(6);
// arr.shift();
// arr.splice(1,0,'anvith','rah');
const sub=arr.slice(0,3);
const a=[10,20,30,40,50,60];
const b=a.map(add);
function add(a){
    return a*3;
}
console.log(sub);
console.log(a);
console.log(b);
