# grid width SCSS
clone naver width SCSS

## lang
SCSS, JS, HTML

## parcel Install
SCSS

## 간략 스트럭처
 ![alt text](https://raw.githubusercontent.com/Lee-ji-soo/naverpage-SCSS/master/structure2.jpeg)

## HTML
### 1. Header 

- [x] Ad
   - logo | content & downloadBtn | deleteBtn
- [x] search
   - logo | search | 네이버를 시작페이지로, 주니어네이버, 헤피빈
- [x] navibar
  - 7(green) | 9(black) | more(btn) | filter(btn)


### 2. Container 

#### Left side

  - [x] ad
  - [x] speed news
  - [x] news stand 
       - title | category 
  - [x] theme
       - title
       - category
       - main article
         - main article big | main article small
       - sub article
           - sub article-text | sub article-video x 2
  - [x] morebutton

#### Right side
  - [x] login 
  - [x] issue | button(prev,next)
  - [x] ad
  - [x] shop
      - menu 
        - title | category 
      - contents
        - top
          - company name | pagenation | button 
        - middle
          - (image,text) * 3 
        - bottom
          - sale | sale content | button >

### 3. Footer 

  - [x] ad 
    - img | type | title | txt 
  - [x] notice
    - left
      - title | txt
    - right
      - button 
  - [x] partner
    - left
      - type | compnay name
    - right 
      - 웨일브라우저 다운받기 | 프로젝트 꽃 
  - [x] corp
    - list * 9

### 4. Popup

  - [x] search filter 
    - [x] header 
      - left
        - title | explain | close button
    - [x] main 
      - left
        - title | value | age  
      - right
        - title | issuelist
    - [x] footer 
      - left
        - date | DataLab


## JS

### 1. Header
  - [x] popup | search-filter 

### 2. Container 
  - [x] rolling | speed news & speed issue
  - [x] sticky  | container Right 전체
  - [x] contets | news, articles 랜딩
  
  
## 완성 페이지
 ![alt text](https://raw.githubusercontent.com/Lee-ji-soo/naverpage-SCSS/master/naverGrid.jpg)
 
### 검색 필터 팝업
 ![alt text](https://raw.githubusercontent.com/Lee-ji-soo/naverpage-SCSS/master/popup.jpg)

## SCSS rule
```
1.color
$white:하얀색
$naverGreen1:네이버 메인 녹색;
$naverGreen2:네이버 서브 녹색;
$naverGreenX:네이버 녹색의 보색;
$naverBlueLight:네이버 메인 블루-밝은;
$naverBlueDeep:이버 메인 블루-어두운;

$fontSuperLight:폰트색 가벼운;
$fontLight:폰트색 밝은;
$fontMid:폰트색 중간;
$fontDark:폰트색 어두운

2.너비,높이
/전체
$basicH : navgation bar, 검색창, 로그인 버튼, 등등의 높이 설정
$basicW : 화면에서 보여질 전체 너비 
$basicWnM : 화면에서 보여질 전체 너비를 설정하고, 그 마진값
$basicBorder: 기본 테두리;
$whole: 100%

/Container
$leftWidth: 화면 왼쪽 내용들 ;
$middleWidth: 화면 왼쪽, 오른쪽 사이의 틈;
$rightWidth:화면 오른쪽 내용들;

2.마진
$boxMargin: section의 양옆 마진;
$iconMargin: 아이콘 양옆 마진;
$textMargin: 텍스트 양옆 마진;

3.버튼
$smallBtnPadding: 작은 버튼의 패딩
$smallBtnRadius: 작은 버튼의 R값;

4.박스
$basicBoxBackgroundcolor:채워진 박스 배경색


4.폰트
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

.fc=fontcolor
dark= 어둡기
light= 밝기


*SCSStip 
:hover :active 등의 경우 css속성을 자식 스코프에서 &로 설정할 수 있음
```
