const headerAdDIV = document.getElementById('header__ad--bg')
const headerAdCloseBtn = document.getElementById('headerAd_closeBtn')

function closeHeaderAd() {
    headerAdDIV.style.display = 'none'
}

headerAdCloseBtn.addEventListener('click', closeHeaderAd)
