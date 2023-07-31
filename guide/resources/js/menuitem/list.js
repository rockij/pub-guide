let list = [
  {
    number: 1,
    tag_title: 'Basic',
    tag_text: `
<ul class="list__type">
<li>페이지에서 제일 많이 사용하는 형태</li>
</ul>
    `,
    tag_html: `
<ul class="list__basic">
<li>이용약관</li>
<li>서비스 이용약관</li>
<li>개인정보보호정책</li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 2,
    tag_title: 'Line',
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
    tag_html: `
<ul class="list__row_line">
    <li><a href="" class="lnkbx arr">이용약관</a></li>
    <li><a href="" class="lnkbx">이용약관<span class="rtset arr"><i class="icon__star">☆</i></span></a></li>
    <li><button type="button" class="lnkbx arr">서비스 이용약관</button></li>
    <li><button type="button" class="lnkbx">개인정보보호정책<span class="rtset arr"><i class="icon__star">☆</i></span></button></li>
    <li><a href="" class="lnkbx arr"><span class="lnkbx_tx">바로 입금<span class="stxt">내 걔좌로 바로 입금</span></span></a></li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 3,
    tag_title: 'Box',
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
    tag_html: `
<ul class="list__row_box">
    <li><a href="" class="lnkbx arr">이용약관</a></li>
    <li><a href="" class="lnkbx">이용약관<span class="rtset arr"><i class="icon__star">☆</i></span></a></li>
    <li><button type="button" class="lnkbx arr">서비스 이용약관</button></li>
    <li><button type="button" class="lnkbx">개인정보보호정책<span class="rtset arr"><i class="icon__star">☆</i></span></button></li>
    <li><a href="" class="lnkbx arr"><span class="lnkbx_tx">바로 입금<span class="stxt">내 걔좌로 바로 입금</span></span></a></li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 4,
    tag_title: 'Both Sides',
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
    tag_html: `
<ul class="list__bside">
    <li>
      <a href="" class="lnkbx">
        <span class="col">전화번호전화번호전화번호전화번호전화번호전화번호전화번호전화번호</span>
        <strong class="col">010-1234-5678010-1234-5678010-1234-5678010-1234-5678</strong>      
      </a>
    </li>
    <li>
      <a href="" class="lnkbx">
        <span class="col">전화번호</span>
        <strong class="col">010-1234-5678</strong>      
      </a>
    </li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 5,
    tag_title: 'Drag & Drop',
    tag_text: `
<ul class="list__type">
<li>class="item" 이름은 변경하지 않는다.</li>
<li>data-value의 값은 리스트의 순서대로 입력한다.</li>
<li>실행함수: LIST_LIBRARY.dragDrop('list__drag');</li>
</ul>
    `,
    tag_html: `
<ul class="list__drag">
<li class="item" data-value="1">Item-1</li>
<li class="item" data-value="2">Item-2</li>
<li class="item" data-value="3">Item-3</li>
<li class="item" data-value="4">Item-4</li>
<li class="item" data-value="5">Item-5</li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 6,
    tag_title: 'More Scroll or Button',
    tag_text: `
<ul class="list__type">
<li>리스트를 맽으로 내리거나 more 버튼을 누르면 숨겨진 리스트 더보기</li>
<li>
    실행함수: LIST_LIBRARY.loadMore('list__more', 1, 10, 50);
    <ol>
    <li><b>list__more:</b> 실행시키려는 영역의 class명을 넣는다.</li>
    <li><b>1:</b> 리스트가 보여지는 시작 지점</li>
    <li><b>10:</b> 리스트가 추가되는 갯수</li>
    <li><b>50:</b> 총 리스트 갯수</li>
    </ol>
</li>
</ul>
    `,
    tag_html: `
<div class="list__more">
    <div class="list__more_list">
    </div>
    <div class="list__more_actions">
        <button class="btn_more">Load more</button>
        <span>
            Showing 
            <span class="list_count"></span> of 
            <span class="list_total"></span> Total    
        </span>
    </div>
</div>
    `,
    tag_css: `
    `
  },
//   {
//     number: ,
//     tag_title: '',
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