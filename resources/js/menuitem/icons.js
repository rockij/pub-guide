let icons = [
  {
    number: 1,
    tag_title: 'Default Badges',
    tag_text: `
<ul class="list--type">
<li>디자인 가이드에 맞춰 작업</li>
<li>color를 변수로 관리</li>
<li>공통 관리로 .badge-- 형태로 클래스 작성</li>
<li>.badge--m은 기본 형태 크기 폰트 사이즈를 지정한다.</li>
<li>.badge--primary 는 컬러를 지정한다.</li>
</ul>
    `,
    tag_html:`
<span class="badge--m badge--primary">Primary</span>
<span class="badge--m badge--secondary">Secondary</span>
<span class="badge--m badge--success">Success</span>
<span class="badge--m badge--danger">Danger</span>
<span class="badge--m badge--info">Info</span>
    `,
    tag_css: `
[class*="badge--"]{display:inline-block}
[class*="badge--m"]{padding:3px 6px 4px;font-size:11px;border-width:1px;border-style:solid;line-height:1}
.badge--m{border-radius:2px}
.badge--primary{border-color:var(--color-primary);background-color:var(--color-primary);color:#fff}
.badge--secondary{border-color:var(--color-secondary);background-color:var(--color-secondary);color:#fff}
.badge--success{border-color:var(--color-done);background-color:var(--color-done);color:#fff}
.badge--danger{border-color:var(--color-warning);background-color:var(--color-warning);color:#fff}
.badge--info{border-color:var(--color-notice);background-color:var(--color-notice);color:#fff}
    `,
  },
  {
    number: 2,
    tag_title: 'Rounded Badges',
    tag_text: `
<ul class="list--type">
<li>round가 있는 형태는 뒤에 r을 붙인다.</li>
</ul>
    `,
    tag_html:`
<span class="badge--mr badge--primary">Primary</span>
<span class="badge--mr badge--secondary">Secondary</span>
<span class="badge--mr badge--success">Success</span>
<span class="badge--mr badge--danger">Danger</span>
<span class="badge--mr badge--info">Info</span>
    `
  },
  {
    number: 3,
    tag_title: 'Text Badges',
    tag_text: `
<ul class="list--type">
<li>텍스트로만 된 badge는 컬러 클래스 뒤에 _text을 붙여 작성한다.</li>
</ul>
    `,
    tag_html:`
<span class="badge--m badge--primary_text">Primary</span>
<span class="badge--m badge--secondary_text">Secondary</span>
<span class="badge--m badge--success_text">Success</span>
<span class="badge--m badge--danger_text">Danger</span>
<span class="badge--m badge--info_text">Info</span>
    `
  },
  {
    number: 4,
    tag_title: 'Icon Badges',
    tag_html:`
<span class="badge--m badge--primary"><i class="sp--20 icon--star"></i>Primary</span> 
    `
  }
]