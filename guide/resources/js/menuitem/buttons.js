let buttons = [
  {
    number: 1,
    tag_title: 'Default Buttons',
    tag_text: `
<ul class="list__type">
<li></li>
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
    tag_css: ``,
  },
  {
    number: 2,
    tag_title: 'Rounded Buttons',
    tag_text: `
<ul class="list__type">
<li></li>
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
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
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
<li></li>
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
<li></li>
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
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
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