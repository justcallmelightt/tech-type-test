const TYPES = {
  flutter: { name: 'Flutter', accent: '#02569B', pale: '#e3f2fa', logo: 'flutter', lead: '어디서든 자연스럽게 어울리는 유연한 연결자', reason: '당신은 새로운 환경에 들어가도 사람들과 금세 호흡을 맞춥니다. 서로 다른 생각을 한데 모아 보기 좋은 결과로 만드는 것을 즐기죠. 다양한 환경에서 하나의 경험을 만들어 내는 Flutter처럼, 당신의 장점은 유연함과 조화로움이에요.', tags: ['적응력', '협업', '균형감'] },
  javascript: { name: 'JavaScript', accent: '#E0C919', pale: '#f7edcb', logo: 'javascript', lead: '생각보다 행동이 빠른 에너지 메이커', reason: '떠오른 아이디어를 오래 묵혀 두기보다 일단 움직여 보는 편이에요. 상황에 맞춰 빠르게 반응하고 주변 분위기까지 생기 있게 만들죠. 웹에 활기를 더하는 JavaScript처럼, 당신은 어디서든 새로운 가능성을 시작합니다.', tags: ['실행력', '호기심', '순발력'] },
  typescript: { name: 'TypeScript', accent: '#3178C6', pale: '#e4edf7', logo: 'typescript', lead: '배려 깊은 기준으로 함께 오래 가는 설계자', reason: '작은 약속을 소중히 여기고, 모두가 이해할 수 있도록 생각을 정리합니다. 서두르기보다 실수를 줄일 방법을 먼저 살피죠. 분명한 기준으로 협업을 돕는 TypeScript처럼, 당신이 있으면 일이 한층 든든해집니다.', tags: ['명확함', '신뢰', '계획성'] },
  python: { name: 'Python', accent: '#3776AB', pale: '#e7eef5', logo: 'python', lead: '복잡한 이야기도 쉽게 풀어내는 다정한 탐험가', reason: '새로운 분야를 배우는 데 거리낌이 없고, 어려운 생각도 쉬운 말로 나눌 줄 압니다. 궁금한 것이 생기면 차근차근 파고들죠. 여러 분야에서 쓰이는 Python처럼, 당신의 가능성은 한곳에 머물지 않아요.', tags: ['배움', '설명력', '개방성'] },
  rust: { name: 'Rust', accent: '#6a4c3c', pale: '#f3e8e0', logo: 'rust', lead: '보이지 않는 부분까지 믿음직하게 챙기는 수호자', reason: '빨리 끝내는 것보다 제대로 해내는 데 마음이 갑니다. 문제가 생기기 전에 작은 징후를 알아보고, 한번 맡은 일은 끝까지 책임지죠. 안정적인 기반을 중시하는 Rust처럼, 당신은 곁에 있는 사람에게 신뢰를 줍니다.', tags: ['책임감', '집중력', '안정감'] },
  css: { name: 'CSS', accent: '#663399', pale: '#f0e7f7', logo: 'css', lead: '평범한 순간을 나답게 바꾸는 감각가', reason: '다른 사람이 지나치는 작은 차이를 잘 발견합니다. 같은 내용이라도 어떻게 전하느냐에 따라 느낌이 달라진다는 걸 알죠. 화면의 인상을 만드는 CSS처럼, 당신은 일상에 자기만의 결을 더합니다.', tags: ['관찰력', '표현력', '감각'] }
};

const QUESTIONS = [
  { title: '새로운 모임에 처음 갔을 때, 나는?', answers: [
    ['먼저 말을 걸며 분위기를 연다', 'javascript'], ['사람들의 대화를 듣고 자연스럽게 섞인다', 'flutter'], ['모임의 흐름을 살피며 천천히 적응한다', 'rust'], ['눈에 띄는 작은 디테일에 관심이 간다', 'css']
  ]},
  { title: '친구들과 여행을 준비한다면?', answers: [
    ['동선과 시간을 보기 쉽게 정리한다', 'typescript'], ['처음 보는 장소를 찾아 제안한다', 'python'], ['모두의 취향을 모아 일정을 조율한다', 'flutter'], ['이 여행만의 특별한 분위기를 만든다', 'css']
  ]},
  { title: '갑자기 계획이 바뀌었어요. 내 반응은?', answers: [
    ['괜찮아! 새로운 방법을 바로 시도한다', 'javascript'], ['변경된 조건을 정리하고 다시 계획한다', 'typescript'], ['다들 편한 방향으로 빠르게 맞춘다', 'flutter'], ['놓친 것은 없는지 먼저 확인한다', 'rust']
  ]},
  { title: '마음에 드는 취미를 발견하면?', answers: [
    ['일단 시작하고 하면서 배운다', 'javascript'], ['원리와 다른 활용법까지 찾아본다', 'python'], ['도구를 고르고 탄탄하게 익힌다', 'rust'], ['내 취향대로 조금씩 꾸며 간다', 'css']
  ]},
  { title: '팀에서 내가 가장 편한 역할은?', answers: [
    ['서로 다른 의견을 이어 주는 사람', 'flutter'], ['할 일을 분명하게 정리하는 사람', 'typescript'], ['막힌 부분을 깊이 파고드는 사람', 'rust'], ['새로운 방향을 제안하는 사람', 'javascript']
  ]},
  { title: '친구가 고민을 털어놓았어요. 나는?', answers: [
    ['마음을 듣고 함께 생각을 풀어 본다', 'python'], ['상황을 차분히 정리해 준다', 'typescript'], ['그 친구만의 마음을 섬세하게 읽는다', 'css'], ['도움이 필요할 때 끝까지 곁에 있는다', 'rust']
  ]},
  { title: '완성한 결과물을 볼 때 먼저 보이는 것은?', answers: [
    ['사람들이 실제로 즐길 수 있는지', 'flutter'], ['한눈에 전달되는 느낌과 디테일', 'css'], ['더 재미있게 바꿀 수 있는 부분', 'javascript'], ['배운 것을 다음에 어떻게 쓸지', 'python']
  ]},
  { title: '나에게 가장 기분 좋은 순간은?', answers: [
    ['새로운 것을 이해했을 때', 'python'], ['서로 같은 그림을 보고 움직일 때', 'typescript'], ['믿고 맡겨도 된다는 말을 들을 때', 'rust'], ['내 감각이 누군가에게 닿았을 때', 'css']
  ]}
];

const app = document.querySelector('#app');
const state = { screen: 'intro', index: 0, answers: Array(QUESTIONS.length).fill(null), result: null, typesReturn: 'intro', depth: 0 };
let renderedScreen = null;
let renderedQuizIndex = null;
let pendingAdvance = null;

function cancelPendingAdvance() {
  if (pendingAdvance !== null) clearTimeout(pendingAdvance);
  pendingAdvance = null;
}

function snapshot() {
  return { screen: state.screen, index: state.index, answers: [...state.answers], result: state.result, typesReturn: state.typesReturn, depth: state.depth };
}

function restoreSnapshot(saved) {
  if (!saved || !['intro', 'quiz', 'types', 'result'].includes(saved.screen)) return false;
  if (!Array.isArray(saved.answers) || saved.answers.length !== QUESTIONS.length) return false;
  if (!saved.answers.every(value => value === null || (Number.isInteger(value) && value >= 0 && value < 4))) return false;
  if (!Number.isInteger(saved.index) || saved.index < 0 || saved.index >= QUESTIONS.length) return false;
  if (saved.result !== null && !Object.hasOwn(TYPES, saved.result)) return false;
  if (saved.screen === 'result' && !saved.result) return false;
  state.screen = saved.screen;
  state.index = saved.index;
  state.answers = [...saved.answers];
  state.result = saved.result;
  state.typesReturn = saved.typesReturn === 'result' ? 'result' : 'intro';
  state.depth = Number.isInteger(saved.depth) && saved.depth >= 0 ? saved.depth : 0;
  return true;
}

function goBack(fallbackScreen) {
  cancelPendingAdvance();
  if (state.depth > 0) window.history.back();
  else {
    if (state.screen === 'quiz' && state.index > 0) state.index -= 1;
    else state.screen = fallbackScreen;
    render();
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function rollingNumber(value) {
  return `<span class="rolling-number" aria-hidden="true">${[Math.floor(value / 10), value % 10].map((digit, place) => `<span class="rolling-window"><span class="rolling-track" data-place="${place}" style="transform:translateY(-${digit}em)">${Array.from({ length: 10 }, (_, number) => `<span>${number}</span>`).join('')}</span></span>`).join('')}</span>`;
}

function setRollingNumber(value) {
  const digits = [Math.floor(value / 10), value % 10];
  document.querySelectorAll('.rolling-track').forEach(track => {
    track.style.transform = `translateY(-${digits[Number(track.dataset.place)]}em)`;
  });
  document.querySelector('#question-counter-announcement').textContent = `${value} / ${QUESTIONS.length}`;
}

function animateQuestionText(element, delay = 0, direction = 1) {
  if (!element?.animate) return;
  element.getAnimations().forEach(animation => animation.cancel());
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  element.animate(
    reduced ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: `translateY(${direction * 9}px)` }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: reduced ? 150 : 320, delay: reduced ? 0 : delay, easing: 'cubic-bezier(.22, .8, .2, 1)', fill: 'backwards' }
  );
}

function renderIntro() {
  app.innerHTML = `<section class="intro" aria-labelledby="intro-title">
    <div class="intro-top"><p class="eyebrow">TYPE / TECH <span class="eyebrow-divider" aria-hidden="true"></span> 성향 탐색</p><span class="intro-edition">8 QUESTIONS · 6 TYPES</span></div>
    <div class="intro-content"><h1 id="intro-title" tabindex="-1">당신은 어떤<br><em>기술 유형일까요?</em></h1>
      <div class="intro-side"><p class="intro-copy">일상 속 선택 여덟 가지로 나와 닮은 기술을 찾아보세요. 코딩을 몰라도 편하게 답할 수 있어요.</p>
      <div class="action-row"><button class="primary-button" id="start" type="button"><span>검사 시작하기</span><span class="button-arrow" aria-hidden="true">↗</span></button><button class="link-button" id="show-types" type="button">유형 먼저 보기 <span aria-hidden="true">→</span></button></div></div>
    </div>
    <div class="intro-types"><span class="intro-types-label">어떤 유형이 있을까요</span><div class="intro-types-list">${Object.entries(TYPES).map(([id, type]) => `<div class="intro-type type--${id}" style="--type-color:${type.accent}"><img src="assets/logos/${type.logo}.svg" alt="" width="36" height="36"><span class="type-name">${type.name}</span></div>`).join('')}</div></div>
  </section>`;
  document.querySelector('#start').addEventListener('click', () => { state.screen = 'quiz'; state.index = 0; state.answers.fill(null); state.result = null; render(); });
  document.querySelector('#show-types').addEventListener('click', () => { state.typesReturn = 'intro'; state.screen = 'types'; render(); });
}

function renderTypes() {
  app.innerHTML = `<section class="types-view" aria-labelledby="types-title">
    <div class="types-heading"><div><p class="eyebrow"><span class="eyebrow-number">02 / 03</span> 유형 둘러보기</p><h1 id="types-title" tabindex="-1">서로 다른<br><span class="types-gradient">여섯 가지 방식.</span></h1></div><p class="types-intro">정답에 가까운 유형은 없어요. 저마다 다른 강점을 기술 이름으로 표현했습니다.</p></div>
    <div class="types-list">${Object.entries(TYPES).map(([id, type], index) => `<article class="type-row type--${id}" style="--type-color:${type.accent};--row-delay:${70 + index * 45}ms"><span class="type-number">${String(index + 1).padStart(2, '0')}</span><div class="type-logo"><img src="assets/logos/${type.logo}.svg" alt="" width="56" height="56"></div><div class="type-description"><h2 class="type-name">${type.name}</h2><p>${type.lead}</p></div><div class="tag-row">${type.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></article>`).join('')}</div>
    <div class="types-actions"><button class="primary-button" id="types-start" type="button"><span>검사 시작하기</span><span class="button-arrow" aria-hidden="true">↗</span></button><button class="link-button" id="types-back" type="button">${state.typesReturn === 'result' ? '내 결과로 돌아가기' : '처음으로 돌아가기'} <span aria-hidden="true">→</span></button></div>
  </section>`;
  document.querySelector('#types-start').addEventListener('click', () => { state.index = 0; state.answers.fill(null); state.result = null; state.screen = 'quiz'; render(); });
  document.querySelector('#types-back').addEventListener('click', () => goBack(state.typesReturn));
}

function renderQuiz() {
  const question = QUESTIONS[state.index];
  app.innerHTML = `<section class="quiz" aria-labelledby="question-title">
    <div class="quiz-top"><span class="quiz-top-label">나를 닮은 기술 찾기</span><span class="question-count">${rollingNumber(state.index + 1)}<span class="count-denominator" aria-hidden="true"> / ${String(QUESTIONS.length).padStart(2, '0')}</span><span class="sr-only" id="question-counter-announcement" aria-live="polite">${state.index + 1} / ${QUESTIONS.length}</span></span></div>
    <div class="progress" role="progressbar" aria-label="검사 진행률" aria-valuenow="${state.index + 1}" aria-valuemin="1" aria-valuemax="${QUESTIONS.length}">${QUESTIONS.map((_, index) => `<span class="progress-segment ${index <= state.index ? 'is-filled' : ''}"></span>`).join('')}</div>
    <div class="quiz-body"><div class="question-block"><p class="question-label">QUESTION ${rollingNumber(state.index + 1)}</p><h1 id="question-title" tabindex="-1">${escapeHtml(question.title)}</h1><p class="question-help">지금의 나에게 가장 가까운 답을 골라주세요.</p></div>
    <div class="answer-block"><div class="answers">${question.answers.map(([label], answerIndex) => `<button class="answer ${state.answers[state.index] === answerIndex ? 'selected' : ''}" type="button" data-answer="${answerIndex}" aria-pressed="${state.answers[state.index] === answerIndex}"><span class="answer-index">${String.fromCharCode(65 + answerIndex)}</span><span class="answer-text">${escapeHtml(label)}</span><span class="answer-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><div class="quiz-nav"><button class="text-button" id="back" type="button">← ${state.index === 0 ? '이전 화면' : '이전 질문'}</button><span class="quiz-hint">답을 고르면 다음으로 넘어갑니다</span></div></div></div>
  </section>`;
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    cancelPendingAdvance();
    state.answers[state.index] = Number(button.dataset.answer);
    document.querySelectorAll('[data-answer]').forEach(answer => {
      const selected = answer === button;
      answer.classList.toggle('selected', selected);
      answer.setAttribute('aria-pressed', String(selected));
    });
    pendingAdvance = setTimeout(() => {
      pendingAdvance = null;
      if (state.index === QUESTIONS.length - 1) { state.result = calculateResult(); state.screen = 'result'; }
      else state.index += 1;
      render();
    }, 140);
  }));
  document.querySelector('#back').addEventListener('click', () => goBack(state.index > 0 ? 'quiz' : 'intro'));
  renderedQuizIndex = state.index;
  animateQuestionText(document.querySelector('#question-title'));
  document.querySelectorAll('.answer-text').forEach((label, index) => animateQuestionText(label, 24 + index * 28));
}

function updateQuiz() {
  const question = QUESTIONS[state.index];
  const changed = renderedQuizIndex !== state.index;
  const direction = state.index < renderedQuizIndex ? -1 : 1;
  setRollingNumber(state.index + 1);
  const progress = document.querySelector('.progress');
  progress.setAttribute('aria-valuenow', state.index + 1);
  progress.querySelectorAll('.progress-segment').forEach((segment, index) => segment.classList.toggle('is-filled', index <= state.index));
  const title = document.querySelector('#question-title');
  title.textContent = question.title;
  if (changed) animateQuestionText(title, 0, direction);
  document.querySelectorAll('[data-answer]').forEach((button, index) => {
    const selected = state.answers[state.index] === index;
    const label = button.querySelector('.answer-text');
    label.textContent = question.answers[index][0];
    if (changed) animateQuestionText(label, 24 + index * 28, direction);
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#back').textContent = `← ${state.index === 0 ? '이전 화면' : '이전 질문'}`;
  renderedQuizIndex = state.index;
}

function calculateResult() {
  const scores = Object.fromEntries(Object.keys(TYPES).map(id => [id, 0]));
  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null) scores[QUESTIONS[questionIndex].answers[answerIndex][1]] += 1;
  });
  const high = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter(id => scores[id] === high);
  // 동일 점수라면 더 최근에 고른 유형으로 결정한다.
  for (let index = state.answers.length - 1; index >= 0; index -= 1) {
    const type = QUESTIONS[index].answers[state.answers[index]][1];
    if (tied.includes(type)) return type;
  }
  return tied[0];
}

function renderResult() {
  const type = TYPES[state.result];
  app.innerHTML = `<section class="result type--${state.result}" style="--type-color:${type.accent}" aria-labelledby="result-title">
    <div class="result-top"><p class="eyebrow"><span class="eyebrow-number">03 / 03</span> 당신의 유형</p><span class="result-seal">TYPE / TECH RESULT</span></div>
    <div class="result-layout"><div class="result-identity"><div class="result-art" aria-hidden="true"><img src="assets/logos/${type.logo}.svg" alt="" width="116" height="116"></div><h1 id="result-title" tabindex="-1">당신은<br><span class="type-name">${type.name}</span> 유형입니다.</h1><p class="result-lead">${type.lead}</p></div>
    <div class="result-detail"><span class="detail-number">01 / WHY THIS TYPE</span><h2>왜 ${type.name}<br>유형일까요?</h2><p>${type.reason}</p><div class="tag-row">${type.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div><div class="result-note">이 결과는 재미를 위한 해석입니다.<br>사람을 하나의 유형으로 단정하지 않아요.</div></div></div>
    <div class="result-actions"><button class="primary-button" id="share" type="button"><span>결과 공유하기</span><span class="button-arrow" aria-hidden="true">↗</span></button><button class="secondary-button" id="all-types" type="button">다른 유형 보기 <span aria-hidden="true">→</span></button><button class="secondary-button" id="restart" type="button">다시 해보기 <span aria-hidden="true">↺</span></button></div><p class="share-note" id="share-note" role="status"></p>
  </section>`;
  document.querySelector('#all-types').addEventListener('click', () => { state.typesReturn = 'result'; state.screen = 'types'; render(); });
  document.querySelector('#restart').addEventListener('click', () => { state.screen = 'intro'; state.index = 0; state.answers.fill(null); state.result = null; render(); });
  document.querySelector('#share').addEventListener('click', async () => {
    const publicUrl = /^https?:$/.test(location.protocol) ? location.href : '';
    const shareData = { title: `나는 ${type.name} 유형!`, text: `당신은 ${type.name} 유형입니다! ${type.lead}`, ...(publicUrl ? { url: publicUrl } : {}) };
    const shareText = [shareData.text, publicUrl].filter(Boolean).join('\n');
    const note = document.querySelector('#share-note');
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(shareText); note.textContent = publicUrl ? '결과 문구와 링크를 복사했어요.' : '결과 문구를 복사했어요.'; }
      else { const field = document.createElement('textarea'); field.value = shareText; document.body.append(field); field.select(); const copied = document.execCommand('copy'); field.remove(); note.textContent = copied ? '결과 문구를 복사했어요.' : '이 브라우저에서는 복사를 지원하지 않아요.'; }
    } catch (error) { if (error.name !== 'AbortError') note.textContent = '공유하지 못했어요. 다시 시도해 주세요.'; }
  });
}

function render(recordHistory = true, focusHeading = true) {
  if (recordHistory) {
    state.depth += 1;
    try { window.history.pushState({ typeTech: snapshot() }, ''); }
    catch { state.depth -= 1; }
  }
  const sameQuiz = state.screen === 'quiz' && renderedScreen === 'quiz';
  if (sameQuiz) updateQuiz();
  else {
    if (state.screen === 'intro') renderIntro();
    else if (state.screen === 'quiz') renderQuiz();
    else if (state.screen === 'types') renderTypes();
    else renderResult();
    renderedScreen = state.screen;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  if (focusHeading) document.querySelector('main h1')?.focus({ preventScroll: true });
}

if (!restoreSnapshot(window.history.state?.typeTech)) {
  try { window.history.replaceState({ typeTech: snapshot() }, ''); } catch { /* Local browsing can disable history state. */ }
}
window.addEventListener('popstate', event => {
  cancelPendingAdvance();
  if (restoreSnapshot(event.state?.typeTech)) render(false);
  else { state.screen = 'intro'; state.index = 0; state.answers.fill(null); state.result = null; state.depth = 0; render(false); }
});
document.querySelector('.brand')?.addEventListener('click', event => {
  event.preventDefault();
  cancelPendingAdvance();
  state.screen = 'intro'; state.index = 0; state.answers.fill(null); state.result = null;
  render();
});
render(false, false);
