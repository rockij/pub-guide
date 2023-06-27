'use strict';

// setTimeout(function() {
// }, 0);

// expanded event
const EXPANDED_EVENT = {
    default(btn) {
        const expandEl = document.querySelector("#" + btn.getAttribute("aria-controls"));
        if (btn.getAttribute('aria-expanded') === 'true') {
            expandEl.style.height = '0px';
            btn.setAttribute("aria-expanded", false);
        } else {
            expandEl.style.height = `${expandEl.scrollHeight}px`;
            btn.setAttribute("aria-expanded", true);
        }
        // btn.addEventListener('click', () => {
        // });
    },
    close(btn, targetIndex) {
        const expandBtns = document.querySelectorAll(btn);
        expandBtns.forEach((expandBtn, index) => {
            const expandElAll = document.querySelector("#" + expandBtn.getAttribute("aria-controls"));
            if(targetIndex != index) {
                expandElAll.style.height = '0px';
                expandBtn.setAttribute("aria-expanded", false);
            }
        });
    },
    init(target) {
        const expandButtons = document.querySelectorAll(target);
        expandButtons.forEach((expandButton, index) => {
            expandButton.addEventListener('click', () => {
                EXPANDED_EVENT.default(expandButton);
                EXPANDED_EVENT.close(target, index);
            });
        });
    }
};

// popup
let POPUP_OPTION = 0;
const POPUP_MODULE = {
  bodyFix(option) {
    const scrollHeight = document.documentElement.scrollTop;
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const wrap = document.querySelector('#wrap');
    if(option == 1) {
        html.style.setProperty('--scroll-behavior', 'auto');
        body.style.overflow = 'hidden';
        wrap.style.position = 'fixed';
        wrap.style.top = `${-scrollHeight}px`;
    } else {
      const topValue = Math.abs( Number(wrap.style.top.replace('px', '')) ); // 처음에 받았던 값
      body.style.removeProperty('overflow');
      wrap.style.removeProperty('top relative');
      wrap.style.top = 0;
      wrap.style.position = 'relative';
      window.scrollTo(0, topValue);
      html.style.setProperty('--scroll-behavior', 'smooth');
    }
  },
  open(target, option) {
    const _this = document.querySelector(`#mw-${target}`);
    if(_this.classList.contains('popup_bodtfix')) {
      POPUP_MODULE.bodyFix(option);
    }
    _this.classList.add('open');
    if(_this.getAttribute('data-popup-type') == 'bottom'){
      // console.log(getComputedStyle(_this).getPropertyValue('--bottom')); css변수값을 가져옴
      const popHeight = _this.querySelector('.popup_container').clientHeight;
      _this.style.setProperty('--bottom', `${popHeight}px`);
    }
    setTimeout(function() {
      _this.tabIndex = 0;
      _this.focus();
    }, 100);
    POPUP_OPTION = option;
  },
  close(target, option) {
    const _this = document.querySelector(`#mw-${target}`);
    if(_this.classList.contains('popup_bodtfix')) {
      POPUP_MODULE.bodyFix(option);
    }
    _this.classList.remove('open');
    _this.removeAttribute('tabIndex');
    document.querySelector(`.focus-${target}`).focus();
    POPUP_OPTION = option;
  },
  tooltip(target, option) {
    POPUP_MODULE.open(target, option);
    setTimeout(function() {
      const _btn = document.querySelector(`.focus-${target}`);
      const _target = document.querySelector(`#mw-${target}`);
      const boxHeight = _target.offsetHeight;
      const btnHeight = _btn.offsetHeight;
      const btnPointY = window.pageYOffset + _btn.getBoundingClientRect().top;
      if(0 <= btnPointY-boxHeight-(btnHeight-5)) {
        // 위
        _target.style.top = `${btnPointY-boxHeight-(btnHeight-5)}px`;
        _target.classList.add('arrow_btm');
      }else{
        // 아래
        _target.style.top = `${btnPointY+(btnHeight*2)}px`;
        _target.classList.add('arrow_top');
      }
    }, 0);
  },
  toast(target, option) {
    POPUP_MODULE.open(target, option);
    const _this = document.querySelector(`#mw-${target}`);
    if(_this.getAttribute('data-toast-type') == 'bottom'){
      const popHeight = _this.clientHeight;
      _this.style.setProperty('--bottom', `${popHeight}px`);
    }
    setTimeout(function() {
      _this.classList.add('on');
    }, 0);
    setTimeout(function() {
      _this.classList.remove('on');
    }, 2000);
    setTimeout(function() {
      _this.querySelector('.toast_close').click();
    }, 2300);
  }
}