const newsStandCompanyList = [
    'KBS', '시사IN', '전자신문', 'Net Korea', 'JIJI.COM', '아시아경제', 'SBS', 'kbs광주방송', 'BUSINESS WATCH',
    '山', '人民网', '프라임경제', '소비자가 만드는 신문', '한국대학신문', 'arirang', '더스쿠프', 'UPI뉴스', '디자인정글', '미주한국일보', '코메디닷컴', 'KNN', '일요신문', '비즈한국', '체널예스'
]

const newsStandCategory = document.getElementById('newsstand__category');
for (i = 0; i < newsStandCompanyList.length; i++) {
    let companyLI = document.createElement('li');
    let company = newsStandCategory.appendChild(companyLI);
    companyLI.classList.add('company', 'fs-tb');
    company.innerHTML = newsStandCompanyList[i];
}


const subArticleList = [{
    type: '특별한 여행랭킹',
    title: '한국 물가는 충격적 외국인이 보고 깜짝놀란 제품 3',
    intro: '유통 과정이나 환경에 따라 달라지는 물가.그렇기 때문에 국가별로 저렴한 품목과 비싼 품목이 제각기 다를 수 밖에 없는데요.외국인들이 한국 마트에 들렸을 때 가장 충격받는 때는 바로 "제품 가격표를 봤을때...',
    writer: '가자GO',
    date: '3 일전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0626%2FcropImg_339x222_35093520715876710.jpeg%22&type=nf340_228'
}, {
    type: '특별한 여행랭킹',
    title: '이걸 입어? 세상에서 가장 특이한 승무원 유니폼 7',
    intro: '각 항공사의 얼굴이라고 할 수 있는 승무원. 하늘 위를 종횡무진하는 승무원의 유니폼 역시 관심거리 중 하나다. 단순한 의복을 넘어서 유니폼에 항공사의 비전, 이념 등을 담은 곳도 있기 때문이다. 많고 많은 항..',
    writer: '꾹트립',
    date: '3 일전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0626%2FcropImg_339x222_35093552722900450.jpeg%22&type=nf340_228'
}, {
    type: '별별 TRIP',
    title: '중국 가더니 변했어 여자 아이돌이 찍은 여행사진이!',
    intro: '넘치는 끼와 탄탄한 실력으로 ‘만능 아이돌’이라 불리는 걸그룹 멤버가 있습니다. 2016년 데뷔한 우주소녀의 중국 출신 멤버 성소인데요. 같은 해 아육대에 출연한 성소는 리듬체조를 선보이며 압도적인 유연함으로...',
    writer: '요우트립',
    date: '4 일전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0626%2FcropImg_339x222_35072626786844013.jpeg%22&type=nf340_228'
}, {
    type: '별별 TRIP',
    title: '낚시인들의 로망 OOO여행 간 남성의 비극적 최후',
    intro: '바다 위에서 낚시를 하게 된다면 예상치 못한 일들로 위기 상황에 마주할 수도 있습니다. 하지만 위험하다는 걸 알고도 멈추지 못하는 낚시가 있다고 하는데요. 바로 청새치 낚시입니다. 이는 매년 사...',
    writer: '트래블뷰',
    date: '1주일 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0626%2FcropImg_339x222_35072919623516630.jpeg%22&type=nf340_228'
}];

const subarticleUL = document.getElementById('subarticleUL');


for (i = 0; i < subArticleList.length; i++) {
    let img = document.createElement('img');
    let li = document.createElement('li');
    let div = document.createElement('div');

    let ptype = document.createElement('p');
    let ptitle = document.createElement('p');
    let pintro = document.createElement('p');
    let divby = document.createElement('p');

    let spandate = document.createElement('span');
    let spanwriter = document.createElement('span');

    let sublist = subarticleUL.appendChild(li);

    let subimg = sublist.appendChild(img);

    let subtxt = sublist.appendChild(div);
    let subby = subtxt.appendChild(divby);

    let subintro = subtxt.insertBefore(pintro, subby);
    let subtitle = subtxt.insertBefore(ptitle, subintro);
    let subtype = subtxt.insertBefore(ptype, subtitle);

    let subdate = subby.appendChild(spandate);
    let subwriter = subby.insertBefore(spanwriter, subdate);

    subby.appendChild(spanwriter);

    subimg.classList.add('img', 'subimg');
    subtxt.classList.add('txt', 'subtxt', 'fs-tb');
    sublist.classList.add('list', 'sublist');
    subtype.classList.add('type', 'subtype');
    subtitle.classList.add('title', 'subtitle');
    subintro.classList.add('title', 'subintro', 'fs-tm');
    subby.classList.add('by', 'subby');
    subwriter.classList.add('writer', 'suwriter', 'fs-tm', 'fc-light');
    subdate.classList.add('date', 'subdate', 'fs-tm', 'fc-light');

    subimg.style.backgroundImage = `url(${subArticleList[i].img})`;
    subtype.innerHTML = subArticleList[i].type;
    subtitle.innerHTML = subArticleList[i].title;
    subintro.innerHTML = subArticleList[i].intro;
    subdate.innerHTML = `${subArticleList[i].date} ・ `;
    subwriter.innerHTML = subArticleList[i].writer;

}