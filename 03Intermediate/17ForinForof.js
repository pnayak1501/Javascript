const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

//for of is majorily of array
for(const n of names){
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    go : "Google"
}

//For in majorily for objects
for(const n in symbols){
    // console.log(n); //Returns the keys
    console.log(symbols[n]);
}