//Container-left
const speedNews = [{
        num: 1,
        content: '코로나 바이러스 국내 확진자 0명 나흘째 유지'
    },
    {
        num: 2,
        content: '부동산 대책은 대책없이.. 여당 지지율 5% 하락',
    },
    {
        num: 3,
        content: '트럼프 대통령 "틱톡","텐센트"등 중국 아이티 기업 보이콧 선언'
    },
    {
        num: 4,
        content: '야당, 여당 수해재난 지역 앞다투어 방문'
    }
]

function printSpeedNews() {
    this.render = () => {
        document.getElementById('speednews_rolling').innerHTML = speedNews
            .map(news =>
                `<li class="speednews">${news.content}</li>`
            )
            .join('')
    }
    this.render()
}

const printSpeedNewsFn = new printSpeedNews

const newsStandCompanyList = [
    'KBS', '시사IN', '전자신문', 'Net Korea', 'JIJI.COM', '아시아경제', 'SBS', 'kbs광주방송', 'BUSINESS WATCH',
    '山', '人民网', '프라임경제', '소비자가 만드는 신문', '한국대학신문', 'arirang', '더스쿠프', 'UPI뉴스', '디자인정글', '미주한국일보', '코메디닷컴', 'KNN', '일요신문', '비즈한국', '체널예스'
]

function printNewsStandCompany() {
    this.render = () => {
        document.getElementById('newsstand__category').innerHTML = newsStandCompanyList
            .map(company =>
                `<li class="company fs-tb">${company}</li>`)
            .join('');
    }
    this.render()
}

const printNewsStandFn = new printNewsStandCompany;

const subArticleList1 = [{
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
}]
const subArticleList2 = [{
    type: '더위탈출 몸보신',
    title: '요즘 대세 애플망고빙수 호텔가 BEST 8 어디일까?',
    intro: '호텔 망빙 대격돌, 어떤 빙수 먹을래? 망고 빙수 맛집으로 소문난 호텔 8곳을 전격 비교 분석했다. 망빙 도장 깨기 한번 해 보실래요?▼클릭▼ 호텔 망빙 대격돌, 어떤 빙수 먹을래? | 코스모폴리탄 코리아 ...',
    writer: '코스모폴리탄',
    date: '1주일 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0629%2FcropImg_339x222_35357922893333405.jpeg%22&type=nf340_228'
}, {
    type: '여행+ 핫클릭',
    title: '기본 5만원? 제주 여행 가장 실망했던 의외의 음식 알아보니',
    intro: '제주 여행에서 가장 불만사항 1위는 비싼 물가였다. 특히 음식값이 유독 비싸다는 불평이 높았다. 제주관광공사는 얼마전 지난해 제주를 방문한 관광객의 소비실태 및 여행에 대한 평가 등을 조사한 2019년 제...',
    writer: '꾹트립',
    date: '2일 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0629%2FcropImg_210x210_35356288233171486.jpeg%22&type=nf340_228'
}, {
    type: '서프라이즈',
    title: '한국 드라마 견제? 여행 예능 홍보하다 분노한 중화권 스타',
    intro: '전세계 드라마, 영화를 볼 수 있는 넷플릭스. 세계의 인기 컨텐츠 수요를 알아볼 수 있는 척도가 되고 있는데요. 최근 한국의 드라마 붐이 일고있지요. 드라마 더킹, 이태원 클라스, 사랑의 불시착, 사이코지만 괜찮...',
    writer: '트립로드',
    date: '어제',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0629%2FcropImg_339x222_35355071596634299.jpeg%22&type=nf340_228'
}, {
    type: '대한민국 탐구생활',
    title: '해외 못 나가니... 예약 전화 폭주한다는 여수 풀빌라',
    intro: '나만 몰랐어? 동남아 부럽지 않은 여수 풀빌라 5 올여름은 친구, 가족, 연인과 함께 가기 좋은 여수로 떠나자.▼클릭▼ 나만 몰랐어? 동남아 부럽지 않은 여수 풀빌라 5 | 에스콰이어 코리아 (Esquire Korea)...',
    writer: '에스콰이어 코리아',
    date: '2일 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic2.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0629%2FcropImg_339x222_35347064803472629.png%22&type=nf340_228'
}];
const subArticleVideo1 = [{
    title: '목포? 볼 게 있나? 최근 <야간관광 100선>에 등재된 이유',
    writer: '여행플러스 TOUR PLUS',
    date: '5 일전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic2.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0628%2FcropImg_339x222_35249024384314491.jpeg%22&type=nf464_260'
}, {
    title: '여름휴가 다들 어디로 가? 제주도만 피하면 되는 이유!?',
    writer: '여행플러스 TOUR PLUS',
    date: '4 일전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic2.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0626%2FcropImg_339x222_35095211062836885.jpeg%22&type=nf464_260'
}, {
    title: '이젠 호캉스말고 옥캉스~ 도심 속 리틀 포레스트로 FLEX',
    writer: '띠혜',
    date: '1개월 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0622%2FcropImg_336x206_34746737228346989.jpeg%22&type=nf464_260'
}];
const subArticleVideo2 = [{
    title: '무주 사용 설명서, 해외 부럽지 않은 감성 폭발 여행!',
    writer: '무주산골영화제',
    date: '2주일 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic2.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0627%2FcropImg_336x206_35165532993163700.jpeg%22&type=nf464_260'
}, {
    title: '번달번줌?! 여자 둘이서 수영장 갔더니 생긴 ssul',
    writer: '꼬미교TV',
    date: '4주일 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic1.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0622%2FcropImg_336x206_34746701495626126.jpeg%22&type=nf464_260'
}, {
    title: '랜선 해외여행! 대만 타이동 속으로 풀쩍!',
    writer: '김군의 여행스케치',
    date: '3개월 전',
    img: 'https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fstatic2.naver.net%2Fwww%2Fmobile%2Fedit%2F2020%2F0627%2FcropImg_336x206_35165341301021021.png%22&type=nf464_260'
}];

const subarticleUL = document.getElementById('subarticleUL');
let listNUM = 1;

function PrintList(subArticleList) {
    this.render = () => {
        document.getElementById(`subarticleUL${listNUM}`).innerHTML =
            subArticleList.map(article =>
                `<li class='list sublist imgwrap'>
                 <img class='img subimg'src="${article.img}" alt="${article.title}">
                 <div class='txt subtxt fs-tb'>
                     <p class='type subtype'>${article.type}</p>
                     <p class='title subtitle'>${article.title}</p>
                     <p class='title subintro fs-tm'>${article.intro}</p>
                     <p class='by subby'>
                         <span class='writer subwriter fs-tm'>${article.writer} ・ </span>
                         <span class='date subdate fs-tm'>${article.date}</span>
                     </p>
                 </div>
             </li>`)
            .join('')
        listNUM++
    }
    this.render();
}

const printSubArticleList1 = new PrintList(subArticleList1);
const printSubArticleList2 = new PrintList(subArticleList2);


let videoNUM = 1;

function PrintVideoList(videoList) {
    this.render = () => {
        document.getElementById(`subarticleUL${videoNUM}__video`).innerHTML =
            videoList.map(video => `
            <li class="videolist imgwrap">
                     <img class="img videoimg" src="${video.img}" alt="${video.title}">
                     <div class="txt videotxt fs-tb">
                         <p class='title videotitle'>${video.title}</p>
                         <p class='by videoby fs-tm'>
                             <span class='writer videowriter'>${video.writer}</span>
                             <span class='date videodate'>${video.date}</span>
                         </p>
                     </div>
                 </li>`)
            .join('')
        videoNUM++;
    }
    this.render();
}

const printSubArticelVideo1 = new PrintVideoList(subArticleVideo1);
const printSubArticelVideo2 = new PrintVideoList(subArticleVideo2);


//Container-right
const speedIssuesUL = document.getElementById('issue_rolling')

function speedIssues() {
    this.render = () => {
        speedIssuesUL.innerHTML =
            `<li class="issue">
                <span class="type fs-tb">이슈</span>
                <span class="title fs-sm">코로나바이러스감염증19현황</span>
            </li>
            <li class="issue">
                <span class="type fs-tb">증시</span>
                <span class="title fs-sm">코스닥 859.12</span>
                <span class="title fs-sm fc-red">▲13.52 +1.60%</span>
            </li>
            <li class="issue">
                <span class="type fs-tb">미세</span>
                <span class="title fs-tb fc-light">미세</span>
                <span class="fs-tm">😃 좋음</span>
                <span class="title fs-tb fc-light">초미세</span>
                <span class="fs-tm">😃 좋음 </span>
            </li>
            <li class="issue">
                <span class="type fs-tb">환율</span>
                <span class="title fs-sm">🇺🇸 USD</span>
                <span class="title fs-sb">1,1830.90</span>
                <span class="title fs-sm fc-primary"> ▼0.60 -0.05%</span>
            </li>
            `
    }
    this.render();
}
const speedIssueRolling = new speedIssues;

const shopList1 = [{
    img: 'https://s.pstatic.net/shopping.phinf/20200703_8/61f7a544-cd9c-4ad8-87f0-11520d0e41a0.jpg',
    txt1: '직장인 필수템!',
    txt2: '44% 파격 세일!'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200703_0/22ad8104-5ebf-43ab-b582-ee2d127a8e60.jpg',
    txt1: '다이어터 식단!',
    txt2: '오늘만 10+10 !'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200703_12/9a12a051-4c4c-441e-a550-7f3ee58f4b7d.jpg',
    txt1: '너무 맛있는데~',
    txt2: '살찔 걱정 없어?'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200703_12/a55eaac0-208d-4c4d-8884-a5603800106b.jpg',
    txt1: '밥하기 싫을 때',
    txt2: '꺼내 먹어요~!'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200703_8/f3c9798e-0b72-4671-b0aa-8c40ebe1dc4b.jpg',
    txt1: '다이어터 PICK',
    txt2: '최대 65% ↓'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200703_25/8af1c433-c630-4252-ad61-677d99a1aecb.jpg',
    txt1: '꼬르륵 OUT!',
    txt2: '배고플땐 이거!'
}]

const shopList2 = [{
    img: 'https://s.pstatic.net/shopping.phinf/20200629_24/8e8eee8c-3a3c-4162-9784-dc26a24e308a.jpg',
    txt1: '명품브랜드 같은',
    txt2: '보장하는 퀄리티'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200629_0/f51c8d54-e7ab-4de9-a3b9-397cbdcdf877.jpg',
    txt1: '하나를 입어도',
    txt2: '좋은거 입어요'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200522_13/b4b44ce5-c615-4f8b-8297-f3ef4e1e6f0a.jpg',
    txt1: '이유있는 자부심',
    txt2: '남들과는 다르게'
}]

const shopList3 = [{
    img: 'https://s.pstatic.net/shopping.phinf/20191025_17/597fa97b-bb90-4d0a-944a-a95e8dc4c57a.jpg',
    txt1: '가성비 갑 of 갑!',
    txt2: 'BEST콤비블라인드'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20191025_28/646d1ef3-f439-4e7a-acbc-ba2910b093d8.jpg',
    txt1: '고급 오동 나무감성',
    txt2: '원목우드 블라인드'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200116_11/871875a0-d756-4fe1-ac74-4b3c0d0b762e.jpg',
    txt1: '하늘하늘 데일리',
    txt2: '맞춤 시폰커튼~'
}]

const shopList4 = [{
    img: 'https://s.pstatic.net/shopping.phinf/20200702_5/29fa3529-aa15-42b2-b918-ab446efb4e68.jpg',
    txt1: '더틸버리 BEST',
    txt2: '55%+10%쿠폰할인'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200702_24/40927bc7-8659-4c6f-bed6-6c605bce2386.jpg',
    txt1: '로잔 여름신상',
    txt2: '지금만 2만원대!'
}, {
    img: 'https://s.pstatic.net/shopping.phinf/20200702_14/f560b537-d481-4429-a6aa-7d9ffc13131b.jpg',
    txt1: '리스트 인기폭발',
    txt2: '61%+15%추가쿠폰'
}]

function PrintShop(shopList, shopHTML) {
    this.shoplist = shopList;
    this.render = function() {
        document.querySelector(shopHTML).innerHTML =
            this.shoplist.map(each =>
                `<li class="shopthumb imgwrap">
                <img class='shopimg img' src='${each.img}' alt='${each.txt1}'>
                    <p class="shoptxt txt fs-sm">
                    <span>${each.txt1}</span><br>
                    <span>${each.txt2}</span></p>
                </li>`).join('');
    }
    this.render();
}

PrintShop(shopList1, '.middle1');
PrintShop(shopList2, '.middle2');
PrintShop(shopList3, '.middle3');
PrintShop(shopList4, '.middle4');
