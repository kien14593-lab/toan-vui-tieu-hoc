/* ===== Toán Vui Tiểu Học — app ===== */

const $ = sel => document.querySelector(sel);
const app = $("#app");
const LS_KEY = "toanvui-progress";

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
}
function saveProgress(p) { localStorage.setItem(LS_KEY, JSON.stringify(p)); }
function starsFor(score, total) {
  if (score >= total * 0.9) return 3;
  if (score >= total * 0.7) return 2;
  if (score >= total * 0.5) return 1;
  return 0;
}
function starStr(n) { return "★".repeat(n) + "☆".repeat(3 - n); }

/* ===== Màn hình chính ===== */
function renderHome() {
  const cards = DATA.grades.map(g => {
    if (!g.ready) {
      return `<div class="grade-card locked">
        <div class="g-emoji locked-pic">${nvIcon(g.nv, 60)}<span class="lock-badge">🔒</span></div>
        <div class="g-name">${g.ten}</div><div class="g-sub">${g.sub}</div></div>`;
    }
    return `<button class="grade-card l1" data-grade="${g.id}">
      <div class="g-emoji">${nvIcon(g.nv, 64)}</div>
      <div class="g-name">${g.ten}</div><div class="g-sub">${g.sub}</div></button>`;
  }).join("");
  app.innerHTML = `
    <div class="hero">
      <h1>Bé chọn lớp nhé! 🎈</h1>
      <p>Xem video bài giảng và làm bài tập theo đúng chương trình SGK.</p>
      <div class="hero-nv">
        ${Object.keys(NV).map(k =>
          `<div class="nv-chip"><div class="nv-chip-pic">${nvIcon(k, 62)}</div>
           <div class="nv-chip-name" style="color:${NV[k].mau}">${NV[k].ten}</div></div>`).join("")}
      </div>
    </div>
    <div class="grade-grid">${cards}</div>`;
  app.querySelectorAll("[data-grade]").forEach(b =>
    b.addEventListener("click", () => renderGrade(+b.dataset.grade)));
}

/* ===== Trang lớp: thư viện video + danh sách chủ đề ===== */
function renderGrade(gradeId) {
  const g = DATA.grades.find(x => x.id === gradeId);
  if (!g || !g.ready) return renderHome();
  const prog = loadProgress();
  const videoCards = TAP_ORDER.filter(k => TAP[k].so.startsWith(gradeId + "."))
    .map(k => {
    const t = TAP[k];
    return `<button class="video-card" data-ep="${k}" style="--mau:${NV[t.nv].mau}">
      <span class="vc-num">Tập ${t.so}</span>
      <span class="vc-pic">${nvIcon(t.nv, 62)}</span>
      <span class="vc-ten">${t.ten}</span>
      <span class="vc-play">▶ Xem</span>
    </button>`;
  }).join("");
  const chapters = g.chapters.map(ch => {
    const best = prog[`${gradeId}-${ch.id}`];
    const stars = best ? starStr(starsFor(best.score, best.total)) : "☆☆☆";
    const lessons = ch.baihoc.length
      ? ch.baihoc.map((b, i) => {
          const t = TAP[b.ep];
          return `<button class="lesson-btn" data-ch="${ch.id}" data-l="${i}">
            <span class="lb-pic">${nvIcon(t.nv, 34)}</span>
            <span class="lb-ten">${b.ten}</span>
            <span class="play">▶</span></button>`;
        }).join("")
      : `<div class="no-lesson">Chưa có video — bé làm bài ôn tập nhé!</div>`;
    return `<div class="chapter-card" style="--mau:${ch.mau}">
      <div class="ch-head">
        <span class="ch-icon">${ch.icon}</span>
        <span class="ch-name">${ch.ten}</span>
        <span class="ch-stars" title="Kết quả tốt nhất">${stars}</span>
      </div>
      <div class="ch-body">
        <div class="ch-lessons">${lessons}</div>
        <div>
          <button class="quiz-btn" data-quiz="${ch.id}">✏️ Làm bài tập</button>
          ${best ? `<div class="best-line">Tốt nhất: ${best.score}/${best.total} điểm</div>` : ""}
        </div>
      </div>
    </div>`;
  }).join("");
  app.innerHTML = `
    <button class="back-btn" id="back-home">← Chọn lớp khác</button>
    <div class="section-title">🎬 Thư viện video ${g.ten}</div>
    <div class="video-grid">${videoCards}</div>
    <div class="section-title" style="margin-top:26px">${nvIcon(g.nv, 30)} ${g.ten} — Các chủ đề theo SGK</div>
    <div class="chapter-list">${chapters}</div>`;
  $("#back-home").addEventListener("click", renderHome);
  app.querySelectorAll("[data-ep]").forEach(b =>
    b.addEventListener("click", () => {
      const t = TAP[b.dataset.ep];
      openVideo(`Tập ${t.so} · ${t.ten}`, t.file, t.nv);
    }));
  app.querySelectorAll("[data-quiz]").forEach(b =>
    b.addEventListener("click", () => startQuiz(gradeId, b.dataset.quiz)));
  app.querySelectorAll(".lesson-btn").forEach(b =>
    b.addEventListener("click", () => {
      const ch = g.chapters.find(c => c.id === b.dataset.ch);
      const t = TAP[ch.baihoc[+b.dataset.l].ep];
      openVideo(`Tập ${t.so} · ${t.ten}`, t.file, t.nv);
    }));
}

/* ===== Video modal ===== */
function openVideo(ten, file, nv) {
  const url = VIDEO_DIR + encodeURIComponent(file);
  $("#modal-title").innerHTML =
    (nv ? `<span class="mt-pic">${nvIcon(nv, 34)}</span>` : "▶ ") + ten;
  const v = $("#modal-video");
  v.src = url;
  $("#modal").classList.remove("hidden");
  v.play().catch(() => {});
}
function closeVideo() {
  const v = $("#modal-video");
  v.pause(); v.removeAttribute("src"); v.load();
  $("#modal").classList.add("hidden");
}
$("#modal-close").addEventListener("click", closeVideo);
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeVideo(); });

/* ===== Quiz engine ===== */
let quiz = null;

function startQuiz(gradeId, chId) {
  const g = DATA.grades.find(x => x.id === gradeId);
  const ch = g.chapters.find(c => c.id === chId);
  quiz = {
    gradeId, chId, ten: ch.ten, icon: ch.icon,
    qs: makeQuiz(ch.gen, 10),
    i: 0, score: 0, done: false,
  };
  renderQuestion();
}

function renderQuestion() {
  const q = quiz.qs[quiz.i];
  const pct = (quiz.i / quiz.qs.length) * 100;
  let answerHtml = "";
  if (q.kind === "choice") {
    answerHtml = `<div class="opts">${q.options.map((o, i) =>
      `<button class="opt-btn" data-i="${i}">${o}</button>`).join("")}</div>`;
  } else {
    answerHtml = `<div class="numpad">
      <div class="num-display" id="num-display"><span class="placeholder">?</span></div>
      <div class="num-grid">
        ${[1,2,3,4,5,6,7,8,9].map(n => `<button class="num-btn" data-n="${n}">${n}</button>`).join("")}
        <button class="num-btn act" data-n="del">⌫ Xoá</button>
        <button class="num-btn" data-n="0">0</button>
        <button class="num-btn ok" data-n="ok">✓ Xong</button>
      </div>
    </div>`;
  }
  app.innerHTML = `
    <div class="quiz-wrap">
      <div class="quiz-top">
        <button class="quiz-quit" id="quiz-quit" title="Thoát">✕</button>
        <div class="quiz-progress"><div style="width:${pct}%"></div></div>
        <div class="quiz-count">Câu ${quiz.i + 1}/${quiz.qs.length}</div>
      </div>
      <div class="q-card">
        <div class="q-prompt">${q.prompt}</div>
        <div class="q-visual">${q.visual || ""}</div>
        ${answerHtml}
        <div class="feedback" id="feedback"></div>
        <button class="next-btn" id="next-btn">Câu tiếp theo ➜</button>
      </div>
    </div>`;
  $("#quiz-quit").addEventListener("click", () => renderGrade(quiz.gradeId));
  $("#next-btn").addEventListener("click", nextQuestion);

  if (q.kind === "choice") {
    app.querySelectorAll(".opt-btn").forEach(b =>
      b.addEventListener("click", () => answerChoice(+b.dataset.i)));
  } else {
    let val = "";
    const disp = $("#num-display");
    app.querySelectorAll(".num-btn").forEach(b =>
      b.addEventListener("click", () => {
        const n = b.dataset.n;
        if (quiz.answered) return;
        if (n === "del") val = val.slice(0, -1);
        else if (n === "ok") { if (val !== "") answerInput(+val); return; }
        else if (val.length < 3) val += n;
        disp.innerHTML = val === "" ? '<span class="placeholder">?</span>' : val;
      }));
  }
}

function answerChoice(i) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.qs[quiz.i];
  const ok = i === q.answer;
  app.querySelectorAll(".opt-btn").forEach((b, bi) => {
    b.disabled = true;
    if (bi === q.answer) b.classList.add("correct");
    if (bi === i && !ok) b.classList.add("wrong");
  });
  showFeedback(ok, q.explain);
}

function answerInput(v) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.qs[quiz.i];
  const ok = v === q.answer;
  const disp = $("#num-display");
  disp.style.borderColor = ok ? "#06d6a0" : "#ff5d8f";
  disp.style.background = ok ? "#d9f9ec" : "#ffe3e8";
  if (!ok) disp.innerHTML = `${v} → <b style="color:#067a5b">${q.answer}</b>`;
  showFeedback(ok, q.explain);
}

function showFeedback(ok, explain) {
  if (ok) { quiz.score++; confetti(14); }
  const fb = $("#feedback");
  fb.className = "feedback show " + (ok ? "good" : "bad");
  fb.innerHTML = `${ok ? pick(["🎉 Đúng rồi! Thỏ Bông khen bé giỏi quá!", "🌟 Chính xác! Mèo Múp vỗ tay nè!", "👏 Tuyệt vời! Ong Vàng thưởng bé một bông hoa!", "💚 Đúng rồi nè, bé giỏi ghê!"])
    : pick(["💪 Chưa đúng, không sao nhé! Thỏ Bông tin bé làm được!", "💛 Gần đúng rồi, Mèo Múp cổ vũ bé nè!", "🌼 Sai một chút thôi, Ong Vàng cùng bé thử lại nhé!"])}
    <div class="fb-explain">${explain}</div>`;
  $("#next-btn").classList.add("show");
  $("#next-btn").textContent = quiz.i === quiz.qs.length - 1 ? "Xem kết quả 🏁" : "Câu tiếp theo ➜";
}

function nextQuestion() {
  quiz.answered = false;
  quiz.i++;
  if (quiz.i >= quiz.qs.length) return endQuiz();
  renderQuestion();
}

function endQuiz() {
  const { score, qs, gradeId, chId } = quiz;
  const total = qs.length;
  const stars = starsFor(score, total);
  const prog = loadProgress();
  const key = `${gradeId}-${chId}`;
  if (!prog[key] || score > prog[key].score) prog[key] = { score, total };
  saveProgress(prog);
  if (stars >= 2) confetti(50);
  const msg = stars === 3 ? "Xuất sắc! Bé là siêu sao Toán học! 🌟"
    : stars === 2 ? "Giỏi lắm! Cố thêm chút nữa là 3 sao nhé!"
    : stars === 1 ? "Khá lắm! Xem lại video rồi thử lại nào!"
    : "Không sao! Xem video bài giảng rồi làm lại nhé!";
  const nvKey = pick(["tho", "meo", "ong"]);
  app.innerHTML = `
    <div class="end-card">
      <div class="end-nv">${nvIcon(nvKey, 92)}</div>
      <div class="end-nv-name" style="color:${NV[nvKey].mau}">${NV[nvKey].ten} chúc mừng bé!</div>
      <div class="end-stars">${starStr(stars)}</div>
      <div class="end-score">${score}/${total} câu đúng</div>
      <div class="end-msg">${msg}</div>
      <div class="end-actions">
        <button class="quiz-btn" id="retry">🔄 Làm lại</button>
        <button class="back-btn" id="back-grade" style="margin:0">← Về danh sách</button>
      </div>
    </div>`;
  $("#retry").addEventListener("click", () => startQuiz(gradeId, chId));
  $("#back-grade").addEventListener("click", () => renderGrade(gradeId));
}

/* ===== Confetti ===== */
function confetti(n) {
  const layer = $("#confetti-layer");
  const items = ["🎉", "⭐", "🌟", "💛", "🎈", "✨", "🍀"];
  for (let i = 0; i < n; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent = pick(items);
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (1.6 + Math.random() * 1.6) + "s";
    el.style.fontSize = (1 + Math.random() * 1.2) + "rem";
    layer.appendChild(el);
    setTimeout(() => el.remove(), 3400);
  }
}

/* ===== Khởi động ===== */
$("#btn-home").addEventListener("click", renderHome);
renderHome();
