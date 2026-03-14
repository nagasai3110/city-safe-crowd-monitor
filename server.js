const express=require("express")
const cors=require("cors")
const detectRisk=require("./riskDetection")

const app=express()

app.use(cors())
app.use(express.json())

app.post("/risk",(req,res)=>{

let {hr,hrv}=req.body

let result=detectRisk(hr,hrv)

res.json({result})

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})
