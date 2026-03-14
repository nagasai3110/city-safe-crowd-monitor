let map;

function initMap(){

map = new google.maps.Map(document.getElementById("map"),{
center:{lat:16.5062,lng:80.6480},
zoom:12
});

let riskZone = new google.maps.Circle({
strokeColor:"#FF0000",
strokeOpacity:0.8,
strokeWeight:2,
fillColor:"#FF0000",
fillOpacity:0.35,
map,
center:{lat:16.5062,lng:80.6480},
radius:500
});

}

window.onload=initMap;


async function checkRisk(){

let hr=document.getElementById("hr").value
let hrv=document.getElementById("hrv").value

let response=await fetch("http://localhost:5000/risk",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({hr,hrv})
})

let data=await response.json()

document.getElementById("result").innerText=data.result

}
