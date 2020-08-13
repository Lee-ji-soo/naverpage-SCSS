//Container-left SpeedNews
const speedNewsUL = document.getElementById('speednews_rolling')
const speedNewsLI = document.querySelectorAll('.speednews')
const speedHeight = speedNewsLI[0].offsetHeight

function rollingNews() {
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

rollingNewsOff = setInterval(rollingNews, 2000)

//Container-right SpeedIssues
const speedIssueWrap = document.getElementById('issuewrap')
const speedIssueUL = document.getElementById('issue_rolling')
const speedIssueLI = document.querySelectorAll('.issue')
const speedIssueBtn = document.querySelector('.issue_button')
const speedWidth = speedIssueLI[0].offsetWidth

function rollingIssue() {
    const firstChild = speedIssueUL.childNodes[0]
    const cloneChild = firstChild.cloneNode(true)
    speedIssueUL.removeChild(firstChild);
    speedIssueUL.appendChild(cloneChild);

    if (firstChild.innerHTML) {
        speedIssueUL.style.left = `${-speedWidth}px`
        speedIssueUL.animate([{
            left: '0px'
        }, {
            left: `${-speedWidth}px`
        }], {
            duration: 300
        })
    }
}

rollingIssueOff = setInterval(rollingIssue, 3500)

function stopRolling() {
    clearInterval(rollingIssueOff)
}

function startRolling() {
    setInterval(rollingIssue, 5000)
}

function rollingLeftRight(e) {
    const buttonKey = e.target.parentNode.dataset.button
    if (buttonKey == 'nextBtn') {
        rollingIssue()
        console.log('pressNext')
    }
}

speedIssueWrap.addEventListener('mouseover', stopRolling)
speedIssueWrap.addEventListener('mouseleave', startRolling)
speedIssueBtn.addEventListener('click', rollingLeftRight)
