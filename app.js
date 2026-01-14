
function clock() {
    var time = new Date();

    var h = time.getHours();

    if (h === 0) {
        h = 12;
    }

document.getElementById('hours').innerHTML = h; 
document.getElementById('minuts').innerHTML = time.getMinutes();
document.getElementById('seconds').innerHTML = time.getSeconds();

}


clock();

setInterval(clock, 1000);