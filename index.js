const startingMinutes=1;
let time=startingMinutes*60;
const countDown=document.querySelector(".count-down");

function myTimer(){
    let timing=setInterval(() => {
        const minutes=Math.floor(time / 60);
        let seconds=time % 60;
        seconds=seconds<10?"0"+seconds : seconds;
        countDown.innerText=`${minutes} : ${seconds}`;
        if(countDown.innerText == "0"+" : "+"00"){
            alert("game over");
            clearInterval(timing);
            myBtn.classList.add("disengage");
        }
        time--;
    }, 1000);
}