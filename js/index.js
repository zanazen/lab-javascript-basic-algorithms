// Iteration 1: Names and Input //
let hacker1 = "James";
console.log ("The driver's name is " + hacker1);
let hacker2 = "Google";
console.log ("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
tamhacker1 = hacker1.length
tamhacker2 = hacker2.length
if (tamhacker1 > tamhacker2) {
    console.log ("The driver has the longest name, it has " + tamhacker1 + " characters.")
} else if (tamhacker2 > tamhacker1) {
    console.log ("It seems that the navigator has the longest name, it has " + tamhacker2 + " characters.")
} else {
    console.log ("Wow, you both have equally long names, " + tamhacker1 + " characters!.")
} 
// Iteration 3: Loops
const nameUp=hacker1.toUpperCase();
let nameSpace=""
for(let i=0;i<nameUp.length;i++) {
    nameSpace = nameSpace + nameUp[i] + " "
}
console.log(nameSpace);

let nameReverse=""
let char2 = tamhacker2
for(let i=char2-1;i>-1;i--) {
    nameReverse = nameReverse + hacker2[i];
}
console.log(nameReverse);

let lexiOrder=hacker2.localeCompare(hacker1);
if(lexiOrder=1) {
    console.log("The driver´s name goes first.")
} else if (lexiOrder=-1) {
    console.log("Yo, the navigator goes first definitely.")
} else if (lexiOrder=0) {
    console.log("What?!You both have the same name?")
}
