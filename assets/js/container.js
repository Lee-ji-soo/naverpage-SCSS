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