// src/index.ts
const greet = (name: string): string => {
    return `Hello, ${name}!`;
  };
  
console.log(greet("TypeScript"));

let age: number = 25;

const chkage = function(age: number){
    if (age > 18){
        console.log("you're eligible to vote")
    }else if (age < 18 && age > 10) {
        console.log("you're not eligible to vote")
    }else{
        console.log("aadhar card bnwa2 pehle")
    }
}

chkage(age);