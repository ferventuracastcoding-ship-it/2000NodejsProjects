const router=require("express").Router();

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const User=require("../models/User");


const SECRET="security_key";



router.post(
"/register",
async(req,res)=>{


const hash=
await bcrypt.hash(
req.body.password,
10
);


const user=
await User.create({

username:req.body.username,

password:hash

});


res.json(user);


});



router.post(
"/login",
async(req,res)=>{


const user=
await User.findOne({

username:req.body.username

});


if(!user)
return res.sendStatus(404);



const valid=
await bcrypt.compare(

req.body.password,

user.password

);



if(!valid)
return res.sendStatus(401);



const token=
jwt.sign(
{
id:user._id,
role:user.role
},
SECRET
);


res.json({
token
});


});


module.exports=router;
