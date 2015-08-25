function rotdiv(){
//var aArray = [2, 3, 5, 7, 9];
//var dataStore = {};

var rnd1 = Math.floor(Math.random()*5);
var rnd2 = Math.floor(Math.random()*4);

document.getElementById('tleft').innerHTML = rnd1;
document.getElementById('dleft').innerHTML = rnd2;
 
    return rnd1, rnd2;
}