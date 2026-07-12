const readline = require("readline");


const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});



const lowercase = "abcdefghijklmnopqrstuvwxyz";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=[]{}<>?";





function generatePassword(length, options){


    let characters = "";


    if(options.lowercase)
        characters += lowercase;


    if(options.uppercase)
        characters += uppercase;


    if(options.numbers)
        characters += numbers;


    if(options.symbols)
        characters += symbols;



    let password = "";



    for(let i = 0; i < length; i++){


        const randomIndex =
        Math.floor(Math.random() * characters.length);


        password += characters[randomIndex];

    }


    return password;

}







rl.question(
"Password length: ",
(length)=>{


length = Number(length);



rl.question(
"Include symbols? (yes/no): ",
(symbolAnswer)=>{


const password =
generatePassword(
length,
{

lowercase:true,

uppercase:true,

numbers:true,

symbols:
symbolAnswer.toLowerCase()==="yes"

}

);



console.log("\nGenerated Password:");

console.log("--------------------");

console.log(password);

console.log("--------------------");


rl.close();



});


});
