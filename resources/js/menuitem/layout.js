let layout = [
  {
    number: 1,
    tag_title: 'Calendar(Custom)',
    tag_text: `
<ul class="list--type">
<li>페이지에 바로 보여줘야할 경우 사용</li>
<li>기본적인 html 태그 추가 후 CALENDAR_CUSTOM.init(); 실행</li>
</ul>
    `,
    tag_html: `
    <div class="container-calendar">
    <h3 id="monthAndYear" aria-live="assertive"></h3>

    <div class="button-container-calendar" role="navigation" aria-labelledby="monthAndYear">
        <button id="todays" title="오늘 이동">Today</button>
        <button id="previous" title="이전달 이동">&#8249;</button>
        <button id="next" title="다음달 이동">&#8250;</button>
    </div>

    <table class="table-calendar" id="calendar" data-lang="ko" role="grid" aria-labelledby="current-year">
        <thead id="thead-month"></thead>
        <tbody id="calendar-body"></tbody>
    </table>

    <div class="footer-container-calendar">
         <label for="month">Jump To: </label>
         <select id="month" onchange="CALENDAR_CUSTOM.jump()">
             <option value=0>Jan</option>
             <option value=1>Feb</option>
             <option value=2>Mar</option>
             <option value=3>Apr</option>
             <option value=4>May</option>
             <option value=5>Jun</option>
             <option value=6>Jul</option>
             <option value=7>Aug</option>
             <option value=8>Sep</option>
             <option value=9>Oct</option>
             <option value=10>Nov</option>
             <option value=11>Dec</option>
         </select>
        <select id="year" onchange="CALENDAR_CUSTOM.jump()" title="select start date month/year"></select>
        <span id="dayValue"></span>
    </div>
    `,
  },
  {
    number: 2,
    tag_title: 'Footer Fix',
    tag_text: `
<ul class="list--type">
<li>컨텐츠 길이가 짧을 경우 하단 고정</li>
<li>컨텐츠 길이가 길어 스크롤이 생길시 아래로 내려감</li>
</ul>
<br/>
<a href="pages/layout_footer_fix.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 3,
    tag_title: 'Inner Full Width',
    tag_text: `
<ul class="list--type">
<li>컨텐츠 안에 박스를 강제로 전체 영역으로 잡을때 사용</li>
<li>2가지 형태의 소스가 있고 필요한 부분에 사용</li>
</ul>
<br/>
<a href="pages/layout_inner_full_width.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 4,
    tag_title: 'Mobile Unit Height Full',
    tag_text: `
<ul class="list--type">
<li>모바일에서 전체화면을 고정시킬 떄 사용</li>
<li>툴바사이즈까지 포함해서 세로 길이는 잡아서 스크롤이 안생김</li>
<li>css custom property의 값을 js에서 연결하여 페이지가 resize시마다 체크하여 변화되는 사이즈 대응</li>
</ul>
<br/>
<a href="pages/layout_mobile_fullheight.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 5,
    tag_title: 'Fixed Header',
    tag_text: `
<ul class="list--type">
<li>어느 위치를 지나면 헤더가 다시 나타나는 구조</li>
</ul>
<br/>
<a href="pages/layout_fixed_header.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 6,
    tag_title: 'Scroll Header Show & Hide',
    tag_text: `
<ul class="list--type">
<li>헤더가 스크롤시 내리면 숨기고 올리면 보여지는 형태</li>
</ul>
<br/>
<a href="pages/layout_scroll_header_handle.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 7,
    tag_title: 'Custom Scroll Bar',
    tag_text: `
<ul class="list--type">
<li>스크롤바 디자인 입히기</li>
</ul>
<br/>
<a href="pages/layout_scroll_progress_bar.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 8,
    tag_title: 'List Horizon Scroll (Grid)',
    tag_text: `
<ul class="list--type">
<li>Gird를 이용해 필요한 영역에 가로 스크롤 만들기</li>
</ul>
<br/>
<a href="pages/layout_horizontal_scroller.html" target="_blank">페이지보기</a>
    `,
  },
  {
    number: 9,
    tag_title: 'Marquee Wall',
    tag_text: `
<ul class="list--type">
<li>가로, 세로로 무한으로 흐르는 레이아웃</li>
</ul>
<br/>
<a href="pages/layout_marquee_wall.html" target="_blank">페이지보기</a>
    `,
  },
//   {
//     number: ,
//     tag_title: '',
//     tag_text: `
// <ul class="list--type">
// <li></li>
// </ul>
// <br/>
// <a href="pages/.html" target="_blank">페이지보기</a>
//     `,
//     tag_html: `
//     `,
//     tag_css: `
//     `
//   },
]