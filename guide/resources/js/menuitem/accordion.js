let accordion = [
  {
    number: 1,
    tag_title: 'Default',
    tag_text: `
<ul class="list__type">
<li>accordion__panel 에는 padding 값을 주면 안되고 안으로 div 하나 추가한다.</li>
<li>header의 id와 panel aria-labelledby 값을 맞춘다.</li>
<li>header button의 aria-controls 값과 panel id 값을 맞춘다.</li>
<li>panel에 accordion__panel 클래스는 반드시 있어야한다.</li>
</ul>
    `,
    tag_html:`
<header id="header1" class="accordion_sample_header">
    <button type="button" aria-expanded="false" aria-controls="panel1">
        accordion header
    </button>
</header>
<div id="panel1" role="region" aria-labelledby="header1" class="accordion__panel" aria-hidden="true">
    <div>
        <div class="accordion_sample_content">
            accordion content
        </div>
    <div>
</div>
    `,
    tag_css: `
.accordion__panel{
    overflow:hidden;
    height:0;
    transition:all 0.2s linear
}
    `
  },
  {
    number: 2,
    tag_title: 'No Animation',
    tag_text: `
<ul class="list__type">
<li>기본셋팅은 Default Accordion 참고한다.</li>
<li>panel 클래스에 no_anim 클래스를 추가한다.</li>
</ul>
    `,
    tag_html:`
<header id="header2" class="accordion_sample_header">
    <button type="button" aria-expanded="false" aria-controls="panel2">
        accordion header
    </button>
</header>
<div id="panel2" role="region" aria-labelledby="header2" class="accordion__panel no_anim" aria-hidden="true">
    <div>
        <div class="accordion_sample_content">
            accordion content
        </div>
    </div>
</div>
    `
  },
]