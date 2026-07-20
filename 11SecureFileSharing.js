const express=require("express");
const multer=require("multer");
const {v4:uuid}=require("uuid");

const app=express();

const upload=
multer({
    dest:"uploads/"
});


let files=[];


app.post(
"/upload",
upload.single("file"),
(req,res)=>{


const shareId=uuid();


files.push({

id:shareId,

file:req.file.filename

});


res.json({

message:"Uploaded",

shareLink:
"/download/"+shareId

});


});


app.get(
"/download/:id",
(req,res)=>{


const file=
files.find(
f=>f.id===req.params.id
);


if(!file)
return res.status(404)
.send("Not found");


res.download(
"uploads/"+file.file
);


});


app.listen(3000);
