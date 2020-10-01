
// for(let i=0;i<10;i++){
//     console.log(i);
// }

const myState = ["Karnataka", "Assam", 1947, "Delhi", "Assam", "Bihar"];

for(let i=0;i<myState.length;i++){
    if(typeof myState[i] != 'string')
    continue;
    
    console.log(myState[i]);
}