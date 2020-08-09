const speedNewsUL = document.getElementById('speednews_rolling')
const speedNewsLI = document.querySelectorAll('.speednews')
const speedHeight = speedNewsLI[0].offsetHeight;
const speedNum = speedNewsLI.length;
const maxHeight = speedHeight * speedNum;
let speedMove = 0

function speedRolling() {
    speedMove += speedHeight;
    speedNewsUL.style.transform = `translateY(${-speedMove}px)`
    if (speedMove >= maxHeight) {
        speedMove = 0
        speedNewsUL.style.transform = `translateY(${-speedMove}px)`
    }
}

speedRollingOff = setInterval(speedRolling, 2000)

const clone = speedNewsLI[0].cloneNode(true)
speedNewsUL.appendChild(clone)
