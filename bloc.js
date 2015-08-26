function rotdiv(){
var aArray = [2, 3, 5, 7, 9];

var rnd1 = aArray[Math.floor(Math.random()*7)];
var rnd2 = Math.floor(Math.random()*3);
    if((rnd1 === undefined) || (rnd1 === rnd2)){
        rnd1 = 3;
    }

document.getElementById('tleft').innerHTML = rnd1;
document.getElementById('dleft').innerHTML = rnd2;
 
    return rnd1, rnd2;
}