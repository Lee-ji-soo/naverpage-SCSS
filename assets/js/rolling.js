const speedNewsUL = document.getElementById('speednews_rolling')
const speedNewsLI = document.querySelectorAll('.speednews')
const speedHeight = speedNewsLI[0].offsetHeight

function updownRolling() {
    speedNewsUL.style.top = `${-speedHeight}px`
    speedNewsUL.animate([{
        top: '0px'
    }, {
        top: `${-speedHeight}px`
    }], {
        duration: 600,
    })

    const firstChild = speedNewsUL.childNodes[0]
    const cloneChild = firstChild.cloneNode(true)
    speedNewsUL.removeChild(firstChild);
    speedNewsUL.appendChild(cloneChild)
}

updownRollingOff = setInterval(updownRolling, 2000)
