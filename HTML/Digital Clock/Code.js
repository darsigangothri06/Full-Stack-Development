function showClock() {
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var session = "AM"

    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second

    var time = hour + " : " + minute + " : " + second
    console.log(time)

    document.getElementById("MyClock").innerText = time
    document.getElementById("MyClock").textContent = time

    setTimeout(showClock, 1000)
}

showClock()