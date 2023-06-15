// 'use strict';

const wrap = document.querySelector('#wrap');

// snb
const snbEvent = {
    hamburgerToggle() {
        let button = this;
        let clone = button.cloneNode(true);
        button.parentNode.replaceChild(clone, button);
        clone.addEventListener('click', snbEvent.hamburgerToggle);
        wrap.classList.toggle('snbOpen');
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

// table sort
const tableSort = {
    sort(ascending, columnClassName, tableId) {
        const tbody = document.querySelector(`.${tableId}`).getElementsByTagName("tbody")[0];
        const rows = tbody.getElementsByTagName("tr");
        let unsorted = true;
        while (unsorted) {
            unsorted = false
            for (let r = 0; r < rows.length - 1; r++) {
                let row = rows[r];
                let nextRow = rows[r + 1];
                let value = row.getElementsByClassName(columnClassName)[0].innerHTML;
                let nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;
                value = value.replace('-', ''); // in case a comma is used in float number
                nextValue = nextValue.replace('-', '');
                if (!isNaN(value)) {
                    value = parseFloat(value);
                    nextValue = parseFloat(nextValue);
                }
                if (ascending ? value > nextValue : value < nextValue) {
                    tbody.insertBefore(nextRow, row);
                    unsorted = true;
                }
            }
        }
    },
    selectSort() {
        const selectMenu = document.querySelector(".state_menu");
        let selectList = document.querySelector(".table").getElementsByTagName("tbody")[0];
        let rows = selectList.getElementsByTagName("tr");
        selectMenu.onchange = function () {
            let selected = this.value;
            if(selected !== "") {
                for (let i = 0; i < rows.length; i++) {
                    let row = rows[i].querySelector('.state');
                    if(row.classList.contains(selected)) {
                        row.parentNode.classList.add('selectSort');
                    }else{
                        row.parentNode.classList.remove('selectSort')
                    }
                }
                const stateLists = document.querySelectorAll('.selectSort');
                stateLists.forEach(stateList => {
                    selectList.prepend(stateList);
                });
            }
        }
    },
}

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

    // convention
    originalTag(snbName, dataTitle, dataName) {
        contentSelect.contentRemove();
        document.querySelector('.shortcut').style.display = 'none';
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
            content.prepend(pageTitle);
            content.appendChild(card);
            pageTitle.classList.add('pagetitle');
            breadCrumb.classList.add('breadcrumb');
            card.classList.add('section_convention');
            pageTitle.appendChild(cardTitle);
            pageTitle.appendChild(breadCrumb);
            card.innerHTML = i.tag_html;
            cardTitle.innerHTML = dataTitle;
            breadCrumb.innerHTML = `Home / ${snbName} / <span class="active">${dataTitle}</span>`;
        }
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
        document.querySelector('.shortcut').style.display = '';
        const items = {
            data: [
                ...dataName,
            ]
        };
        const tableHead = ['DEPTH2', 'DEPTH3', 'DEPTH4', '화면명', '구분', 'URL', '', '', '담당자', '상태', '비고'];
        const tableHeadClass = ['depth2', 'depth3', 'depth4', 'pagename', 'section', 'url', 'end', 'modify', 'worker', 'state', 'etc'];
        const tableHeadWidth = ['10', '10', '10', '15', '6', '10', '8', '8', '8', '6', ''];
        let tables = '<table class="table"><thead><tr>';
        for (dhead in tableHead) {
            tables += `<th class="${tableHeadClass[dhead]}" width="${tableHeadWidth[dhead]}%">${tableHead[dhead]}</th>`;
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

        const thEnd = document.querySelector('.end');
        thEnd.innerHTML = `
        완료일
        <div class="sort_arrows">
            <button onclick="tableSort.sort(true, 'end', 'table')" class="before" title="지난일"></button>
            <button onclick="tableSort.sort(false, 'end', 'table')" class="after" title="최신일"></button>
        </div>
        `;

        const thModify = document.querySelector('.modify');
        thModify.innerHTML = `
        수정일
        <div class="sort_arrows">
            <button onclick="tableSort.sort(true, 'modify', 'table')" class="before" title="지난일"></button>
            <button onclick="tableSort.sort(false, 'modify', 'table');" class="after" title="최신일"></button>
        </div>
        `;

        const thState = document.querySelector('.state');
        thState.innerHTML = `
        <span><select class="state_menu">
        <option value="">상태</option>
        <option value="ing">진행</option>
        <option value="test">검수</option>
        <option value="done">완료</option>
        </select></span>
        `;

        const tbody = document.createElement('tbody');

        for (let i of items.data) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td'); // depth2
            let td2 = document.createElement('td'); // depth3
            let td3 = document.createElement('td'); // depth4
            let td4 = document.createElement('td'); // 구분
            let td5 = document.createElement('td'); // 화면명
            let td6 = document.createElement('td'); // 화면url
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
            // 화면ID
            td6.innerHTML = `
                <a href="${i.pageLink}" target="_blank">${i.pageLink}</a>
                <input type="text" value="${i.pageLink}" class="blind" />
                <button class="copy">copy</button>
            `;
            td7.innerHTML = i.pageEnd; // 완료일
            td8.innerHTML = i.pageModify; // 수정일
            td9.innerHTML = i.worker; // 담당자
            td10.innerHTML = `<strong>${i.state}</strong>`; // 상태
            td11.innerHTML = i.etc; // 비고

            td1.classList.add('depth2');
            td2.classList.add('depth3');
            td3.classList.add('depth4');
            td4.classList.add('pagename');
            td5.classList.add('section');
            td5.setAttribute('data-label', '페이지유형');
            td6.classList.add('url');
            td7.classList.add('end');
            td7.setAttribute('data-label', '완료일');
            td8.classList.add('modify');
            td8.setAttribute('data-label', '수정일');
            td9.classList.add('worker');
            td9.setAttribute('data-label', '작업자');
            td10.classList.add('state');
            td10.setAttribute('data-state', i.state);
            td10.setAttribute('data-label', '작업상태');
        }
        card.querySelector('table').appendChild(tbody);

        let countIng = 0, countTest = 0, countDone = 0, countModify = 0, countDefer = 0, countTotal = 0;
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
                state.classList.add('modify');
                countModify++;
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
        document.querySelector('.count-modify').textContent = countModify;
        document.querySelector('.count-defer').textContent = countDefer;
        const countValues = document.querySelectorAll('.info_value');
        countValues.forEach(countValue => {
            countTotal += parseInt(countValue.textContent);
        });
        document.querySelector('.count-total').textContent = countTotal;
        const donePercent = Math.floor((countDone / (countTotal - countDefer)) * 100);
        document.querySelector('.progress_done').style.width = `${donePercent}%`;
        document.querySelector('.percent-done').textContent = `${donePercent}%`;

        // url copy
        const copyBtns = document.querySelectorAll('.copy');
        copyBtns.forEach(copyBtn => {
            copyBtn.addEventListener('click', () => {
                const url = copyBtn.previousElementSibling;
                url.select();
                if(document.execCommand("copy")){
                    copyBtn.innerText = 'copied';
                    setTimeout(()=>{
                        copyBtn.innerText = 'copy';
                        window.getSelection().removeAllRanges();
                    }, 500);
                }
            });
        });

        contentSelect.shortCut(); // 바로가기 버튼
        tableSort.selectSort(); // 테이블 정렬

        // preview
        const tableLinks = document.querySelectorAll('.table .url a');
        const preview = document.querySelector('.preview');
        tableLinks.forEach(tableLink => {
            tableLink.addEventListener('mouseover', () => {
                const url = tableLink.getAttribute('href');
                preview.setAttribute('src', url);
            })
        });
        const previewHandle = document.querySelector('.preview_opener');
        previewHandle.addEventListener('click', () => {
            const content = document.querySelector('#content');
            wrap.classList.toggle('previewOpen');
        });
    },

};

// mobile
function reportWindowSize() {
    const hamburger = document.querySelector('.snb_handle');
    if(window.innerWidth <= 1024) {
        wrap.classList.add('snbOpen');
        wrap.classList.remove('previewOpen');
    }else{
        wrap.classList.remove('snbOpen','previewOpen');
    }
}
window.addEventListener("resize", reportWindowSize);
window.addEventListener("load", reportWindowSize);