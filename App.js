
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let colon = document.querySelector(".colon");

setInterval(function() {
    second.innerText = (Number(second.innerText) + 1).toString().padStart(2, 0);
    let clock = `${hour.innerText}:${minute.innerText}:${second.innerText}`;

    if (second.innerText == 60) {
        minute.innerText = (Number(minute.innerText) + 1).toString().padStart(2, 0);
        second.innerText = "00";
    }

    if (minute.innerText == 60) {
        hour.innerText = (Number(hour.innerText) + 1).toString().padStart(2, 0);
        minute.innerText = "00";
    }

    if (hour.innerText == 23 && minute.innerText == 59 && second.innerText == 60) {
        hour.innerText = "00";
        minute.innerText = "00";
        second.innerText = "00";
    };

    colon.classList.toggle("hidden");
    
}, 1000);
