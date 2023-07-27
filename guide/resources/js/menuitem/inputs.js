let inputs = [
    {
        number: 1,
        tag_title: '기본입력',
        tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
        tag_html: `
<div role="group" class="form__group">
    <div class="form__area_col">
      <span class="label_name">Text</span>
      <div class="input_area">
        <div class="input__box input__copy input__label input__del">
          <input type="text" class="input" id="input-text3" />
          <label for="input-text3" class="input_label">Text</label>
          <div class="unit_set">
            <button type="button" class="btn_del" title="입력텍스트 삭제">del</button>
            <button type="button" class="btn_copy" title="입력텍스트 복사">copy</button>
          </div>
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">입력수제한</span>
      <div class="input_area">
        <div class="input__box input__label input__maxlength input__del">
          <input type="text" class="input" id="input-limit" maxlength="16" />
          <label for="input-limit" class="input_label">입력수제한</label>
          <div class="unit_set">
            <button type="button" class="btn_del" title="입력텍스트 삭제">del</button>
            <span class="textcount">16</span>
          </div>
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">Text(error)</span>
      <div class="input_area">
        <div class="input__box input__label">
          <input type="text" class="input" id="input-text-error" aria-describedby="error-msg" />
          <label for="input-text-error" class="input_label">Text(error)</label>
        </div>
        <p id="error-msg" class="input__msg_error">에러메세지</p>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">readonly</span>
      <div class="input_area">
        <div class="input__box input__label">
          <input type="text" class="input" id="input-text3" readonly />
          <label for="input-text3" class="input_label">readonly</label>
        </div>
        <span class="blind" id="error-msg">Sumner is super awesome</span>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">disabled</span>
      <div class="input_area">
        <div class="input__box input__label">
          <input type="text" class="input" id="input-text3" disabled />
          <label for="input-text3" class="input_label">disabled</label>
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">focus-within(x)</span>
      <div class="input_area">
        <div class="input__box input__label">
          <input type="text" class="input" id="input-text" />
          <label for="input-text" class="input_label">focus-within(x)</label>
          <i class="border"></i>        
        </div>
        <p class="input__msg">focus-within 지원하지 않을 경우 border 태그 추가</p>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">aria-describedby연결</span>
      <span class="blind" id="mel-24">Sumner is super awesome</span>
      <div class="input_area">
        <div class="input__box">
          <input type="text" class="input" id="mel-14" aria-describedby="mel-24" />
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">Text Select</span>
      <div class="input_area">
        <div class="input__box input__select">
          <input type="text" class="input" id="input-text" value="입력된 텍스트가 선택됨" />
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">Email</span>
      <div class="input_area">
        <div class="input__box input__label">
          <input type="email" class="input" id="input-email" />
          <label for="input-email" class="input_label">이메일 주소 입력</label>
        </div>
      </div>
    </div>  
    <div class="form__area_col">
      <span class="label_name">Password</span>
      <div class="input_area">
        <div class="input__box input__label input__pw_toggle">
          <input type="password" class="input" id="input-pass" />
          <label for="input-pass" class="input_label">비밀번호 입력</label>
          <div class="unit_set">
            <button type="button" class="btn_del" title="입력텍스트 삭제">del</button>
            <button type="button" class="btn_pwtg" title="비밀번호 보기">pw</button>
          </div>
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">Number</span>
      <div class="input_area">
        <div class="input__box">
          <input type="number" class="input" id="input-number" maxlength="10" />
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">Tel</span>
      <div class="input_area">
        <div class="input__box">
          <input type="tel" class="input" id="input-tel" maxlength="10" />
        </div>
      </div>
    </div>
    <div class="form__area_col">
      <span class="label_name">File Upload</span>
      <div class="input_area">
        <div class="input__box">
          <input type="file" class="input" id="input-file" />
        </div>
      </div>
    </div>  
    <div class="form__area_col">
      <span class="label_name">Selectbox</span>
      <div class="input_area">
        <div class="input__box">
          <select id="floatingSelect" aria-label="Floating label select example">
            <option selected="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>  
    <div class="form__area_row">
      <span class="label_name">Text</span>
      <div class="input_area">
        <div class="input__box input__label">
          <input type="text" class="input" id="input-text2" />
          <label for="input-text2" class="input_label">Text</label>
        </div>
        <p class="input__msg">label과 input이 아래 위일때</p>
      </div>
    </div>
    <br/>
    <div class="form__area_row">
      <div class="input_area">
        <div class="input__box_ani input__label">
          <input type="text" class="input" id="input-text2" />
          <label for="input-text2" class="input_label">Text</label>
        </div>
        <p class="input__msg">input focus시 label 움직이기</p>
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
        tag_title: 'Textarea',
        tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
        tag_html: `
<div role="group" class="form__group">
    <div class="form__area_col">
        <span class="label_name">Textarea</span>
        <div class="input_area">
        <div class="input__box input__label">
            <textarea id="input-textarea" class="input" cols="30" rows="5"></textarea>
            <label for="input-textarea" class="input_label">Textarea</label>
        </div>
        </div>
    </div>
    <div class="form__area_col">
        <span class="label_name">Textarea(auto-rsize)</span>
        <div class="input_area">
        <div class="input__box input__label input__maxlength textarea__autosize">
            <textarea id="input-textarea" cols="30" rows="5" class="input" maxlength="100"></textarea>
            <label for="input-textarea" class="input_label">Textarea</label>
            <div class="unit_set">
                <span class="textCount" aria-hidden="true" data-textcount="100">100</span>
            </div>
            <p class="blind a11y-msg" aria-atomic="true" aria-live="off" id="textareaMessage">총 100자 중 <span class="count">0</span>자 입력</p>
        </div>
        </div>
    </div>
</div>
    `,
    },
    {
        number: 3,
        tag_title: '다중입력',
        tag_text: `
<ul class="list__type">
<li></li>
</ul>
    `,
        tag_html: `
<div role="group" class="form__group">
    <div class="form__area_row">
      <span class="label_name">휴대폰번호</span>
      <div class="field__multi_columns">    
        <div class="input_area">
          <div class="input__box">
            <input type="tel" class="input" aria-label="country code" maxlength="3" />
          </div>
        </div>
        <div class="input_area">
          <div class="input__box">
            <input type="tel" class="input" aria-label="area code" maxlength="4" />
          </div>
        </div>
        <div class="input_area">
          <div class="input__box">
            <input type="tel" class="input" aria-label="phone number" maxlength="4" />
          </div>
        </div>
      </div>
    </div>
    <div class="form__area_row">
      <span class="label_name">주민등록번호</span>
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
    </div>
    <div class="form__area_row">
      <span class="label_name">Email</span>
      <div class="field__multi_email">    
        <div class="input_area">
          <div class="input__box input__label">
            <input type="text" class="input" id="email-address" maxlength="3" />
            <label for="email-address" class="input_label">email id</label>
          </div>
        </div>
        <div class="input_area input_remain">
          <div class="input__box input__email_select">
            <select name="" id="email-address2" title="이메일 주소 선택" class="select">
              <option value="">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
              <option value="direct">직접입력</option>
            </select>
            <input type="text" id="" title="이메일 주소 직접입력" />
          </div>
        </div>
      </div>
    </div>
</div>
    `,
        tag_css: `
.field__multi_columns{display:flex;flex-direction:row;gap:15px}
.field__multi_columns .input_area{flex:1}

.field__multi_registnum{display:flex;flex-direction:row;gap:15px}
.field__multi_registnum .input_area{flex:1}
.field__multi_registnum .input_backnum input{flex:0;width:30px;padding:0;text-align:center}
.field__multi_registnum .input_backnum .icon_pw{
width:120px;height:14px;
background-image: radial-gradient(var(--color-secondary2) 4px, transparent 4px);
background-size: 14px 14px;
background-repeat: space no-repeat;
}

.field__multi_email{display:flex;flex-direction:row;gap:15px}
.field__multi_email .input_area{flex:1}
.field__multi_email .input_remain{display:flex;align-items:center}
.field__multi_email .input_remain::before{content:'@';margin-right:15px}
.field__multi_email .input_remain .input__box{flex:1}
.field__multi_email .input_remain input{display:none;position:absolute;top:0;left:0;width:calc(100% - 40px);height:var(--input-height);background-color:#fff;border-radius:var(--border-radius)}
    `,
    },
    {
        number: 4,
        tag_title: '달력(Native)',
        tag_html: `
<div role="group" class="form__group">
    <div class="form__area_col">
      <span class="label_name">Date</span>
      <div class="input_area">
        <div class="input__box">
          <input type="date" class="input" id="input-date" />
        </div>
        <p class="input__msg">순수 네이티브만들 사용한 달력</p>
      </div>
    </div>
</div>  
    `
    },
    {
        number: 5,
        tag_title: '달력(Custome)',
        tag_html: `
<div role="group" class="form__group">
    <div class="form__area_col">
      <span class="label_name">Date</span>
      <div class="input_area">
        <div class="input__box">
            <input type="text" value="2023.7.23" readonly />
            <button class="focus-calendar1" onclick="CALENDAR_CUSTOME.init('popup', 'calendar', 'calendar1', 'open')">달력</button>
        </div>
      </div>
    </div>
</div>  

<div id="mw-calendar" role="dialog" class="popup_wrap popup_bodtfix" data-popup-type="bottom">
  <div class="popup-close popup_back" aria-hidden="true"></div>
  <div class="popup_container">
    <div class="popup_content">
      
      <div class="container-calendar">
        <h3 id="monthAndYear" aria-live="assertive"></h3>

        <div class="button-container-calendar" role="navigation" aria-labelledby="monthAndYear">
            <button id="todays" onclick="CALENDAR_CUSTOME.todays()" title="오늘 이동">Today</button>
            <button id="previous" onclick="CALENDAR_CUSTOME.previous()" title="이전달 이동">&#8249;</button>
            <button id="next" onclick="CALENDAR_CUSTOME.next()" title="다음달 이동">&#8250;</button>
        </div>

        <table class="table-calendar" id="calendar" data-lang="ko" role="grid" aria-labelledby="current-year">
            <thead id="thead-month"></thead>
            <tbody id="calendar-body"></tbody>
        </table>

        <div class="footer-container-calendar">
             <label for="month">Jump To: </label>
             <select id="month" onchange="CALENDAR_CUSTOME.jump()">
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
            <select id="year" onchange="CALENDAR_CUSTOME.jump()" title="select start date month/year"></select>
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
        number: 6,
        tag_title: 'OTP입력',
        tag_text: `
<ul class="list__type">
<li>한칸입력시 바로 다음칸으로 이동하는 형태로 키보드 이동 가능하다.</li>
<li>4칸 모두 입력시 완료 버튼이 노출된다.</li>
<li>실행함수: INPUT_OPTION.otpField('form__otp');</li>
</ul>
    `,
        tag_html: `
<div class="form__otp">
    <div class="field">
      <input type="number" maxlength="1" class="input">
      <input type="number" maxlength="1" class="input" disabled>
      <input type="number" maxlength="1" class="input" disabled>
      <input type="number" maxlength="1" class="input" disabled>
    </div>
    <button class="hide" id="submit" onclick="otpValidate()">Submit</button>
</div>  
    `,
    },
];
