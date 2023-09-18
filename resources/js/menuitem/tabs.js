let tabs = [
  {
    number: 1,
    tag_title: 'Tab Default',
    tag_text: `
<ul class="list--type">
<li>타이틀이 있다면 id="tablist-1" 지정한 후 tablist에 aria-labelledby와 연결</li>
<li>role="tab"의 id값과 tabpanel의 aria-labelledby와 연결</li>
<li>role="tabpanel"에 id값과 role="tab"의 aria-controls와 연결</li>
<li>role="tab"의 focus가 안되어 있는 탭은 tabindex="-1"</li>
<li>role="tabpanel"에 활성화가 안되어 있는 tabpanel class="is-hidden" 추가</li>
<li>
    실행<br/>
    const tabDefualts = document.querySelectorAll('.tab--defualt');<br/>
    tabDefualts.forEach((tabDefualt) => new TAB_DEFAULT(tabDefualt));
</li>
</ul>
    `,
    tag_html:`
<div class="tab--defualt">
    <div role="tablist" aria-labelledby="tablist-1">
        <button id="tab-1" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-1">
        <span class="focus">Tab1</span>
        </button>
        <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
        <span class="focus">Tab2</span>
        </button>
        <button id="tab-3" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-3" tabindex="-1">
        <span class="focus">Tab3</span>
        </button>
    </div>
    <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    <div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    <div id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3" class="is-hidden">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
</div>
    `,
    tag_css: `
[role="tabpanel"].is-hidden{display:none}
.tab--defualt [role="tab"],
.tab--defualt [role="tab"]:focus,
.tab--defualt [role="tab"]:hover{
    overflow:visible;position:relative;z-index:2;top:2px;margin:0;margin-top:4px;padding:3px 3px 4px;    
    border:1px solid var(--border);border-bottom:2px solid var(--border);
    border-radius:5px 5px 0 0;background:var(--bg-base);font-weight:700
}
.tab--defualt [role="tab"][aria-selected="true"]{padding:2px 2px 4px;margin-top:0;border-width:2px;border-bottom-color:var(--bg-base);background:var(--bg-base)}
.tab--defualt [role="tab"][aria-selected="false"]{border-bottom:1px solid var(--border)}
.tab--defualt [role="tab"] span.focus{display:inline-block;margin:2px;padding:4px 6px}
.tab--defualt [role="tab"]:hover span.focus,
.tab--defualt [role="tab"]:focus span.focus,
.tab--defualt [role="tab"]:active span.focus{padding:2px 4px;border:2px solid rgb(36 116 214);border-radius:3px}
.tab--defualt [role="tabpanel"]{padding:5px;border:2px solid var(--border);border-radius:0 5px 5px;background:var(--bg-base);min-height:10em;overflow:auto}
    `
  },
  {
    number: 2,
    tag_title: 'Tab Bar Animation',
    tag_text: `
<ul class="list--type">
<li>기본가이드는 Tab Default를 참고</li>
<li>Tab 선택시 하단 bar가 선택한 탭으로 이동</li>
<li>indicator의 길이는 탭의 길이에 따라 가변적이다.</li>
<li>필요시 active-color 값에 맞춰 indicator의 색상 값을 바꿀 수 있다.</li>
<li>
    실행<br/>
    const tabBarmovs = document.querySelectorAll('.tab--movbar');<br/>
    tabBarmovs.forEach((tabBarmov) => new TAB_BARMOV(tabBarmov));
</li>
</ul>
    `,
    tag_html: `
<div class="tab--movbar">
    <div role="tablist" aria-labelledby="tablist-4">
        <button id="tab4-1" type="button" role="tab" aria-selected="false" aria-controls="tabpanel4-1" active-color="orange">
            <span class="focus">Tab1</span>
        </button>
        <button id="tab4-2" type="button" role="tab" aria-selected="true" aria-controls="tabpanel4-2" active-color="orange">
            <span class="focus">Tab22222</span>
        </button>
        <button id="tab4-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel4-3" active-color="orange">
            <span class="focus">Tab3</span>
        </button>
        <span class="indicator"></span>
    </div>
    <div id="tabpanel4-1" role="tabpanel" aria-labelledby="tab4-1">
        content
    </div>
    <div id="tabpanel4-2" role="tabpanel" aria-labelledby="tab4-2" class="is-hidden">
        content
    </div>
    <div id="tabpanel4-3" role="tabpanel" aria-labelledby="tab4-3" class="is-hidden">
        content
    </div>
</div>
    `,
    tag_css: `
[role="tabpanel"].is-hidden{display:none}
.tab--movbar [role="tabpanel"]{padding:5px;border:2px solid var(--border);border-radius:0 5px 5px;background:var(--bg-base);min-height:10em;overflow:auto}
.tab--movbar [role="tablist"]{position:relative}
.tab--movbar [role="tab"]{position:relative;z-index:1;margin:0 6px;padding:3px 3px 10px;text-decoration:none;color:var(--color-secondary);transition-duration:var(--transition-speed);font-weight:700}
.tab--movbar [role="tab"]:before{content:"";position:absolute;bottom:-6px;left:0;width:100%;height:5px;background-color:#dfe2ea;border-radius:8px 8px 0 0;opacity:0;transition-duration:var(--transition-speed)}
.tab--movbar [role="tab"]:not(.is-active):hover:before{opacity:1;bottom:0}
.tab--movbar [role="tab"]:not(.is-active):hover{color:var(--color-primary)}
.tab--movbar .indicator{position:absolute;left:0;bottom:0;height:4px;transition-duration:var(--transition-speed);height:5px;z-index:1;border-radius:8px 8px 0 0}
    `,
  },
  {
    number: 3,
    tag_title: 'Loacation',
    tag_text: `
<ul class="list--type">
<li>그룹이란 표시로 role="group" 추가한다.</li>
<li>aria-label을 이용해 현재 몇단계인지 표시한다.</li>
</ul>
    `,
    tag_html: `
<div class="path_depth" role="gorup" aria-label="전체 4단계중 1단계">
<span class="item active">1단계</span>
<span class="item">2단계</span>
<span class="item">3단계</span>
<span class="item">4단계</span>
</div>
`,
  },
  {
    number: 4,
    tag_title: 'Paging',
    tag_text: `
<ul class="list--type">
<li>aria-label을 이용해 aria-label="pagination navigation" 넣어준다.</li>
<li>현재 페이지는 해당하는 링크에 aria-current="page" 넣어준다.</li>
</ul>
    `,
    tag_html: `
<nav class="page__link" aria-label="pagination navigation">
    <ul>
    <li><a href="/page-2">Previous</a></li>
    <li><a href="/page-1">1</a></li>
    <li><a href="/page-2" aria-current="page" class="active">2</a></li>
    <li><a href="/page-3">3</a></li>
    <li><a href="/page-4">4</a></li>
    <li><a href="/page-5">5</a></li>
    <li><a href="/page-3">Next</a></li>
    </ul>
</nav>
    `,
  },
  {
    number: 5,
    tag_title: 'Pagination Gooey',
    tag_text: `
<ul class="list--type">
<li>버튼 hover시 끈적이는 느낌으로 앵커 이동</li>
</ul>
    `,
    tag_html: `
<div class="page--link2">
    <ul class="dots">
        <li class="select"></li>
        <li class="dot"></li>
        <li class="dot"></li>
        <li class="dot"></li>
        <li class="dot"></li>
        <li class="dot"></li>
    </ul>
    <ul class="buttons">
        <li class="button"><button>1</button></li>
        <li class="button"><button>2</button></li>
        <li class="button"><button>3</button></li>
        <li class="button"><button>4</button></li>
        <li class="button"><button>5</button></li>
    </ul>
</div>
    `,
    tag_css: `
.page--link2{--vertical-padding:.5rem;--horizon-padding:1;--size:4rem;--bgcolor:#000}
.page--link2 ul{padding:var(--vertical-padding) calc( var(--horizon-padding) * 1rem );font-size:0}
.page--link2 li{display:inline-block;margin:.5rem;width:var(--size);height:var(--size);border-radius:50%}
.page--link2 .dots{position:absolute;z-index:1;background-color:#fff;filter:blur(5px) contrast(10)}
.page--link2 .dots .select{position: absolute;left:calc( var(--horizon-padding) * 1rem );top:var(--vertical-padding);width:var(--size);height:var(--size);
background-color:var(--bgcolor)}
.page--link2 .dots .dot{background-color:#000}
.page--link2 .buttons{position:relative;z-index:2}
.page--link2 .buttons button{width:100%;height:100%;font-size:1.4rem;font-weight:700;cursor: pointer;color:#fff}
    `,
  },
//   {
//     number: ,
//     tag_title: '',
//     tag_text: `
// <ul class="list--type">
// <li></li>
// </ul>
//     `,
//     tag_html: ``,
//     tag_css: ``,
//   },
]