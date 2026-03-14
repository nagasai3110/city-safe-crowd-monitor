function detectRisk(hr,hrv){

hr=parseInt(hr)
hrv=parseInt(hrv)

if(hr>100 && hrv<15){
return "Risk Condition"
}

else if(hr>=90 && hr<=100 && hrv<20){
return "High Stress"
}

else{
return "Normal"
}

}

module.exports=detectRisk
