const containerRight = document.getElementById('container-right')
const rightHeight = containerRight.clientHeight

function containerRightScroll() {
    if (scrollY > rightHeight / 3) {
        containerRight.classList.add('fixed')
    } else {
        containerRight.classList.remove('fixed')
    }
}

containerRightScroll();
window.addEventListener('scroll', containerRightScroll)
