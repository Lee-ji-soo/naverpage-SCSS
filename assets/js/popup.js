//modal
const searchFilterBtn = document.getElementById('search-filter_btn')
const searchFilterPopup = document.querySelector('.search-filter_popup')
const searchFilterPopupCloseBtn = document.getElementById('search-filter_popup-closebutton')

function openSearchFilterPopup() {
    searchFilterPopup.classList.add('displayBlock')
}

function closeSearchFilterPopup() {
    searchFilterPopup.classList.remove('displayBlock')
}

searchFilterBtn.addEventListener('click', openSearchFilterPopup)
searchFilterPopupCloseBtn.addEventListener('click',
    closeSearchFilterPopup)


//render
const popupIssueOL = document.getElementById('searchfilter_popup-issues');

const popupIssues = [{
    num: 1,
    title: '악인전'
},
{
    num: 2,
    title: '바르셀로나 뮌헨'
},
{
    num: 3,
    title: '나지완'
},
{
    num: 4,
    title: '박희순 박예진'
},
{
    num: 5,
    title: '김원준'
},
{
    num: 6,
    title: 'sf8'
},
{
    num: 7,
    title: '박예진'
},
{
    num: 8,
    title: '김원준 나이'
},
{
    num: 9,
    title: '박희순'
},
{
    num: 10,
    title: '아쿠아맨'
},
]

function printPopupIssues() {
    popupIssueOL.innerHTML = popupIssues
        .map(issue =>
            `<li class="issue">
                <div class="numwrap">
                <span class="num fs-mb">${issue.num}</span>
                </div>
                <span class="title fs-mm fc-light">${issue.title}</span>
             </li>`)
        .join('')
}
printPopupIssues();


//range
const filterRangeOL = document.querySelectorAll('.filter-range_ol');

function handleFilterRange(e) {
    let filterValue = e.target.parentNode.parentNode.children[1]
    let newValue = ""

    let filterHandle = e.target.parentNode.parentNode.children[2]

    if (e.target.dataset.type === 'dot') {
        if (e.target.dataset.range === "five") {
            newValue = 5
            filterValue.value = `${newValue}`
            filterHandle.style.width = '55%'
        }

        if (e.target.dataset.range === "six") {
            newValue = 6
            filterValue.value = `${newValue}`
            filterHandle.style.width = '43%'
        }
        if (e.target.dataset.range === "seven") {
            newValue = "7"
            filterValue.value = newValue
            filterHandle.style.width = '33%'

        }
        if (e.target.dataset.range === "eight") {
            newValue = "8"
            filterValue.value = newValue
            filterHandle.style.width = '23%'

        }
        if (e.target.dataset.range === "nine") {
            newValue = "9"
            filterValue.value = newValue
            filterHandle.style.width = '10%'

        }
    }
}

filterRangeOL.forEach(ol => ol.addEventListener('click', handleFilterRange))
