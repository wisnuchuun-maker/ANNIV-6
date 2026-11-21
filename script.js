/* =========================================================
   EDIT BAGIAN INI DULU
   Semua teks di website ada di CONFIG. Ganti dengan ceritamu.
   ========================================================= */
const CONFIG = {
  // Nama yang tampil besar di halaman utama
  names: "Wisnu & Ani",

  // Tanggal & jam jadian (format: TAHUN-BULAN-TANGGALTJAM:MENIT:DETIK)
  startDate: "2026-06-16T23:00:00",

  // Kata sandi disimpan sebagai kode (bukan teks biasa). Kosongkan ("") kalau tidak mau pakai kata sandi.
  passwordHash: 3541662156869834,

  // Lagu latar. Taruh file lagumu di folder yang sama dengan index.html, lalu samakan namanya di sini.
  // Kosongkan ("") kalau tidak mau pakai musik.
  music: "musik.mp3",

  subtitle: "Selamat anniversary, sayang. Di antara semua bintang, kamu yang selalu kutemukan.",

  // Perjalanan kalian. Tambah atau hapus blok { ... } sesuka hati.
  timeline: [
    {
      date: "7 Juni 2026, 17.07",
      title: "Pertama kali ke pantai",
      text: "Waktu itu kita belum pacaran, masih masa pdkt. Jujur ini momen yang bikin deg-degan. Di pantai aku grogi harus ngomong apa dan bersikap gimana di depan kamu. Aku mikir, \"kok aku bisa ya jalan sama dia? Mau pegang tangan aja kayanya belum pantes karena belum pacaran. Aku harus bersikap gimana ya biar dia nyaman?\" Habis dari pantai kita pulang, terus aku nggak nyangka malah disuruh ke rumah kamu. Deg-degan banget, tapi akhirnya lancar dan bapak kamu bisa menerima topikku."
    },
    {
      date: "16 Juni 2026, 20.02",
      title: "Malam kita jadian",
      text: "HP-ku ketinggalan di mesari, jadi aku ngechat kamu lewat PC. Kamu masih ingat kan? Kamu nawarin diri buat ikut nganterin aku ngambil HP. Di perjalanan kita saling goda, bahkan sempat ngomongin keseriusanku. Niatmu bercanda, tapi aku bilang, \"yaudah, mau aku seriusin nggak?\" dan kamu jawab, \"apasih, bercanda lagi.\" Sampai di rumah kamu, aku nggak langsung pulang dan kita masih mesra-mesraan. Akhirnya jam 23.00 aku nembak kamu. Awalnya kamu sok-sok nolak padahal mau. Aku merengek, dan kamu nerima aku. Hehehe."
    },
    {
      date: "6 Juli 2026",
      title: "Foto pertama kita",
      text: "Aku ke rumah kamu buat ngajarin kamu belajar, dan hari itu aku pakai kacamata. Sebenarnya mau pamer ke ayang, dan bener aja kamu klepek-klepek. Itu juga pertama kalinya kita foto bareng sebagai pasangan. Kamu bikin video belajar kita walaupun kebanyakan bercandanya. Tapi di detik itu aku seneng banget, dan itu pertama kalinya aku divideoin kaya gitu."
    },
    {
      date: "29 Agustus 2026, 20.00",
      title: "Ulang tahunmu",
      text: "Aku ke rumah kamu buat ngerayain ulang tahunmu. Aku nggak nyangka bakal ramai dan ada acara makan-makan. Kukira acaranya bakal cepat selesai, eh ternyata aku malah diajak makan bareng. Dengan jiwa \"yowes, wong ditawari\", aku gas. Cuma nggak dapat foto bareng karena aku malu juga. Kakakku, ibuku, dan adikku ikut bantu ngasih hadiah, dan aku kaget mereka semangat banget. Aku bersyukur direstui keluargaku."
    }
  ],

  // Foto-foto kalian: tampil di bagian "Potret kita", tepat di bawah perjalanan.
  // Taruh filenya di folder "foto". Tambah baris baru untuk foto lain; keterangan boleh dikosongkan ("").
  // Foto yang filenya belum ada tidak ditampilkan. Kalau semuanya belum ada, bagian ini disembunyikan.
  gallery: [
    { src: "foto/foto-1.jpg", caption: "Foto pertama kita, 6 Juli 2026" },
    { src: "foto/foto-2.jpg", caption: "" },
    { src: "foto/foto-3.jpg", caption: "" },
    { src: "foto/foto (1).jpg", caption: "" },
    { src: "foto/foto (2).jpg", caption: "" },
    { src: "foto/foto (3).jpg", caption: "" },
    { src: "foto/foto (4).jpg", caption: "" },
    { src: "foto/foto (5).jpg", caption: "" },
    { src: "foto/foto (6).jpg", caption: "" },
    { src: "foto/foto (7).jpg", caption: "" },
    { src: "foto/foto (8).jpg", caption: "" },
    { src: "foto/foto (9).jpg", caption: "" },
    { src: "foto/foto (10).jpg", caption: "" }, 
  ],

  // Alasan-alasanmu. Tiap alasan jadi satu bintang yang bisa diketuk.
  reasons: [
    "Walaupun aku labil, sering bikin masalah, janjinya nggak ditepatin atau dibatalin, cengeng, banyak drama, emosi nggak jelas, cemburuan, overthinking, kamu tetap sabar dan masih sayang banget sama aku. Kamu sendiri sampai muak sama aku, tapi kamu nggak pernah berpikir buat mengakhiri hubungan ini.",
    "Kamu cantik, kiyut, manis, lucu, menarik. Princesku, sayangku, duniaku, mentariku, istriku, favoritku, kisahku, masa depanku, baddieku, my mine guweh, woowowowowow momomomomom.",
    "Kamu selalu ada di saat aku sedih. Tawamu dan senyummu bikin aku makin seneng lihat kamu. Walaupun kadang ngeselin, tapi tapiii makin sayangggg.",
    "Kamu my type.",
    "Waktu ketemuan, sifatmu yang lucu dan gemesin bikin aku makin meleyot. Pengennya ketemu terus, makanya aku kangenan. Itu juga alasannya, YTTA.",
    "Kamu selalu cerita tentang dirimu, masalahmu, masa lalumu. Kamu menaruh kepercayaan ke aku, dan itu bikin aku makin sayang. Mentalmu yang kuat bikin aku iri dan malu sama diri sendiri. Kok cewekku lebih kuat dari aku? Dan itu yang bikin aku sayang dan respek sama kamu."
  ],

  letter: {
    greeting: "Untuk Ani,",
    paragraphs: [
      "Aku mau bilang ke kamu: maaf sudah sering bikin masalah. Maaf aku belum jadi cowok yang baik, maaf selalu bikin susah, maaf untuk segalanya.",
      "Aku harap kamu nggak pernah capek ngadepin cowok kaya aku. Aku harap kamu selalu sayang dan cinta sama aku, dan nggak pergi ninggalin aku. Aku harap hubungan kita lancar sampai ke jenjang serius.",
      "Aku bakal terus berusaha untuk sukses dan menghalalkan kamu di masa depan. Aku dan kamu harus tetap semangat menggapai tujuan ya, sayang. Itu aja dari aku."
    ],
    closing: "I love you so much, sayangku,",
    signature: "Wisnu"
  },

  // Pertanyaan setelah surat selesai dibaca. Tombol "Nggak" akan menghindar saat disentuh.
  ask: {
    question: "Mau terus sama aku?",
    yes: "Mau",
    no: "Nggak",
    reply: "Terima kasih sudah memilih aku, Ani. Aku sayang kamu."
  },

  footer: "Dibuat dengan cinta, oleh Wisnu untuk Ani."
};

/* =========================================================
   Isi halaman (tidak perlu diubah)
   ========================================================= */
const $ = (id) => document.getElementById(id);

document.title = CONFIG.names;
$("names").textContent = CONFIG.names;
$("subtitle").textContent = CONFIG.subtitle;
$("footer").textContent = CONFIG.footer;

/* ---------- Hitungan waktu bersama ---------- */
(function setupCounter() {
  const counter = $("counter");
  const start = new Date(CONFIG.startDate).getTime();

  if (Number.isNaN(start)) {
    counter.hidden = true;
    $("since").hidden = true;
    return;
  }

  const parts = [["d", "hari"], ["h", "jam"], ["m", "menit"], ["s", "detik"]];
  const nums = {};

  parts.forEach(([key, label]) => {
    const unit = document.createElement("div");
    unit.className = "unit";
    const num = document.createElement("span");
    num.className = "num";
    num.textContent = "0";
    const lbl = document.createElement("span");
    lbl.className = "lbl";
    lbl.textContent = label;
    unit.append(num, lbl);
    counter.append(unit);
    nums[key] = num;
  });

  function tick() {
    const total = Math.max(0, Math.floor((Date.now() - start) / 1000));
    nums.d.textContent = Math.floor(total / 86400).toLocaleString("id-ID");
    nums.h.textContent = Math.floor((total % 86400) / 3600);
    nums.m.textContent = Math.floor((total % 3600) / 60);
    nums.s.textContent = total % 60;
  }

  tick();
  setInterval(tick, 1000);
})();

/* ---------- Perjalanan ---------- */
(function setupTimeline() {
  const list = $("timeline");
  CONFIG.timeline.forEach((item) => {
    const li = document.createElement("li");
    const when = document.createElement("span");
    when.className = "when";
    when.textContent = item.date;
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    li.append(when, title, text);
    list.append(li);
  });
})();

/* ---------- Galeri foto (geser, seperti playlist) ---------- */
(function setupGallery() {
  const track = $("gallery");
  const section = $("gallerySection");
  const bar = $("carBar");
  const dots = $("dots");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let count = 0;

  function mark() {
    const idx = Math.min(count - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth)));
    Array.from(dots.children).forEach((d, i) => {
      if (i === idx) d.setAttribute("aria-current", "true");
      else d.removeAttribute("aria-current");
    });
  }

  // Dipanggil tiap kali sebuah foto selesai dimuat atau gagal dimuat
  function refresh() {
    count = track.querySelectorAll("figure:not([hidden])").length;
    section.hidden = count === 0;
    bar.hidden = count < 2;
    dots.textContent = "";
    for (let i = 0; i < count; i++) {
      const d = document.createElement("span");
      d.className = "dot";
      dots.append(d);
    }
    mark();
  }

  function go(dir) {
    track.scrollBy({ left: dir * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
  }

  CONFIG.gallery.forEach((item) => {
    const fig = document.createElement("figure");
    fig.hidden = true; // baru tampil setelah fotonya berhasil dimuat
    const img = document.createElement("img");
    img.alt = item.caption || "Foto kita";
    img.draggable = false;
    img.addEventListener("load", () => { fig.hidden = false; refresh(); });
    img.addEventListener("error", () => { fig.remove(); refresh(); }); // file belum ada: dibuang
    img.src = item.src;
    fig.append(img);
    if (item.caption) {
      const cap = document.createElement("figcaption");
      cap.textContent = item.caption;
      fig.append(cap);
    }
    track.append(fig);
  });

  track.addEventListener("scroll", mark, { passive: true });
  $("prevBtn").addEventListener("click", () => go(-1));
  $("nextBtn").addEventListener("click", () => go(1));
  window.addEventListener("resize", mark);
})();

/* ---------- Alasan (bintang yang bisa dibuka) ---------- */
(function setupReasons() {
  const grid = $("reasonGrid");

  CONFIG.reasons.forEach((reason, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "reason";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Buka alasan ke-" + (i + 1));
    btn.innerHTML =
      '<svg class="star" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>' +
      '<span class="text"></span>';
    btn.querySelector(".text").textContent = reason;

    btn.addEventListener("click", () => {
      const open = btn.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      if (open) {
        btn.removeAttribute("aria-label"); // supaya teks alasan yang dibaca
        const r = btn.getBoundingClientRect();
        for (let k = 0; k < 6; k++) spawnBurst(r.left + r.width / 2, r.top + r.height / 2);
      } else {
        btn.setAttribute("aria-label", "Buka alasan ke-" + (i + 1));
      }
    });

    grid.append(btn);
  });
})();

/* ---------- Surat ---------- */
(function setupLetter() {
  const btn = $("openLetter");
  const letter = $("letter");
  const L = CONFIG.letter;

  const h = document.createElement("h3");
  h.textContent = L.greeting;
  letter.append(h);

  L.paragraphs.forEach((t) => {
    const p = document.createElement("p");
    p.textContent = t;
    letter.append(p);
  });

  const closing = document.createElement("p");
  closing.className = "closing";
  closing.textContent = L.closing;
  const sign = document.createElement("p");
  sign.className = "signature";
  sign.textContent = L.signature;
  letter.append(closing, sign);

  // Siapkan efek ketik: teks yang belum muncul tetap menempati ruangnya (disembunyikan)
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = Array.from(letter.children);
  const full = els.map((el) => el.textContent);
  const typed = [];
  const rest = [];
  els.forEach((el, i) => {
    el.textContent = "";
    const a = document.createElement("span");
    const b = document.createElement("span");
    b.style.visibility = "hidden";
    b.textContent = full[i];
    el.append(a, b);
    typed.push(a);
    rest.push(b);
  });

  let started = false, typing = false, done = false, timer = null, line = 0, ch = 0;

  function finish() {
    clearTimeout(timer);
    els.forEach((el, i) => {
      typed[i].textContent = full[i];
      rest[i].textContent = "";
    });
    typing = false;
    done = true;
    if (!letter.hidden) $("ask").hidden = false;
  }

  function step() {
    if (line >= els.length) return finish();
    const t = full[line];
    ch++;
    typed[line].textContent = t.slice(0, ch);
    rest[line].textContent = t.slice(ch);
    if (ch >= t.length) {
      line++;
      ch = 0;
      timer = setTimeout(step, 450);
      return;
    }
    timer = setTimeout(step, ",.!?:".includes(t[ch - 1]) ? 160 : 20);
  }

  // Ketuk surat untuk melewati efek ketik
  letter.addEventListener("click", () => { if (typing) finish(); });

  btn.addEventListener("click", () => {
    const willOpen = letter.hidden;
    letter.hidden = !willOpen;
    btn.setAttribute("aria-expanded", String(willOpen));
    btn.textContent = willOpen ? "Tutup surat" : "Buka surat";
    if (willOpen) {
      letter.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
      if (!started) {
        started = true;
        typing = true;
        if (reduce) finish();
        else step();
      }
    } else if (typing) {
      finish();
    }
    $("ask").hidden = !(done && willOpen);
  });
})();

/* ---------- Pertanyaan "Mau terus sama aku?" ---------- */
(function setupAsk() {
  const A = CONFIG.ask;
  const yesBtn = $("yesBtn");
  const noBtn = $("noBtn");
  $("askQ").textContent = A.question;
  yesBtn.textContent = A.yes;
  noBtn.textContent = A.no;
  $("askReply").textContent = A.reply;
  let dodges = 0;

  function dodge(e) {
    e.preventDefault();
    const r = noBtn.getBoundingClientRect();
    const pad = 12;
    const maxX = Math.max(pad, window.innerWidth - r.width - pad);
    const maxY = Math.max(pad, window.innerHeight - r.height - pad);
    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "6";
    noBtn.style.left = pad + Math.random() * (maxX - pad) + "px";
    noBtn.style.top = pad + Math.random() * (maxY - pad) + "px";
    dodges++;
    yesBtn.style.transform = "scale(" + (1 + Math.min(dodges, 8) * 0.1) + ")";
  }
  noBtn.addEventListener("pointerenter", dodge);
  noBtn.addEventListener("pointerdown", dodge);
  noBtn.addEventListener("click", dodge);

  yesBtn.addEventListener("click", () => {
    noBtn.hidden = true;
    yesBtn.hidden = true;
    $("askReply").hidden = false;
    for (let k = 0; k < 70; k++) {
      setTimeout(() => spawnBurst(Math.random() * window.innerWidth, window.innerHeight * 0.95), k * 45);
    }
  });
})();

/* =========================================================
   Langit: bintang berkelip, rasi hati, hati melayang
   ========================================================= */
const canvas = $("sky");
const ctx = canvas.getContext("2d");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

let W = 0, H = 0, lastW = 0;
let stars = [];
let heartPts = [];
const hearts = [];
let startTime = performance.now();
let unlocked = false;
const HEART_COLORS = ["#ff6f91", "#ffb3c6", "#ffe4ea"];

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Bintang hanya dibuat ulang kalau lebarnya berubah (supaya tidak berkedip di HP)
  if (W !== lastW) {
    lastW = W;
    const count = Math.round((W * H) / 7000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.3 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 1.5 + 0.5
    }));
  }

  // Titik-titik rasi hati (kurva hati klasik)
  const N = 30;
  const s = Math.min((W * 0.82) / 32, (H * 0.62) / 30);
  const cx = W / 2;
  const cy = H * 0.47;
  heartPts = Array.from({ length: N + 1 }, (_, i) => {
    const t = (i / N) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x: cx + x * s, y: cy - (y + 2.5) * s };
  });
}

function heartPath(x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y + s * 0.9);
  ctx.bezierCurveTo(x + s * 1.3, y + s * 0.1, x + s * 0.8, y - s * 0.9, x, y - s * 0.35);
  ctx.bezierCurveTo(x - s * 0.8, y - s * 0.9, x - s * 1.3, y + s * 0.1, x, y + s * 0.9);
  ctx.closePath();
}

function drawStars(now) {
  const t = now / 1000;
  for (const s of stars) {
    const a = reduceMotion ? 0.7 : 0.45 + 0.4 * Math.sin(t * s.speed + s.phase);
    ctx.fillStyle = "rgba(255, 244, 214, " + a.toFixed(3) + ")";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Rasi hati: garis emas yang tergambar perlahan saat halaman dibuka
function drawConstellation(now) {
  if (!unlocked) return;
  const DRAW_MS = 6000;
  const DELAY_MS = 600;
  const progress = reduceMotion ? 1 : Math.min(1, (now - startTime - DELAY_MS) / DRAW_MS);
  if (progress <= 0) return;

  const fade = Math.max(0, 1 - window.scrollY / (H * 0.7)); // memudar saat di-scroll
  if (fade <= 0) return;

  const total = heartPts.length - 1;
  const upto = progress * total;
  const whole = Math.min(total, Math.floor(upto));

  ctx.save();
  ctx.globalAlpha = fade;

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(246, 212, 139, 0.55)";
  ctx.beginPath();
  ctx.moveTo(heartPts[0].x, heartPts[0].y);
  for (let i = 1; i <= whole; i++) ctx.lineTo(heartPts[i].x, heartPts[i].y);
  if (whole < total) {
    const a = heartPts[whole];
    const b = heartPts[whole + 1];
    const f = upto - whole;
    ctx.lineTo(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f);
  }
  ctx.stroke();

  ctx.shadowColor = "rgba(246, 212, 139, 0.9)";
  ctx.shadowBlur = 12;
  ctx.fillStyle = "#f6d48b";
  for (let i = 0; i <= whole; i++) {
    const r = 2.2 + (reduceMotion ? 0 : 0.8 * Math.sin(now / 600 + i));
    ctx.beginPath();
    ctx.arc(heartPts[i].x, heartPts[i].y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function addHeart(h) {
  if (hearts.length > 140) hearts.shift();
  hearts.push(h);
}

function spawnAmbient() {
  const vy = -(35 + Math.random() * 45);
  addHeart({
    x: Math.random() * W,
    y: H + 10,
    vx: 0,
    vy,
    sway: 12,
    drag: 0,
    size: 4 + Math.random() * 5,
    life: 0,
    max: Math.min(14, (H + 60) / Math.abs(vy)),
    a: 0.35,
    phase: Math.random() * 6.28,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)]
  });
}

function spawnBurst(x, y) {
  const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.2;
  const speed = 90 + Math.random() * 170;
  addHeart({
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    sway: 0,
    drag: 0.9,
    size: 6 + Math.random() * 6,
    life: 0,
    max: 1.6 + Math.random() * 1.2,
    a: 0.9,
    phase: Math.random() * 6.28,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)]
  });
}

function updateHearts(dt) {
  for (let i = hearts.length - 1; i >= 0; i--) {
    const h = hearts[i];
    h.life += dt;
    if (h.life >= h.max) {
      hearts.splice(i, 1);
      continue;
    }
    h.x += (h.vx + Math.sin(h.life * 2 + h.phase) * h.sway) * dt;
    h.y += h.vy * dt;
    h.vx *= 1 - h.drag * dt;
    h.vy *= 1 - h.drag * dt;

    const alpha = h.a * Math.min(1, h.life / 0.4) * (1 - h.life / h.max);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = h.color;
    heartPath(h.x, h.y, h.size);
    ctx.fill();
    ctx.restore();
  }
}

let last = performance.now();
let ambientTimer = 0;

function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;

  ctx.clearRect(0, 0, W, H);
  drawStars(now);
  drawConstellation(now);

  if (!reduceMotion) {
    ambientTimer += dt;
    if (ambientTimer > 0.9) {
      ambientTimer = 0;
      spawnAmbient();
    }
  }
  updateHearts(dt);

  requestAnimationFrame(frame);
}

// Ketuk di mana saja (selain tombol) untuk mengirim hati
window.addEventListener("pointerdown", (e) => {
  if (!unlocked || e.target.closest("button, a, article, input")) return;
  for (let i = 0; i < 10; i++) spawnBurst(e.clientX, e.clientY);
});

window.addEventListener("resize", resize);
resize();
requestAnimationFrame(frame);

/* =========================================================
   Kata sandi & musik
   ========================================================= */
const hash53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const musicBtn = $("musicBtn");
const bgm = new Audio();
bgm.loop = true;
bgm.volume = 0.7;
let musicOk = Boolean(CONFIG.music);

if (musicOk) {
  bgm.src = CONFIG.music;
  bgm.addEventListener("error", () => { // file lagu belum ada: sembunyikan tombolnya
    musicOk = false;
    musicBtn.hidden = true;
  });
}

function updateMusicButton() {
  const playing = !bgm.paused;
  musicBtn.setAttribute("aria-pressed", String(playing));
  musicBtn.textContent = playing ? "Jeda musik" : "Putar musik";
}
bgm.addEventListener("play", updateMusicButton);
bgm.addEventListener("pause", updateMusicButton);
musicBtn.addEventListener("click", () => {
  if (bgm.paused) bgm.play().catch(() => {});
  else bgm.pause();
});

function unlock() {
  document.body.classList.remove("locked");
  $("gate").hidden = true;
  unlocked = true;
  startTime = performance.now(); // rasi hati mulai tergambar setelah dibuka
  window.scrollTo(0, 0);
  if (musicOk) {
    musicBtn.hidden = false;
    bgm.play().catch(() => {});
  }
}

$("gateForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const attempt = $("gateInput").value.trim().toLowerCase();
  if (hash53(attempt) === CONFIG.passwordHash) {
    unlock();
  } else {
    $("gateError").hidden = false;
    $("gateInput").select();
  }
});

if (CONFIG.passwordHash) $("gateInput").focus();
else unlock();
