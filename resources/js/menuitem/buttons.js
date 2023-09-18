let buttons = [
  {
    number: 1,
    tag_title: 'Default Buttons',
    tag_text: `
<ul class="list--type">
<li>디자인 가이드에 맞춰 작업</li>
<li>color를 변수로 관리</li>
<li>공통 관리로 .btn-- 형태로 클래스 작성</li>
<li>.btn--m은 기본 형태 크기 폰트 사이즈를 지정한다.</li>
<li>.btn--primary 는 컬러를 지정한다.</li>
</ul>
    `,
    tag_html:`
<button type="button" class="btn--m btn--primary">Primary</button>
<a href="javascript:;" class="btn--m btn--primary">Primary(a태그)</a>
<button type="button" class="btn--m btn--secondary">Secondary</button>
<button type="button" class="btn--m btn--success">Success</button>
<button type="button" class="btn--m btn--danger">Danger</button>
<button type="button" class="btn--m btn--info">Info</button> 
<button type="button" class="btn--m btn--text">Link</button>
    `,
    tag_css: `
a[class*="btn--"]{display:inline-block;text-decoration:none}
[class*="btn--m"]{padding:6px 12px;border-radius:6px;font-size:16px;color:#fff;border-width:1px;border-style:solid}
.btn--primary{border-color:var(--color-primary);background-color:var(--color-primary)}
.btn--secondary{border-color:var(--color-secondary);background-color:var(--color-secondary)}
.btn--success{border-color:var(--color-done);background-color:var(--color-done)}
.btn--danger{border-color:var(--color-warning);background-color:var(--color-warning)}
.btn--info{border-color:var(--color-notice);background-color:var(--color-notice)}
    `,
  },
  {
    number: 2,
    tag_title: 'Rounded Buttons',
    tag_text: `
<ul class="list--type">
<li>round가 있는 형태는 뒤에 r을 붙인다.</li>
</ul>
    `,
    tag_html:`
<button type="button" class="btn--mr btn--primary">Primary</button> 
<a href="javascript:;" class="btn--mr btn--primary">Primary(a태그)</a> 
<button type="button" class="btn--mr btn--secondary">Secondary</button> 
<button type="button" class="btn--mr btn--success">Success</button> 
<button type="button" class="btn--mr btn--danger">Danger</button> 
<button type="button" class="btn--mr btn--info">Info</button> 
    `
  },
  {
    number: 3,
    tag_title: 'Icon Buttons',
    tag_html:`
<button type="button" class="btn--m btn--primary"><i class="sp--22 ico--collection"></i></button> 
<button type="button" class="btn--m btn--secondary"><i></i></button> 
<button type="button" class="btn--m btn--success"><i></i></button> 
<button type="button" class="btn--m btn--danger"><i></i></button> 
<button type="button" class="btn--m btn--info"><i></i></button> 
    `
  },
  {
    number: 4,
    tag_title: 'Outline Buttons',
    tag_text: `
<ul class="list--type">
<li>outline일때 color지정은 색지정 클래스 뒤에 _outline을 붙인다.</li>
</ul>
    `,
    tag_html:`
<button type="button" class="btn--m btn--primary_outline">Primary</button> 
<a href="javascript:;" class="btn--mr btn--primary_outline">Primary(a태그)</a> 
<button type="button" class="btn--m btn--secondary_outline">Secondary</button> 
<button type="button" class="btn--m btn--success_outline">Success</button> 
<button type="button" class="btn--m btn--danger_outline">Danger</button> 
<button type="button" class="btn--m btn--info_outline">Info</button> 
    `
  },
  {
    number: 5,
    tag_title: 'Button Sizes',
    tag_text: `
<ul class="list--type">
<li>.btn-- 뒤에 사이즈별로 구분하여 클래스명을 작성한다.</li>
<li>.btn--area는 기본인 가로 정렬이며 다중 버튼을 wrap할때 사용한다.</li>
</ul>
    `,
    tag_html:`
<button type="button" class="btn--s btn--primary">Small</button> 
<button type="button" class="btn--m btn--secondary">Normal</button> 
<button type="button" class="btn--l btn--success_outline">Large</button> 
<button type="button" class="btn--xl btn--danger">x-Large</button> 
<button type="button" class="btn--m btn--info_outline">Normal</button> 
<button type="button" class="btn--s btn--text">Link</button> 
<div class="btn--area">
    <button type="button" class="btn--l btn--secondary">취소</button>
</div> 
<div class="btn--area"> 
    <button type="button" class="btn--l btn--primary">확인</button> 
    <button type="button" class="btn--l btn--secondary">취소</button> 
</div> 
<div class="btn--area"> 
    <button type="button" class="btn--l btn--primary">버튼1</button> 
    <button type="button" class="btn--l btn--secondary">버튼2</button> 
    <button type="button" class="btn--l btn--success_outline">버튼3</button> 
</div> 
    `
  },
  {
    number: 6,
    tag_title: 'Button States',
    tag_html:`
<button type="button" class="btn--m btn--primary" disabled>Disabled</button> 
<button type="button" class="btn--m btn--primary_outline" disabled>Disabled</button>
    `
  },
  {
    number: 7,
    tag_title: 'Ripple Effect',
    tag_html:`
<a href="javascript:;" class="btn--ripple">Button</a>
    `,
    tag_css:`
@keyframes ripple {
    0% {width:0;height:0;opacity:.5}
    100% {width:500px;height:500px;opacity:0}
}
.btn--ripple{overflow:hidden;position:relative;display:inline-block;padding:1.2rem 3.6rem;color:#fff;font-size:1.8rem;border-radius:4rem;background:linear-gradient(90deg, #0162c8, #55e7fc)}
.btn--ripple span{position:absolute;background:#fff;transform:translate(-50%, -50%);pointer-events:none;border-radius:50%;animation:ripple 1s linear infinite}
    `,
  },
]