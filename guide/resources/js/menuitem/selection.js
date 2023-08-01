let selection = [
  {
    number: 1,
    tag_title: 'Checkbox Native',
    tag_text: `
<ul class="list__type">
<li>html 태그만을 이용하였으며 label 안에 input을 넣는 방식이다.</li>
<li>체크시에 모션이 필요하면 _ani을 붙이다.</li>
</ul>
    `,
    tag_html:`<label class="checkbox__draw">      
    <input type="checkbox" class="blind" />
    <figure class="v"><i></i></figure>선택</label>
  <label class="checkbox__draw_ani">      
    <input type="checkbox" class="blind" />
    <figure class="v"><i></i></figure>선택(모션)
</label>`,
    tag_css: `
    `
  },
  {
    number: 2,
    tag_title: 'Checkbox Custom',
    tag_text: `
<ul class="list__type">
<li>그룹 체크박스에 타이틀이 있다면 id = aria-labelledby 로 연결해준다.</li>
<li>태그 작성시 소스보기를 참고하여 role, aria- 관련 태그는 가이드에 맞춰 작성한다.</li>
<li>실행: CHECKED_UI.checkBox();</li>
</ul>
    `,
    tag_html:`
<strong id="group_chk_lb01">그룹이름</strong>
<ul role="group" aria-labelledby="group_chk_lb01">
    <li role="none">
        <span role="checkbox" aria-checked="true" class="checkbox__draw"><figure class="v"><i></i></figure>선택1</span>
        <span role="checkbox" aria-checked="true" class="checkbox__draw_ani"><figure class="v"><i></i></figure>선택1</span>
    </li>
    <li role="none">
        <span role="checkbox" aria-checked="false" class="checkbox__draw"><figure class="v"><i></i></figure>선택2</span>
        <span role="checkbox" aria-checked="false" class="checkbox__draw_ani"><figure class="v"><i></i></figure>선택2</span>
    </li>
    <li role="none"><span role="checkbox" aria-checked="false" class="checkbox__draw"><figure class="v"><i></i></figure>선택3</span></li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 3,
    tag_title: 'Checkbox All Checked',
    tag_text: `
<ul class="list__type">
<li>기본 작성 가이드는 Checkbox Custom를 참고한다.</li>
<li>체크박스의 id값을 aria-controls에 모두 넣어준다.</li>
<li>실행: CHECKED_UI.checkBox();</li>
</ul>
    `,
    tag_html:`
<strong id="group_chk_lb03">체크박스 전체선택</strong>
<div role="group" aria-labelledby="group_chk_lb03">
    <span role="checkbox" aria-checked="false" aria-controls="chk2_1 chk2_2 chk2_3 chk2_4" tabindex="0" class="checkbox__draw"><figure class="v"><i></i></figure>전체 선택</span>
    <ul role="none">
    <li role="none"><span id="chk2_1" role="checkbox" aria-checked="false" tabindex="0" class="checkbox__draw"><figure class="v"><i></i></figure>날씨</span></li>
    <li role="none"><span id="chk2_2" role="checkbox" aria-checked="false" tabindex="0" class="checkbox__draw"><figure class="v"><i></i></figure>영화</span></li>
    <li role="none"><span id="chk2_3" role="checkbox" aria-checked="false" tabindex="0" class="checkbox__draw"><figure class="v"><i></i></figure>밴드</span></li>
    <li role="none"><span id="chk2_4" role="checkbox" aria-checked="false" tabindex="0" class="checkbox__draw"><figure class="v"><i></i></figure>오피스</span></li>
    </ul>
</div>
    `,
    tag_css: `
    `
  },
  {
    number: 4,
    tag_title: '약관선택',
    tag_html:`
<div role="group" class="form__">
    <span role="checkbox" aria-checked="false" class="checkbox__draw_ani"><figure class="v"><i></i></figure>개인정보취급방침</span>
    <a href="javascript:;" target="_blank">[개인정보취급방침 약관보기]</a>
</div> 
    `
  },
  {
    number: 5,
    tag_title: 'Radio Native',
    tag_text: `
<ul class="list__type">
<li>html 태그만을 이용하였으며 label 안에 input을 넣는 방식이다.</li>
<li>체크시에 모션이 필요하면 _ani을 붙이다.</li>
</ul>
    `,
    tag_html: `
<label class="radio__draw">      
    <input type="radio" class="blind" />
    <i class="o"></i>선택
</label>
<label class="radio__draw_ani">      
    <input type="radio" class="blind" />
    <i class="o"></i>선택(모션)
</label>
    `,
    tag_css: `
    `
  },
  {
    number: 6,
    tag_title: 'Radio Custom',
    tag_text: `
<ul class="list__type">
<li>그룹 체크박스에 타이틀이 있다면 id = aria-labelledby 로 연결해준다.</li>
<li>태그 작성시 소스보기를 참고하여 role, aria- 관련 태그는 가이드에 맞춰 작성한다.</li>
<li>실행: CHECKED_UI.radioBox();</li>
</ul>
    `,
    tag_html: `
<strong id="group_radio_lb01">라디오박스</strong>
<ul role="radiogroup" aria-labelledby="group_radio_lb01">
    <li role="none"><span role="radio" aria-checked="false" tabindex="0" class="radio__draw_ani"><i class="o"></i>일반</span></li>
    <li role="none"><span role="radio" aria-checked="false" tabindex="0" class="radio__draw"><i class="o"></i>대외비</span></li>
    <li role="none"><span role="radio" aria-checked="false" tabindex="0" class="radio__draw"><i class="o"></i>기밀</span></li>
</ul>
    `,
    tag_css: `
    `
  },
  {
    number: 7,
    tag_title: 'Switch Ios',
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
    tag_html: `
<input type="checkbox" class="switch__spring touch hit">
    `,
    tag_css: `
    `
  },
  {
    number: 8,
    tag_title: 'Switch Rubber',
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
    tag_html: `
<label class="switch__rubber">
    <input type="checkbox" value="0" class="blind" />
    <span class="slider"></span>
</label>
    `,
    tag_css: `
    `
  },
  {
    number: 9,
    tag_title: 'Number Stepper',
    tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
    tag_html: `
<div class="input__stepper">
    <button class="decrement" onclick="stepper('my-input', this)"> - </button>
    <input type="number" min="20" max="50" step="5" value="25" id="my-input" readonly="">
    <button class="increment" onclick="stepper('my-input', this)"> + </button>
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