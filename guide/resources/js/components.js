'use strict';

// setTimeout(function() {
// }, 0);

// expanded event
const expandedEvent = {
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
                expandedEvent.default(expandButton);
                expandedEvent.close(target, index);
            });
        });
    }
};

// form
// formAction.otpField();
// formAction.textSelectAll();
// formAction.textCopy();
const formAction = {
    otpField(){
      const inputs = document.querySelectorAll('.form__otp .input');
      const inputField = document.querySelector('form__otp .field');
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
    textSelectAll(){
      const inputs = document.querySelectorAll('.input-select');
      inputs.forEach(input => {
        input.addEventListener('click', () => {
          input.setSelectionRange(0, input.value.length);
        });
      });
    },
    textCopy() {
      const copyBtns = document.querySelectorAll('.input-copy');
      copyBtns.forEach(copyBtn => {
        copyBtn.addEventListener('click', () => {
          const input = copyBtn.parentElement.parentElement.querySelector('input');
          console.log(input);
          input.select();
          document.execCommand("copy");    
        });
      });
      
  // const field = document.querySelector('.field'),
  // input = document.querySelector('input'),
  // copy = document.querySelector('button');
  // copy.onclick = () => {
  //     input.select(); //select input value
  //     if(document.execCommand("copy")){ //if selected value is copied
  //         field.classList.add('active');
  //         copy.innerText = 'Copied';
  //         setTimeout(()=>{
  //             field.classList.remove('active');
  //             copy.innerText = 'copy';
  //             window.getSelection().removeAllRanges();
  //         }, 3000); //after 3sec remove active class and change button
  //     }
  // }
  // close.onclick = () => {
  //     viewBtn.click();
  // }
    }
  }