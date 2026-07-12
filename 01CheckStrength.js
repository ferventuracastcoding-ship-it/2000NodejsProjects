function checkStrength(password){

let score=0;


if(password.length>=12)
score++;

if(/[A-Z]/.test(password))
score++;

if(/[0-9]/.test(password))
score++;

if(/[^A-Za-z0-9]/.test(password))
score++;


if(score===4)
return "Strong Password 🔥";


if(score>=2)
return "Medium Password";


return "Weak Password";

}
