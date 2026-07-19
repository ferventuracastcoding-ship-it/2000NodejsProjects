const express=require("express");

const app=express();

app.use(express.json());

let notes=[];


app.get("/notes",(req,res)=>{
    res.json(notes);
});


app.post("/notes",(req,res)=>{

    let note={
        id:Date.now(),
        title:req.body.title,
        body:req.body.body
    };

    notes.push(note);

    res.json(note);
});


app.delete("/notes/:id",(req,res)=>{

    notes=notes.filter(
        n=>n.id!=req.params.id
    );

    res.json({
        message:"Note removed"
    });

});


app.listen(3000,()=>{
    console.log("Notes server running");
});
