'use strict';

// setTimeout(function() {
// }, 0);

// expanded event
const EXPANDED_EVENT = {
    default(btn) {
        const expandEl = document.querySelector("#" + btn.getAttribute("aria-controls"));
        if (btn.getAttribute('aria-expanded') === 'true') {
            expandEl.setAttribute("aria-hidden", true);
            btn.setAttribute("aria-expanded", false);
        } else {
            expandEl.setAttribute("aria-hidden", false);
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
                expandEl.setAttribute("aria-hidden", true);
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

// include
const INCLUDE_MODULE = {
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
    }
}

// popup
let POPUP_OPTION = 0;
const POPUP_MODULE = {
    open(target, option, bodyfix) {
        const _this = document.querySelector(`#mw-${target}`);
        if(bodyfix === 1) INCLUDE_MODULE.bodyFix(option);
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
    close(target, option, bodyfix) {
        const _this = document.querySelector(`#mw-${target}`);
        if(bodyfix === 1) INCLUDE_MODULE.bodyFix(option);
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
    toast(target, option, time) {
        POPUP_MODULE.open(target, option);
        const _this = document.querySelector(`#mw-${target}`);
            if(_this.getAttribute('data-toast-type') == 'bottom'){
            const popHeight = _this.clientHeight;
            _this.style.setProperty('--bottom', `${popHeight}px`);
        }
        const closeDelay = 300; // open 클래스 삭제 시점
        setTimeout(function() { _this.classList.add('on') }, 0);
        setTimeout(function() { _this.classList.remove('on') }, time*1000);
        setTimeout(function() { _this.querySelector('.toast_close').click() }, (time*1000) + closeDelay);
    }
}

// forms
const FORM_MODULE = {
    otpField(targetClass){
        const inputs = document.querySelectorAll(`.${targetClass} .input`);
        const inputField = document.querySelector(`.${targetClass} .field`);
        const submitButton = document.getElementById('submit');
        let inputCount = 0, finalInput = '';
        const updateInputConfig = (element, disabledStatus) => {
            element.disabled = disabledStatus;
            if (!disabledStatus) {
                element.focus();
            } else {
                element.blur();
            }
        };
        inputs.forEach(input => {
            input.addEventListener('keyup', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                let {value} = e.target;
                if(value.length == 1) {
                    updateInputConfig(e.target, true);
                    if(inputCount <= 3 && e.key != 'Backspace') {
                        finalInput += value;
                        if (inputCount < 3) {
                        updateInputConfig(e.target.nextElementSibling, false);
                        }
                    }
                    inputCount += 1;
                } else if (value.length == 0 && e.key == 'Backspace') {
                    finalInput = finalInput.substring(0, finalInput.length - 1);
                    if (inputCount == 0) {
                        updateInputConfig(e.target, false);
                        return false;
                    }
                    updateInputConfig(e.target, true);
                    e.target.previousElementSibling.value = '';
                    updateInputConfig(e.target.previousElementSibling, false);
                    inputCount -= 1;
                } else if (value.length > 1) {
                    e.target.value = value.split('')[0];
                }
                submitButton.classList.add('hide');
            });
        });
        window.addEventListener('keyup', (e) => {
            if (inputCount > 3) {
                submitButton.classList.remove('hide');
                submitButton.classList.add('show');
                if (e.key == 'Backspace') {
                finalInput = finalInput.substring(0, finalInput.length - 1);
                updateInputConfig(inputField.lastElementChild, false);
                inputField.lastElementChild.value = '';
                inputCount -= 1;
                submitButton.classList.add('hide');
                }
            }
        });
    },
    textSelectAll(targetClass){
        const inputs = document.querySelectorAll(`.${targetClass}`);
        inputs.forEach(input => {
            input.addEventListener('click', () => {
                input.setSelectionRange(0, input.value.length);
            });
        });
    },
    textCopy(targetClass) {
        const copyBtns = document.querySelectorAll(`.${targetClass}`);
        copyBtns.forEach(copyBtn => {
            copyBtn.addEventListener('click', () => {
                const input = copyBtn.parentElement.parentElement.querySelector('.input');
                input.select();
                if(document.execCommand("copy")){
                    copyBtn.innerText = 'copied';
                    setTimeout(()=>{
                        copyBtn.innerText = 'copy';
                        window.getSelection().removeAllRanges();
                    }, 1000);
                }
            });
        });
    },
    labelControl(targetClass) {
        const labels = document.querySelectorAll(`.${targetClass}`);
        labels.forEach(label => {
            const input = label.previousElementSibling;
            input.addEventListener('keyup', () => {
                if(input.value.length > 0) {
                    input.classList.add('focus');
                }else{
                    input.classList.remove('focus');
                }
            });
        });
    },
    inputRemove(targetClass) {
        const inpDels = document.querySelectorAll(`.${targetClass}`);
        inpDels.forEach(inpDel => {
            const input = inpDel.parentElement.parentElement.querySelector('.input');
            inpDel.addEventListener('click', () => {
                input.value = '';
                input.classList.remove('focus');
                setTimeout(() => {
                    input.focus();
                }, 0);
            });
        });
    },
    passToggle(targetClass) {
        const passBtns = document.querySelectorAll(`.${targetClass}`);
        passBtns.forEach(passBtn => {
            const input = passBtn.parentElement.parentElement.querySelector('.input');
            passBtn.addEventListener('click', () => {
                if(input.getAttribute('type') === 'password') {
                    input.setAttribute('type','text');
                    passBtn.setAttribute('title','비밀번호 숨기기');
                }else{
                    input.setAttribute('type','password');
                    passBtn.setAttribute('title','비밀번호 보기');
                }
            });
        });
    },
    inputMaxlength(targetClass) {
        const limitChecks = document.querySelectorAll(`.${targetClass}`);
        limitChecks.forEach(limitCheck => {
            const input = limitCheck.parentElement.parentElement.querySelector('.input');
            let maxLength = input.getAttribute('maxlength');
            input.addEventListener('keyup', () => {
                limitCheck.innerText = maxLength - input.value.length;
            });
            input.addEventListener('focus', () => {
                limitCheck.innerText = maxLength - input.value.length;
            });
        });
    },
    inputEmail(targetClass) {
        const addrSelect = document.querySelector(`.${targetClass}`);
        addrSelect.addEventListener('change', () => {
            if(addrSelect.value == 'direct'){
                addrSelect.nextElementSibling.style.display = 'block';
                addrSelect.nextElementSibling.focus();
            }else{
                addrSelect.nextElementSibling.value = '';
                addrSelect.nextElementSibling.style.display = 'none';
            }
        });
    },
    autoResize(targetClass) {
        const textareas = document.querySelectorAll(`.${targetClass}`);
        textareas.forEach(textarea => {
            textarea.addEventListener("keyup", (e) => {
                let scHeight = e.target.scrollHeight;
                textarea.style.height = `${scHeight}px`;
            });
        });
    }
}

function otpValidate(){
    alert('성공');
}