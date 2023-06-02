// 'use strict';

// snb
const wrap = document.querySelector('#wrap');
const snbEvent = {
    hamburgerToggle() {
        let button = this;
        button.classList.add('animation');
        button.classList.toggle('active');
        let clone = button.cloneNode(true);
        button.parentNode.replaceChild(clone, button);
        clone.addEventListener('click', snbEvent.hamburgerToggle);
        wrap.classList.toggle('snbOn');
    },
    snbToggle() {
        const expandButtons = document.querySelectorAll('.snb_toggle [aria-expanded]');
        expandButtons.forEach(expandButton => {
            expandButton.addEventListener('click', () => expandedEvent.default(expandButton));
        });
    },
    snbLink(e) {
        e.preventDefault();
        const snbLinkAll = document.querySelectorAll('.snb-link');
        snbLinkAll.forEach(button => button.classList.remove('active'));
        e.currentTarget.classList.add('active');
    }    
};
const hamburgerButtons = document.querySelectorAll('.snb_handle');
hamburgerButtons.forEach(button => button.addEventListener('click', snbEvent.hamburgerToggle));
const snbLinks = document.querySelectorAll('.snb-link');
snbLinks.forEach(button => button.addEventListener('click', snbEvent.snbLink));
snbEvent.snbToggle();

// content handle
const contentSelect = {

    // content reset
    contentRemove() {
        document.querySelector('#content').innerHTML = '';
        document.querySelector('.shortcut').innerHTML = '';
    },

    // shortcut
    shortCut(){
        const area = document.querySelector('.shortcut');
        const targets = document.querySelectorAll('.table td:first-child');
        let prevTargetText = null;
        targets.forEach((target, index) => {
            const targetText = target.textContent;
            const row = target.parentElement;
            if (prevTargetText == targetText || targetText == '' || row.classList.contains('defer')) return;
            row.setAttribute('id', `target${index}`);

            const targetGo = document.createElement('a');
            targetGo.classList.add('go');
            targetGo.innerHTML = targetText;
            targetGo.setAttribute('href',`#target${index}`);
            area.appendChild(targetGo);

            prevTargetText = target.textContent;
        });
    },

    // components
    componentsName(snbName, dataTitle, dataName) {
        contentSelect.contentRemove();
        document.querySelector('.state_info').style.display = 'none';
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
        expandedEvent.init('.accordion_header [aria-expanded]'); // 처음나와야할 컨포넌트
    },

    // project
    projectName(snbName, dataTitle, dataName) {
        contentSelect.contentRemove();
        document.querySelector('.state_info').style.display = '';
        const items = {
            data: [
                ...dataName,
            ]
        };
        const tableHead = ['DEPTH2', 'DEPTH3', 'DEPTH4', '화면명', '구분', 'ID', '완료일', '수정일', '담당자', '상태', '비고'];
        const tableHeadlWidth = ['10', '10', '10', '20', '6', '8', '8', '8', '8', '6', ''];
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

            td1.innerHTML = i.depth2; // depth2
            td2.innerHTML = i.depth3; // depth3
            td3.innerHTML = i.depth4; // depth4
            td4.innerHTML = i.pageName; // 화면명
            td5.innerHTML = i.section; // 구분
            td6.innerHTML = i.pageID; // 화면ID
            td7.innerHTML = i.pageEnd; // 완료일
            td8.innerHTML = i.pageModi; // 수정일
            td9.innerHTML = i.worker; // 담당자
            td10.innerHTML = `<strong>${i.state}</strong>`; // 상태
            td11.innerHTML = i.etc; // 비고

            td1.classList.add('depth2');
            td2.classList.add('depth3');
            td3.classList.add('depth4');
            td4.classList.add('pagename');
            td5.classList.add('section');
            td10.classList.add('state');
            td10.setAttribute('data-state', i.state);
        }
        card.querySelector('table').appendChild(tbody);

        let countIng = 0, countTest = 0, countDone = 0, countModi = 0, countDefer = 0, countTotal = 0;
        const states = document.querySelectorAll('.state');
        states.forEach(state => {

            const stateText = state.getAttribute('data-state');

            switch (stateText) {
            case '진행':
                state.classList.add('ing');
                countIng++;
                break;

            case '검수':
                state.classList.add('test');
                countTest++;
                break;

            case '완료':
                state.classList.add('done');
                countDone++;
                break;

            case '수정':
                state.classList.add('modi');
                countModi++;
                break;

            case '보류':
            case '삭제':
                state.parentNode.classList.add('defer');
                countDefer++;
                break;

            default:
                break;

            }

        });

        // count set
        document.querySelector('.count-ing').textContent = countIng;
        document.querySelector('.count-test').textContent = countTest;
        document.querySelector('.count-done').textContent = countDone;
        document.querySelector('.count-modi').textContent = countModi;
        document.querySelector('.count-defer').textContent = countDefer;

        const countValues = document.querySelectorAll('.info_value');
        countValues.forEach(countValue => {
            countTotal += parseInt(countValue.textContent);
        });
        document.querySelector('.count-total').textContent = countTotal;

        const donePercent = Math.floor((countDone / (countTotal - countDefer)) * 100);
        document.querySelector('.progress_done').style.width = `${donePercent}%`;
        document.querySelector('.percent-done').textContent = `${donePercent}%`;

        contentSelect.shortCut();

    },

}