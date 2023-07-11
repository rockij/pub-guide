let tabs = [
  {
    number: 1,
    tag_title: 'Tab Default',
    tag_text: `
<ul class="list__type">
<li>타이틀이 있다면 id="tablist-1" 지정한 후 tablist에 aria-labelledby와 연결해준다.</li>
<li>role="tab"의 id값과 tabpanel의 aria-labelledby와 연결해준다.</li>
<li>role="tabpanel"에 id값과 role="tab"의 aria-controls와 연결해준다.</li>
<li>role="tab"의 focus가 안되어 있는 탭은 tabindex="-1" 이다.</li>
<li>role="tabpanel"에 활성화가 안되어 있는 tabpanel class="is-hidden" 추가한다.</li>
</ul>
    `,
    tag_view:`
<div class="tab__defualt">
    <div role="tablist" aria-labelledby="tablist-1">
        <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
        <span class="focus">Tab Header1</span>
        </button>
        <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
        <span class="focus">Tab Header2</span>
        </button>
        <button id="tab-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1">
        <span class="focus">Tab Header3</span>
        </button>
        <button id="tab-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-4" tabindex="-1">
        <span class="focus">Tab Header4</span>
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
    <div id="tabpanel-4" role="tabpanel" aria-labelledby="tab-4" class="is-hidden">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    </div>
</div>
    `,
    tag_html: `
<div class="tab__defualt">
    <div role="tablist" aria-labelledby="tablist-2">
        <button id="tab2-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel2-1">
            <span class="focus">Tab Header1</span>
        </button>
        <button id="tab2-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel2-2" tabindex="-1">
            <span class="focus">Tab Header2</span>
        </button>
        <button id="tab2-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel2-3" tabindex="-1">
            <span class="focus">Tab Header3</span>
        </button>
        <button id="tab2-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel2-4" tabindex="-1">
            <span class="focus">Tab Header4</span>
        </button>
    </div>
    <div id="tabpanel2-1" role="tabpanel" aria-labelledby="tab2-1">
        content
    </div>
    <div id="tabpanel2-2" role="tabpanel" aria-labelledby="tab2-2" class="is-hidden">
        content
    </div>
    <div id="tabpanel2-3" role="tabpanel" aria-labelledby="tab2-3" class="is-hidden">
        content
    </div>
    <div id="tabpanel2-4" role="tabpanel" aria-labelledby="tab2-4" class="is-hidden">
        content
    </div>
    </div>
</div>
    `,
    tag_css: `
[role="tabpanel"].is-hidden{display:none}
.tab__defualt [role="tab"],
.tab__defualt [role="tab"]:focus,
.tab__defualt [role="tab"]:hover{
    overflow:visible;position:relative;z-index:2;top:2px;margin:0;margin-top:4px;padding:3px 3px 4px;    
    border:1px solid var(--border);border-bottom:2px solid var(--border);
    border-radius:5px 5px 0 0;background:var(--bg-base);font-weight:700
}
.tab__defualt [role="tab"][aria-selected="true"]{padding:2px 2px 4px;margin-top:0;border-width:2px;border-bottom-color:var(--bg-base);background:var(--bg-base)}
.tab__defualt [role="tab"][aria-selected="false"]{border-bottom:1px solid var(--border)}
.tab__defualt [role="tab"] span.focus{display:inline-block;margin:2px;padding:4px 6px}
.tab__defualt [role="tab"]:hover span.focus,
.tab__defualt [role="tab"]:focus span.focus,
.tab__defualt [role="tab"]:active span.focus{padding:2px 4px;border:2px solid rgb(36 116 214);border-radius:3px}
.tab__defualt [role="tabpanel"]{padding:5px;border:2px solid var(--border);border-radius:0 5px 5px;background:var(--bg-base);min-height:10em;overflow:auto}
    `,
  },
  {
    number: 2,
    tag_title: 'Tab Bar Animation',
    tag_text: `
<ul class="list__type">
<li>기본가이드는 Tab Default를 참고한다.</li>
<li>Tab 선택시 하단 bar가 선택한 탭으로 이동한다.</li>
<li>indicator의 길이는 탭의 길이에 따라 가변적이다.</li>
<li>필요시 active-color 값에 맞춰 indicator의 색상 값을 바꿀 수 있다.</li>
</ul>
    `,
    tag_view:`
<div class="tab__movbar">
    <div role="tablist" aria-labelledby="tablist-3">
        <button id="tab3-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel3-1" class="is-active" active-color="orange">
            <span class="focus">Tab Header1</span>
        </button>
        <button id="tab3-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel3-2" tabindex="-1" active-color="green">
            <span class="focus">Tab Header2</span>
        </button>
        <button id="tab3-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel3-3" tabindex="-1" active-color="blue">
            <span class="focus">Tab Header3</span>
        </button>
        <button id="tab3-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel3-4" tabindex="-1" active-color="red">
            <span class="focus">Tab Header4</span>
        </button>
        <span class="indicator"></span>
    </div>
    <div id="tabpanel3-1" role="tabpanel" aria-labelledby="tab3-1">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    <div id="tabpanel3-2" role="tabpanel" aria-labelledby="tab3-2" class="is-hidden">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    <div id="tabpanel3-3" role="tabpanel" aria-labelledby="tab3-3" class="is-hidden">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    <div id="tabpanel3-4" role="tabpanel" aria-labelledby="tab3-4" class="is-hidden">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio dignissimos molestiae accusamus officia error nesciunt voluptatem repudiandae illo, quia deserunt vitae eaque praesentium doloribus. Dolorem debitis consectetur aperiam repellat.
        </p>
    </div>
    </div>
</div>
    `,
    tag_html: `
<div class="tab__ movbar">
    <div role="tablist" aria-labelledby="tablist-4">
        <button id="tab4-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel4-1">
            <span class="focus">Tab Header1</span>
        </button>
        <button id="tab4-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel4-2" tabindex="-1">
            <span class="focus">Tab Header2</span>
        </button>
        <button id="tab4-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel4-3" tabindex="-1">
            <span class="focus">Tab Header3</span>
        </button>
        <button id="tab4-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel4-4" tabindex="-1">
            <span class="focus">Tab Header4</span>
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
    <div id="tabpanel4-4" role="tabpanel" aria-labelledby="tab4-4" class="is-hidden">
        content
    </div>
    </div>
</div>
    `,
    tag_css: `
[role="tabpanel"].is-hidden{display:none}
.tab__movbar [role="tabpanel"]{padding:5px;border:2px solid var(--border);border-radius:0 5px 5px;background:var(--bg-base);min-height:10em;overflow:auto}
.tab__movbar [role="tablist"]{position:relative}
.tab__movbar [role="tab"]{position:relative;z-index:1;margin:0 6px;padding:3px 3px 10px;text-decoration:none;color:var(--color-secondary);transition-duration:var(--transition-speed);font-weight:700}
.tab__movbar [role="tab"]:before{content:"";position:absolute;bottom:-6px;left:0;width:100%;height:5px;background-color:#dfe2ea;border-radius:8px 8px 0 0;opacity:0;transition-duration:var(--transition-speed)}
.tab__movbar [role="tab"]:not(.is-active):hover:before{opacity:1;bottom:0}
.tab__movbar [role="tab"]:not(.is-active):hover{color:var(--color-primary)}
.tab__movbar .indicator{position:absolute;left:0;bottom:0;height:4px;transition-duration:var(--transition-speed);height:5px;z-index:1;border-radius:8px 8px 0 0}
    `,
  },
]