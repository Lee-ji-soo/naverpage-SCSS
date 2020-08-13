const footerAd = [{
    img: 'https://ssl.pstatic.net/tveta/libs/1295/1295490/1c7a69c9cbec33873135_20200707105423720.jpg',
    type: '중소기업 편견제로',
    title: '대국민 IDEA 공모전',
    txt1: '여러분의 톡톡 튀는',
    txt2: '아이디어를기다립니다!'
}, {
    img: 'https://ssl.pstatic.net/tveta/libs/1292/1292444/1e1033bf4cac46bd67cb_20200615175330333.jpg',
    type: '대한민국 정부',
    title: '대한민국 동행세일',
    txt1: '최대 40% 온라인 할인',
    txt2: '6개 권역별 현장 판매'
}, {
    img: 'https://ssl.pstatic.net/tveta/libs/1287/1287075/d919c883243ddff5586f_20200626121042014.png',
    type: '부스트코스',
    title: '언택트스터디 모집(무료)',
    txt1: '7주 동안 밀착코칭 받고',
    txt2: '코드문맹 탈출하자!'
}]
const partnerCreator = ['크리에이터', '스몰비즈니스'];
const partnerPartner = ['비즈니스・광고', '스토어 개설', '지역업체 등록', ];
const partnerDevelopers = ['네이버 개발자 센터', '오픈 API', '오픈소스', '네이버 D2', '네이버D2SF', '네이버 랩스'];

const footerService = [{
    icon: 'fab fa-blogger',
    title: '네이버 블로그',
    go: '다운받기'
}, {
    icon: 'fab fa-instagram',
    title: '네이버 인스타그램',
    go: '바로가기'
}, ]

const footerCorp = [
    '회사소개', '인재채용', '제휴제안', '이용약관', '개인정보처리방침', '청소년보호정책', '네이버 정책', '고객센터'
]

function PrintFooterAd(footerAdList) {
    this.render = function() {
        document.getElementById('footerad').
        innerHTML = footerAd.map(each => `<div class="adthumb imgwrap">
                <img alt="${each.title}" class="img" src="${each.img}">
                <div class="content fs-tb">
                    <em class="type adtype">${each.type}</em>
                    <h3 class="title adtitle fs-sb">${each.title}</h3>
                    <p class="txt adtxt fs-tm">
                    <span>${each.txt1}</span><br>${each.txt2}<span></span></p>
                </div>
            </div>`).join('');
    }
    render();
}

PrintFooterAd(footerAd);

function PrintPartner(partnerList, type) {
    this.render = function() {
        let str = '';
        let divstr = '';

        str = partnerList.map(each =>
            `<li class="names">${each}</li>`).join('');

        divstr = `<div class="partner__each">
                        <span class="partner__type fs-sb fc-dark">${type}</span>
                        <ul class="partner__name fs-tm fc-light">${str}</ul>
                     </div>`
        document.querySelector('.partner-wrap').innerHTML += divstr;
    }
    render();
}

PrintPartner(partnerCreator, 'Creators');
PrintPartner(partnerPartner, 'Patners');
PrintPartner(partnerDevelopers, 'Developers');

function PrintService(service) {
    this.render = function() {
        document.querySelector('.servicebox-wrap').innerHTML = service
            .map(each =>
                `<div class="servicebox">
                    <div class="txt">
                        <p class="title fs-sb">${each.title}</p>
                        <p class="go fs-sm fc-light">${each.go}</p>
                    </div>
                <i class="${each.icon}"></i>
            </div>`)
            .join('')

    }
    render();
}
PrintService(footerService)

function PrintCorp(corpList) {
    this.render = function() {
        document.querySelector('.corp-lists').
        innerHTML = corpList
            .map(each => `<li class="list fs-tm fc-light">${each}</li>`)
            .join('')
    }
    render();
}
PrintCorp(footerCorp)
