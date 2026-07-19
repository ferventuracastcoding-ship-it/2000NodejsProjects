const express=require("express");

const app=express();

app.get("/add/:a/:b",(req,res)=>{

    let result=
    Number(req.params.a)+
    Number(req.params.b);

    res.json({
        result
    });
});


app.get("/subtract/:a/:b",(req,res)=>{

    res.json({
        result:
        req.params.a -
        req.params.b
    });

});


app.get("/multiply/:a/:b",(req,res)=>{

    res.json({
        result:
        req.params.a *
        req.params.b
    });

});


app.get("/divide/:a/:b",(req,res)=>{

    res.json({
        result:
        req.params.a /
        req.params.b
    });

});


app.listen(3000,()=>{
    console.log("Calculator API running");
});
