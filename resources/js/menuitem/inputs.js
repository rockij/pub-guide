let inputs = [
    {
        number: 1,
        tag_title: 'Default(text)',
        tag_text: `
<ul class="list__type">
<li>입력시 label을 사라지게 하기 위해 INPUT_OPTION.labelControl('input__label'); 실행</li>
<li>입력한 값을 삭제하기 위해 INPUT_OPTION.inputRemove('input__del'); 실행</li>
</ul>
    `,
        tag_html: `
<div role="group" class="form__group">
    <div class="form__area_col">
        <span class="label_name">이름</span>
        <div class="input_area">
            <div class="input__box input__label input__del">
                <input type="text" class="input" id="input-text-default" />
                <label for="input-text-default" class="input_label">Text</label>
                <div class="unit_set">
                    <button type="button" class="btn_del" title="입력텍스트 삭제">del</button>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
        tag_css: `
[class*="input__box"] {
    --border-radius:.375rem;
    position:relative;
    z-index:1;
    display:flex;
    align-items: center;
    background-color:var(--bg-card);
    border: 1px solid var(--border);
    border-radius:var(--border-radius);
}
[class*="input__box"]:focus-within{
    border-color:var(--color-primary);
}
[class*="input__box"] input,
[class*="input__box"] textarea,
[class*="input__box"] select{
    flex:1;
    width:100%;
    min-height:var(--input-height);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color:var(--color-primary);
}
[class*="input__msg"]{font-size:12px}
.input__msg_error{color:var(--color-warning)}
[class*="input__box"] .input_label{position:absolute;left:10px;top:10px;font-size:14px;color:var(--color-secondary2);transition-duration:var(--transition-speed)}
[class*="input__box"] input.focus + .input_label,
[class*="input__box"] textarea.focus + .input_label{display:none}
[class*="input__box"] input[readonly]{color:var(--bg-base)}
[class*="input__box"] input[disabled]{background-color:var(--bg-base)}
.input__box_ani input.focus + .input_label{display:block}
.form__area_col{display:flex;flex-wrap:wrap}
.form__area_col:not(:first-of-type){margin-top:1rem}
.form__area_col .label_name{flex:0 0 140px;padding-top:10px;font-size:14px}
.form__area_col .input_area{flex:1 1 auto}
.form__area_col .input__msg{flex:0;width:100%}
.form__area_col .checkbox_area{height:var(--input-height);display:flex;align-items:center}
.form__area_row .label_name{display:block;margin-bottom:10px;font-size:14px}
.form__area_row .input__box_ani input:focus + .input_label{transform:translateY(calc(var(--input-height) * -1))}
    `,
    },
    {
        number: 2,
        tag_title: 'Text Copy',
        tag_text: `
<ul class="list__type">
<li>입력한 값을 복사하기 위해 INPUT_OPTION.textCopy('input__copy'); 실행</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label input__copy">
    <input type="text" class="input" id="input-text-copy" />
    <label for="input-text-copy" class="input_label">Text</label>
    <div class="unit_set">
        <button type="button" class="btn_copy" title="입력텍스트 복사">copy</button>
    </div>
</div>
    `
    },
    {
        number: 3,
        tag_title: 'Maxlength(입력수제한)',
        tag_text: `
<ul class="list__type">
<li>입력하는 값을 크기 체크를 위해 INPUT_OPTION.inputMaxlength('input__maxlength'); 실행</li>
<li>
    <strong>설명</strong>
    <ol>
    <li>maxlength의 값의 크기 따라 입력 수 제한</li>
    <li>입력시 class="textcount"의 숫자가 감소하여 크기 체크</li>
    <li>input에 aria-describedby의 값과 안내문구의 id 값은 동일하게</li>
    <li>10자 입력마다 안내문구의 aria-live 값이 polite로 바뀌면서 스크린리더에서 현재 몇자까지 입력했는지 알 수 있게 한다.</li>
    </ol>
</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label input__maxlength">
    <input type="text" class="input" id="input-text-maxlength" maxlength="16" aria-describedby="inputMessage" />
    <label for="input-text-maxlength" class="input_label">입력수제한</label>
    <div class="unit_set">
        <span class="textCount" aria-hidden="true">16</span>
    </div>
    <p class="blind a11y-msg" aria-atomic="true" aria-live="off" id="inputMessage">총 100자 중 <span class="count">0</span>자 입력</p>
</div>
        `,
    },
    {
        number: 4,
        tag_title: '에러메세지 표시',
        tag_text: `
<ul class="list__type">
<li>aria-describedby의 값과 에러 문구를 나타내는 태그의 id값을 일치</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label">
    <input type="text" class="input" id="input-text-error" aria-describedby="error-msg" />
    <label for="input-text-error" class="input_label">Text(error)</label>
</div>
<p id="error-msg" class="input__msg_error">에러메세지</p>
        `,
    },
    {
        number: 5,
        tag_title: 'Readonly 표시',
        tag_text: `
<ul class="list__type">
<li>readonly 옵션으로 추가됐을 경우</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label">
    <input type="text" class="input" id="input-text-readonly" readonly />
    <label for="input-text-readonly" class="input_label">readonly</label>
</div>
        `,
    },
    {
        number: 6,
        tag_title: 'Disabled 표시',
        tag_text: `
<ul class="list__type">
<li>disabled 옵션으로 추가됐을 경우</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label">
    <input type="text" class="input" id="input-text-disabled" disabled />
    <label for="input-text-disabled" class="input_label">disabled</label>
</div>
        `,
    },
    {
        number: 7,
        tag_title: 'Focus-within(지원X)',
        tag_text: `
<ul class="list__type">
<li>focus-within 지원하지 않을 경우 border 태그 추가</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label">
    <input type="text" class="input" id="input-text-focuswithinx" />
    <label for="input-text-focuswithinx" class="input_label">focus-within(x)</label>
    <i class="border"></i>        
</div>
        `,
    },
    {
        number: 8,
        tag_title: 'Aria-describedby 연결',
        tag_text: `
<ul class="list__type">
<li>스크린리더에서 안내문구를 읽히게 하기위한 방법</li>
</ul>
    `,
        tag_html: `
<span class="blind" id="input-text-msg">입력창에 설명을 더 필요할 경우</span>
<div class="input__box input__label">
    <input type="text" class="input" id="input-text-aria-describedby" aria-describedby="input-text-msg" />
    <label for="input-text-aria-describedby" class="input_label">text</label>
    </div>
</div>
        `,
    },
    {
        number: 9,
        tag_title: 'Text Select',
        tag_text: `
<ul class="list__type">
<li>입력된 텍스트를 선택한다.</li>
<li>실행: INPUT_OPTION.textSelectAll('input__select');</li>
</ul>
`,
tag_html: `
<div class="input__box input__label input__select">
    <input type="text" class="input" id="input-text-select" value="입력된 텍스트가 선택됨" />
    <label for="input-text-select" class="input_label">text</label>
</div>
        `,
    },
    {
        number: 10,
        tag_title: 'Email',
        tag_text: `
<ul class="list__type">
<li>이메일 주소 전체 입력할 경우 type의 값을 email로 한다.</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label">
    <input type="email" class="input" id="input-email" />
    <label for="input-email" class="input_label">이메일 주소 입력</label>
</div>
        `,
    },
    {
        number: 11,
        tag_title: 'Password',
        tag_text: `
<ul class="list__type">
<li>입력한 비밀번호 보기 기능 추가 필요시 INPUT_OPTION.passToggle('input__pw_toggle'); 실행</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label input__pw_toggle">
    <input type="password" class="input" id="input-pass" />
    <label for="input-pass" class="input_label">비밀번호 입력</label>
    <div class="unit_set">
        <button type="button" class="btn_pwtg" title="비밀번호 보기">pw</button>
    </div>
</div>
        `,
    },
    {
        number: 12,
        tag_title: 'Number',
        tag_text: `
<ul class="list__type">
<li>숫자, 특수기호 같이 입력해야할 경우</li>
<li>pc에서는 숫자의 증가/감소를 옵션 버튼을 통해 쉽게 컨트롤 할 수 있다.</li>
</ul>
    `,
        tag_html: `
<div class="input__box">
    <input type="number" class="input" id="input-number" maxlength="10" />
    <label for="input-number" class="input_label">number</label>
</div>
        `,
    },
    {
        number: 13,
        tag_title: 'Tel',
        tag_text: `
<ul class="list__type">
<li>오직 숫자만 입력시 사용</li>
<li>인증번호, 휴대폰번호 입력 등에 사용</li>
</ul>
    `,
        tag_html: `
<div class="input__box">
    <input type="tel" class="input" id="input-tel" maxlength="10" />
    <label for="input-tel" class="input_label">tel</label>
</div>
        `,
    },
    {
        number: 14,
        tag_title: 'File',
        tag_text: `
<ul class="list__type">
<li>파일을 첨부해야하는 경우</li>
</ul>
    `,
        tag_html: `
<div class="input__box">
    <input type="file" class="input" title="파일추가" />
</div>
        `,
    },
    {
        number: 15,
        tag_title: 'Label Row',
        tag_text: `
<ul class="list__type">
<li>label의 위치 세로인 형태 움직임을 주려면 input__box_ani로 한다.</li>
</ul>
    `,
        tag_html: `
<div class="form__area_row">
    <span class="label_name">Text</span>
    <div class="input_area">
        <div class="input__box input__label">
        <input type="text" class="input" id="input-text-row" />
        <label for="input-text-row" class="input_label">Text</label>
        </div>
    </div>
</div>
<br/>
<div class="form__area_row">
    <div class="input_area">
        <div class="input__box_ani input__label">
        <input type="text" class="input" id="input-text-row2" />
        <label for="input-text-row2" class="input_label">Text</label>
        </div>
    </div>
</div>
        `,
    },
    {
        number: 16,
        tag_title: 'Textarea Default',
        tag_text: `
<ul class="list__type">
<li>기본적인 textarea 양식</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label">
    <textarea id="input-textarea" class="input" cols="30" rows="5"></textarea>
    <label for="input-textarea" class="input_label">Textarea</label>
</div>
    `,
    },
    {
        number: 17,
        tag_title: 'Textarea Maxlenth, Autosize',
        tag_text: `
<ul class="list__type">
<li>입력수제한 기능은 input의 입력수제한 내용을 참고</li>
<li>입력한 글자수에 따라 세로 길이를 조절해야할 경우 INPUT_OPTION.autoResize('textarea__autosize', 83); 실행</li>
</ul>
    `,
        tag_html: `
<div class="input__box input__label input__maxlength textarea__autosize">
    <textarea id="input-textarea2" cols="30" rows="5" class="input" maxlength="100" aria-describedby="textareaMessage"></textarea>
    <label for="input-textarea2" class="input_label">Textarea</label>
    <div class="unit_set">
        <span class="textCount" aria-hidden="true">100</span>
    </div>
    <p class="blind a11y-msg" aria-atomic="true" aria-live="off" id="textareaMessage">총 100자 중 <span class="count">0</span>자 입력</p>
</div>
    `,
    },
    {
        number: 18,
        tag_title: 'Multiple Inputs(휴대폰번호)',
        tag_text: `
<ul class="list__type">
<li>휴대폰 기본 입력 양식(010-1234-4567)</li>
</ul>
    `,
        tag_html: `
<div class="field__multi_columns">    
    <div class="input_area">
        <div class="input__box">
            <input type="tel" class="input" aria-label="3자리 입력" maxlength="3" />
        </div>
    </div>
    <div class="input_area">
        <div class="input__box">
            <input type="tel" class="input" aria-label="4자리 입력" maxlength="4" />
        </div>
    </div>
    <div class="input_area">
        <div class="input__box">
            <input type="tel" class="input" aria-label="4자리 입력" maxlength="4" />
        </div>
    </div>
</div>
    `,
        tag_css: `
.field__multi_columns{display:flex;flex-direction:row;gap:15px}
.field__multi_columns .input_area{flex:1}
    `,
    },
    {
        number: 19,
        tag_title: 'Multiple Inputs(주민번호)',
        tag_text: `
<ul class="list__type">
<li>앞자리 6자리 입력 후 뒤 1자리만 입력하는 양식</li>
</ul>
    `,
        tag_html: `
<div class="field__multi_registnum">    
    <div class="input_area">
        <div class="input__box">
            <input type="tel" class="input" maxlength="6" id="jumin1" />
            <label for="jumin1" class="input_label">앞 6자리</label>
        </div>        
    </div>
    <div class="input_area input_backnum">
        <div class="input__box">
            <input type="tel" class="input" maxlength="1" />
            <span class="icon_pw"></span>
        </div>
    </div>      
</div>
<p id="registnum-error-msg" class="input__msg_error">에러메세지</p>
        `,
        tag_css: `
.field__multi_registnum{display:flex;flex-direction:row;gap:15px}
.field__multi_registnum .input_area{flex:1}
.field__multi_registnum .input_backnum input{flex:0;width:30px;padding:0;text-align:center}
.field__multi_registnum .input_backnum .icon_pw{
    width:120px;height:14px;
    background-image: radial-gradient(var(--color-secondary2) 4px, transparent 4px);
    background-size: 14px 14px;
    background-repeat: space no-repeat;
}
        `
    },
    {
        number: 20,
        tag_title: 'Multiple Inputs(이메일)',
        tag_text: `
<ul class="list__type">
<li>앞주소 입력 후 뒷자리는 입력 혹은 선택할 수 있는 양식</li>
</ul>
    `,
        tag_html: `
<div class="field__multi_email">    
    <div class="input_area">
        <div class="input__box input__label">
            <input type="text" class="input" id="email-address" maxlength="3" />
            <label for="email-address" class="input_label">email id</label>
        </div>
    </div>
    <div class="input_area input_remain">
        <div class="input__box input__email_select">
            <select id="email-address2" title="이메일 주소 선택" class="select">
                <option value="">선택</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
                <option value="direct">직접입력</option>
            </select>
            <input type="text" title="이메일 주소 직접입력" />
        </div>
    </div>
</div>
        `,
        tag_css: `
.field__multi_email{display:flex;flex-direction:row;gap:15px}
.field__multi_email .input_area{flex:1}
.field__multi_email .input_remain{display:flex;align-items:center}
.field__multi_email .input_remain::before{content:'@';margin-right:15px}
.field__multi_email .input_remain .input__box{flex:1}
.field__multi_email .input_remain input{display:none;position:absolute;top:0;left:0;width:calc(100% - 40px);height:var(--input-height);background-color:#fff;border-radius:var(--border-radius)}
        `
    },
    {
        number: 21,
        tag_title: 'Calendar(Native)',
        tag_text: `
<ul class="list__type">
<li>브라우저 자체에서 제공하는 달력</li>
</ul>
        `,
        tag_html: `
<div class="input__box">
    <input type="date" class="input" id="input-date" title="달력" value="2023-08-02" />
</div>  
    `
    },
    {
        number: 22,
        tag_title: 'Calendar(Custom)',
        tag_text: `
<ul class="list__type">
<li>순서JS를 이용한 팝업 형태의 달력</li>
<li>
팝업을 실행할 버튼에 CALENDAR_CUSTOM.init('popup', 'calendar', 'calendar1', 1); 추가
    <ol>
    <li><strong>popup</strong> : 달력을 팝업으로 띄울때 사용하는 옵션</li>
    <li><strong>calendar</strong> : 노출해야할 팝업의 id값</li>
    <li><strong>calednar1</strong> : 팝업 닫기시 돌아가야할 focus의 값</li>
    <li><strong>1</strong> : 팝업을 컨트롤 하기 위한 옵션</li>
    </ol>
</li>
<li>
설명
    <ol>
    <li>날을 선택하면 팝업이 닫히며 input의 값이 들어감</li>
    <li>이번달 이후로는 다음달 버튼이 선택이 안됨</li>
    <li>하단에 달,년도 선택박스를 이용해 원하는 달,년도로 이동가능</li>
    </ol>
</li>
</ul>
        `,
        tag_html: `
<div class="input__box">
    <input type="text" value="2023.7.23" title="달력" readonly />
    <button class="focus-calendar1" onclick="CALENDAR_CUSTOM.init('popup', 'calendar', 'calendar1', 1)">달력</button>
</div>

<div id="mw-calendar" role="dialog" class="popup_wrap popup_bodtfix" data-popup-type="bottom">
  <div class="popup-close popup_back" aria-hidden="true"></div>
  <div class="popup_container">
    <div class="popup_content">
      
      <div class="container-calendar">
        <h3 id="monthAndYear" aria-live="assertive"></h3>

        <div class="button-container-calendar" role="navigation" aria-labelledby="monthAndYear">
            <button id="todays" title="오늘 이동">Today</button>
            <button id="previous" title="이전달 이동">&#8249;</button>
            <button id="next" title="다음달 이동">&#8250;</button>
        </div>

        <table class="table-calendar" id="calendar" data-lang="ko" role="grid" aria-labelledby="current-year">
            <thead id="thead-month"></thead>
            <tbody id="calendar-body"></tbody>
        </table>

        <div class="footer-container-calendar">
             <label for="month">Jump To: </label>
             <select id="month" class="jump">
                 <option value=0>Jan</option>
                 <option value=1>Feb</option>
                 <option value=2>Mar</option>
                 <option value=3>Apr</option>
                 <option value=4>May</option>
                 <option value=5>Jun</option>
                 <option value=6>Jul</option>
                 <option value=7>Aug</option>
                 <option value=8>Sep</option>
                 <option value=9>Oct</option>
                 <option value=10>Nov</option>
                 <option value=11>Dec</option>
             </select>
            <select id="year" class="jump" title="select start date month/year"></select>
            <span id="dayValue"></span>
        </div>

    </div>
      
    </div>
    <button class="popup_close">팝업닫기</button>
  </div>  
</div>
    `
    },
    {
        number: 23,
        tag_title: 'OTP입력',
        tag_text: `
<ul class="list__type">
<li>한칸입력시 바로 다음칸으로 이동하는 형태로 키보드 이동 가능</li>
<li>4칸 모두 입력시 완료 버튼이 노출된다.</li>
<li>실행: INPUT_OPTION.otpField('form__otp');</li>
</ul>
    `,
        tag_html: `
<div class="input__otp">
    <div class="field">
      <input type="number" maxlength="1" class="input">
      <input type="number" maxlength="1" class="input" disabled>
      <input type="number" maxlength="1" class="input" disabled>
      <input type="number" maxlength="1" class="input" disabled>
    </div>
    <button class="hide" id="submit" onclick="otpValidate()">Submit</button>
</div>  
        `,
        tag_css: `
.input__otp .field{--size:4rem;display:inline-flex;justify-content:space-around}
.input__otp .input{height:var(--size);width:var(--size);border:2px solid #dad9df;text-align:center;
font-size:1.5rem;border-radius:.6rem;background-color:var(--bg-card);appearance:textfield}
.input__otp .input:not(:first-child){margin-left:1.5rem}
.input__otp input[type="number"]::-webkit-outer-spin-button,
.input__otp input[type="number"]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.input__otp #submit{margin:1rem auto 0;padding:1rem;background-color:var(--color-notice);color:var(--color-primary)}
.input__otp .show{display:block}
.input__otp .hide{display:none}
.input__otp .input:disabled{color:var(--color-disable)}
.input__otp .input:focus{border:3px solid var(--color-notice)}
        `
    },
    //     {
//         number: ,
//         tag_title: '',
//         tag_text: `
// <ul class="list__type">
// <li></li>
// </ul>
//     `,
//         tag_html: ``,
//     },
];
