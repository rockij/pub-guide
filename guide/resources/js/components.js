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