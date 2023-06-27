let popup = [
  {
    number: 1,
    tag_title: 'Center',
    tag_text: `
<ul class="list__type">
<li>
  POPUP_MODULE.open('popup1',1);
  <ol>
  <li><b>popup1:</b> id값 버튼의 focus-뒤의 값과 일치한다.</li>
  <li><b>1:</b> open, <b>0:</b> close</li>
  <li><b>true:</b> body를 fixed 시킨다.(스크롤시중 팝업이 열렸을시 상당 이동을 막기위해)</li>
  </ol>
</li>
<li>팝업을 열고/닫기 시 초점 이동이 되는지 확인한다.</li>
<li>button의 title은 역할에 맞게 입력한다.</li>
<li>팝업의 내용은 popup_content 클래스 안쪽으로 넣어준다.</li>
<li>하단에 고정하고 싶은 버튼은 popup_content 다음으로 위치한다.</li>
<li>팝업 닫기 버튼은 popup_container 안쪽 맨 하단에 위치한다.</li>
<li>popup_wrap 클래스에 popup_bodtfix 클래스가 스크롤 노출시 body가 고정된다.</li>
</ul>
    `,
    tag_view:`
<button class="focus-popup1" onclick="POPUP_MODULE.open('popup1',1)" title="중앙팝업열기">팝업열기</button>

<div id="mw-popup1" role="dialog" class="popup_wrap popup_bodtfix" data-popup-type="center">
  <div class="popup_back" aria-hidden="true" onclick="POPUP_MODULE.close('popup1',0)"></div>
  <div class="popup_container">
    <div class="popup_content">
      팝업내용1      
    </div>
    <button onclick="POPUP_MODULE.close('popup1',0)">확인</button>
    <button class="popup_close" onclick="POPUP_MODULE.close('popup1',0)">팝업닫기</button>
  </div>  
</div>
    `,
    tag_html: ``,
    tag_css:`.popup_wrap{display:none;width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:30}
.popup_container{position:absolute;background-color:#fff}
.popup_close{position:absolute;top:0;right:0;z-index:10;}
.popup_back{position:absolute;left:0;top:0;bottom:0;right:0;background-color:rgba(0,0,0,.5)}
[data-popup-type="center"]{align-items:center;justify-content:center}
[data-popup-type="center"] .popup_container{width:300px;height:300px;transform:translateY(20px);opacity:0}
[data-popup-type="center"].open{display:flex;}
[data-popup-type="center"].open .popup_container{animation: popup-ani .3s ease .1s forwards}`,
  },
  {
    number: 2,
    tag_title: 'Bottom',
    tag_text: `
<ul class="list__type">
<li>기본가이드는 center팝업을 참고한다.</li>
<li>--bottom 값은 javascript에서 height값을 넣어주기 위해 연동하여 위치값을 조절한다.</li>
</ul>
    `,
    tag_view:`
<button class="focus-popup2" onclick="POPUP_MODULE.open('popup2',1)" title="하단팝업열기">팝업열기</button>

<div id="mw-popup2" role="dialog" class="popup_wrap" data-popup-type="bottom">
  <div class="popup-close popup_back" aria-hidden="true" onclick="POPUP_MODULE.close('popup2',1)"></div>
  <div class="popup_container">
    <div class="popup_content">
      팝업내용2  
    </div>
    <button class="" onclick="POPUP_MODULE.open('popup2',1)">확인</button>
    <button class="popup_close" onclick="POPUP_MODULE.close('popup2',0)">팝업닫기</button>
  </div>  
</div>
    `,
    tag_html: ``,
    tag_css:`[data-popup-type="bottom"].open{display:block}
[data-popup-type="bottom"] .popup_container{width:100%;height:300px;bottom:0;border-radius:12px 12px 0 0;transform:translateY(var(--bottom))}
[data-popup-type="bottom"].open .popup_container{animation: popup-ani .3s ease .1s forwards}`,
  },
  {
    number: 3,
    tag_title: 'Full',
    tag_text: `
<ul class="list__type">
<li>기본가이드는 center팝업을 참고한다.</li>
</ul>
    `,
    tag_view:`
<button class="focus-popup3" onclick="POPUP_MODULE.open('popup3',1)" title="전체팝업열기">팝업열기</button>

<div id="mw-popup3" role="dialog" class="popup_wrap" data-popup-type="full">
  <div class="popup_container">
    <div class="popup_content">
      팝업내용
    </div>
    <div class="popup_footer">
      <button onclick="POPUP_MODULE.close('popup3',0)">취소</button>
      <button onclick="POPUP_MODULE.close('popup3',0)">확인</button>
    </div>
    <button class="popup_close" onclick="POPUP_MODULE.close('popup3',0)">팝업닫기</button>
  </div>  
</div>
    `,
    tag_html: ``,
    tag_css:`[data-popup-type="full"] .popup_container{position:relative}
[data-popup-type="full"] .popup_content{overflow:auto;flex:1}
[data-popup-type="full"] .popup_footer{height:50px;border-top:1px solid}
[data-popup-type="full"].open{display:block}
[data-popup-type="full"].open .popup_container{display:flex;height:100%;flex-direction:column}
[data-popup-type="full"].open .popup_footer{margin-top:auto}`,
  },
  {
    number: 5,
    tag_title: 'Tooltip',
    tag_text: `
<ul class="list__type">
<li>기본가이드는 center팝업을 참고한다.</li>
<li>버튼 위치에 따라 팝업의 위치가 달라진다.</li>
</ul>
    `,
    tag_view:`
<button class="focus-toolip1" onclick="POPUP_MODULE.tooltip('toolip1',1)">툴팁열기</button>

<div id="mw-toolip1" role="dialog" class="tooltip_wrap">
  <div class="tooltip_container">
    <div class="tooltip_content">
      툴팁내용1
    </div>
    <button class="tooltip_close" onclick="POPUP_MODULE.close('toolip1',0)">툴팁닫기</button>
  </div>  
</div>
    `,
    tag_html: ``,
    tag_css:`.tooltip_wrap{display:none;width:100%;position:absolute;z-index:30}
.tooltip_wrap.open{display:block}
.tooltip_wrap::before{content:'';width:20px;height:20px;transform: rotate(45deg);box-shadow: 0 1px 14px rgba(0,0,0,.2);background: #fff;position: absolute;z-index:1;left:20px}
.tooltip_wrap::after{content: "";height: 100%;width: 100%;border-radius: 4px;position: absolute;top: 0;left: 0;box-shadow: 0 1px 14px rgba(0,0,0,.2)}
.tooltip_container{position:relative;z-index:1;width:100%;padding:20px;border-radius:4px;background-color:#fff}
.tooltip_wrap.arrow_top::before{top: -8px;}
.tooltip_wrap.arrow_btm::before{bottom: -8px;}`,
  },
]