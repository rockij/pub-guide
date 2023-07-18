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
    tag_view:`<label class="checkbox__draw">      
    <input type="checkbox" class="blind" />
    <figure class="v"><i></i></figure>선택</label>
  <label class="checkbox__draw_ani">      
    <input type="checkbox" class="blind" />
    <figure class="v"><i></i></figure>선택(motion)
</label>`,
    tag_html: `
<label class="checkbox__draw">      
    <input type="checkbox" class="blind" />
    <figure class="v"><i></i></figure>선택</label>
<label class="checkbox__draw_ani">      
    <input type="checkbox" class="blind" />
    <figure class="v"><i></i></figure>선택(motion)
</label>
    `,
    tag_css: `
    `,
  },
  {
    number: 2,
    tag_title: 'Checkbox Custom',
    tag_text: `
<ul class="list__type">
<li>그룹 체크박스에 타이틀이 있다면 id = aria-labelledby 로 연결해준다.</li>
<li>태그 작성시 소스보기를 참고하여 role, aria- 관련 태그는 가이드에 맞춰 작성한다.</li>
<li>실행함수: CHECKED_UI.checkBox();</li>
</ul>
    `,
    tag_view:`
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
    tag_html: `
<strong id="group_chk_lb01">그룹이름</strong>
<ul role="group" aria-labelledby="group_chk_lb01">
    <li role="none"><span role="checkbox" aria-checked="true" class="checkbox__draw"><figure class="v"><i></i></figure>선택1</span></li>
    <li role="none"><span role="checkbox" aria-checked="false" class="checkbox__draw"><figure class="v"><i></i></figure>선택2</span></li>
    <li role="none"><span role="checkbox" aria-checked="false" class="checkbox__draw"><figure class="v"><i></i></figure>선택3</span></li>
</ul>
    `,
    tag_css: `
    `,
  },
  {
    number: 3   ,
    tag_title: '약관선택',
    tag_view:`
<div role="group" class="form__">
    <label>
      <input type="checkbox" id="terms-and-conditions" required />
      개인정보취급방침
    </label>
    <a href="javascript:;" target="_blank">개인정보취급방침 약관보기</a>
</div> 
    `,
    tag_html: `
<div role="group" class="form__">
    <label>
      <input type="checkbox" id="terms-and-conditions" required />
      개인정보취급방침
    </label>
    <a href="javascript:;" target="_blank">개인정보취급방침 약관보기</a>
</div>  
    `,
  },
//   {
//     number: ,
//     tag_title: '',
//     tag_text: `
// <ul class="list__type">
// <li></li>
// </ul>
//     `,
//     tag_view:`
//     `,
//     tag_html: `
//     `,
//     tag_css: `
//     `,
//   },
]