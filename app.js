
function clock() {
    var time = new Date();

document.getElementById('hours').innerHTML = time.getHours(); 
document.getElementById('minuts').innerHTML = time.getMinutes();
document.getElementById('seconds').innerHTML = time.getSeconds();

}


clock();

setInterval(clock, 1000);