// 'use strict';

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
function snbToggle() {
    const expandButtons = document.querySelectorAll('.snb_toggle [aria-expanded]');
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
        });
    });
}
snbToggle();

// content handle
const contentSelect = {
  
  componentsName: function(snbName, dataTitle, dataName) {
      document.querySelector('#content').innerHTML = '';
      const items = {
        data: [
            ...dataName,
        ]
      };
      const content = document.querySelector('#content');
      let pageTitle = document.createElement('div');
      let breadCrumb = document.createElement('div');
      let cardTitle = document.createElement('h2');
      for (let i of items.data) {
          let card = document.createElement('div');
          let tagTitle = document.createElement('h3');
          let pre_html = document.createElement('pre');
          let pre_css = document.createElement('pre');
          let codeView = document.createElement('div');
  
          content.prepend(pageTitle);
          content.appendChild(card);
          pageTitle.classList.add('pagetitle');
          breadCrumb.classList.add('breadcrumb');
          pre_html.setAttribute('data-enlighter-language','generic');
          pre_css.setAttribute('data-enlighter-language','generic');
          codeView.classList.add('codeview');
          card.classList.add('section_card');
          pageTitle.appendChild(cardTitle);
          pageTitle.appendChild(breadCrumb);
          card.prepend(tagTitle);
          card.appendChild(codeView);
          card.appendChild(pre_html);
          card.appendChild(pre_css);
          cardTitle.innerHTML = dataTitle;
          tagTitle.innerHTML = i.tag_title;
          pre_html.innerHTML = i.tag_html;
          pre_css.innerHTML = i.tag_css;
          codeView.innerHTML = i.tag_view;
          breadCrumb.innerHTML = `Home / ${snbName} / <span class="active">${dataTitle}</span>`;
      }
      EnlighterJS.init('pre', 'code', {});
      accordionHandle.init();
  },

  projectName: function(snbName, dataTitle, dataName) {
      document.querySelector('#content').innerHTML = '';
  
      const items = {
        data: [
            ...dataName,
        ]
      };
  
      const tableHead = ['DEPTH2', 'DEPTH3', 'DEPTH4', '구분', '화면명', 'ID', '완료일', '수정일', '담당자', '상태', '비고'];
      const tableHeadlWidth = ['10', '10', '10', '5', '20', '8', '8', '8', '8', '6', ''];
      let tables = '<table class="table"><thead><tr>';
      for (dhead in tableHead) {
          tables += `<th width="${tableHeadlWidth[dhead]}%">${tableHead[dhead]}</th>`;
      }
      tables += '</tr></thead></table>';
  
      const content = document.querySelector('#content');
      let pageTitle = document.createElement('div');
      let breadCrumb = document.createElement('div');
      let cardTitle = document.createElement('h2');
      let card = document.createElement('div');
      content.prepend(pageTitle);
      content.appendChild(card);
      card.classList.add('section_card');
      pageTitle.classList.add('pagetitle');
      breadCrumb.classList.add('breadcrumb');
      pageTitle.appendChild(cardTitle);
      pageTitle.appendChild(breadCrumb);
      cardTitle.innerHTML = dataTitle;
      card.innerHTML = tables;
      breadCrumb.innerHTML = `Home / ${snbName} / <span class="active">${dataTitle}</span>`;
      
      const tbody = document.createElement('tbody');
      for (let i of items.data) {
          let tr = document.createElement('tr');
          let td1 = document.createElement('td'); // depth2
          let td2 = document.createElement('td'); // depth3
          let td3 = document.createElement('td'); // depth4
          let td4 = document.createElement('td'); // 구분
          let td5 = document.createElement('td'); // 화면명
          let td6 = document.createElement('td'); // 화면ID
          let td7 = document.createElement('td'); // 완료일
          let td8 = document.createElement('td'); // 수정일
          let td9 = document.createElement('td'); // 담당자
          let td10 = document.createElement('td'); // 상태
          let td11 = document.createElement('td'); // 비고
          
          tbody.appendChild(tr);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          tr.appendChild(td7);
          tr.appendChild(td8);
          tr.appendChild(td9);
          tr.appendChild(td10);
          tr.appendChild(td11);
  
          td1.innerHTML = i.depth2;
          td2.innerHTML = i.depth3;
          td3.innerHTML = i.depth4;
          td4.innerHTML = i.section;
          td5.innerHTML = i.pageName;
          td6.innerHTML = i.pageID;
          td7.innerHTML = i.pageEnd;
          td8.innerHTML = i.pageModi;
          td9.innerHTML = i.worker;
          td10.innerHTML = i.state;
          td11.innerHTML = i.etc;
  
      }
      card.querySelector('table').appendChild(tbody);
  }

}