let popup = [
  {
    number: 1,
    tag_title: 'Center',
    tag_text: `
<ul class="list--type">
<li>
  POPUP_EVENT.open('popup1', 1, 'bgf');
  <ol>
  <li><b>popup1:</b> id값 버튼의 focus-뒤의 값과 일치한다.</li>
  <li><b>1:</b> open, <b>0:</b> close</li>
  <li><b>bgf:</b> 팝업 노출시 body를 고정시키는 옵션, open시 값을 넣어줬다면 close시에도 꼭 넣어준다.</li>
  </ol>
</li>
<li>
  POPUP_EVENT.close('popup1', 'popup1', 0, 'bgf');
  <ol>
  <li>두번째 옵셥값은 버튼에 focus를 정하는 값이다.</li>
  </ol>
</li>
<li>button의 title은 역할에 맞게 입력한다.</li>
<li>팝업의 내용은 popup_content 클래스 안쪽으로 넣어준다.</li>
<li>하단에 고정하고 싶은 버튼은 popup_content 다음으로 위치한다.</li>
<li>팝업 닫기 버튼은 popup-container 안쪽 맨 하단에 위치한다.</li>
<li>open할때는 animation이 있지만 close할때는 animation 없음이 기본이다.</li>
<li>팝업을 열고/닫기 시 초점 이동이 되는지 확인한다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-popup1" onclick="POPUP_EVENT.open('popup1', 1)" title="중앙팝업열기">팝업열기</button>

<div id="mw-popup1" role="dialog" class="popup-wrap" data-popup-type="center">
  <div class="popup-back" aria-hidden="true" onclick="POPUP_EVENT.close('popup1', 'popup1', 0)"></div>
  <div class="popup-container">
    <div class="popup_content">
      팝업내용1      
    </div>
    <button onclick="POPUP_EVENT.close('popup1','popup1',0)">확인</button>
    <button class="popup-close" onclick="POPUP_EVENT.close('popup1', 'popup1',0)">팝업닫기</button>
  </div>  
</div>
    `,
    tag_css:`.popup-wrap{display:none;width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:30}
.popup-container{position:absolute;background-color:#fff}
.popup-close{position:absolute;top:0;right:0;z-index:10;}
.popup-back{position:absolute;left:0;top:0;bottom:0;right:0;background-color:rgba(0,0,0,.5)}
[data-popup-type="center"]{align-items:center;justify-content:center}
[data-popup-type="center"] .popup-container{width:300px;height:300px;transform:translateY(20px);opacity:0}
[data-popup-type="center"].open{display:flex;}
[data-popup-type="center"].open .popup-container{animation: popup-ani .3s ease .1s forwards}`,
  },
  {
    number: 2,
    tag_title: 'Bottom',
    tag_text: `
<ul class="list--type">
<li>기본가이드는 center팝업을 참고한다.</li>
<li>--bottom 값은 javascript에서 height값을 넣어주기 위해 연동하여 위치값을 조절한다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-popup2" onclick="POPUP_EVENT.open('popup2',1)" title="하단팝업열기">팝업열기</button>

<div id="mw-popup2" role="dialog" class="popup-wrap" data-popup-type="bottom">
  <div class="popup-close popup-back" aria-hidden="true" onclick="POPUP_EVENT.close('popup2','popup2',0)"></div>
  <div class="popup-container">
    <div class="popup_content">
      팝업내용
    </div>
    <button class="" onclick="POPUP_EVENT.open('popup2',1)">확인</button>
    <button class="popup-close" onclick="POPUP_EVENT.close('popup2','popup2',0)">팝업닫기</button>
  </div>  
</div>
    `,
    tag_css:`[data-popup-type="bottom"].open{display:block}
[data-popup-type="bottom"] .popup-container{width:100%;height:300px;bottom:0;border-radius:12px 12px 0 0;transform:translateY(var(--bottom))}
[data-popup-type="bottom"].open .popup-container{animation: popup-ani .3s ease .1s forwards}`,
  },
  {
    number: 3,
    tag_title: 'Full',
    tag_text: `
<ul class="list--type">
<li>기본가이드는 center팝업을 참고한다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-popup3" onclick="POPUP_EVENT.open('popup3',1)" title="전체팝업열기">팝업열기</button>

<div id="mw-popup3" role="dialog" class="popup-wrap" data-popup-type="full">
  <div class="popup-container">
    <div class="popup_content">
      팝업내용
    </div>
    <div class="popup_footer">
      <button onclick="POPUP_EVENT.close('popup3','popup3',0)">취소</button>
      <button onclick="POPUP_EVENT.close('popup3','popup3',0)">확인</button>
    </div>
    <button class="popup-close" onclick="POPUP_EVENT.close('popup3','popup3',0)">팝업닫기</button>
  </div>  
</div>
    `,
    tag_css:`[data-popup-type="full"] .popup-container{position:relative}
[data-popup-type="full"] .popup_content{overflow:auto;flex:1}
[data-popup-type="full"] .popup_footer{height:50px;border-top:1px solid}
[data-popup-type="full"].open{display:block}
[data-popup-type="full"].open .popup-container{display:flex;height:100%;flex-direction:column}
[data-popup-type="full"].open .popup_footer{margin-top:auto}`,
  },
  {
    number: 4,
    tag_title: 'Double',
    tag_text: `
<ul class="list--type">
<li>기본가이드는 center팝업을 참고한다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-popup4" onclick="POPUP_EVENT.open('popup4',1,'bgf')">팝업열기</button>

<div id="mw-popup4" role="dialog" class="popup-wrap" data-popup-type="center">
    <div class="popup-back" aria-hidden="true" onclick="POPUP_EVENT.close('popup4','popup4',0,'bgf')"></div>
    <div class="popup-container">
        <div class="popup_content">
            팝업내용1
        </div>
        <div class="popup_footer">
            <button class="focus-popup41" onclick="POPUP_EVENT.open('popup41',1)">다음팝업 열기</button>
        </div>
        <button class="popup-close" onclick="POPUP_EVENT.close('popup4','popup4',0,'bgf')">팝업닫기</button>
    </div>  
</div>
<div id="mw-popup41" role="dialog" class="popup-wrap" data-popup-type="center">
    <div class="popup-container">
        <div class="popup_content">
            팝업내용2
        </div>
        <button class="popup-close" onclick="POPUP_EVENT.close('popup41','popup41',1,'bgf')">팝업닫기</button>
    </div>  
</div>
    `,
    tag_css:``,
  },
  {
    number: 5,
    tag_title: 'Tooltip',
    tag_text: `
<ul class="list--type">
<li>
    POPUP_EVENT.tooltip('toolip1',1)
    <ol>
    <li><b>toolip1:</b> id값 버튼의 focus-뒤의 값과 일치한다.</li>
    <li><b>1:</b> open, <b>0:</b> close</li>
    </ol>
</li>
<li>기본 노출 버튼의 위로 위치한다.</li>
<li>버튼의 위치가 너무 위라 툴팁이 안보일정도면 아래로 노출된다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-toolip1" onclick="POPUP_EVENT.tooltip('toolip1',1)">툴팁열기</button>

<div id="mw-toolip1" role="dialog" class="tooltip-wrap">
  <div class="tooltip_container">
    <div class="tooltip_content">
      툴팁내용1
    </div>
    <button class="tooltip_close" onclick="POPUP_EVENT.close('toolip1','toolip1',0)">툴팁닫기</button>
  </div>  
</div>
    `,
    tag_css:`.tooltip-wrap{display:none;width:100%;position:absolute;z-index:30}
.tooltip-wrap.open{display:block}
.tooltip-wrap::before{content:'';width:20px;height:20px;transform: rotate(45deg);box-shadow: 0 1px 14px rgba(0,0,0,.2);background: #fff;position: absolute;z-index:1;left:20px}
.tooltip-wrap::after{content: "";height: 100%;width: 100%;border-radius: 4px;position: absolute;top: 0;left: 0;box-shadow: 0 1px 14px rgba(0,0,0,.2)}
.tooltip_container{position:relative;z-index:1;width:100%;padding:20px;border-radius:4px;background-color:#fff}
.tooltip-wrap.arrow-top::before{top: -8px;}
.tooltip-wrap.arrow-btm::before{bottom: -8px;}`,
  },
  {
    number: 6,
    tag_title: 'Toast Bottom',
    tag_text: `
<ul class="list--type">
<li>
    POPUP_EVENT.toast('toast1',1,2);
    <ol>
    <li><b>toast1:</b> id값 버튼의 focus-뒤의 값과 일치한다.</li>
    <li><b>1:</b> open, <b>0:</b> close</li>
    <li><b>2:</b> 노출되는 시간 기본 2초</li>
    </ol>
</li>
<li>--bottom 값은 javascript에서 height값을 넣어주기 위해 연동하여 위치값을 조절한다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-toast1" onclick="POPUP_EVENT.toast('toast1',1,2)">팝업열기</button>

<div id="mw-toast1" role="dialog" class="toast-wrap" data-toast-type="bottom">
  <div class="toast_content">
      팝업내용
    <button class="toast_close" onclick="POPUP_EVENT.close('toast1','toast1',0)">팝업닫기</button>
  </div>
</div>
    `,
    tag_css:`.toast-wrap{display:none;position:fixed;left:0;right:0;padding:20px;z-index:30;transition-duration:.3s;opacity:0}
.toast_content{position:relative;padding:10px;border-radius:12px;background-color:rgba(0,0,0,.5);font-size:12px;color:#fff}
.toast-wrap.open{display:block}
.toast-wrap.on{opacity:1}`,
  },
  {
    number: 7,
    tag_title: 'Toast Center',
    tag_text: `
<ul class="list--type">
<li>기본가이드는 bottom팝업을 참고한다.</li>
</ul>
    `,
    tag_html:`
<button class="focus-toast2" onclick="POPUP_EVENT.toast('toast2',1,2)">팝업열기</button>

<div id="mw-toast2" role="dialog" class="toast-wrap" data-toast-type="center">
  <div class="toast_content">
      팝업내용
    <button class="toast_close" onclick="POPUP_EVENT.close('toast2','toast2',0)">팝업닫기</button>
  </div>
</div>
    `
  },
]