let color = [
  {
    tag_html: `
    <div class="section_convention color_palette">
    <dl>
      <dt>Primary Color</dt>
      <dd>
        oo그룹의 브랜드 컬러를 대표하는 메인컬러이다.<br/>Primary Color는 화면에서 강조하고자 하는 정보를 하이라이트 하거나 사용자가 해야하는 최종 행동을 유도할 때 사용한다.
        <div class="color_set">
          <span class="color" style="background-color:var(--color-primary)" data-theme="Light"></span>
          <span class="color" style="background-color:var(--color-primary)" data-theme="Dark"></span>
          <span class="text"><strong>Main Button</strong>#333</span>
        </div>
      </dd>
    </dl>
    <!-- //primary-color -->
    <dl>
      <dt>UI Color</dt>    
      <dd>
        UI 요소(버튼, 텍스트, 아이콘, 라인)들의 기능 또는 정보 유형에 따라 의미를 강조하여 전달하는 목적으로 사용하는 보조컬러이며 일관된 색상사용으로 인지 부하를 낮게 유지하고 통합된 사용자 경험을 제공한다.
        <h3>Semantic Color</h3>
        UI요소들의 진행과정이나 상황별 의미를 전달하는 색상으로 사용자가 상태를 식별하고, 다음 단계를 이해하는 데 도움이 되는 컬러이다.
        <div class="color_set_wrap">
          <div class="color_set">
            <span class="color" style="background-color:var(--color-warning)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--color-warning-dark)" data-theme="Dark"></span>
            <span class="text"><strong>경고/부정</strong>#ff200c<br/>#ff5436</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--color-positive)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--color-positive-dark)" data-theme="Dark"></span>
            <span class="text"><strong>긍정/선택</strong>#007eff<br/>#279fff</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--color-notice)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--color-notice-dark)" data-theme="Dark"></span>
            <span class="text"><strong>알림/중요정보</strong>#f76900<br/>#ff8f00</span>
          </div>
        </div>      
        <!-- //semantic-color -->
        <h3>Background</h3>
        <div class="color_set_wrap">
          <div class="color_set">
            <span class="color" style="background-color:var(--bg-base)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--bg-base-dark)" data-theme="Dark"></span>
            <span class="text"><strong>기본 화면 BG</strong>#f3f2f2<br/>#121315</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--bg-card)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--bg-card-dark)" data-theme="Dark"></span>
            <span class="text"><strong>영역 BG</strong>#007eff<br/>#279fff</span>
          </div>
        </div>      
        <!-- //semantic-color -->
        <h3>Text</h3>
        <div class="color_set_wrap">
          <div class="color_set">
            <span class="color" style="background-color:var(--text-title)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--text-title-dark)" data-theme="Dark"></span>
            <span class="text"><strong>제목</strong>#26282c<br/>#eff2f7</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--text-text)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--text-text-dark)" data-theme="Dark"></span>
            <span class="text"><strong>보조텍스트1</strong>#484b51<br/>#c6cbd0</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--text-text2)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--text-text2-dark)" data-theme="Dark"></span>
            <span class="text"><strong>보조텍스트2</strong>#696e76<br/>#aab0b8</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--text-text3)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--text-text3)" data-theme="Dark"></span>
            <span class="text"><strong>비활성</strong>#8c949e<br/>#8c949e</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--text-text4)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--text-text4)" data-theme="Dark"></span>
            <span class="text"><strong>힌트</strong>#c6cbd0<br/>#484b51</span>
          </div>
        </div>      
        <!-- //Text-color -->
        <h3>Line</h3>
        <div class="color_set_wrap">
          <div class="color_set">
            <span class="color" style="background-color:var(--line-primary)" data-theme="Light"></span>
            <span class="color" style="background-color:var(---line-primary-dark)" data-theme="Dark"></span>
            <span class="text"><strong>Primary</strong>#d9d9d9<br/>#eff2f7</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--line-button)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--line-button-dark)" data-theme="Dark"></span>
            <span class="text"><strong>button/icon</strong>#26282c<br/>#eff2f7</span>
          </div>
          <div class="color_set">
            <span class="color" style="background-color:var(--line-disable)" data-theme="Light"></span>
            <span class="color" style="background-color:var(--line-disable-dark)" data-theme="Dark"></span>
            <span class="text"><strong>Diabled</strong>#dde1e4<br/>#3d4046</span>
          </div>
        </div>      
        <!-- //line-color -->
      </dd>
    </dl>
    <!-- //ui-color -->
  </div>
    `,
  },
]