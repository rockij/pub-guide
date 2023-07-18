'use strict';

// setTimeout(function() {
// }, 0);

// include
const INCLUDE_OPTION = {
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

// popup
let POPUP_OPTION = 0;
const POPUP_EVENT = {
    open(target, option, bodyfix) {
        const _this = document.querySelector(`#mw-${target}`);
        if(bodyfix === 1) INCLUDE_OPTION.bodyFix(option);
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
        if(bodyfix === 1) INCLUDE_OPTION.bodyFix(option);
        _this.classList.remove('open');
        _this.removeAttribute('tabIndex');
        document.querySelector(`.focus-${target}`).focus();
        POPUP_OPTION = option;
    },
    tooltip(target, option) {
        POPUP_EVENT.open(target, option);
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
        POPUP_EVENT.open(target, option);
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

// tab
class TAB_DEFAULT {
    constructor(groupNode) {
        this.tablistNode = groupNode;
        this.tabs = [];
        this.firstTab = null;
        this.lastTab = null;

        this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
        this.tabpanels = [];

        for (let i = 0; i < this.tabs.length; i += 1) {
        const tab = this.tabs[i];
        const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
        tab.tabIndex = -1;
        tab.setAttribute('aria-selected', 'false');
        this.tabpanels.push(tabpanel);
        tab.addEventListener('keydown', this.onKeydown.bind(this));
        tab.addEventListener('click', this.onClick.bind(this));
        if (!this.firstTab) {
            this.firstTab = tab;
        }
        this.lastTab = tab;
        }
        this.setSelectedTab(this.firstTab);
    }
    setSelectedTab(currentTab) {
        for (let i = 0; i < this.tabs.length; i += 1) {
        const tab = this.tabs[i];
        if (currentTab === tab) {
            tab.setAttribute('aria-selected', 'true');
            tab.removeAttribute('tabindex');
            this.tabpanels[i].classList.remove('is-hidden');
        } else {
            tab.setAttribute('aria-selected', 'false');
            tab.tabIndex = -1;
            this.tabpanels[i].classList.add('is-hidden');
        }
        }
    }
    moveFocusToTab(currentTab) {
        currentTab.focus();
    }
    moveFocusToPreviousTab(currentTab) {
        let index;
        if (currentTab === this.firstTab) {
        this.moveFocusToTab(this.lastTab);
        } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index - 1]);
        }
    }
    moveFocusToNextTab(currentTab) {
        let index;
        if (currentTab === this.lastTab) {
        this.moveFocusToTab(this.firstTab);
        } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index + 1]);
        }
    }
    /* event handle */
    onKeydown(event) {
        let tgt = event.currentTarget, flag = false;
        switch (event.key) {
        case 'ArrowLeft':
            this.moveFocusToPreviousTab(tgt);
            flag = true;
            break;
        case 'ArrowRight':
            this.moveFocusToNextTab(tgt);
            flag = true;
            break;
        case 'Home':
            this.moveFocusToTab(this.firstTab);
            flag = true;
            break;
        case 'End':
            this.moveFocusToTab(this.lastTab);
            flag = true;
            break;
        default:
            break;
        }
        if (flag) {
        event.stopPropagation();
        event.preventDefault();
        }
    }
    onClick(event) {
        this.setSelectedTab(event.currentTarget);
    }
}
  
// tab bar(animation)
class TAB_BARMOV extends TAB_DEFAULT {
    onClick(event) {    
        this.setSelectedTab(event.currentTarget);
    }
    setSelectedTab(currentTab) {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.style.width = `${currentTab.offsetWidth}px`;
            indicator.style.left = `${currentTab.offsetLeft}px`;
            indicator.style.backgroundColor = currentTab.getAttribute('active-color');
        })
        for (let i = 0; i < this.tabs.length; i += 1) {
            const tab = this.tabs[i];
            if (currentTab === tab) {
                tab.setAttribute('aria-selected', 'true');
                tab.removeAttribute('tabindex');
                this.tabpanels[i].classList.remove('is-hidden');
            } else { 
                tab.setAttribute('aria-selected', 'false');
                tab.tabIndex = -1;
                this.tabpanels[i].classList.add('is-hidden');
            }
        }
    }
}  

// tab drag slide
const TAB_DRAGSLIDE = function(target) {
    const tabsTarget = document.querySelector(`.${target}`),
    tabsBox = tabsTarget.querySelector('.tabs-box'),
    allTabs = tabsBox.querySelectorAll('.tab'),
    arrowIcons = document.querySelectorAll('.icon');
    let isDragging = false;
    // const handleIcons = (scrollVal) => {
    //     let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    //     arrowIcons[0].style.display = scrollVal <= 0 ? 'none' : 'flex';
    //     arrowIcons[1].style.display = maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex';
    // }
    arrowIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // 클릭한 아이콘이 남아 있으면 탭에서 350개 축소상자 스크롤왼쪽 또는 추가
            let scrollWidth = tabsBox.scrollLeft += icon.id === 'left' ? -340 : 340;
            handleIcons(scrollWidth);
        });
    });
    allTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabsBox.querySelector('.active').classList.remove('active');
            tab.classList.add('active');
        });
    });
    const dragging = (e) => {
        if(!isDragging) return;
        tabsBox.classList.add('dragging');
        tabsBox.scrollLeft -= e.movementX;
        handleIcons(tabsBox.scrollLeft);
    }
    const dragStop = () => {
        isDragging = false;
        tabsBox.classList.remove('dragging');
    }
    tabsBox.addEventListener('mousedown', () => isDragging = true);
    tabsBox.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);  
}
// // 탭의 경우 페이지 로딩 후에 실행이 되는 경우가 많아 코딩시 페이지에 추가한다.
// window.addEventListener('load', function () {
//     // 기본 탭 실행
//     const tabDefualts = document.querySelectorAll('.tab__defualt');
//     tabDefualts.forEach(tabDefualt => new TAB_DEFAULT(tabDefualt));
//     // 선택한 탭 bar 이동
//     const tabBarmovs = document.querySelectorAll('.tab__movbar');
//     tabBarmovs.forEach(tabBarmov => new TAB_BARMOV(tabBarmov));
// });  

// Input
const INPUT_OPTION = {
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

// checkbox
const CHECKED_UI = {
  
    checkBox(){
        const checkBoxes = document.querySelectorAll('[role="checkbox"]');	
        checkBoxes.forEach(checkBox => {
        checkBox.tabIndex = 0;		
        checkBox.addEventListener("click", () => {
            checkBoxEvent(checkBox);
        });		
        checkBox.addEventListener("keydown", e => {
            if (e.keyCode === 32 ) { // space, enter
            checkBox.click();
            e.preventDefault();
            }
        });
        });	
        function checkBoxEvent(target){
        if(target.hasAttribute("aria-controls")){
            const restBoxes = target.getAttribute("aria-controls").split(" ");
            let checkedBoxes = 0;
            let allChecked = false;
            for(let i=0; i < restBoxes.length; i++){
            const singleBox = document.getElementById(restBoxes[i]);
            checkedBoxes = singleBox.getAttribute("aria-checked") == "true" ? checkedBoxes = checkedBoxes+1 : checkedBoxes;
            allChecked = checkedBoxes == restBoxes.length ? "true" : "false";
            }
            if(allChecked=== 'true') {
            for(let i=0; i < restBoxes.length; i++){
                const singleBox = document.getElementById(restBoxes[i]);
                singleBox.setAttribute("aria-checked",false);
            }
            target.setAttribute("aria-checked", false);
            }else{
            for(let i=0; i < restBoxes.length; i++){
                const singleBox = document.getElementById(restBoxes[i]);
                singleBox.setAttribute("aria-checked",true);
            }
            target.setAttribute("aria-checked", true);
            }
        }else{
            if(target.getAttribute("aria-checked") === 'true') {
            target.setAttribute("aria-checked", false);
            }else{
            target.setAttribute("aria-checked", true);
            }
        }
        }
    },

    radioBox(){
        const radioGroups = document.querySelectorAll('[role="radiogroup"]');
        radioGroups.forEach(radioGroup => {
        const radioBox = radioGroup.querySelectorAll('[role="radio"]');
        const firstRadio = radioBox[0];
        const lastRadio = radioBox[radioBox.length-1];
        let hasChecked = false;
        for(let i=0; i < radioBox.length; i++){
            if(radioBox[i].getAttribute("aria-checked") == "true") {
            radioBox[i].tabIndex = 0;
            hasChecked = true;
            }else {
            radioBox[i].tabIndex =  -1;
            }
            radioBox[i].addEventListener("click", e => {
            const target = e.currentTarget;
            radioBox.forEach(radio => {
                if(radio !== target) {
                radio.setAttribute("aria-checked", false);
                radio.tabIndex = -1;
                }
            });
            target.setAttribute("aria-checked", true);
            target.tabIndex = 0;
            });
            radioBox[i].addEventListener("keydown", e => {
            const target = e.currentTarget;
            if (e.keyCode === 37 || e.keyCode === 38) { // previous : left,up
                target.setAttribute("aria-checked", false);
                target.tabIndex = -1;
                if(target == firstRadio){
                lastRadio.setAttribute("aria-checked", true);
                lastRadio.tabIndex = 0;
                lastRadio.focus();
                }else{
                radioBox[i-1].setAttribute("aria-checked", true);
                radioBox[i-1].tabIndex = 0;
                radioBox[i-1].focus();
                }
                e.preventDefault();
            }
            if (e.keyCode === 39 || e.keyCode === 40) { // next : right,down
                target.setAttribute("aria-checked", false);
                target.tabIndex = -1;
                if(target == lastRadio){
                firstRadio.setAttribute("aria-checked", true);
                firstRadio.tabIndex = 0;
                firstRadio.focus();
                }else{
                radioBox[i+1].setAttribute("aria-checked", true);
                radioBox[i+1].tabIndex = 0;
                radioBox[i+1].focus();
                }
                e.preventDefault();
            }
            if (e.keyCode === 13 || e.keyCode === 32) { // select: enter, space
                if(target.getAttribute("aria-checked") !== 'true') {
                target.setAttribute("aria-checked", true);
                }
                e.preventDefault();
            }
            });
        }
        if(!hasChecked) radioBox[0].tabIndex = 0; 
        });
    },

    }

    // switch
    const SWITCH_UI = {

    spring(target) {
        document.addEventListener('touchmove', function(e){}, false);
        const switchSprings = document.querySelectorAll(`.${target}`);
        let switchHit = false, hasTouch = false;
        switchSprings.forEach(switchSpring => {
        function toggleHit(){ if(!switchHit){ switchHit = true; switchSpring.classList.add("hit"  ); }}
        function setTouch() { if(!hasTouch) { hasTouch = true;  switchSpring.classList.add("touch"); }}
        switchSpring.onclick = toggleHit;
        switchSpring.ontouchstart = function(e){ setTouch(); e.preventDefault(); e.target.click(); }   
        });
    },

    rubber(target) {
        const switchRubbers = document.querySelectorAll(`.${target}`);
        switchRubbers.forEach(switchRubber => {
        const checked = switchRubber.querySelector('input');
        switchRubber.addEventListener("change", () => {
            if (checked.checked == true) {
                switchRubber.classList.remove("deactivate");
                switchRubber.classList.add("activate");
            } else {
                switchRubber.classList.remove("activate");
                switchRubber.classList.add("deactivate");
            }
        });
        });
    }

}

// stepper
function stepper(target, btn){
    const input = document.getElementById(target);
    let _class = btn.getAttribute('class');
    let min = input.getAttribute('min');
    let max = input.getAttribute('max');
    let step = input.getAttribute('step');
    let val = input.getAttribute('value');
    let calcStep = (_class == 'increment') ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;
    if(newValue >= min && newValue <= max){
        input.setAttribute('value', newValue);
    }
}