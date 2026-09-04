/* ===== Dữ liệu chương trình + bộ sinh bài tập (SGK Toán KNTT) ===== */

const VIDEO_DIR = "video/";

/* 16 tập video — nv: nhân vật dẫn chuyện (tho = Thỏ Bông, meo = Mèo Múp, ong = Ong Vàng) */
const TAP = {
  e01: { so: "1.01", ten: "Đếm đến 10", file: "tap-1-01.mp4", nv: "tho" },
  e02: { so: "1.02", ten: "So sánh số", file: "tap-1-02.mp4", nv: "meo" },
  e03: { so: "1.03", ten: "Số 0", file: "tap-1-03.mp4", nv: "tho" },
  e04: { so: "1.04", ten: "Tách số 10", file: "tap-1-04.mp4", nv: "tho" },
  e05: { so: "1.05", ten: "Phép cộng", file: "tap-1-05.mp4", nv: "tho" },
  e06: { so: "1.06", ten: "Phép trừ", file: "tap-1-06.mp4", nv: "tho" },
  e07: { so: "1.07", ten: "Chục và đơn vị", file: "tap-1-07.mp4", nv: "tho" },
  e08: { so: "1.08", ten: "Đoán hình phẳng", file: "tap-1-08.mp4", nv: "meo" },
  e09: { so: "1.09", ten: "Khối lập phương, khối hộp", file: "tap-1-09.mp4", nv: "meo" },
  e10: { so: "1.10", ten: "Đo bằng cm", file: "tap-1-10.mp4", nv: "ong" },
  e11: { so: "1.11", ten: "Giờ đúng", file: "tap-1-11.mp4", nv: "ong" },
  e12: { so: "1.12", ten: "Tuần lễ", file: "tap-1-12.mp4", nv: "ong" },
  e13: { so: "1.13", ten: "Vị trí trên dưới trái phải", file: "tap-1-13.mp4", nv: "meo" },
  e14: { so: "1.14", ten: "Bảng 100 và so sánh số", file: "tap-1-14.mp4", nv: "tho" },
  e15: { so: "1.15", ten: "Dài hơn, ngắn hơn", file: "tap-1-15.mp4", nv: "ong" },
  e16: { so: "1.16", ten: "Cộng trừ đến 100", file: "tap-1-16.mp4", nv: "tho" },
  e201: { so: "2.01", ten: "Tia số", file: "tap-2-01.mp4", nv: "truc" },
  e202: { so: "2.02", ten: "Cộng qua 10", file: "tap-2-02.mp4", nv: "truc" },
  e203: { so: "2.03", ten: "Trừ qua 10", file: "tap-2-03.mp4", nv: "truc" },
  e204: { so: "2.04", ten: "Bài toán nhiều hơn, ít hơn", file: "tap-2-04.mp4", nv: "chip" },
  e205: { so: "2.05", ten: "Ki-lô-gam", file: "tap-2-05.mp4", nv: "ong" },
  e206: { so: "2.06", ten: "Lít", file: "tap-2-06.mp4", nv: "ech" },
  e207: { so: "2.07", ten: "Cộng có nhớ", file: "tap-2-07.mp4", nv: "truc" },
  e208: { so: "2.08", ten: "Trừ có nhớ", file: "tap-2-08.mp4", nv: "truc" },
  e209: { so: "2.09", ten: "Đường gấp khúc", file: "tap-2-09.mp4", nv: "meo" },
  e210: { so: "2.10", ten: "Phép nhân", file: "tap-2-10.mp4", nv: "truc" },
  e211: { so: "2.11", ten: "Phép chia", file: "tap-2-11.mp4", nv: "truc" },
  e212: { so: "2.12", ten: "Khối trụ, khối cầu", file: "tap-2-12.mp4", nv: "cun" },
  e301: { so: "3.01", ten: "Bảng nhân 9", file: "tap-3-01.mp4", nv: "cao" },
  e302: { so: "3.02", ten: "Tìm thành phần phép tính", file: "tap-3-02.mp4", nv: "cao" },
  e303: { so: "3.03", ten: "Một phần mấy", file: "tap-3-03.mp4", nv: "cao" },
  e304: { so: "3.04", ten: "Điểm ở giữa, trung điểm", file: "tap-3-04.mp4", nv: "meo" },
  e305: { so: "3.05", ten: "Hình tròn", file: "tap-3-05.mp4", nv: "meo" },
  e306: { so: "3.06", ten: "Góc vuông, góc không vuông", file: "tap-3-06.mp4", nv: "ong" },
  e307: { so: "3.07", ten: "Gấp lên, giảm đi một số lần", file: "tap-3-07.mp4", nv: "tho" },
  e308: { so: "3.08", ten: "Phép chia có dư", file: "tap-3-08.mp4", nv: "cao" },
  e309: { so: "3.09", ten: "Chu vi hình chữ nhật", file: "tap-3-09.mp4", nv: "cao" },
  e310: { so: "3.10", ten: "Chu vi hình vuông", file: "tap-3-10.mp4", nv: "ong" },
  e311: { so: "3.11", ten: "Diện tích của một hình", file: "tap-3-11.mp4", nv: "cu" },
  e312: { so: "3.12", ten: "Diện tích hình chữ nhật", file: "tap-3-12.mp4", nv: "cu" },
  e401: { so: "4.01", ten: "Hàng và lớp, số đến lớp triệu", file: "tap-4-01.mp4", nv: "cun" },
  e402: { so: "4.02", ten: "Biểu thức chứa chữ", file: "tap-4-02.mp4", nv: "cun" },
  e403: { so: "4.03", ten: "Góc nhọn, góc tù, góc bẹt", file: "tap-4-03.mp4", nv: "ong" },
  e404: { so: "4.04", ten: "Giây, thế kỉ", file: "tap-4-04.mp4", nv: "meo" },
  e405: { so: "4.05", ten: "Tính chất giao hoán, kết hợp", file: "tap-4-05.mp4", nv: "cun" },
  e406: { so: "4.06", ten: "Tìm hai số biết tổng và hiệu", file: "tap-4-06.mp4", nv: "cao" },
  e407: { so: "4.07", ten: "Hai đường thẳng vuông góc, song song", file: "tap-4-07.mp4", nv: "ong" },
  e408: { so: "4.08", ten: "Hình bình hành, hình thoi", file: "tap-4-08.mp4", nv: "meo" },
  e409: { so: "4.09", ten: "Khái niệm phân số", file: "tap-4-09.mp4", nv: "cun" },
  e410: { so: "4.10", ten: "Phân số bằng nhau, rút gọn", file: "tap-4-10.mp4", nv: "tho" },
  e411: { so: "4.11", ten: "Quy đồng, so sánh phân số", file: "tap-4-11.mp4", nv: "cu" },
  e412: { so: "4.12", ten: "Cộng, trừ phân số", file: "tap-4-12.mp4", nv: "cun" },
};
const TAP_ORDER = ["e01","e02","e03","e04","e05","e06","e07","e08","e09","e10","e11","e12","e13","e14","e15","e16",
  "e201","e202","e203","e204","e205","e206","e207","e208","e209","e210","e211","e212",
  "e301","e302","e303","e304","e305","e306","e307","e308","e309","e310","e311","e312",
  "e401","e402","e403","e404","e405","e406","e407","e408","e409","e410","e411","e412"];

/* ===== Nhân vật (đúng tạo hình trong video Manim) ===== */
const NV = {
  tho: { ten: "Thỏ Bông", mau: "#ff5d8f", loinhan: "Thỏ Bông" },
  meo: { ten: "Mèo Múp", mau: "#e8873c", loinhan: "Mèo Múp" },
  ong: { ten: "Ong Vàng", mau: "#d19b17", loinhan: "Ong Vàng" },
  truc: { ten: "Trúc Tròn", mau: "#3d3d4e", loinhan: "Trúc Tròn" },
  chip: { ten: "Chíp Chíp", mau: "#e8b923", loinhan: "Chíp Chíp" },
  ech: { ten: "Ếch Ộp", mau: "#6a9c1f", loinhan: "Ếch Ộp" },
  cao: { ten: "Cáo Lém", mau: "#e0774e", loinhan: "Cáo Lém" },
  cun: { ten: "Cún Bông", mau: "#b08968", loinhan: "Cún Bông" },
  cu: { ten: "Cú Thông Thái", mau: "#8a72a8", loinhan: "Cú Thông Thái" },
};
function nvIcon(key, size = 40) {
  return '<img class="nv-img" src="nv/' + key + '.png" width="' + size + '" height="' + size + '" alt="" loading="lazy">';
}

/* ===== Tiện ích ===== */
const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1)); // [a,b]
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const DO_VAT = [
  ["🍎", "quả táo"], ["🌸", "bông hoa"], ["🐟", "con cá"], ["🎈", "quả bóng bay"],
  ["🍓", "quả dâu"], ["🦋", "con bướm"], ["⭐", "ngôi sao"], ["🍬", "viên kẹo"],
  ["🐥", "chú gà con"], ["🚗", "chiếc ô tô"],
];
function emojiRow(e, n) {
  let s = "";
  for (let i = 0; i < n; i++) s += e + (i === 4 ? "<br>" : " ");
  return `<div class="emoji-row${n > 5 ? " two-line" : ""}">${s}</div>`;
}
/* Lựa chọn số: đáp án + nhiễu gần kề */
function numOptions(ans, min, max, count = 4) {
  const set = new Set([ans]);
  let guard = 0;
  while (set.size < count && guard++ < 200) {
    const d = ri(Math.max(min, ans - 3), Math.min(max, ans + 3));
    set.add(d);
  }
  const opts = shuffle([...set]);
  return { opts, idx: opts.indexOf(ans) };
}

/* ===== SVG helpers ===== */
function svgShape(kind, size = 92, fill = "#4d96ff") {
  const s = size, h = s / 2;
  const stroke = `stroke="#1d3557" stroke-width="4" fill="${fill}"`;
  if (kind === "tron") return `<svg width="${s}" height="${s}"><circle cx="${h}" cy="${h}" r="${h - 6}" ${stroke}/></svg>`;
  if (kind === "vuong") return `<svg width="${s}" height="${s}"><rect x="8" y="8" width="${s - 16}" height="${s - 16}" rx="8" ${stroke}/></svg>`;
  if (kind === "tamgiac") return `<svg width="${s}" height="${s}"><polygon points="${h},9 ${s - 8},${s - 9} 8,${s - 9}" ${stroke} stroke-linejoin="round"/></svg>`;
  if (kind === "chunhat") return `<svg width="${s + 34}" height="${s - 18}"><rect x="6" y="8" width="${s + 22}" height="${s - 34}" rx="8" ${stroke}/></svg>`;
  return "";
}
function svgKhoi(kind, w = 110) {
  // hộp chữ nhật nằm ngang / lập phương
  const cube = kind === "lapphuong";
  const W = cube ? 74 : 116, H = 74, dx = 26, dy = 18;
  const x0 = 12, y0 = dy + 10;
  const fill = cube ? "#ff9770" : "#8ecae6";
  const top = cube ? "#ffb597" : "#b8dff0";
  const side = cube ? "#e07b50" : "#6bb3d4";
  const st = `stroke="#1d3557" stroke-width="3.5" stroke-linejoin="round"`;
  return `<svg width="${x0 + W + dx + 14}" height="${y0 + H + 12}">
    <polygon points="${x0},${y0} ${x0 + W},${y0} ${x0 + W + dx},${y0 - dy} ${x0 + dx},${y0 - dy}" fill="${top}" ${st}/>
    <polygon points="${x0 + W},${y0} ${x0 + W + dx},${y0 - dy} ${x0 + W + dx},${y0 - dy + H} ${x0 + W},${y0 + H}" fill="${side}" ${st}/>
    <rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="${fill}" ${st}/>
  </svg>`;
}
function svgClock(gio, size = 150) {
  const c = size / 2, r = c - 8;
  let ticks = "";
  for (let i = 1; i <= 12; i++) {
    const a = (i * 30 - 90) * Math.PI / 180;
    const tx = c + (r - 17) * Math.cos(a), ty = c + (r - 17) * Math.sin(a) + 5;
    ticks += `<text x="${tx}" y="${ty}" text-anchor="middle" font-size="15" font-weight="800" fill="#1d3557" font-family="inherit">${i}</text>`;
  }
  const ah = (gio % 12) * 30 - 90;
  const hx = c + (r - 44) * Math.cos(ah * Math.PI / 180);
  const hy = c + (r - 44) * Math.sin(ah * Math.PI / 180);
  return `<svg width="${size}" height="${size}">
    <circle cx="${c}" cy="${c}" r="${r}" fill="#fffdf5" stroke="#f4a261" stroke-width="6"/>
    ${ticks}
    <line x1="${c}" y1="${c}" x2="${c}" y2="${c - r + 26}" stroke="#219ebc" stroke-width="5" stroke-linecap="round"/>
    <line x1="${c}" y1="${c}" x2="${hx}" y2="${hy}" stroke="#e63946" stroke-width="7" stroke-linecap="round"/>
    <circle cx="${c}" cy="${c}" r="6" fill="#1d3557"/>
  </svg>`;
}
function svgRuler(cm, maxCm = 10) {
  const unit = 34, x0 = 16, y0 = 46, w = maxCm * unit;
  let ticks = "";
  for (let i = 0; i <= maxCm; i++) {
    const x = x0 + i * unit;
    ticks += `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + 14}" stroke="#1d3557" stroke-width="2.5"/>
      <text x="${x}" y="${y0 + 32}" text-anchor="middle" font-size="14" font-weight="700" fill="#1d3557" font-family="inherit">${i}</text>`;
  }
  const bw = cm * unit;
  return `<svg width="${w + 32}" height="104" style="max-width:100%">
    <rect x="${x0}" y="10" width="${bw}" height="20" rx="7" fill="#ffb703" stroke="#d19b17" stroke-width="3"/>
    <polygon points="${x0 + bw},10 ${x0 + bw + 16},20 ${x0 + bw},30" fill="#f4e1c1" stroke="#d19b17" stroke-width="2.5"/>
    <rect x="${x0}" y="${y0}" width="${w}" height="16" fill="#fff3d6" stroke="#1d3557" stroke-width="2.5"/>
    ${ticks}
  </svg>`;
}
function svgBars(len1, len2, c1 = "#4d96ff", c2 = "#ff5d5d") {
  const unit = 30, x0 = 10;
  return `<svg width="${Math.max(len1, len2) * unit + 24}" height="96" style="max-width:100%">
    <rect x="${x0}" y="12" width="${len1 * unit}" height="24" rx="9" fill="${c1}" stroke="#1d3557" stroke-width="3"/>
    <text x="${x0 + len1 * unit + 8}" y="30" font-size="15" font-weight="800" fill="#1d3557" font-family="inherit">A</text>
    <rect x="${x0}" y="56" width="${len2 * unit}" height="24" rx="9" fill="${c2}" stroke="#1d3557" stroke-width="3"/>
    <text x="${x0 + len2 * unit + 8}" y="74" font-size="15" font-weight="800" fill="#1d3557" font-family="inherit">B</text>
  </svg>`;
}

/* ===== Bộ sinh câu hỏi theo chủ đề ===== */
const GEN = {};

/* CĐ1: Các số 0–10 */
GEN.cd1 = () => {
  const kieu = pick(["dem", "sosanh_nhom", "sosanh_so", "tach", "lientruoc"]);
  if (kieu === "dem") {
    const [e, ten] = pick(DO_VAT), n = ri(3, 10);
    const { opts, idx } = numOptions(n, 0, 10);
    return { prompt: `Có mấy ${ten}?`, visual: emojiRow(e, n),
      kind: "choice", options: opts.map(String), answer: idx,
      explain: `Bé đếm từng ${ten} một: có ${n} ${ten}.` };
  }
  if (kieu === "sosanh_nhom") {
    const [e1, t1] = pick(DO_VAT); let [e2, t2] = pick(DO_VAT);
    while (e2 === e1) [e2, t2] = pick(DO_VAT);
    let a = ri(2, 9), b = ri(2, 9);
    while (a === b) b = ri(2, 9);
    const visual = `<div class="vs-groups">
      <div class="group"><div class="g-label">${t1}</div><div class="g-items">${(e1 + " ").repeat(a)}</div></div>
      <div class="group"><div class="g-label">${t2}</div><div class="g-items">${(e2 + " ").repeat(b)}</div></div></div>`;
    const dung = a > b ? 0 : 1;
    return { prompt: "Bên nào NHIỀU hơn?", visual, kind: "choice",
      options: [`${e1} ${t1} (${a})`, `${e2} ${t2} (${b})`],
      answer: dung,
      explain: `${a} ${a > b ? ">" : "<"} ${b} nên ${dung === 0 ? t1 : t2} nhiều hơn.` };
  }
  if (kieu === "sosanh_so") {
    let a = ri(0, 10), b = ri(0, 10);
    const ans = a > b ? 0 : (a < b ? 1 : 2);
    return { prompt: `Chọn dấu đúng:  ${a} … ${b}`, visual: "",
      kind: "choice", options: [">", "<", "="], answer: ans,
      explain: `${a} ${[">", "<", "="][ans]} ${b}.` };
  }
  if (kieu === "tach") {
    const tong = ri(5, 10), p = ri(1, tong - 1);
    return { prompt: `${tong} gồm ${p} và mấy?`, visual: "",
      kind: "input", answer: tong - p,
      explain: `${p} + ${tong - p} = ${tong} nên ${tong} gồm ${p} và ${tong - p}.` };
  }
  const n = ri(1, 9), truoc = pick([true, false]);
  const ans = truoc ? n - 1 : n + 1;
  return { prompt: `Số liền ${truoc ? "TRƯỚC" : "SAU"} của số ${n} là số mấy?`,
    visual: "", kind: "input", answer: ans,
    explain: `Số liền ${truoc ? "trước" : "sau"} của ${n} là ${ans}.` };
};

/* CĐ2: Hình phẳng */
GEN.cd2 = () => {
  const HINH = [
    ["tron", "Hình tròn", "#ff9770"],
    ["vuong", "Hình vuông", "#06d6a0"],
    ["tamgiac", "Hình tam giác", "#ffd23f"],
    ["chunhat", "Hình chữ nhật", "#4d96ff"],
  ];
  const kieu = pick(["goiten", "timhinh", "demcanh", "doanhinh"]);
  if (kieu === "goiten") {
    const i = ri(0, 3);
    const opts = shuffle(HINH.map(h => h[1]));
    return { prompt: "Đây là hình gì?", visual: svgShape(HINH[i][0], 100, HINH[i][2]),
      kind: "choice", options: opts, answer: opts.indexOf(HINH[i][1]),
      explain: `Đây là ${HINH[i][1].toLowerCase()}.` };
  }
  if (kieu === "timhinh") {
    const i = ri(0, 3);
    const opts = shuffle(HINH.map(h => svgShape(h[0], 76, h[2]) + `<span style="display:none">${h[0]}</span>`));
    const idx = opts.findIndex(o => o.includes(`>${HINH[i][0]}<`));
    return { prompt: `Hình nào là ${HINH[i][1].toUpperCase()}?`, visual: "",
      kind: "choice", options: opts, answer: idx,
      explain: `${HINH[i][1]} ${HINH[i][0] === "tron" ? "tròn xoe, không có cạnh" : HINH[i][0] === "vuong" ? "có 4 cạnh bằng nhau" : HINH[i][0] === "tamgiac" ? "có 3 cạnh" : "có 2 cạnh dài, 2 cạnh ngắn"}.` };
  }
  if (kieu === "demcanh") {
    const chon = pick([["vuong", "Hình vuông", 4, "#06d6a0"], ["tamgiac", "Hình tam giác", 3, "#ffd23f"], ["chunhat", "Hình chữ nhật", 4, "#4d96ff"]]);
    return { prompt: `${chon[1]} có mấy cạnh?`, visual: svgShape(chon[0], 96, chon[3]),
      kind: "input", answer: chon[2],
      explain: `${chon[1]} có ${chon[2]} cạnh.` };
  }
  const doan = pick([
    ["Hình gì tròn xoe, không có cạnh nào?", "Hình tròn"],
    ["Hình gì có 3 cạnh, 3 đỉnh nhọn?", "Hình tam giác"],
    ["Hình gì có 4 cạnh dài bằng nhau?", "Hình vuông"],
    ["Hình gì giống cánh cửa: 2 cạnh dài, 2 cạnh ngắn?", "Hình chữ nhật"],
  ]);
  const opts = shuffle(["Hình tròn", "Hình vuông", "Hình tam giác", "Hình chữ nhật"]);
  return { prompt: doan[0], visual: "", kind: "choice",
    options: opts, answer: opts.indexOf(doan[1]), explain: `Đáp án: ${doan[1].toLowerCase()}.` };
};

/* CĐ3: Cộng trừ phạm vi 10 */
GEN.cd3 = () => {
  const kieu = pick(["cong", "tru", "toan_cong", "toan_tru", "so0"]);
  if (kieu === "cong") {
    const a = ri(1, 9), b = ri(0, 10 - a);
    return { prompt: `${a} + ${b} = ?`, visual: "", kind: "input", answer: a + b,
      explain: `${a} + ${b} = ${a + b}.` };
  }
  if (kieu === "tru") {
    const a = ri(2, 10), b = ri(0, a);
    return { prompt: `${a} − ${b} = ?`, visual: "", kind: "input", answer: a - b,
      explain: `${a} − ${b} = ${a - b}.` };
  }
  if (kieu === "toan_cong") {
    const [e, ten] = pick(DO_VAT);
    const a = ri(2, 6), b = ri(1, Math.min(4, 10 - a));
    return { prompt: `Bé có ${a} ${ten}, mẹ cho thêm ${b} ${ten}. Bé có tất cả mấy ${ten}?`,
      visual: emojiRow(e, a) + `<div style="font-weight:800;color:#06d6a0">thêm ${b} ➜</div>` + emojiRow(e, b),
      kind: "input", answer: a + b,
      explain: `Có ${a} thêm ${b}: ${a} + ${b} = ${a + b} ${ten}.` };
  }
  if (kieu === "toan_tru") {
    const [e, ten] = pick(DO_VAT);
    const a = ri(4, 10), b = ri(1, a - 1);
    return { prompt: `Trên cành có ${a} ${ten}, ${b} ${ten} bay đi / lấy đi. Còn lại mấy ${ten}?`,
      visual: emojiRow(e, a),
      kind: "input", answer: a - b,
      explain: `${a} bớt ${b}: ${a} − ${b} = ${a - b} ${ten}.` };
  }
  const a = ri(1, 9), congTruoc = pick([true, false]);
  const bieuthuc = congTruoc ? `${a} + 0` : `${a} − 0`;
  return { prompt: `${bieuthuc} = ?`, visual: "", kind: "input", answer: a,
    explain: `Cộng hay trừ số 0 thì số đó không đổi: ${bieuthuc} = ${a}.` };
};

/* CĐ4: Hình khối + vị trí */
GEN.cd4 = () => {
  const kieu = pick(["khoi", "khoi_vd", "vitri_lr", "vitri_td"]);
  if (kieu === "khoi") {
    const lp = pick([true, false]);
    return { prompt: "Đây là khối gì?", visual: svgKhoi(lp ? "lapphuong" : "hop"),
      kind: "choice",
      options: ["Khối lập phương", "Khối hộp chữ nhật"],
      answer: lp ? 0 : 1,
      explain: lp ? "Các mặt đều là hình vuông bằng nhau → khối lập phương." : "Khối dài dài như viên gạch → khối hộp chữ nhật." };
  }
  if (kieu === "khoi_vd") {
    const vd = pick([
      ["🎲 Xúc xắc", 0], ["🧊 Viên đá lạnh", 0], ["🎁 Hộp quà vuông đều", 0],
      ["🧱 Viên gạch", 1], ["📕 Quyển sách", 1], ["🥛 Hộp sữa", 1], ["📦 Thùng giấy dài", 1],
    ]);
    return { prompt: `${vd[0]} thường có dạng khối gì?`, visual: "",
      kind: "choice", options: ["Khối lập phương", "Khối hộp chữ nhật"], answer: vd[1],
      explain: vd[1] === 0 ? "Các mặt vuông đều nhau → khối lập phương." : "Có mặt dài, mặt ngắn → khối hộp chữ nhật." };
  }
  if (kieu === "vitri_lr") {
    const [e1, t1] = pick(DO_VAT); let [e2, t2] = pick(DO_VAT);
    while (e2 === e1) [e2, t2] = pick(DO_VAT);
    const traiLa1 = pick([true, false]);
    const visual = `<div class="emoji-row" style="font-size:2.6rem">${traiLa1 ? e1 + "   " + e2 : e2 + "   " + e1}</div>`;
    const hoiTrai = pick([true, false]);
    let ans;
    if (hoiTrai) ans = traiLa1 ? 0 : 1;
    else ans = traiLa1 ? 1 : 0;
    return { prompt: `${hoiTrai ? "Bên TRÁI" : "Bên PHẢI"} là gì?`,
      visual, kind: "choice",
      options: [`${e1} ${t1}`, `${e2} ${t2}`], answer: ans,
      explain: `Nhìn từ trái sang phải: ${traiLa1 ? t1 + " rồi đến " + t2 : t2 + " rồi đến " + t1}.` };
  }
  const [e1, t1] = pick(DO_VAT); let [e2, t2] = pick(DO_VAT);
  while (e2 === e1) [e2, t2] = pick(DO_VAT);
  const trenLa1 = pick([true, false]);
  const visual = `<div class="emoji-row" style="font-size:2.4rem;line-height:1.8">${trenLa1 ? e1 : e2}<br>▬▬▬▬▬<br>${trenLa1 ? e2 : e1}</div>`;
  const hoiTren = pick([true, false]);
  let ans;
  if (hoiTren) ans = trenLa1 ? 0 : 1;
  else ans = trenLa1 ? 1 : 0;
  return { prompt: `${hoiTren ? "Ở TRÊN" : "Ở DƯỚI"} kệ là gì?`, visual,
    kind: "choice", options: [`${e1} ${t1}`, `${e2} ${t2}`], answer: ans,
    explain: `${hoiTren ? "Phía trên kệ" : "Phía dưới kệ"} là ${hoiTren ? (trenLa1 ? t1 : t2) : (trenLa1 ? t2 : t1)}.` };
};

/* CĐ5: Số trong phạm vi 100 */
GEN.cd5 = () => {
  const kieu = pick(["cautao", "sosanh", "lienke", "bang100", "doc"]);
  if (kieu === "cautao") {
    const n = ri(21, 99);
    const c = Math.floor(n / 10), d = n % 10;
    const hoiChuc = pick([true, false]);
    return { prompt: `Số ${n} gồm mấy ${hoiChuc ? "CHỤC" : "ĐƠN VỊ"}?`, visual: "",
      kind: "input", answer: hoiChuc ? c : d,
      explain: `Số ${n} gồm ${c} chục và ${d} đơn vị.` };
  }
  if (kieu === "sosanh") {
    let a = ri(10, 99), b = ri(10, 99);
    while (a === b) b = ri(10, 99);
    const ans = a > b ? 0 : 1;
    return { prompt: `Chọn dấu đúng:  ${a} … ${b}`, visual: "",
      kind: "choice", options: [">", "<"], answer: ans,
      explain: `So chục trước: ${Math.floor(a / 10)} chục và ${Math.floor(b / 10)} chục → ${a} ${ans === 0 ? ">" : "<"} ${b}.` };
  }
  if (kieu === "lienke") {
    const n = ri(11, 98), truoc = pick([true, false]);
    return { prompt: `Số liền ${truoc ? "TRƯỚC" : "SAU"} của ${n} là số nào?`, visual: "",
      kind: "input", answer: truoc ? n - 1 : n + 1,
      explain: `Số liền ${truoc ? "trước" : "sau"} của ${n} là ${truoc ? n - 1 : n + 1}.` };
  }
  if (kieu === "bang100") {
    const n = ri(12, 88);
    const kieu2 = pick(["phai", "duoi"]);
    const ans = kieu2 === "phai" ? n + 1 : n + 10;
    return { prompt: `Trên bảng 100: ô bên ${kieu2 === "phai" ? "PHẢI" : "DƯỚI"} số ${n} là số nào?`,
      visual: "", kind: "input", answer: ans,
      explain: `Sang phải +1, xuống dưới +10 → ${n} ${kieu2 === "phai" ? "+ 1" : "+ 10"} = ${ans}.` };
  }
  const chuc = ri(2, 9), dv = ri(1, 9);
  const n = chuc * 10 + dv;
  const { opts, idx } = numOptions(n, 10, 99);
  return { prompt: `Số gồm ${chuc} chục và ${dv} đơn vị là số nào?`, visual: "",
    kind: "choice", options: opts.map(String), answer: idx,
    explain: `${chuc} chục = ${chuc * 10}, thêm ${dv} đơn vị → ${n}.` };
};

/* CĐ6: Độ dài, đo cm */
GEN.cd6 = () => {
  const kieu = pick(["ruler", "bars", "bang", "uocluong"]);
  if (kieu === "ruler") {
    const cm = ri(3, 9);
    return { prompt: "Bút chì dài mấy xăng-ti-mét?", visual: svgRuler(cm),
      kind: "input", answer: cm,
      explain: `Đầu bút ở vạch 0, ngòi ở vạch ${cm} → dài ${cm} cm.` };
  }
  if (kieu === "bars") {
    let a = ri(3, 9), b = ri(3, 9);
    while (a === b) b = ri(3, 9);
    return { prompt: "Băng giấy nào DÀI hơn?", visual: svgBars(a, b),
      kind: "choice", options: ["Băng A (xanh)", "Băng B (đỏ)"],
      answer: a > b ? 0 : 1,
      explain: `Gióng một đầu: băng ${a > b ? "A" : "B"} thò ra dài hơn.` };
  }
  if (kieu === "bang") {
    const a = ri(4, 9);
    return { prompt: "Hai băng giấy này thế nào?", visual: svgBars(a, a, "#f4a261", "#2a9d8f"),
      kind: "choice", options: ["A dài hơn", "B dài hơn", "Dài bằng nhau"],
      answer: 2, explain: "Hai đầu đều bằng nhau → hai băng dài bằng nhau." };
  }
  const vd = pick([
    ["Chiếc bút chì", 15, ["15 cm", "15 m"], 0],
    ["Gang tay của bé", 12, ["12 cm", "12 quyển sách"], 0],
    ["Chiếc thước kẻ", 20, ["20 cm", "2 cm"], 0],
    ["Viên tẩy", 4, ["4 cm", "40 cm"], 0],
  ]);
  return { prompt: `${vd[0]} dài khoảng bao nhiêu?`, visual: "",
    kind: "choice", options: vd[2], answer: vd[3],
    explain: `${vd[0]} dài khoảng ${vd[2][vd[3]]}.` };
};

/* CĐ7: Cộng trừ không nhớ phạm vi 100 */
GEN.cd7 = () => {
  const kieu = pick(["cong", "tru", "cong_don", "tru_don", "toan"]);
  if (kieu === "cong") {
    const c1 = ri(1, 7), d1 = ri(0, 8);
    const c2 = ri(1, 9 - c1), d2 = ri(0, 9 - d1);
    const a = c1 * 10 + d1, b = c2 * 10 + d2;
    return { prompt: `${a} + ${b} = ?`, visual: "", kind: "input", answer: a + b,
      explain: `Chục: ${c1}+${c2}=${c1 + c2}. Đơn vị: ${d1}+${d2}=${d1 + d2}. Kết quả ${a + b}.` };
  }
  if (kieu === "tru") {
    const c1 = ri(2, 9), d1 = ri(1, 9);
    const c2 = ri(1, c1 - 1), d2 = ri(0, d1);
    const a = c1 * 10 + d1, b = c2 * 10 + d2;
    return { prompt: `${a} − ${b} = ?`, visual: "", kind: "input", answer: a - b,
      explain: `Chục: ${c1}−${c2}=${c1 - c2}. Đơn vị: ${d1}−${d2}=${d1 - d2}. Kết quả ${a - b}.` };
  }
  if (kieu === "cong_don") {
    const c1 = ri(1, 9), d1 = ri(0, 5), d2 = ri(1, 9 - d1);
    const a = c1 * 10 + d1;
    return { prompt: `${a} + ${d2} = ?`, visual: "", kind: "input", answer: a + d2,
      explain: `Đơn vị: ${d1}+${d2}=${d1 + d2}, giữ nguyên ${c1} chục → ${a + d2}.` };
  }
  if (kieu === "tru_don") {
    const c1 = ri(1, 9), d1 = ri(2, 9), d2 = ri(1, d1);
    const a = c1 * 10 + d1;
    return { prompt: `${a} − ${d2} = ?`, visual: "", kind: "input", answer: a - d2,
      explain: `Đơn vị: ${d1}−${d2}=${d1 - d2}, giữ nguyên ${c1} chục → ${a - d2}.` };
  }
  const [e, ten] = pick(DO_VAT);
  const a = ri(2, 4) * 10 + ri(0, 4), b = ri(1, 2) * 10 + ri(0, 4);
  const cong = pick([true, false]);
  if (cong) {
    return { prompt: `Lớp có ${a} ${ten}, cô thêm ${b} ${ten}. Có tất cả bao nhiêu?`,
      visual: "", kind: "input", answer: a + b, explain: `${a} + ${b} = ${a + b} ${ten}.` };
  }
  return { prompt: `Cửa hàng có ${a} ${ten}, bán đi ${b} ${ten}. Còn lại bao nhiêu?`,
    visual: "", kind: "input", answer: a - b, explain: `${a} − ${b} = ${a - b} ${ten}.` };
};

/* CĐ8: Giờ & lịch */
GEN.cd8 = () => {
  const kieu = pick(["clock", "clock", "kim", "tuan", "maingay"]);
  const THU = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  if (kieu === "clock") {
    const g = ri(1, 12);
    const { opts, idx } = numOptions(g, 1, 12, 3);
    return { prompt: "Đồng hồ chỉ mấy giờ?", visual: svgClock(g),
      kind: "choice", options: opts.map(o => `${o} giờ`), answer: idx,
      explain: `Kim dài chỉ 12, kim ngắn chỉ ${g} → ${g} giờ đúng.` };
  }
  if (kieu === "kim") {
    const g = ri(1, 12);
    return { prompt: `Lúc ${g} giờ đúng, kim DÀI chỉ số mấy?`, visual: "",
      kind: "input", answer: 12,
      explain: "Giờ đúng thì kim dài luôn chỉ số 12." };
  }
  if (kieu === "tuan") {
    const cauhoi = pick([
      ["Một tuần lễ có mấy ngày?", 7, "Một tuần có 7 ngày."],
      ["Bé đi học từ thứ Hai đến thứ Sáu. Mỗi tuần bé đi học mấy ngày?", 5, "Thứ 2, 3, 4, 5, 6 → 5 ngày đi học."],
      ["Mỗi tuần bé được nghỉ mấy ngày?", 2, "Thứ Bảy và Chủ nhật → 2 ngày nghỉ."],
    ]);
    return { prompt: cauhoi[0], visual: "", kind: "input", answer: cauhoi[1], explain: cauhoi[2] };
  }
  const i = ri(1, 6);
  const mai = pick([true, false]);
  const ansIdx = mai ? (i + 1) % 7 : (i + 6) % 7;
  const opts = shuffle([THU[ansIdx], THU[(ansIdx + 2) % 7], THU[(ansIdx + 4) % 7]]);
  return { prompt: `Hôm nay là ${THU[i]}. ${mai ? "NGÀY MAI" : "HÔM QUA"} là thứ mấy?`,
    visual: "", kind: "choice", options: opts, answer: opts.indexOf(THU[ansIdx]),
    explain: `${mai ? "Sau" : "Trước"} ${THU[i]} là ${THU[ansIdx]}.` };
};

/* Ôn tập tổng hợp */
GEN.on = () => {
  const g = pick(["cd1", "cd2", "cd3", "cd4", "cd5", "cd6", "cd7", "cd8"]);
  return GEN[g]();
};

/* ============ LỚP 2 ============ */
/* L2-C1: Tia số, số liền trước - liền sau */
GEN.l2c1 = () => {
  const kieu = pick(["lien", "giua", "day"]);
  if (kieu === "lien") {
    const n = ri(1, 99), truoc = pick([true, false]);
    const ans = truoc ? n - 1 : n + 1;
    return { prompt: `Số liền ${truoc ? "TRƯỚC" : "SAU"} của ${n} là số mấy?`,
      visual: "", kind: "input", answer: ans,
      explain: `Liền ${truoc ? "trước là bớt 1" : "sau là thêm 1"}: ${n} ${truoc ? "−" : "+"} 1 = ${ans}.` };
  }
  if (kieu === "giua") {
    const a = ri(1, 97);
    return { prompt: `Trên tia số, số nào ở GIỮA ${a} và ${a + 2}?`,
      visual: "", kind: "input", answer: a + 1,
      explain: `${a} → ${a + 1} → ${a + 2}, số ở giữa là ${a + 1}.` };
  }
  const buoc = pick([1, 2, 5, 10]), a = ri(0, 5) * buoc;
  const day = [a, a + buoc, a + 2 * buoc, a + 3 * buoc];
  return { prompt: `Điền số tiếp theo: ${day.join(", ")}, …?`,
    visual: "", kind: "input", answer: a + 4 * buoc,
    explain: `Dãy số cách đều ${buoc}: ${a + 3 * buoc} + ${buoc} = ${a + 4 * buoc}.` };
};

/* L2-C2: Cộng, trừ (qua 10) trong phạm vi 20 */
GEN.l2c2 = () => {
  const kieu = pick(["cong", "tru", "tron10"]);
  if (kieu === "cong") {
    const a = ri(6, 9), b = ri(11 - a, 9);
    return { prompt: `${a} + ${b} = ?`, visual: "", kind: "input",
      answer: a + b,
      explain: `Tách ${b} = ${10 - a} + ${b - (10 - a)}: ${a} + ${10 - a} = 10, thêm ${b - (10 - a)} là ${a + b}.` };
  }
  if (kieu === "tru") {
    const m = ri(11, 18), s = ri(m - 9, 9);
    return { prompt: `${m} − ${s} = ?`, visual: "", kind: "input",
      answer: m - s,
      explain: `${m} − ${m - 10} = 10, rồi 10 − ${s - (m - 10)} = ${m - s}.` };
  }
  const a = ri(5, 9);
  return { prompt: `${a} cần thêm mấy để TRÒN 10?`, visual: "",
    kind: "input", answer: 10 - a,
    explain: `${a} + ${10 - a} = 10.` };
};

/* L2-C3: Bài toán nhiều hơn, ít hơn */
GEN.l2c3 = () => {
  const TEN = [["Lan", "Nam"], ["Mai", "Hoa"], ["Tí", "Tèo"], ["Bin", "Bo"]];
  const [x, y] = pick(TEN), [e, ten] = pick(DO_VAT);
  const a = ri(5, 40), k = ri(2, 9), nhieu = pick([true, false]);
  const ans = nhieu ? a + k : a - k;
  return { prompt: `${y} có ${a} ${ten}. ${x} có ${nhieu ? "NHIỀU" : "ÍT"} hơn ${y} ${k} ${ten}. Hỏi ${x} có mấy ${ten}?`,
    visual: `<div style="font-size:2rem">${e}</div>`, kind: "input", answer: ans,
    explain: `${nhieu ? "Nhiều hơn thì cộng" : "Ít hơn thì trừ"}: ${a} ${nhieu ? "+" : "−"} ${k} = ${ans}.` };
};

/* L2-C4: Ki-lô-gam và lít */
GEN.l2c4 = () => {
  const kieu = pick(["can", "cong", "lit"]);
  if (kieu === "can") {
    const a = ri(1, 9); let b = ri(1, 9);
    while (b === a) b = ri(1, 9);
    const dung = a > b ? 0 : 1;
    return { prompt: "Vật nào NẶNG hơn?", visual: "",
      kind: "choice", options: [`🍉 Dưa ${a} kg`, `🎒 Ba lô ${b} kg`],
      answer: dung,
      explain: `${Math.max(a, b)} kg > ${Math.min(a, b)} kg.` };
  }
  if (kieu === "cong") {
    const a = ri(2, 30), b = ri(2, 20), congTru = pick([true, false]);
    const dv = pick(["kg", "l"]);
    if (congTru) return { prompt: `${a} ${dv} + ${b} ${dv} = ? (${dv})`,
      visual: "", kind: "input", answer: a + b,
      explain: `${a} + ${b} = ${a + b}, giữ nguyên đơn vị ${dv}.` };
    const lon = Math.max(a, b), nho = Math.min(a, b);
    return { prompt: `${lon} ${dv} − ${nho} ${dv} = ? (${dv})`,
      visual: "", kind: "input", answer: lon - nho,
      explain: `${lon} − ${nho} = ${lon - nho} ${dv}.` };
  }
  const so_ca = ri(2, 6);
  return { prompt: `Rót đầy ${so_ca} ca 1 lít thì hết bình. Bình đựng mấy lít?`,
    visual: `<div style="font-size:2rem">${"🥤".repeat(so_ca)}</div>`,
    kind: "input", answer: so_ca,
    explain: `Mỗi ca 1 lít, ${so_ca} ca là ${so_ca} lít.` };
};

/* L2-C5: Cộng, trừ (có nhớ) trong phạm vi 100 */
GEN.l2c5 = () => {
  const cong = pick([true, false]);
  if (cong) {
    const d1 = ri(4, 9), d2 = ri(11 - d1, 9);
    const c1 = ri(1, 5), c2 = ri(1, 8 - c1);
    const a = c1 * 10 + d1, b = c2 * 10 + d2;
    return { prompt: `${a} + ${b} = ?`, visual: "", kind: "input",
      answer: a + b,
      explain: `${d1} + ${d2} = ${d1 + d2}: viết ${(d1 + d2) % 10} nhớ 1. ${c1} + ${c2} + 1 = ${c1 + c2 + 1}. Kết quả ${a + b}.` };
  }
  const c1 = ri(3, 9), d1 = ri(0, 5), d2 = ri(d1 + 1, 9), c2 = ri(1, c1 - 1);
  const a = c1 * 10 + d1, b = c2 * 10 + d2;
  return { prompt: `${a} − ${b} = ?`, visual: "", kind: "input",
    answer: a - b,
    explain: `${d1} không đủ trừ ${d2}: mượn 1 chục → ${10 + d1} − ${d2} = ${10 + d1 - d2}. ${c1} bớt 1 còn ${c1 - 1}, trừ ${c2} còn ${c1 - 1 - c2}. Kết quả ${a - b}.` };
};

/* L2-C6: Điểm, đoạn thẳng, đường gấp khúc */
GEN.l2c6 = () => {
  const kieu = pick(["dodai", "sodoan"]);
  if (kieu === "dodai") {
    const n = pick([2, 3]);
    const doan = Array.from({ length: n }, () => ri(2, 9));
    const tong = doan.reduce((s, x) => s + x, 0);
    return { prompt: `Đường gấp khúc có ${n} đoạn: ${doan.join(" cm, ")} cm. Dài tất cả bao nhiêu cm?`,
      visual: "", kind: "input", answer: tong,
      explain: `${doan.join(" + ")} = ${tong} cm.` };
  }
  const chu = pick([["Z", 3], ["N", 3], ["M", 4], ["W", 4], ["L", 2], ["V", 2]]);
  const { opts, idx } = numOptions(chu[1], 2, 5);
  return { prompt: `Chữ ${chu[0]} giống đường gấp khúc có mấy đoạn thẳng?`,
    visual: `<div style="font-size:3.4rem;font-weight:900;color:#4d96ff">${chu[0]}</div>`,
    kind: "choice", options: opts.map(String), answer: idx,
    explain: `Chữ ${chu[0]} gồm ${chu[1]} nét thẳng nối nhau.` };
};

/* L2-C7: Phép nhân, phép chia (bảng 2 và 5) */
GEN.l2c7 = () => {
  const kieu = pick(["nhan", "chia", "viet_gon"]);
  if (kieu === "nhan") {
    const b = pick([2, 5]), a = ri(1, 10);
    return { prompt: `${b} × ${a} = ?`, visual: "", kind: "input",
      answer: b * a,
      explain: `${b} lấy ${a} lần: ${Array(a).fill(b).join(" + ")} = ${b * a}.` };
  }
  if (kieu === "chia") {
    const b = pick([2, 5]), q = ri(1, 10), m = b * q;
    return { prompt: `${m} : ${b} = ?`, visual: "", kind: "input",
      answer: q,
      explain: `Vì ${q} × ${b} = ${m} nên ${m} : ${b} = ${q}.` };
  }
  const s = pick([2, 3, 4, 5]), lan = ri(2, 5);
  const dung = `${s} × ${lan}`;
  const opts = shuffle([dung, `${s} × ${lan + 1}`, `${s} + ${lan}`, `${lan} × ${lan}`]);
  return { prompt: `Phép cộng ${Array(lan).fill(s).join(" + ")} viết gọn là?`,
    visual: "", kind: "choice", options: opts, answer: opts.indexOf(dung),
    explain: `${s} được lấy ${lan} lần → ${dung}.` };
};

/* L2-C8: Khối trụ, khối cầu */
GEN.l2c8 = () => {
  const CAU = [["⚽", "quả bóng đá"], ["🎾", "quả bóng tennis"], ["🏀", "quả bóng rổ"], ["🔮", "quả cầu thủy tinh"]];
  const TRU = [["🥫", "lon sữa"], ["🥁", "cái trống"], ["🕯️", "cây nến"], ["🥛", "cốc nước"]];
  const hoi_cau = pick([true, false]);
  const [eD, tD] = pick(hoi_cau ? CAU : TRU);
  let [eS, tS] = pick(hoi_cau ? TRU : CAU);
  const dung = ri(0, 1);
  const opts = dung === 0 ? [`${eD} ${tD}`, `${eS} ${tS}`] : [`${eS} ${tS}`, `${eD} ${tD}`];
  return { prompt: `Đồ vật nào là KHỐI ${hoi_cau ? "CẦU" : "TRỤ"}?`,
    visual: "", kind: "choice", options: opts, answer: dung,
    explain: `${tD} là khối ${hoi_cau ? "cầu (tròn mọi phía, lăn mọi hướng)" : "trụ (hai đáy tròn, thân thẳng)"}.` };
};

/* Ôn tập tổng hợp lớp 2 */
GEN.l2on = () => {
  const g = pick(["l2c1", "l2c2", "l2c3", "l2c4", "l2c5", "l2c6", "l2c7", "l2c8"]);
  return GEN[g]();
};

/* ============ LỚP 3 ============ */
/* L3-C1: Bảng nhân 9 */
GEN.l3c1 = () => {
  const kieu = pick(["nhan", "meo", "chia"]);
  if (kieu === "nhan") {
    const a = ri(2, 10);
    return { prompt: `9 × ${a} = ?`, visual: "", kind: "input",
      answer: 9 * a,
      explain: `Mẹo: gập ngón thứ ${a}. Trái ${a - 1} chục, phải ${10 - a} đơn vị → ${9 * a}.` };
  }
  if (kieu === "meo") {
    const a = ri(2, 9);
    const { opts, idx } = numOptions(a, 1, 10);
    return { prompt: `Tính 9 × ${a} bằng mẹo bàn tay: gập ngón thứ mấy?`,
      visual: `<div style="font-size:2.4rem">🙌</div>`,
      kind: "choice", options: opts.map(String), answer: idx,
      explain: `Nhân 9 với ${a} thì gập ngón thứ ${a}.` };
  }
  const q = ri(2, 10);
  return { prompt: `${9 * q} : 9 = ?`, visual: "", kind: "input",
    answer: q, explain: `Vì 9 × ${q} = ${9 * q} nên ${9 * q} : 9 = ${q}.` };
};

/* L3-C2: Tìm thành phần phép cộng, trừ */
GEN.l3c2 = () => {
  const kieu = pick(["sohang", "sobitru", "sotru"]);
  if (kieu === "sohang") {
    const a = ri(15, 60), b = ri(10, 35);
    return { prompt: `Tìm số bí ẩn: ? + ${b} = ${a + b}`,
      visual: `<div style="font-size:2.2rem">🎁</div>`, kind: "input",
      answer: a,
      explain: `Số hạng = tổng − số hạng kia: ${a + b} − ${b} = ${a}.` };
  }
  if (kieu === "sobitru") {
    const hieu = ri(10, 40), st = ri(5, 30);
    return { prompt: `Tìm số bí ẩn: ? − ${st} = ${hieu}`,
      visual: "", kind: "input", answer: hieu + st,
      explain: `Số bị trừ = hiệu + số trừ: ${hieu} + ${st} = ${hieu + st}.` };
  }
  const sbt = ri(30, 90), hieu = ri(5, sbt - 10);
  return { prompt: `Tìm số bí ẩn: ${sbt} − ? = ${hieu}`,
    visual: "", kind: "input", answer: sbt - hieu,
    explain: `Số trừ = số bị trừ − hiệu: ${sbt} − ${hieu} = ${sbt - hieu}.` };
};

/* L3-C3: Một phần mấy */
GEN.l3c3 = () => {
  const kieu = pick(["cua", "sosanh"]);
  if (kieu === "cua") {
    const n = pick([2, 3, 4, 5]), q = ri(2, 9);
    return { prompt: `Một phần ${["", "", "hai", "ba", "tư", "năm"][n]} của ${n * q} là bao nhiêu?`,
      visual: "", kind: "input", answer: q,
      explain: `${n * q} : ${n} = ${q}.` };
  }
  const a = ri(2, 4), b = ri(a + 1, 6);
  const dung = ri(0, 1);
  const opts = dung === 0 ? [`1/${a}`, `1/${b}`] : [`1/${b}`, `1/${a}`];
  return { prompt: "Miếng bánh nào TO hơn?",
    visual: `<div style="font-size:2.4rem">🍰</div>`,
    kind: "choice", options: opts, answer: dung,
    explain: `Chia càng nhiều phần miếng càng nhỏ: 1/${a} > 1/${b}.` };
};

/* L3-C4: Trung điểm & hình tròn */
GEN.l3c4 = () => {
  const kieu = pick(["trungdiem", "duongkinh", "bankinh"]);
  if (kieu === "trungdiem") {
    const k = ri(2, 15);
    return { prompt: `Đoạn thẳng AB dài ${2 * k} cm, M là trung điểm. AM = ? (cm)`,
      visual: "", kind: "input", answer: k,
      explain: `Trung điểm chia đôi: ${2 * k} : 2 = ${k} cm.` };
  }
  if (kieu === "duongkinh") {
    const r = ri(2, 20);
    return { prompt: `Hình tròn có bán kính ${r} cm. Đường kính = ? (cm)`,
      visual: `<div style="font-size:2.2rem">⭕</div>`, kind: "input",
      answer: 2 * r,
      explain: `Đường kính = 2 × bán kính = ${r} × 2 = ${2 * r} cm.` };
  }
  const r = ri(2, 15);
  return { prompt: `Đường kính dài ${2 * r} cm. Bán kính = ? (cm)`,
    visual: "", kind: "input", answer: r,
    explain: `Bán kính = đường kính : 2 = ${2 * r} : 2 = ${r} cm.` };
};

/* L3-C5: Góc vuông, góc không vuông */
GEN.l3c5 = () => {
  const kieu = pick(["hinh", "dem"]);
  if (kieu === "hinh") {
    const CO = [["📖 Quyển sách mở phẳng", false], ["🪟 Góc cửa sổ", true],
      ["✂️ Kéo đang mở rộng", false], ["📐 Góc vuông của ê ke", true]];
    const [ten, vuong] = pick(CO);
    return { prompt: `${ten} — có phải góc vuông không?`, visual: "",
      kind: "choice", options: ["Có, góc vuông", "Không vuông"],
      answer: vuong ? 0 : 1,
      explain: vuong ? "Dùng ê ke kiểm tra: trùng khít — góc vuông!" : "Ê ke không trùng khít — không vuông." };
  }
  const HINH = [["hình vuông", 4], ["hình chữ nhật", 4], ["ê ke", 1]];
  const [ten, n] = pick(HINH);
  const { opts, idx } = numOptions(n, 0, 5);
  return { prompt: `Một ${ten} có mấy góc vuông?`, visual: "",
    kind: "choice", options: opts.map(String), answer: idx,
    explain: `${ten} có ${n} góc vuông.` };
};

/* L3-C6: Gấp/giảm số lần & chia có dư */
GEN.l3c6 = () => {
  const kieu = pick(["gap", "giam", "du"]);
  if (kieu === "gap") {
    const a = ri(2, 9), k = ri(2, 5);
    return { prompt: `${a} gấp lên ${k} lần bằng bao nhiêu?`,
      visual: "", kind: "input", answer: a * k,
      explain: `Gấp lên thì nhân: ${a} × ${k} = ${a * k}.` };
  }
  if (kieu === "giam") {
    const k = ri(2, 5), q = ri(2, 9);
    return { prompt: `${k * q} giảm đi ${k} lần còn bao nhiêu?`,
      visual: "", kind: "input", answer: q,
      explain: `Giảm đi thì chia: ${k * q} : ${k} = ${q}.` };
  }
  const n = pick([2, 3, 4, 5]), q = ri(2, 8), du = ri(1, n - 1);
  const m = n * q + du;
  return { prompt: `${m} : ${n} dư mấy?`, visual: "", kind: "input",
    answer: du,
    explain: `${m} : ${n} = ${q} dư ${du} (vì ${n} × ${q} = ${n * q}, còn thừa ${du}).` };
};

/* L3-C7: Chu vi HCN & hình vuông */
GEN.l3c7 = () => {
  const kieu = pick(["hcn", "vuong", "nguoc"]);
  if (kieu === "hcn") {
    const d = ri(4, 15), r = ri(2, d - 1);
    return { prompt: `Hình chữ nhật dài ${d} cm, rộng ${r} cm. Chu vi = ? (cm)`,
      visual: "", kind: "input", answer: (d + r) * 2,
      explain: `(${d} + ${r}) × 2 = ${d + r} × 2 = ${(d + r) * 2} cm.` };
  }
  if (kieu === "vuong") {
    const c = ri(3, 12);
    return { prompt: `Hình vuông cạnh ${c} cm. Chu vi = ? (cm)`,
      visual: "", kind: "input", answer: c * 4,
      explain: `${c} × 4 = ${c * 4} cm.` };
  }
  const c = ri(3, 10);
  return { prompt: `Hình vuông có chu vi ${c * 4} cm. Một cạnh dài ? (cm)`,
    visual: "", kind: "input", answer: c,
    explain: `Cạnh = chu vi : 4 = ${c * 4} : 4 = ${c} cm.` };
};

/* L3-C8: Diện tích */
GEN.l3c8 = () => {
  const kieu = pick(["dem", "hcn", "vuong"]);
  if (kieu === "dem") {
    const n = ri(4, 12);
    return { prompt: `Một hình được phủ kín bởi ${n} ô vuông 1 cm². Diện tích = ? (cm²)`,
      visual: `<div style="font-size:2rem">🟨</div>`, kind: "input",
      answer: n, explain: `${n} ô × 1 cm² = ${n} cm².` };
  }
  if (kieu === "hcn") {
    const d = ri(3, 10), r = ri(2, d);
    return { prompt: `Hình chữ nhật dài ${d} cm, rộng ${r} cm. Diện tích = ? (cm²)`,
      visual: "", kind: "input", answer: d * r,
      explain: `S = dài × rộng = ${d} × ${r} = ${d * r} cm².` };
  }
  const c = ri(2, 9);
  return { prompt: `Hình vuông cạnh ${c} cm. Diện tích = ? (cm²)`,
    visual: "", kind: "input", answer: c * c,
    explain: `S = cạnh × cạnh = ${c} × ${c} = ${c * c} cm².` };
};

/* Ôn tập tổng hợp lớp 3 */
GEN.l3on = () => {
  const g = pick(["l3c1", "l3c2", "l3c3", "l3c4", "l3c5", "l3c6", "l3c7", "l3c8"]);
  return GEN[g]();
};

/* ===== LỚP 4 ===== */
/* L4-C1: Hàng và lớp, số đến lớp triệu */
GEN.l4c1 = () => {
  const kieu = pick(["chuso", "doc", "trieu"]);
  if (kieu === "chuso") {
    const n = ri(1, 99), giua = ri(0, 999), cuoi = ri(0, 999);
    const so = n * 1000000 + giua * 1000 + cuoi;
    const s = so.toLocaleString("vi-VN");
    return { prompt: `Số ${s} có mấy chữ số?`, visual: "", kind: "input",
      answer: String(so).length,
      explain: `Đếm từng chữ số của ${s}: có ${String(so).length} chữ số.` };
  }
  if (kieu === "doc") {
    const tr = ri(1, 900);
    const so = tr * 1000000;
    const { opts, idx } = numOptions(tr, 1, 999);
    return { prompt: `Số ${so.toLocaleString("vi-VN")} đọc là "? triệu"`,
      visual: `<div style="font-size:2rem">🔢</div>`,
      kind: "choice", options: opts.map(o => `${o} triệu`), answer: idx,
      explain: `Tách nhóm 3 chữ số: lớp triệu là ${tr}.` };
  }
  const a = ri(2, 9);
  return { prompt: `${a} triệu = ? nghìn`, visual: "", kind: "input",
    answer: a * 1000,
    explain: `1 triệu = 1 000 nghìn nên ${a} triệu = ${a * 1000} nghìn.` };
};

/* L4-C2: Biểu thức chứa chữ */
GEN.l4c2 = () => {
  const chu = pick(["a", "b", "m", "n"]);
  const kieu = pick(["cong", "tru", "nhan"]);
  if (kieu === "cong") {
    const v = ri(2, 30), c = ri(2, 20);
    return { prompt: `Tính ${chu} + ${c} với ${chu} = ${v}`,
      visual: `<div style="font-size:2rem">📦</div>`, kind: "input",
      answer: v + c,
      explain: `Thay ${chu} = ${v}: ${v} + ${c} = ${v + c}.` };
  }
  if (kieu === "tru") {
    const v = ri(10, 50), c = ri(2, 9);
    return { prompt: `Tính ${chu} − ${c} với ${chu} = ${v}`,
      visual: "", kind: "input", answer: v - c,
      explain: `Thay ${chu} = ${v}: ${v} − ${c} = ${v - c}.` };
  }
  const v = ri(2, 9), c = ri(2, 9);
  return { prompt: `Tính ${chu} × ${c} với ${chu} = ${v}`,
    visual: "", kind: "input", answer: v * c,
    explain: `Thay ${chu} = ${v}: ${v} × ${c} = ${v * c}.` };
};

/* L4-C3: Góc nhọn, góc tù, góc bẹt */
GEN.l4c3 = () => {
  const kieu = pick(["nhon", "tu", "bet", "so"]);
  const options = ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"];
  if (kieu === "nhon")
    return { prompt: "Góc BÉ hơn góc vuông gọi là góc gì?",
      visual: `<div style="font-size:2.4rem">📐</div>`, kind: "choice",
      options, answer: 0, explain: "Góc nhọn bé hơn góc vuông." };
  if (kieu === "tu")
    return { prompt: "Góc LỚN hơn góc vuông (chưa thẳng hàng) là góc gì?",
      visual: "", kind: "choice", options, answer: 2,
      explain: "Góc tù lớn hơn góc vuông nhưng bé hơn góc bẹt." };
  if (kieu === "bet")
    return { prompt: "Hai cạnh thẳng hàng tạo thành góc gì?",
      visual: "", kind: "choice", options, answer: 3,
      explain: "Góc bẹt có hai cạnh thẳng hàng, bằng 2 góc vuông." };
  return { prompt: "Góc bẹt bằng mấy góc vuông?", visual: "",
    kind: "input", answer: 2, explain: "Góc bẹt = 2 góc vuông." };
};

/* L4-C4: Giây, thế kỉ */
GEN.l4c4 = () => {
  const kieu = pick(["phut", "theki", "nam"]);
  if (kieu === "phut") {
    const p = ri(2, 5);
    return { prompt: `${p} phút = ? giây`,
      visual: `<div style="font-size:2.2rem">⏱️</div>`, kind: "input",
      answer: p * 60,
      explain: `1 phút = 60 giây nên ${p} phút = ${p * 60} giây.` };
  }
  if (kieu === "theki") {
    const t = ri(2, 5);
    return { prompt: `${t} thế kỉ = ? năm`, visual: "", kind: "input",
      answer: t * 100,
      explain: `1 thế kỉ = 100 năm nên ${t} thế kỉ = ${t * 100} năm.` };
  }
  const nam = pick([1985, 2005, 2024, 1890, 2010, 1975]);
  const tk = Math.floor((nam - 1) / 100) + 1;
  const { opts, idx } = numOptions(tk, 15, 22);
  return { prompt: `Năm ${nam} thuộc thế kỉ thứ mấy?`,
    visual: "", kind: "choice", options: opts.map(String), answer: idx,
    explain: `Năm ${nam} thuộc thế kỉ ${tk}.` };
};

/* L4-C5: Giao hoán, kết hợp */
GEN.l4c5 = () => {
  const kieu = pick(["ghep", "doicho"]);
  if (kieu === "ghep") {
    const a = ri(2, 8), b = 10 - a, c = ri(3, 9);
    return { prompt: `Tính nhanh: ${a} + ${c} + ${b} = ?`,
      visual: `<div style="font-size:2rem">⚡</div>`, kind: "input",
      answer: 10 + c,
      explain: `Ghép ${a} + ${b} = 10, thêm ${c} → ${10 + c}.` };
  }
  const a = ri(10, 60), b = ri(10, 60);
  return { prompt: `${a} + ${b} = ${b} + ? (giao hoán)`,
    visual: "", kind: "input", answer: a,
    explain: `Đổi chỗ các số hạng, tổng không đổi: ${a} + ${b} = ${b} + ${a}.` };
};

/* L4-C6: Tổng và hiệu */
GEN.l4c6 = () => {
  const be = ri(3, 20), hieu = ri(2, 8) * 2;
  const lon = be + hieu, tong = be + lon;
  const hoi = pick(["be", "lon"]);
  if (hoi === "be")
    return { prompt: `Hai số có tổng ${tong}, hiệu ${hieu}. Số BÉ = ?`,
      visual: `<div style="font-size:2rem">⚖️</div>`, kind: "input",
      answer: be,
      explain: `Số bé = (tổng − hiệu) : 2 = (${tong} − ${hieu}) : 2 = ${be}.` };
  return { prompt: `Hai số có tổng ${tong}, hiệu ${hieu}. Số LỚN = ?`,
    visual: "", kind: "input", answer: lon,
    explain: `Số lớn = (tổng + hiệu) : 2 = (${tong} + ${hieu}) : 2 = ${lon}.` };
};

/* L4-C7: Vuông góc, song song, bình hành, thoi */
GEN.l4c7 = () => {
  const kieu = pick(["ray", "vuong", "bh", "thoi"]);
  if (kieu === "ray")
    return { prompt: "Hai đường thẳng song song có gặp nhau không?",
      visual: `<div style="font-size:2.2rem">🛤️</div>`, kind: "choice",
      options: ["Không bao giờ", "Có, ở rất xa", "Gặp 1 lần", "Gặp 2 lần"],
      answer: 0, explain: "Song song thì không bao giờ cắt nhau." };
  if (kieu === "vuong")
    return { prompt: "Hai đường thẳng cắt nhau tạo thành góc vuông gọi là gì?",
      visual: "", kind: "choice",
      options: ["Vuông góc", "Song song", "Trùng nhau", "Chéo nhau"],
      answer: 0, explain: "Cắt nhau tạo góc vuông → vuông góc." };
  if (kieu === "bh")
    return { prompt: "Hình chữ nhật 'xô nghiêng' thành hình gì?",
      visual: `<div style="font-size:2.2rem">🔷</div>`, kind: "choice",
      options: ["Hình bình hành", "Hình thoi", "Hình tròn", "Hình tam giác"],
      answer: 0, explain: "Chữ nhật xô nghiêng → bình hành." };
  return { prompt: "Hình thoi có mấy cạnh bằng nhau?", visual: "",
    kind: "input", answer: 4, explain: "Hình thoi có 4 cạnh bằng nhau." };
};

/* L4-C8: Phân số */
GEN.l4c8 = () => {
  const kieu = pick(["kn", "rutgon", "sosanh", "cong", "tru"]);
  const lam = (dung, sai, prompt, visual, explain) => {
    const uniq = [...new Set(sai)].filter(s => s !== dung).slice(0, 3);
    const options = shuffle([dung, ...uniq]);
    return { prompt, visual, kind: "choice", options,
      answer: options.indexOf(dung), explain };
  };
  if (kieu === "kn") {
    const m = pick([4, 6, 8]), t = ri(1, m - 1);
    return lam(`${t}/${m}`, [`${m}/${t}`, `${t}/${m + 1}`, `${m}/${m}`],
      `Bánh cắt ${m} phần bằng nhau, lấy ${t} phần. Phân số?`,
      `<div style="font-size:2.2rem">🍕</div>`,
      `Chia ${m} lấy ${t} → ${t}/${m}.`);
  }
  if (kieu === "rutgon") {
    const [t, m] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [1, 6], [5, 6]]);
    const k = ri(2, 4);
    return lam(`${t}/${m}`, [`${t}/${m + 1}`, `${t + 1}/${m}`, `${m}/${t}`],
      `Rút gọn: ${t * k}/${m * k} = ?`, "",
      `Chia cả tử và mẫu cho ${k}: ${t * k}/${m * k} = ${t}/${m}.`);
  }
  if (kieu === "sosanh") {
    const m = ri(5, 12), a = ri(1, m - 2), b = ri(a + 1, m - 1);
    return { prompt: `Phân số nào LỚN hơn?`, visual: "",
      kind: "choice",
      options: [`${a}/${m}`, `${b}/${m}`],
      answer: 1,
      explain: `Cùng mẫu ${m}: tử ${b} > ${a} nên ${b}/${m} lớn hơn.` };
  }
  if (kieu === "cong") {
    const m = ri(5, 12), a = ri(1, 4), b = ri(1, m - a - 1);
    return lam(`${a + b}/${m}`,
      [`${a + b}/${m * 2}`, `${a * b}/${m}`, `${a + b + 1}/${m}`],
      `${a}/${m} + ${b}/${m} = ?`, "",
      `Cùng mẫu: cộng tử, giữ mẫu → ${a + b}/${m}.`);
  }
  const m = ri(5, 12), b2 = ri(1, 5), a2 = ri(b2 + 1, m - 1);
  return lam(`${a2 - b2}/${m}`,
    [`${a2 - b2}/${m - 1}`, `${a2 + b2}/${m}`, `${a2}/${b2}`],
    `${a2}/${m} − ${b2}/${m} = ?`, "",
    `Cùng mẫu: trừ tử, giữ mẫu → ${a2 - b2}/${m}.`);
};

/* Ôn tập tổng hợp lớp 4 */
GEN.l4on = () => {
  const g = pick(["l4c1", "l4c2", "l4c3", "l4c4", "l4c5", "l4c6", "l4c7", "l4c8"]);
  return GEN[g]();
};

/* Sinh đề: n câu, tránh trùng prompt */
function makeQuiz(genKey, n = 10) {
  const qs = [];
  const seen = new Set();
  let guard = 0;
  while (qs.length < n && guard++ < 400) {
    const q = GEN[genKey]();
    const key = q.prompt + "|" + (q.visual || "").slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    qs.push(q);
  }
  return qs;
}

/* ===== Chương trình học (SGK Toán KNTT) ===== */
const DATA = {
  grades: [
    {
      id: 1, ten: "Lớp 1", sub: "16 video · 9 chủ đề", emoji: "🐰", nv: "tho", ready: true,
      chapters: [
        { id: "cd1", ten: "Các số từ 0 đến 10", icon: "🔢", mau: "#ff5d8f", gen: "cd1",
          baihoc: [
            { ten: "Đếm đến 10", ep: "e01" },
            { ten: "So sánh số", ep: "e02" },
            { ten: "Số 0", ep: "e03" },
            { ten: "Tách số 10 (mấy và mấy)", ep: "e04" },
          ] },
        { id: "cd2", ten: "Hình phẳng: vuông, tròn, tam giác", icon: "🔷", mau: "#4d96ff", gen: "cd2",
          baihoc: [
            { ten: "Đoán hình phẳng", ep: "e08" },
          ] },
        { id: "cd3", ten: "Phép cộng, phép trừ trong phạm vi 10", icon: "➕", mau: "#06d6a0", gen: "cd3",
          baihoc: [
            { ten: "Phép cộng", ep: "e05" },
            { ten: "Phép trừ", ep: "e06" },
          ] },
        { id: "cd4", ten: "Hình khối và vị trí", icon: "📦", mau: "#9b5de5", gen: "cd4",
          baihoc: [
            { ten: "Khối lập phương, khối hộp", ep: "e09" },
            { ten: "Vị trí: trên dưới, trái phải", ep: "e13" },
          ] },
        { id: "cd5", ten: "Các số trong phạm vi 100", icon: "💯", mau: "#ff9770", gen: "cd5",
          baihoc: [
            { ten: "Chục và đơn vị", ep: "e07" },
            { ten: "Bảng 100 và so sánh số", ep: "e14" },
          ] },
        { id: "cd6", ten: "Độ dài và đo độ dài (cm)", icon: "📏", mau: "#00b4d8", gen: "cd6",
          baihoc: [
            { ten: "Dài hơn, ngắn hơn", ep: "e15" },
            { ten: "Đo bằng xăng-ti-mét", ep: "e10" },
          ] },
        { id: "cd7", ten: "Cộng, trừ trong phạm vi 100", icon: "🧮", mau: "#f9844a", gen: "cd7",
          baihoc: [
            { ten: "Cộng trừ đến 100", ep: "e16" },
          ] },
        { id: "cd8", ten: "Thời gian: giờ đúng và tuần lễ", icon: "🕐", mau: "#ffb703", gen: "cd8",
          baihoc: [
            { ten: "Giờ đúng", ep: "e11" },
            { ten: "Tuần lễ", ep: "e12" },
          ] },
        { id: "on", ten: "Ôn tập tổng hợp lớp 1", icon: "🌟", mau: "#e63946", gen: "on",
          baihoc: [] },
      ],
    },
    { id: 2, ten: "Lớp 2", sub: "12 video · 9 chủ đề", emoji: "🐼", nv: "truc", ready: true,
      chapters: [
        { id: "l2c1", ten: "Tia số, số liền trước – liền sau", icon: "📏", mau: "#4d96ff", gen: "l2c1",
          baihoc: [{ ten: "Tập 2.01 · Tia số", ep: "e201" }] },
        { id: "l2c2", ten: "Cộng, trừ qua 10 trong phạm vi 20", icon: "🔟", mau: "#ff6b6b", gen: "l2c2",
          baihoc: [
            { ten: "Tập 2.02 · Cộng qua 10", ep: "e202" },
            { ten: "Tập 2.03 · Trừ qua 10", ep: "e203" },
          ] },
        { id: "l2c3", ten: "Bài toán nhiều hơn, ít hơn", icon: "⚖️", mau: "#9d4edd", gen: "l2c3",
          baihoc: [{ ten: "Tập 2.04 · Nhiều hơn, ít hơn", ep: "e204" }] },
        { id: "l2c4", ten: "Ki-lô-gam và lít", icon: "🧃", mau: "#2a9d8f", gen: "l2c4",
          baihoc: [
            { ten: "Tập 2.05 · Ki-lô-gam", ep: "e205" },
            { ten: "Tập 2.06 · Lít", ep: "e206" },
          ] },
        { id: "l2c5", ten: "Cộng, trừ có nhớ trong phạm vi 100", icon: "🧮", mau: "#f77f00", gen: "l2c5",
          baihoc: [
            { ten: "Tập 2.07 · Cộng có nhớ", ep: "e207" },
            { ten: "Tập 2.08 · Trừ có nhớ", ep: "e208" },
          ] },
        { id: "l2c6", ten: "Điểm, đoạn thẳng, đường gấp khúc", icon: "📐", mau: "#06d6a0", gen: "l2c6",
          baihoc: [{ ten: "Tập 2.09 · Đường gấp khúc", ep: "e209" }] },
        { id: "l2c7", ten: "Phép nhân, phép chia", icon: "✖️", mau: "#e63946", gen: "l2c7",
          baihoc: [
            { ten: "Tập 2.10 · Phép nhân", ep: "e210" },
            { ten: "Tập 2.11 · Phép chia", ep: "e211" },
          ] },
        { id: "l2c8", ten: "Khối trụ, khối cầu", icon: "🥁", mau: "#118ab2", gen: "l2c8",
          baihoc: [{ ten: "Tập 2.12 · Khối trụ, khối cầu", ep: "e212" }] },
        { id: "l2on", ten: "Ôn tập tổng hợp lớp 2", icon: "🌟", mau: "#8338ec", gen: "l2on",
          baihoc: [] },
      ],
    },
    { id: 3, ten: "Lớp 3", sub: "12 video · 9 chủ đề", emoji: "🦊", nv: "cao", ready: true,
      chapters: [
        { id: "l3c1", ten: "Bảng nhân 9", icon: "🙌", mau: "#f9844a", gen: "l3c1",
          baihoc: [{ ten: "Tập 3.01 · Bảng nhân 9", ep: "e301" }] },
        { id: "l3c2", ten: "Tìm thành phần phép tính", icon: "🎁", mau: "#9b5de5", gen: "l3c2",
          baihoc: [{ ten: "Tập 3.02 · Tìm thành phần", ep: "e302" }] },
        { id: "l3c3", ten: "Một phần mấy", icon: "🍰", mau: "#ffb703", gen: "l3c3",
          baihoc: [{ ten: "Tập 3.03 · Một phần mấy", ep: "e303" }] },
        { id: "l3c4", ten: "Trung điểm và hình tròn", icon: "⭕", mau: "#4d96ff", gen: "l3c4",
          baihoc: [
            { ten: "Tập 3.04 · Trung điểm", ep: "e304" },
            { ten: "Tập 3.05 · Hình tròn", ep: "e305" },
          ] },
        { id: "l3c5", ten: "Góc vuông, góc không vuông", icon: "📐", mau: "#219ebc", gen: "l3c5",
          baihoc: [{ ten: "Tập 3.06 · Góc vuông", ep: "e306" }] },
        { id: "l3c6", ten: "Gấp, giảm số lần · Chia có dư", icon: "🥕", mau: "#06d6a0", gen: "l3c6",
          baihoc: [
            { ten: "Tập 3.07 · Gấp lên, giảm đi", ep: "e307" },
            { ten: "Tập 3.08 · Phép chia có dư", ep: "e308" },
          ] },
        { id: "l3c7", ten: "Chu vi", icon: "🏡", mau: "#2d6a4f", gen: "l3c7",
          baihoc: [
            { ten: "Tập 3.09 · Chu vi hình chữ nhật", ep: "e309" },
            { ten: "Tập 3.10 · Chu vi hình vuông", ep: "e310" },
          ] },
        { id: "l3c8", ten: "Diện tích", icon: "🧱", mau: "#e63946", gen: "l3c8",
          baihoc: [
            { ten: "Tập 3.11 · Diện tích của một hình", ep: "e311" },
            { ten: "Tập 3.12 · Diện tích hình chữ nhật", ep: "e312" },
          ] },
        { id: "l3on", ten: "Ôn tập tổng hợp lớp 3", icon: "🌟", mau: "#8338ec", gen: "l3on",
          baihoc: [] },
      ],
    },
    { id: 4, ten: "Lớp 4", sub: "12 video · 9 chủ đề", emoji: "🐶", nv: "cun", ready: true,
      chapters: [
        { id: "l4c1", ten: "Số đến lớp triệu", icon: "🔢", mau: "#f9844a", gen: "l4c1",
          baihoc: [{ ten: "Tập 4.01 · Hàng và lớp", ep: "e401" }] },
        { id: "l4c2", ten: "Biểu thức chứa chữ", icon: "📦", mau: "#9b5de5", gen: "l4c2",
          baihoc: [{ ten: "Tập 4.02 · Biểu thức chứa chữ", ep: "e402" }] },
        { id: "l4c3", ten: "Góc nhọn, góc tù, góc bẹt", icon: "📐", mau: "#219ebc", gen: "l4c3",
          baihoc: [{ ten: "Tập 4.03 · Góc nhọn, tù, bẹt", ep: "e403" }] },
        { id: "l4c4", ten: "Giây, thế kỉ", icon: "⏱️", mau: "#ffb703", gen: "l4c4",
          baihoc: [{ ten: "Tập 4.04 · Giây, thế kỉ", ep: "e404" }] },
        { id: "l4c5", ten: "Giao hoán, kết hợp", icon: "⚡", mau: "#06d6a0", gen: "l4c5",
          baihoc: [{ ten: "Tập 4.05 · Tính chất phép cộng", ep: "e405" }] },
        { id: "l4c6", ten: "Tổng và hiệu", icon: "⚖️", mau: "#4d96ff", gen: "l4c6",
          baihoc: [{ ten: "Tập 4.06 · Tìm hai số", ep: "e406" }] },
        { id: "l4c7", ten: "Song song, bình hành, thoi", icon: "🔷", mau: "#2d6a4f", gen: "l4c7",
          baihoc: [
            { ten: "Tập 4.07 · Vuông góc, song song", ep: "e407" },
            { ten: "Tập 4.08 · Bình hành, thoi", ep: "e408" },
          ] },
        { id: "l4c8", ten: "Phân số", icon: "🍕", mau: "#e63946", gen: "l4c8",
          baihoc: [
            { ten: "Tập 4.09 · Khái niệm phân số", ep: "e409" },
            { ten: "Tập 4.10 · Phân số bằng nhau", ep: "e410" },
            { ten: "Tập 4.11 · Quy đồng, so sánh", ep: "e411" },
            { ten: "Tập 4.12 · Cộng, trừ phân số", ep: "e412" },
          ] },
        { id: "l4on", ten: "Ôn tập tổng hợp lớp 4", icon: "🌟", mau: "#8338ec", gen: "l4on",
          baihoc: [] },
      ],
    },
    { id: 5, ten: "Lớp 5", sub: "Sắp ra mắt cùng Cú Thông Thái", emoji: "🦉", nv: "cu", ready: false, chapters: [] },
  ],
};
