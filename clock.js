const clock = document.getElementById('clock');
clock.width = 400;
clock.height = 400;

const t = document.getElementById('time');
const btn = document.getElementById('btn');
let n = 10;

function updateTime(text) {
    t.innerText = text;
}

/*
updateTime('felan felan');
*/


/*function taghirbede() {
    const seconds =  new Date().getSeconds();
    updateTime(seconds);
    setTimeout(taghirbede, 1000);
}
taghirbede();*/

function countdown() {
    updateTime(n--);
    if(n >= 0 ){
        setTimeout(countdown, 1000);
    }else {
        btn.disabled = false;
    }
}
btn.addEventListener("click", function () {
   btn.disabled = true;
    n = 10;
    countdown();

});



/*for (let i = 1; i > 0; i++) {
    console.log(i);
}*/
/*

btn.addEventListener('click', function () {
    console.log(Date.now());
    setTimeout(taghirbede, 5000);
    for (let i = 1; i > 0; i++) {
        console.log(i);
    }
})
*/
