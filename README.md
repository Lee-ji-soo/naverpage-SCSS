# grid width SCSS
clone naver width SCSS

## SCSS rule
```
$basicH : navgation bar, 검색창, 로그인 버튼, 등등의 높이 설정
$basicW : 화면에서 보여질 전체 너비 
$basicWnM : 화면에서 보여질 전체 너비를 설정하고, 그 마진값
$basicBorder: 기본 테두리;

$leftWidth: 화면 왼쪽 내용들 ;
$middleWidth: 화면 왼쪽, 오른쪽 사이의 틈;
$rightWidth:화면 오른쪽 내용들;

$whole: 100%

.fs= fontsize
tl= tiny light
tm= tiny medium
tb= tiny bold
sl= small light
sm= small medium
sb= small bold
ml= medium light
mm= medium medium
mb= medium bold
lb= large bold
dark= 어둡기
light= 밝기


*SCSStip 
:hover :active 등의 경우 css속성을 자식 스코프에서 &로 설정할 수 있음
```

### PC
## 1. Header 

- [x] Ad
   - logo | content & downloadBtn | deleteBtn
- [x] search
   - logo | search | 네이버를 시작페이지로, 주니어네이버, 헤피빈
- [x] navibar
  - 7(green) | 9(black) | more(btn) | filter(btn)


## 2. Container 

#### Left side

  - [x] ad
  - [x] speed news
  - [ ] news stand 
       - title | category 
  - [ ] theme
       - title
       - category
       - main article
         - main article big | main article small
       - sub article
           - sub article-text | sub article-video x 2
  - [ ] morebutton

#### Right side
  - [ ] login 
  - [ ] currency
  - [ ] ad
  - [ ] shop
  - [ ] shopnews

## 3. Footer 

  - [ ] ad 
  - [ ] notic
  - [ ] partner
  - [ ] etc
