let accordion = [
  {
    tag_title: 'Default Accordion',
    tag_view:`
<header id="accordion-header-preview" class="accordion_header accordion_default_header">
    <button type="button" aria-expanded="false" aria-controls="accordion-panel-preview">
        accordion header
    </button>
</header>
<div id="accordion-panel-preview" role="region" aria-labelledby="accordion-header-preview" class="accordion_panel accordion_default_panel">
    <div class="accordion_default_content">
        accordion_panel 에는 padding 값을 주면 안되고 안으로 div 하나 추가한다.
    </div>
</div>
    `,
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
  },
  {
    tag_title: 'Default Accordion2',
    tag_view:`
<header id="accordion-header-preview" class="accordion_header accordion_default_header">
    <button type="button" aria-expanded="false" aria-controls="accordion-panel-preview">
        accordion header
    </button>
</header>
<div id="accordion-panel-preview" role="region" aria-labelledby="accordion-header-preview" class="accordion_panel accordion_default_panel">
    <div class="accordion_default_content">
        accordion_panel 에는 padding 값을 주면 안되고 안으로 div 하나 추가한다.
    </div>
</div>
    `,
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
  },
]