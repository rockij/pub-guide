let icons = [
  {
    number: 1,
    tag_title: 'Default Badges',
    tag_text: `
<ul class="list__type">
<li>디자인 가이드에 맞춰 작업</li>
<li>color를 변수로 관리</li>
<li>공통 관리로 .badge__ 형태로 클래스 작성</li>
<li>.badge__m은 기본 형태 크기 폰트 사이즈를 지정한다.</li>
<li>.badge__primary 는 컬러를 지정한다.</li>
</ul>
    `,
    tag_html:`
<span class="badge__m badge__primary">Primary</span>
<span class="badge__m badge__secondary">Secondary</span>
<span class="badge__m badge__success">Success</span>
<span class="badge__m badge__danger">Danger</span>
<span class="badge__m badge__info">Info</span>
    `,
    tag_css: `
[class*="badge__"]{display:inline-block}
[class*="badge__m"]{padding:3px 6px 4px;font-size:11px;border-width:1px;border-style:solid;line-height:1}
.badge__m{border-radius:2px}
.badge__primary{border-color:var(--color-primary);background-color:var(--color-primary);color:#fff}
.badge__secondary{border-color:var(--color-secondary);background-color:var(--color-secondary);color:#fff}
.badge__success{border-color:var(--color-done);background-color:var(--color-done);color:#fff}
.badge__danger{border-color:var(--color-warning);background-color:var(--color-warning);color:#fff}
.badge__info{border-color:var(--color-notice);background-color:var(--color-notice);color:#fff}
    `,
  },
  {
    number: 2,
    tag_title: 'Rounded Badges',
    tag_text: `
<ul class="list__type">
<li>round가 있는 형태는 뒤에 r을 붙인다.</li>
</ul>
    `,
    tag_html:`
<span class="badge__mr badge__primary">Primary</span>
<span class="badge__mr badge__secondary">Secondary</span>
<span class="badge__mr badge__success">Success</span>
<span class="badge__mr badge__danger">Danger</span>
<span class="badge__mr badge__info">Info</span>
    `
  },
  {
    number: 3,
    tag_title: 'Text Badges',
    tag_text: `
<ul class="list__type">
<li>텍스트로만 된 badge는 컬러 클래스 뒤에 _text을 붙여 작성한다.</li>
</ul>
    `,
    tag_html:`
<span class="badge__m badge__primary_text">Primary</span>
<span class="badge__m badge__secondary_text">Secondary</span>
<span class="badge__m badge__success_text">Success</span>
<span class="badge__m badge__danger_text">Danger</span>
<span class="badge__m badge__info_text">Info</span>
    `
  },
  {
    number: 4,
    tag_title: 'Icon Badges',
    tag_html:`
<span class="badge__m badge__primary"><i class="sp__20 icon__star"></i>Primary</span> 
    `
  }
]