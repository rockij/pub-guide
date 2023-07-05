let convention = [
    {
      tag_html: `
<div class="section_convention">
<h2>1. 개요</h2>
<h3>1.1 코딩 컨벤션 필요성</h3>
마크업 개발은 프런트-엔드 페이지의 기본 골격을 형성하기 때문에 디자인, 브라우저, 스크립트, 성능, 접근성
등과 긴밀한 관계가 있다. 즉, 마크업 개발을 잘 해야 모든 브라우저에서 콘텐츠를 손실 없이, 빠르고 쉽게
사용자에게 전달할 수 있다.
<br>
또한, 유지보수에 투자되는 비용을 최소화하기 위해 통일된 코드 작성법을 제시한다. 코드를 최초로 작성한
사람이 끝까지 유지보수할 확률은 매우 낮다. 따라서, 최초 개발자가 아닌 사람도 코드를 빠르고 정확하게
이해할 수 있도록 작성하는 것은 코드의 유지보수 비용을 절감하고 업무 효율을 높이는 데 결정적인 역할을
한다. 
<br>
적어도 한 프로젝트의 마크업 코드는 같은 코딩 컨벤션에 따라 작성해야 한다. 코딩 컨벤션을 준수하면
프로젝트 멤버 간 코드 공유도 쉬워지고, 일관성 있게 코드를 작성할 수 있다. 어떤 코딩 컨벤션을
선택하느냐가 중요한 것이 아니라, 통일된 기준으로 소스 코드를 작성하는 것이 중요하다.

<h3>1.2 코딩 컨벤션 요소</h3>
<h4><a href="#convention2">1.2.1 기본 공통 규칙</a></h4>
<h4><a href="#convention3">1.2.2 네이밍규칙</a></h4>
<h4><a href="#convention4">1.2.3 CSS 코드 작성 규칙</a></h4>
<h4><a href="#convention5">1.2.4 SCRIPT 코드 작성 규칙</a></h4>
<h4><a href="#convention6">1.2.5 웹 접근성 작성 규칙</a></h4>
<h4><a href="#convention7">1.2.5 다크모드 작성 규칙</a></h4>

<h2 id="convention2">2. 기본 공통 규칙</h2>
<h3>2.1 HTML 코드 규칙</h3>
<ul class="list__type">
    <li>단일 태그의 마무리는 항상 ‘/>’ 로 해준다. (&lt;br/&gt;)</li>
    <li>모든 값은 따옴표(“)로 묶어준다.</li>
    <li>팝업은 #wrap 영역 바깥에서 작성한다.</li>
    <li>공통 관련 작업(수정)은 지정한 작업자에 한에서 한다.</li>
</ul>


<h3>2.2 들여쓰기 규칙</h3>
<ul class="list__type">
    <li>들여쓰기를 하면 코드의 가독성이 높아지고 전체 HTML 구조를 쉽게 파악할 수 있다.</li>
    <li>마크업의 중첩이 깊어질 때마다 자식 요소는 1탭 들여 쓰고, 1탭의 크기는 공백 4칸으로 설정한다.</li>
    <li>문서 내에서 반드시 탭을 이용하여 들여쓰기를 하며, 탭을 대신하여 공백으로 띄어 들여쓰지 않는다.</li>
</ul>

<h3>2.3 빈 줄</h3>
<ul class="list__type">
    <li>빈 줄을 사용하려면 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다.</li>
    <li>빈 줄의 간격은 1줄을 초과하지 않는다.</li>
</ul>


<h3>2.4 주석</h3>
<h4>A. 기본 형식</h4>
<ul class="list__type">
    <li>HTML 주석의 시작과 종료는 아래와 같이 표기하며, 기본 형식에 맞게 작성한다.<br>시작주석 &lt;!-- 주석내용 --&gt; ... 종료주석 &lt;!-- 주석내용 --&gt;</li>
    <li>주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.</li>
    <li>시작과 종료 주석의 주석 내용은 동일해야 한다.</li>
    <li>수정사항 표시는 '[퍼블수정_날짜] 수정내용'로 조합한다. ([퍼블수정_230612] 문구수정)</li>  
</ul>

<h4>B. 레이아웃 및 콘텐츠 영역의 주석 표기</h4>
wrap을 제외한 레이아웃과 독립된 콘텐츠 영역의 시작과 끝에 주석을 표기하며, 독립된 콘텐츠 영역의 주석
표기는 선택 사항이다.
<pre class="pre">&lt;!-- content --&gt;
&lt;div id="content"&gt;
&lt;!-- 네임카드 --&gt;
&lt;div class="namecard"&gt; ... &lt;/div&gt;
&lt;!-- //네임카드 --&gt;
&lt;/div&gt;
&lt;!-- //content --&gt;</pre>

<h4>C. 개발 적용과 관련된 주석 표기</h4>
<ul class="list__type">
<li>개발 적용과 관련된 주석은 해당되는 영역 위에 표기하며, 종료 주석은 표기하지 않는다.</li>
<li>주석 앞에는 [D]라는 말머리를 사용하여 담당 개발자가 반드시 확인할 수 있도록 한다.</li>
</ul>
<table class="table2">
<thead>
<tr>
<th>사용 예</th>   
</tr>
</thead>
<tbody>
<tr>
<td>
<pre>&lt;!-- content -- &gt;
&lt;!-- [D] 케이스별 클래스 변화
의사 : my_doctor
변호사 : my_lawyer --&gt;</pre>
</td>
</tr>
<tr>
<td>
<pre>&lt;img src="btn.gif" width="100" height="100" alt="버튼"&gt;
&lt;!-- [D] 활성된 버튼은 파일명에 _on 추가
&lt;img src="btn_on.gif" width="100" height="100" alt="버튼"&gt; --&gt;</pre>
</td>
</tr>
</tbody>
</table>

<h2 id="convention3">3. 네이밍 규칙</h2>

<h3>3.1 기본 규칙</h3>
<ul class="list__type">
    <li>네이밍 규칙은 레이아웃, 객체, 이미지, 폴더, 파일의 이름을 작성하는 규칙이다.</li>
    <li>이해하기 쉬운 이름으로 작성해야 코드를 쉽게 파악할 수 있다.</li>    
</ul>

<h4>A. 일반 규칙</h4>
<ul class="list__type">
    <li>이름은 영문 소문자, 숫자, 언더스코어(_)로 작성한다.</li>    
    <li>언더스코어(_)는 단어와 단어 조합할 때만 사용한다.</li>
    <li>언더스코어(_)가 포함된 약속어는 숫자, 영문 소문자와 조합하여 사용할 수 있다.</li>
    <li>공통관리는 더블언더스코어(__)로 작성한다.</li>
</ul>

<h4>B. 시작 이름</h4>
이름은 영문 소문자로만 시작할 수 있다. 단, css 주석문은 영문 대문자를 허용한다.

<h4>C. 약속어</h4>
약속어는 레이아웃 약속어, 객체 약속어, 이미지 약속어에 근거하여 작성한다.<br>
약속어가 없으면, 종류와 특성을 나타내도록 네이밍으로 한다.

<table class="table2">
<caption>객체 약속어</caption>
<colgroup>
<col width="15%">
<col width="20%">
<col>
</colgroup>
<thead>
<tr>
<th>분류</th>
<th>약속어</th>
<th>영역/객체</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="9">레이아웃</td>
<td>.gnb_</td>
<td>최상위 전역 내비게이션 영역</td>
</tr>
<tr>
<td>.sta_</td>
<td>서비스 이름, 연관 서비스, 검색 영역</td>
</tr>
<tr>
<td>.lnb_</td>
<td>현재 서비스의 지역 내비게이션 영역</td>
</tr>
<tr>
<td>.snb_</td>
<td>측면 내비게이션 영역</td>
</tr>
<tr>
<td>.aside_</td>
<td>문서의 주요 부분을 표시하고 남은 콘텐츠 영역</td>
</tr>
<tr>
<td>.spot_</td>
<td>강조하는 상위 콘텐츠 영역</td>
</tr>
<tr>
<td>.path_</td>
<td>현재 페이지의 경로</td>
</tr>
<tr>
<td>#u_skip</td>
<td>스킵네비게이션</td>
</tr>
<tr>
<td>.nav_</td>
<td>내비게이션 요소</td>
</tr>
<tr>
    <td rowspan="14">공통 컨텐츠</td>
    <td>.blind</td>
    <td>숨김영역</td>
</tr>
<tr>
    <td>.btn__</td>
    <td>버튼</td>
</tr>
<tr>
    <td>.icon__</td>
    <td>아이콘</td>
</tr>
<tr>
    <td>.fig__</td>
    <td>그림이 있는 이미지</td>
</tr>
<tr>
    <td>.inp__</td>
    <td>input 입력박스</td>
</tr>
<tr>
    <td>.chkbox__</td>
    <td>체크박스(라디오) 선택</td>
</tr>
<tr>
    <td>.slct__</td>
    <td>셀릭트박스</td>
</tr>
<tr>
    <td>.ad__</td>
    <td>광고</td>
</tr>
<tr>
    <td>.page__</td>
    <td>페이지 목록</td>
</tr>
<tr>
    <td>.list__</td>
    <td>리스트</td>
</tr>
<tr>
    <td>.acn__</td>
    <td>아코디언 형태</td>
</tr>
<tr>
    <td>.tab__</td>
    <td>탭</td>
</tr>
<tr>
    <td>.ly__</td>
    <td>컨텐츠 내 팝업</td>
</tr>
<tr>
    <td>.srch__</td>
    <td>컨텐츠내 검색박스</td>
</tr>

<tr>
<td rowspan="5">요소 그루핑</td>
<td>_section</td>
<td>heading 태그(h1~h6)를 포함한 요소들의 그루핑</td>
</tr>
<tr>
<td>_group</td>
<td>section 보다 낮은 단계의 heading 태그를 포함한 요소들의 그루핑</td>
</tr>
<tr>
<td>_area</td>
<td>group 안으로 태그들을 추가 그루핑</td>
</tr>
<tr>
<td>_type</td>
<td>자식이 있는 엘리멘트들을 그룹핑(ul, dl, table, select)</td>
</tr>
<tr>
<td>_set</td>
<td>엘리먼트들을 그룹핑(ex: a, button, span)</td>
</tr>
</tbody>
</table>  
<table class="table2">
<caption>이미지 약속어</caption>
<colgroup>
<col width="40%">
<col>
</colgroup>
<thead>
<tr>
<th>약속어</th>
<th>분류</th>
</tr>
</thead>
<tbody>
<tr>
<td>h_</td>
<td>제목</td>
</tr>
<tr>
<td>p_</td>
<td>문장</td>
</tr>
<tr>
<td>gnb_ , lnb_ , snb_</td>
<td>내비게이션</td>
</tr>
<tr>
<td>tab_</td>
<td>탭</td>
</tr>
<tr>
<td>btn_</td>
<td>버튼</td>
</tr>
<tr>
<td>bu_</td>
<td>불릿</td>
</tr>
<tr>
<td>ico_</td>
<td>아이콘</td>
</tr>
<tr>
<td>line_</td>
<td>선</td>
</tr>
<tr>
<td>bg_</td>
<td>배경, 박스</td>
</tr>
<tr>
<td>img_</td>
<td>이미지</td>
</tr>
<tr>
<td>_off , _over , _on</td>
<td>상태 변화</td>
</tr>
<tr>
<td>ad_</td>
<td>광고</td>
</tr>
<tr>
<td>tmp_</td>
<td>임시</td>
</tr>
<tr>
<td>sp_</td>
<td>스프라이트 이미지</td>
</tr>
</tbody>
</table>

<h3>3.2 id 및 class 네이밍 규칙</h3>

<h4>A. id, class</h4>
<ul>
<li>id는 문서 전체의 고유 식별자 이므로 한 문서에서 동일한 id를 여러 번 사용하지 않는다.</li>
<li>레이아웃을 제외한 id는 스타일을 지정하지 않는다.</li>
<li>class는 문서에서 여러 번 사용할 수 있다.</li>
<li>(-)는 id 혹은 class는 스크립트를 이용한 기능 구현시에만 사용한다.</li>
</ul>

<h4>B. 레이아웃 약속어</h4>
<table class="table2">
<colgroup>
<col width="30%">
<col>
</colgroup>
<thead>
<tr>
<th>약속어</th>
<th>범위</th>
</tr>
</thead>
<tbody>
<tr>
<td>#wrap </td>
<td>페이지 전체 영역</td>
</tr>
<tr>
<td>#header </td>
<td>머리글 영역</td>
</tr>
<tr>
<td>#container </td>
<td>본문 영역</td>
</tr>
<tr>
<td>#content</td>
<td>주요 콘텐츠 영역</td>
</tr>
<tr>
<td>#footer</td>
<td>바닥글 영역</td>
</tr>
</tbody>
</table>

<h4>C. 팝업 레이아웃 약속어</h4>
<table class="table2">
<colgroup>
<col width="30%">
<col>
</colgroup>
<thead>
<tr>
<th>약속어</th>
<th>범위</th>
</tr>
</thead>
<tbody>
<tr>
<td>.pop_wrap </td>
<td>페이지 전체 영역</td>
</tr>
<tr>
<td>.pop_header </td>
<td>머리글 영역</td>
</tr>
<tr>
<td>.pop_container </td>
<td>본문 영역</td>
</tr>
<tr>
<td>.pop_content</td>
<td>주요 콘텐츠 영역</td>
</tr>
<tr>
<td>.pop_footer</td>
<td>바닥글 영역</td>
</tr>
</tbody>
</table>

<h4>D. 레이아웃 네이밍 조합</h4>
<ul class="list__type">
    <li>레이아웃에 디자인 속성을 추가/변경하려면 class를 사용한다.</li>
    <li>ex: id="content" class="content_style"</li>
</ul>

<h4>E. class 네이밍</h4>
<ul class="list__type">
<li>공통관리(__)와 일반관리(_) 코드를 명확히 구분한다.</li>
<li>네이밍은 '역할_형태_타입' 형태로 한다.(form__group_row, srch_set)</li>
<li>뎁스의 길이는 가급적 3뎁스를 넘기지 않는다.(btn__m_info)</li>
</ul>
<table class="table2">
<colgroup>
<col width="30%">
<col width="30%">
<col>
</colgroup>
<thead>
<tr>
<th>범위</th>
<th>사용 예</th>
<th>설명</th>      
</tr>
</thead>
<tbody>
<tr>
<td>공통</td>
<td>
list__type<br>
btn__x<br>
form__type<br>
</td>
<td>
일반 약속어 class와 겹치지 않기 위해 언더스코어를 두번(__) 사용<br>
공통업무 담당자에 한에서만 사용
</td>
</tr>
<tr>
<td>스타일X</td>
<td>
accordion-header
</td>
<td>
script 작업 등 기능적인 요소만을 추가해야 할 경우 단어 사이에 라인을 붙인다.<br/>
해당 클래스는 변경되면 스크립트 에러가 발생할 수 있어 변경하면 안된다.
</td>
</tr>
<tr>
<td>종속확장</td>
<td>
list__type_v1<br>
msg_type_v1
</td>
<td>
기본형 class에 종속되어 여백, 색깔, 행간 등의 몇 가지 속성을 부여하고자 할 때 사용하는 class.
</td>
</tr>
<tr>
<td>독립확장</td>
<td>
accrdion_type2<br>
list__type2<br>
msg_type<br>
</td>
<td>기본형 class의 변형이 타입으로 분류할 만큼 클 경우 사용하는 class.</td>
</tr>
</tbody>
</table>

<h4>F. (-)사용범위</h4>
<table class="table2">
<colgroup>
<col width="30%">
<col width="30%">
<col>
</colgroup>
<thead>
<tr>
<th>분류</th>
<th>사용 예</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>popup</td>
<td>mw-alert</td>
<td>팝업에 사용</td>
</tr>
<tr>
<td>form</td>
<td>id="input-name"</td>
<td>입력폼의 아이디 값</td>
</tr>
<tr>
<td>a11y</td>
<td>aria-describedby="error-msg"</td>
<td>안내(에러) 메시지 연결</td>
</tr>
<tr>
<td>script</td>
<td>class="input-copy"</td>
<td>copy버튼 선택시 텍스트 복사</td>
</tr>
</tbody>
</table>

<h3>3.3 이미지 네이밍 규칙</h3>
<h4>A. 이미지 네이밍</h4>
<ul>
<li>같은 분류의 이미지가 두 개 이상이면 파일 이름 마지막에 숫자를 추가하여 구분한다.</li>
<li>이미지 네이밍은 이미지 확장자와 관계 없이 순차적으로 적용한다. 예) bu_dot1.gif, bu_dot2.jpg, bu_dot3.png</li>
<li>임시 이미지는 tmp_를 조합한다. 예) tmp_</li>
</ul>
<h4>B. 이미지 네이밍 조합</h4>
이미지 이름은 '형태_의미_상태' 순서로 조합한다.
<table class="table2">
<colgroup>
<col width="30%">
<col width="30%">
<col>
</colgroup>
<thead>
<tr>
<th>잘못된 예</th>
<th>올바른 예</th>
<th>설명</th>      
</tr>
</thead>
<tbody>
<tr>
<td>on_recommend_tab1</td>
<td>tab1_recomm_on</td>
<td>'형태_의미_상태' 순서로 조합한다.</td>
</tr>
<tr>
<td>bnm.gif</td>
<td>btn_naver_mail.gif</td>
<td>임의로 축약하지 않는다.</td>
</tr>
<tr>
<td>btn_Search.gif</td>
<td>btn_srch.gif</td>
<td>영문 소문자를 사용한다.</td>
</tr>
<tr>
<td>1btn_search.gif </td>
<td>btn_srch.gif</td>
<td>숫자로 시작하지 않는다.</td>
</tr>
</tbody>
</table>

<h2 id="convention4">4. CSS 코드 작성 규칙</h2>
<h3>4.1 기본 규칙</h3>
<ul class="list__type">
<li>기본단위는 rem으로 한다 (1rem = 10px)</li>
<li>모든 속성은 영문 소문자로만 작성한다.</li>
<li>마지막 속성의 세미콜론(;)은 삭제한다.</li>
<li>코드 작성할 때는 최대한 들여쓰기를 하지 않는다.</li>
<li>최적화를 위해 속성 값은 최대한 축약한다.(color:#555)</li>
</ul>
<table class="table2">
<colgroup>
<col width="50%">
<col>
</colgroup>
<thead>
<tr>
<th>잘못된 예</th>
<th>올바른 예</th>
</tr>
</thead>
<tbody>
<tr>
<td>
#content{border:1px solid #000}<br>
#content .class{color:#000}<br>
</td>
<td>
#content{border:1px solid #000}<br>
#content .class{color:#000}<br>
</td>
</tr>
<tr>
<td>
@media all and (minwidth:480px){.vod_wrp2{height:278px}}
</td>
<td>
@media all and (min-width:480px){<br>
&nbsp;&nbsp;&nbsp;&nbsp;.vod_wrp2{height:278px}<br>
}
</td>
</tr>
</tbody>
</table>

<h3>4.2 공백</h3>
<h4>A. 속성 간 공백 제거</h4>
<table class="table2">
<colgroup>
<col width="50%">
<col>
</colgroup>
<thead>
<tr>
<th>잘못된 예</th>
<th>올바른 예</th>
</tr>
</thead>
<tbody>
<tr>
<td>
.class p{color:#000;^line-height:18px}<br>
.class p{color:#000^ ;line-height:18px}
</td>
<td>.class p{color:#000;line-height:18px}</td>
</tr>
</tbody>
</table>
<h4>B. 중괄호 좌우 공백 제거</h4>
<table class="table2">
<colgroup>
<col width="50%">
<col>
</colgroup>
<thead>
<tr>
<th>잘못된 예</th>
<th>올바른 예</th>
</tr>
</thead>
<tbody>
<tr>
<td>.class p^{color:#000}</td>
<td>.class p{color:#000}</td>
</tr>
<tr>
<td>.class p{^color:#000; line-height:18px^}</td>
<td>.class p{color:#000;line-height:18px}</td>
</tr>
</tbody>
</table>

<h3>4.3 줄 바꿈</h3>
클래스 이름이 짧을 경우 속성, 속성 값 사이 줄 바꿈은 하지 않는다.<br>  
단, 클래스 이름이 길거나 중괄호”{}”가 중첩되는 경우 예외로 한다.  
<table class="table2">
<colgroup>
<col width="50%">
<col>
</colgroup>
<thead>
<tr>
<th>잘못된 예</th>
<th>올바른 예</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
.class1,
.class2,
.class3{
width:
100px;
color:
#000
}
</td>
<td>class1,.class2,.class3{width:100px;color:#000}</td>
</tr>
<tr>
<td>
.class__name_name1,
.class__name_name2,
.class__name_name3{width:100px;color:#000}</td>
</tr>
<tr>
<td>@media print{#header{display:none}}</td>
<td>
@media print{
&nbsp;&nbsp;&nbsp;&nbsp;#header{display:none}
}
</td>
</tr>
</tbody>
</table>

<h3>4.4 속성</h3>
속성을 선언할 때는 그 쓰임새가 레이아웃과 관련이 큰 것에서 시작하여 레이아웃과 무관한 것 순서로 선언한다.<br>
벤터속성(-webkit-)은 속성 앞에 선언하다. (-webkit-boder-radius:2px;border-radius:2px)
<table class="table2">
<colgroup>
<col width="10%">
<col width="20%">
<col>
</colgroup>
<thead>
<tr>
<th>순서</th>
<th>의미</th>
<th>대표되는 속성</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tac">1</td>
<td>레이아웃</td>
<td>display, visibility, overflow, float, clear, position, top, right, bottom, left, zindex</td>
</tr>
<tr>
<td class="tac">2</td>
<td>BOX</td>
<td>width, height, margin, padding, border</td>
</tr>
<tr>
<td class="tac">3</td>
<td>배경</td>
<td>background</td>
</tr>
<tr>
<td class="tac">4</td>
<td>폰트</td>
<td>font,color, letter-spacing, text-align, text-decoration, text-indent, verticalalign, white-space </td>
</tr>
<tr>
<td class="tac">5</td>
<td>기타</td>
<td>위에 언급되지 않은 나머지 속성들로 폰트의 관련 속성 이후에 선언하며, 기타 속성 내의 선언 순서는 무관함</td>
</tr>
</tbody>
</table>

<h3>4.5 z-index</h3>
z-index 속성의 속성 값의 범위는 최소 10, 최고 1000이며, 10 단위로 증감한다.
단, 10 단위 사이의 예외 변수가 발생하면 1 단위 값을 지정할 수 있다.

<h3>4.6 주석</h3>
<h4>A. 기본 형식</h4>
<pre class="pre">/** 주석내용(1depth) **/
/* 주석내용(2depth) */
</pre>
<ul>
<li>뎁스를 구분해야하는 경우 별2개(**)로 표시한다.</li>
<li>주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.</li>
<li>주석 기호와 주석 내용 사이의 줄 바꿈은 허용하지 않는다. 단, 주석 내용 간 줄 바꿈은 허용한다.</li>
<li>종료 주석은 사용하지 않는다.</li>
<li>
마크업과 개발의 편의를 위해 작성한 주석은 실제 서비스를 적용할 때 삭제한다.<br>
단, 작성자 정보와 그룹영역의 주석표기는 삭제하지 않는다.
</li>
</ul>

<h4>B. 의미 있는 그룹 영역의 주석 표기</h4>
의미 있는 객체를 구분하기 위한 주석은 영역의 윗부분에 표기한다.<br>
초기화와 레이아웃 스타일 그룹을 제외한 의미 있는 그룹 영역의 주석 표기는 선택 사항이다.

<h3>4.7 파일 분기</h3>
파일순서는 공통 관련 css을 제일 위에 추가한다.
<table class="table2">
<colgroup>
<col width="30%">
<col>
</colgroup>
<thead>
<tr>
<th>범위</th>
<th>파일구성</th>
</tr>
</thead>
<tbody>
<tr>
<td>작은 프로젝트</td>
<td>
글꼴.css, 공통.css, 컨텐츠.css 2개정도로 한다.<br>
많아도 3개를 넘기지 않는다.
</td>
</tr>
<tr>
<td>대형 프로젝트</td>
<td>
글꼴.css, 공통.css, 서비스별 css를 따로 만든다.
</td>
</tr>
</tbody>
</table>  

<h3>4.8 CSS Sprites 사용</h3>
동일 사이즈의 아이콘을 하나의 이미지 영역안에 배치하여 사용한다.<br>
이미지 이름을 지정할때는 sp_20 식의 사이즈별로 구분한다.

<h3>4.9 CSS Animation 사용</h3>
<ul>
<li>기본 속도는 .3s로 하며 :root{} 내에 변수 추가하여 공통 관리한다.</li>
<li>단순한 모션은 transition으로 작성한다.</li>
<li>keyframes 사용시 해당 요소의 위에 작성한다.</li>
<li>반복되는 keyframes가 있다면 공통으로 분리하여 관리한다.</li>
</ul>

<h2 id="convention5">5. SCRIPT 코드 작성 규칙</h2>
<h3>5.1 기본 규칙</h3>
<ul class="list__type">
<li>ui.common.js 파일에 공통 코드 관리한다.</li>
<li>ui.page.js 파일에 공통을 제외한 코드 관리한다.</li>
<li>대형 프로젝트일 경우 파일은 메뉴별로 세분화하여 관리 할 수 있다.</li>
<li>데이터바인딩 후에 실행해야할 함수는 기본적으로 실행하지 않고 페이내에 제일 하단에 추가한다.</li>
</ul>
<h3>5.2 작성 규칙</h3>
<ul class="list__type">    
    <li>순수 javascript로 작업을 기본으로 한다.</li>
    <li>공통함수 실행은 최상단에 추가하여 관리한다.</li>
    <li>작은따옴표('')를 사용한다.</li>
    <li>주석달기는 <a href="#convention3">기본 공통 규칙 참고</a></li>
</ul>
<h3>5.3 jquery 라이브러리로 작업시</h3>
기본 js 버전은 개발과 협의해 정한다. 꼭 최신버전으로 할수는 없다.  

<h2 id="convention6">6. 웹 접근성 작성 규칙</h2>
<h3>6.1 기본 규칙</h3>
<ul class="list__type">
<li>크로스 브라우징이 가능하도록 한다.</li>
<li>이미지 태그에는 alt를 반드시 지정한다.</li>
<li>제목(h) 태그를 적절하게 사용한다.</li>
<li>현재 초점의 시각적 표시를 제공한다.</li>
<li>초점 이동시 정상 작동 확인한다.</li> 
<li>링크, 버튼의 영역은 기본 44px을 기준으로 한다.</li>
<li>색상대비를 확인한다.</li>
</ul>

<h2 id="convention7">7. 다크모드 작성 규칙</h2>
<h3>7.1 기본 규칙</h3>
컬러들을 :root안에 변수로 추가하여 right 모드와 dark 모드일때의 값을 변경에 관리한다.
</div>
      `,
    },
  ]