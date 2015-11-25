function rotdiv(){
var aArray = ["love", "joy", "peace", "kindness", "self-control", "faith"];

var rnd1 = aArray[Math.floor(Math.random()*2)];
var rnd2 = aArray[Math.floor(Math.random()*2)];
    if(rnd1 === rnd2){
        rnd1 = aArray[Math.ceil(Math.random()*3)];
        
    }

document.getElementById('tleft').innerHTML = rnd1;
document.getElementById('dleft').innerHTML = rnd2;
 
    return rnd1, rnd2;
}