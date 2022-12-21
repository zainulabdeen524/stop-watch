/*let min;
let sec;
let interval;
function mainFucntion() {
    sec = document.getElementById("second").value
    min = document.getElementById("minute").value

    interval = setInterval(decCountdown, 1000);
    function decCountdown() {
        sec--

        if (min != 0 && sec == -1) {
            min--
        } else if (min == 0 && sec == 0) {
            clearInterval(interval);
            document.getElementById("finishTimer").innerHTML = "Finish!!";
        }
        document.getElementById("runTimer").innerHTML = min + ":" + sec
    }
}     */

let min;
let sec;
let audio;
let interval;
let button = HTMLButtonElement.value = "Continue"
let alarm = new Audio("alarm-sound.wav")

function startTime() {

    document.getElementById("startbtn").disabled = true
    min = document.getElementById("minute").value
    sec = document.getElementById("second").value

    interval = setInterval(run, 1000)

    function run() {
        sec--
        if (min != 0 && sec == -1) {
            min--
            sec = 59
        } else if (min == 0 && sec == 0) {
            clearInterval(interval)
            document.getElementById("finishTimer").innerHTML = "Finish!!!"
            document.getElementById("startbtn").disabled = false
            alarm.play();
        }
        if (min < 10 && sec < 10) {
            document.getElementById("runTimer").innerHTML = "0" + min + " :0" + sec
        } else if (min < 10) {
            document.getElementById("runTimer").innerHTML = "0" + min + ": " + sec
        } else if (sec < 10) {
            document.getElementById("runTimer").innerHTML = min + " : 0" + sec
        } else {

            document.getElementById("runTimer").innerHTML = min + " : " + sec
        }

    }
}



function stop() {
    document.getElementById("startbtn").disabled = false
    clearInterval(interval)

    document.getElementById("startbtn").innerHTML = button;
}