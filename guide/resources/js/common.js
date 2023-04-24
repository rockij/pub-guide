'use strict';

// expand button
const a11yBtnExpand = {
  removeOpen(targetIndex) { // all close
    const expandButtonsAll = document.querySelectorAll('[role="button"][aria-expanded], button[aria-expanded]');
    expandButtonsAll.forEach((expandButtonAll, index) => {
      const expandElAll = document.querySelector("#" + expandButtonAll.getAttribute("aria-controls"));
      if(targetIndex != index) {
        expandElAll.style.height = '0px';
        expandButtonAll.setAttribute("aria-expanded", false);
        expandButtonAll.querySelector('i').classList.replace('fa-minus', 'fa-plus');
      }
    });
  },
  a11yBtnExpand() {
    const expandButtons = document.querySelectorAll('[role="button"][aria-expanded], button[aria-expanded]');
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
        a11yBtnExpand.removeOpen(index);
      });
    });
  },
};
a11yBtnExpand.a11yBtnExpand();

// snb handle
const hamburgerButtons = document.querySelectorAll('.snb_handle');
const wrap = document.querySelector('#wrap');
hamburgerButtons.forEach(button => {
	button.addEventListener('click', hamburgerToggle);
});
function hamburgerToggle() {
	let button = this;
	button.classList.add('animation');
	button.classList.toggle('active');
	let clone = button.cloneNode(true);
	button.parentNode.replaceChild(clone, button);
	clone.addEventListener('click', hamburgerToggle);
	wrap.classList.toggle('snbOn');
}