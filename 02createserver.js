const express = require("express");

const app = express();

app.use(express.json());

let missions = [
    {
        id: 1,
        name: "Mars Explorer",
        planet: "Mars",
        year: 2030
    },
    {
        id: 2,
        name: "Europa Probe",
        planet: "Jupiter Moon",
        year: 2035
    }
];


// Home route
app.get("/", (req,res)=>{
    res.send("🚀 Space Mission API Running");
});


// Get all missions
app.get("/missions",(req,res)=>{
    res.json(missions);
});


// Get one mission
app.get("/missions/:id",(req,res)=>{

    const mission = missions.find(
        m => m.id == req.params.id
    );

    if(!mission){
        return res.status(404)
        .json({message:"Mission not found"});
    }

    res.json(mission);
});


// Create mission
app.post("/missions",(req,res)=>{

    const newMission = {
        id: missions.length + 1,
        name:req.body.name,
        planet:req.body.planet,
        year:req.body.year
    };

    missions.push(newMission);

    res.json(newMission);
});


// Delete mission
app.delete("/missions/:id",(req,res)=>{

    missions = missions.filter(
        m => m.id != req.params.id
    );

    res.json({
        message:"Mission deleted"
    });

});


// Start server
app.listen(3000,()=>{
    console.log(
        "Server running on port 3000"
    );
});
