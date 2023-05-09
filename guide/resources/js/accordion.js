let accordion = [
  {
    tag_title: 'Default Accordion',
    tag_html: `
<header id="accordion-header-value" class="accordion_header">
<button type="button" aria-expanded="false" aria-controls="accordion-panel-value" class="snb_link collapsed">
    <span class="title">Components</span>
</button>
</header>
<div id="accordion-panel-value" role="region" aria-labelledby="accordion-header-value" class="accordion_panel snb_submenu">
  <ul>
    <li><button onclick="ItemName('Accordion', ...accordion)">Accordion</button></li>
    <li><button onclick="ItemName('Popup', ...popup)">Popup</button></li>
  </ul>
</div>
    `,
    tag_css: `
.accordion_panel{
    overflow:hidden;
    height:0;
    transition:all 0.2s linear
}
    `,
    tag_js: `
// expand button
const a11yBtnExpand = {
    removeOpen(targetIndex) { // all close
        const expandButtonsAll = document.querySelectorAll('[role="button"][aria-expanded], button[aria-expanded]');
        expandButtonsAll.forEach((expandButtonAll, index) => {
            const expandElAll = document.querySelector("#" + expandButtonAll.getAttribute("aria-controls"));
            if(targetIndex != index) {
                expandElAll.style.height = '0px';
                expandButtonAll.setAttribute("aria-expanded", false);
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
                    expandEl.style.height = expandEl.scrollHeight+'px';
                    expandButton.setAttribute("aria-expanded", true);
                }
                a11yBtnExpand.removeOpen(index);
            });
        });
    },
};
a11yBtnExpand.a11yBtnExpand();
    `,
  },
]