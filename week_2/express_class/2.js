//making a data-base and manipulating it
const express=require("express");
const app=express();

const users=[{
        name:"John",
        kidneys:[{
                healthy:false
            }] 
}];

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }

    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({numberOfKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys})
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})

//411
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

//remove all unhealthy kidneys
app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:'done'})
}else{
    res.status(411).json({
        msg:"You've no bad kidneys"
    });
}
})

function isThereAtleastOneUnhealthyKidney(){
    //if there is only 1 unhealthy kidney else return 411
    let atleastOneUnhealthykidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            atleastOneUnhealthykidney=true;
        }
    }
    return atleastOneUnhealthykidney;
}

app.listen(3000);