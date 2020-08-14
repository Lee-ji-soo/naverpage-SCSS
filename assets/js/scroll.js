const containerRight = document.getElementById('container-right')
const rightHeight = containerRight.clientHeight

function containerRightScroll() {
    if (scrollY > rightHeight / 3) {
        containerRight.classList.add('sticky')
    } else {
        containerRight.classList.remove('sticky')
    }
}

containerRightScroll();
window.addEventListener('scroll', containerRightScroll)
