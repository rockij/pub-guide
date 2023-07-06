let buttons = [
  {
    number: 1,
    tag_title: 'Default Buttons',
    tag_text: `
<ul class="list__type">
<li>디자인 가이드에 맞춰 작업</li>
<li>color를 변수로 관리</li>
<li>공통 관리로 .btn__ 형태로 클래스 작성</li>
<li>.btn__m은 기본 형태 크기 폰트 사이즈를 지정한다.</li>
<li>.btn__primary 는 컬러를 지정한다.</li>
</ul>
    `,
    tag_view:`
<button type="button" class="btn__m btn__primary">Primary</button>
<a href="javascript:;" class="btn__m btn__primary">Primary(a태그)</a>
<button type="button" class="btn__m btn__secondary">Secondary</button>
<button type="button" class="btn__m btn__success">Success</button>
<button type="button" class="btn__m btn__danger">Danger</button>
<button type="button" class="btn__m btn__info">Info</button> 
<button type="button" class="btn__m btn__text">Link</button>
    `,
    tag_html: `
<button type="button" class="btn__m btn__primary">Primary</button>
<a href="javascript:;" class="btn__m btn__primary">Primary(a태그)</a>
<button type="button" class="btn__m btn__secondary">Secondary</button>
<button type="button" class="btn__m btn__success">Success</button>
<button type="button" class="btn__m btn__danger">Danger</button>
<button type="button" class="btn__m btn__info">Info</button> 
<button type="button" class="btn__m btn__text">Link</button>
    `,
    tag_css: `
a[class*="btn__"]{display:inline-block;text-decoration:none}
[class*="btn__m"]{padding:6px 12px;border-radius:6px;font-size:16px;color:#fff;border-width:1px;border-style:solid}
.btn__primary{border-color:var(--color-primary);background-color:var(--color-primary)}
.btn__secondary{border-color:var(--color-secondary);background-color:var(--color-secondary)}
.btn__success{border-color:var(--color-done);background-color:var(--color-done)}
.btn__danger{border-color:var(--color-warning);background-color:var(--color-warning)}
.btn__info{border-color:var(--color-notice);background-color:var(--color-notice)}
    `,
  },
  {
    number: 2,
    tag_title: 'Rounded Buttons',
    tag_text: `
<ul class="list__type">
<li>round가 있는 형태는 뒤에 r을 붙인다.</li>
</ul>
    `,
    tag_view:`
<button type="button" class="btn__mr btn__primary">Primary</button> 
<a href="javascript:;" class="btn__mr btn__primary">Primary(a태그)</a> 
<button type="button" class="btn__mr btn__secondary">Secondary</button> 
<button type="button" class="btn__mr btn__success">Success</button> 
<button type="button" class="btn__mr btn__danger">Danger</button> 
<button type="button" class="btn__mr btn__info">Info</button> 
    `,
    tag_html: `
<button type="button" class="btn__mr btn__primary">Primary</button> 
<a href="javascript:;" class="btn__mr btn__primary">Primary(a태그)</a> 
<button type="button" class="btn__mr btn__secondary">Secondary</button> 
<button type="button" class="btn__mr btn__success">Success</button> 
<button type="button" class="btn__mr btn__danger">Danger</button> 
<button type="button" class="btn__mr btn__info">Info</button> 
    `,
  },
  {
    number: 3,
    tag_title: 'Icon Buttons',
    tag_view:`
<button type="button" class="btn__m btn__primary"><i class="sp__22 ico__collection"></i></button> 
<button type="button" class="btn__m btn__secondary"><i></i></button> 
<button type="button" class="btn__m btn__success"><i></i></button> 
<button type="button" class="btn__m btn__danger"><i></i></button> 
<button type="button" class="btn__m btn__info"><i></i></button> 
    `,
    tag_html: `
<button type="button" class="btn__m btn__primary"><i class="sp__22 ico__collection"></i></button> 
<button type="button" class="btn__m btn__secondary"><i></i></button> 
<button type="button" class="btn__m btn__success"><i></i></button> 
<button type="button" class="btn__m btn__danger"><i></i></button> 
<button type="button" class="btn__m btn__info"><i></i></button> 
    `,
  },
  {
    number: 4,
    tag_title: 'Outline Buttons',
    tag_text: `
<ul class="list__type">
<li>outline일때 color지정은 색지정 클래스 뒤에 _outline을 붙인다.</li>
</ul>
    `,
    tag_view:`
<button type="button" class="btn__m btn__primary_outline">Primary</button> 
<a href="javascript:;" class="btn__mr btn__primary_outline">Primary(a태그)</a> 
<button type="button" class="btn__m btn__secondary_outline">Secondary</button> 
<button type="button" class="btn__m btn__success_outline">Success</button> 
<button type="button" class="btn__m btn__danger_outline">Danger</button> 
<button type="button" class="btn__m btn__info_outline">Info</button> 
    `,
    tag_html: `
<button type="button" class="btn__m btn__primary_outline">Primary</button> 
<a href="javascript:;" class="btn__mr btn__primary_outline">Primary(a태그)</a> 
<button type="button" class="btn__m btn__secondary_outline">Secondary</button> 
<button type="button" class="btn__m btn__success_outline">Success</button> 
<button type="button" class="btn__m btn__danger_outline">Danger</button> 
<button type="button" class="btn__m btn__info_outline">Info</button> 
    `,
  },
  {
    number: 5,
    tag_title: 'Button Sizes',
    tag_text: `
<ul class="list__type">
<li>.btn__ 뒤에 사이즈별로 구분하여 클래스명을 작성한다.</li>
<li>.btn__area는 기본인 가로 정렬이며 다중 버튼을 wrap할때 사용한다.</li>
</ul>
    `,
    tag_view:`
<button type="button" class="btn__s btn__primary">Small</button> 
<button type="button" class="btn__m btn__secondary">Normal</button> 
<button type="button" class="btn__l btn__success_outline">Large</button> 
<button type="button" class="btn__xl btn__danger">x-Large</button> 
<button type="button" class="btn__m btn__info_outline">Normal</button> 
<button type="button" class="btn__s btn__text">Link</button> 
<div class="btn__area">
    <button type="button" class="btn__l btn__secondary">취소</button>
</div> 
<div class="btn__area"> 
    <button type="button" class="btn__l btn__primary">확인</button> 
    <button type="button" class="btn__l btn__secondary">취소</button> 
</div> 
<div class="btn__area"> 
    <button type="button" class="btn__l btn__primary">버튼1</button> 
    <button type="button" class="btn__l btn__secondary">버튼2</button> 
    <button type="button" class="btn__l btn__success_outline">버튼3</button> 
</div> 
    `,
    tag_html: `
<button type="button" class="btn__s btn__primary">Small</button> 
<button type="button" class="btn__m btn__secondary">Normal</button> 
<button type="button" class="btn__l btn__success_outline">Large</button> 
<button type="button" class="btn__xl btn__danger">x-Large</button> 
<button type="button" class="btn__m btn__info_outline">Normal</button> 
<button type="button" class="btn__s btn__text">Link</button> 
<div class="btn__area">
    <button type="button" class="btn__l btn__secondary">취소</button>
</div> 
<div class="btn__area"> 
    <button type="button" class="btn__l btn__primary">확인</button> 
    <button type="button" class="btn__l btn__secondary">취소</button> 
</div> 
<div class="btn__area"> 
    <button type="button" class="btn__l btn__primary">버튼1</button> 
    <button type="button" class="btn__l btn__secondary">버튼2</button> 
    <button type="button" class="btn__l btn__success_outline">버튼3</button> 
</div> 
    `,
  },
  {
    number: 6,
    tag_title: 'Button States',
    tag_view:`
<button type="button" class="btn__m btn__primary" disabled>Disabled</button> 
<button type="button" class="btn__m btn__primary_outline" disabled>Disabled</button>
    `,
    tag_html: `
<button type="button" class="btn__m btn__primary" disabled>Disabled</button> 
<button type="button" class="btn__m btn__primary_outline" disabled>Disabled</button>
    `,
  },
]