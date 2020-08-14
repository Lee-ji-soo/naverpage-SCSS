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
const popupIssueOL = document.getElementById('searchfilter_popup-issues');

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
