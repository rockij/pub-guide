'use strict';

// setTimeout(function() {
// }, 0);

function expandEvent(btn, index) {
    btn.addEventListener('click', () => {
        const expandEl = document.querySelector("#" + btn.getAttribute("aria-controls"));
        if (btn.getAttribute('aria-expanded') === 'true') {
            expandEl.style.height = '0px';
            btn.setAttribute("aria-expanded", false);
        } else {
            expandEl.style.height = `${expandEl.scrollHeight}px`;
            btn.setAttribute("aria-expanded", true);
        }
    });
};

// expand button
const accordionHandle = {
    removeOpen(targetIndex) { // all close
        const expandButtonsAll = document.querySelectorAll('.accordion_header [aria-expanded]');
        expandButtonsAll.forEach((expandButtonAll, index) => {
            const expandElAll = document.querySelector("#" + expandButtonAll.getAttribute("aria-controls"));
            if(targetIndex != index) {
                expandElAll.style.height = '0px';
                expandButtonAll.setAttribute("aria-expanded", false);
            }
        });
    },
    init() {
        const expandButtons = document.querySelectorAll('.accordion_header [aria-expanded]');
        expandButtons.forEach(function (expandButton, index) {
            expandButton.addEventListener('click', () => {
                const expandEl = document.querySelector("#" + expandButton.getAttribute("aria-controls"));
                if (expandButton.getAttribute('aria-expanded') === 'true') {
                    expandEl.style.height = '0px';
                    expandButton.setAttribute("aria-expanded", false);
                } else {
                    expandEl.style.height = `${expandEl.scrollHeight}px`;
                    expandButton.setAttribute("aria-expanded", true);
                }
                accordionHandle.removeOpen(index);
            });
        });
    },
};
accordionHandle.init();