let layout = [
  {
    number: 1,
    tag_title: 'Calendar(Custom)',
    tag_text: `
<ul class="list__type">
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
    tag_css: `
    `
  },
  {
    number: 2,
    tag_title: 'Footer Fix',
    tag_text: `
<ul class="list__type">
<li>컨텐츠 길이가 짧을 경우 하단 고정</li>
<li>컨텐츠 길이가 길어 스크롤이 생길시 아래로 내려감</li>
</ul>
<br/>
<a href="pages/layout_footer_fix.html" target="_blank">페이지보기</a>
    `,
    tag_css: `
footer {
    position: sticky;
    top: 100vh;
}
    `
  },
//   {
//     number: 1,
//     tag_title: 'Default Buttons',
//     tag_text: `
// <ul class="list__type">
// <li></li>
// </ul>
//     `,
//     tag_html: `
//     `,
//     tag_css: `
//     `
//   },
]