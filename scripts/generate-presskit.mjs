import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import translations, { languages } from "../src/config/translations.ts";
import { tracks } from "../src/config/tracks.ts";
import { press } from "../src/config/press.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const asset = (name) => resolve(root, "src/assets", name);
const fontFile = (name) => resolve(root, "scripts/fonts", name);

// 16:9 landscape
const W = 960;
const H = 540;
const M = 48;
const BG = "#161210";
const PANEL = "#241c18";
const FG = "#e6d9c8";
const MUTED = "#a89a88";
const LINE = "#4a3c34";
const ACCENT = "#e0552b";

// Mismas familias que la web (Unbounded, Work Sans, JetBrains Mono)
const DISPLAY = "Display";
const BODY = "Body";
const BODY_BOLD = "BodyBold";
const MONO = "Mono";

const memberData = [
  ["ARIEL KARLEN", "member-guitar.jpg"],
  ["LUIS SANGUINET", "member-bass.jpg"],
  ["GINO BAILONE", "member-drums.jpg"],
  ["GERMÁN TRIGUEIRO SOLER", "member-voice.jpg"],
];

const contacts = [
  ["Web", "somosruido.netlify.app", "https://somosruido.netlify.app/"],
  ["Email", "somosruidostoner@gmail.com", "mailto:somosruidostoner@gmail.com"],
  ["Facebook", "facebook.com/ruidostoner", "https://www.facebook.com/ruidostoner"],
  ["Instagram", "instagram.com/ruidostoner", "https://www.instagram.com/ruidostoner/"],
  ["YouTube", "youtube.com/@RuidoStoner", "https://www.youtube.com/@RuidoStoner"],
  [
    "Spotify",
    "open.spotify.com/artist/5JtPSYR8LqBD2iHtn045tM",
    "https://open.spotify.com/intl-es/artist/5JtPSYR8LqBD2iHtn045tM?si=Hdt4LHlNT2WkZj7YflqwAQ",
  ],
];

const spotifyAlbum =
  "https://open.spotify.com/intl-es/album/0oPejU1pLApYrdZhy37tyt?si=jZ9BRgAOQ9uGiefmDJ-s8Q";
const youtubeAlbum =
  "https://music.youtube.com/playlist?list=OLAK5uy_mGOx6lhspNETe44fQaVvRC19wdkEERyJc&si=rSE4raQQ1njqP6Kx";

function build(lang) {
  const t = translations[lang];
  const output = resolve(root, `public/ruido-presskit-${lang}.pdf`);
  const doc = new PDFDocument({
    size: [W, H],
    margin: 0,
    info: { Title: "R U I D O - Press Kit" },
  });
  if (lang === "en") {
    const text = doc.text.bind(doc);
    const plain = (s) =>
      typeof s === "string" ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : s;
    doc.text = (s, ...args) => text(plain(s), ...args);
  }
  doc.registerFont(DISPLAY, fontFile("Unbounded-Black.ttf"));
  doc.registerFont(BODY, fontFile("WorkSans-Light.ttf"));
  doc.registerFont(BODY_BOLD, fontFile("WorkSans-SemiBold.ttf"));
  doc.registerFont(MONO, fontFile("JetBrainsMono-Medium.ttf"));

  mkdirSync(dirname(output), { recursive: true });
  doc.pipe(createWriteStream(output));

  const background = () => doc.rect(0, 0, W, H).fill(BG);
  const rule = (x1, y, x2) =>
    doc.moveTo(x1, y).lineTo(x2, y).lineWidth(0.5).strokeColor(LINE).stroke();

  const kicker = (text, x, y, width) =>
    doc.font(MONO).fontSize(8.5).fillColor(ACCENT).text(text.toUpperCase(), x, y, {
      characterSpacing: 2,
      width,
    });

  const title = (text, x, y, width, size = 26) =>
    doc.font(DISPLAY).fontSize(size).fillColor(FG).text(text.toUpperCase(), x, y, {
      width,
      lineGap: -2,
    });

  const footer = (n) => {
    doc.rect(M, H - 38, 40, 1.5).fill(ACCENT);
    doc
      .font(MONO)
      .fontSize(7.5)
      .fillColor(MUTED)
      .text("R U I D O - PRESS KIT", M, H - 28, { characterSpacing: 1.5 });
    doc.text(`${String(n).padStart(2, "0")} / 06`, M, H - 28, { width: W - 2 * M, align: "right" });
  };

  const darken = (opacity) => doc.save().fillOpacity(opacity).rect(0, 0, W, H).fill(BG).restore();

  const brandParagraph = (text, x, y, width) => {
    const parts = text.split("R U I D O");
    const opts = { width, lineGap: 2.5 };
    doc.fontSize(9.5);
    parts.forEach((part, i) => {
      const last = i === parts.length - 1;
      doc.font(BODY).fillColor(MUTED);
      doc.text(part, i === 0 ? x : undefined, i === 0 ? y : undefined, {
        ...opts,
        continued: !last,
      });
      if (!last) {
        doc.font(BODY_BOLD).fillColor(FG);
        doc.text("R U I D O", { ...opts, continued: true });
      }
    });
  };

  // 1. Cover
  doc.image(asset("ruido-hero.jpg"), 0, 0, { cover: [W, H], align: "center", valign: "center" });
  const shade = doc.linearGradient(0, 0, 0, H);
  shade.stop(0, BG, 0.35).stop(0.4, BG, 0.2).stop(1, BG, 0.95);
  doc.rect(0, 0, W, H).fill(shade);
  doc.image(asset("logoFinal.png"), M, M, { fit: [170, 70] });
  kicker(t.hero.kicker, M, H - 250, W - 2 * M);
  doc
    .font(DISPLAY)
    .fontSize(54)
    .fillColor(FG)
    .text(t.hero.titleLine1.toUpperCase(), M, H - 228, { lineGap: -6, width: W - 2 * M });
  doc.fillColor(ACCENT).text(t.hero.titleHighlight.toUpperCase(), { lineGap: -6 });
  doc
    .font(BODY)
    .fontSize(12)
    .fillColor(FG)
    .text(t.hero.description, M, H - 90, { width: 420 });
  doc.font(MONO).fontSize(7.5).fillColor(MUTED);
  doc.text(t.hero.volume.toUpperCase(), M, H - 36, { characterSpacing: 1.5 });
  doc.text("PRESS KIT", M, H - 36, { width: W - 2 * M, align: "right", characterSpacing: 1.5 });

  // 2. History
  doc.addPage();
  background();
  const imgW = 340;
  doc.image(asset("ruido-amps.jpg"), 0, 0, { cover: [imgW, H], align: "center", valign: "center" });
  doc.rect(imgW, 0, 3, H).fill(ACCENT);
  const hx = imgW + 48;
  const hw = W - hx - M;
  kicker(t.history.kicker, hx, 36, hw);
  title(`${t.history.titleLine1} ${t.history.titleLine2}`, hx, 52, hw, 24);
  let y = 96;
  for (const p of t.history.paragraphs) {
    brandParagraph(p, hx, y, hw);
    y = doc.y + 7;
  }
  doc.rect(hx, y + 5, 50, 1.5).fill(ACCENT);
  doc
    .font(MONO)
    .fontSize(7.5)
    .fillColor(MUTED)
    .text(t.history.tagline.toUpperCase(), hx + 62, y, { characterSpacing: 1.5, lineBreak: false });
  footer(2);

  // 3. Discography
  doc.addPage();
  background();
  kicker(t.music.kicker, M, 36, 300);
  const cover = 330;
  doc.rect(M + 10, 70 + 10, cover, cover).fill(PANEL);
  doc.image(asset("6monedas.jpg"), M, 70, { fit: [cover, cover] });
  const rx = M + cover + 50;
  const rw = W - rx - M;
  doc
    .font(MONO)
    .fontSize(8.5)
    .fillColor(ACCENT)
    .text(t.music.eyebrow.toUpperCase(), rx, 74, { width: rw, characterSpacing: 2 });
  doc
    .font(DISPLAY)
    .fontSize(21)
    .fillColor(FG)
    .text(t.music.title.toUpperCase(), rx, 92, { width: rw, lineGap: -2 });
  doc
    .font(BODY)
    .fontSize(10)
    .fillColor(MUTED)
    .text(t.music.infoContent, rx, doc.y + 10, { width: rw, lineGap: 3 });
  let ty = doc.y + 24;
  rule(rx, ty, W - M);
  for (const [n, name, dur] of tracks) {
    doc
      .font(MONO)
      .fontSize(8.5)
      .fillColor(ACCENT)
      .text(n, rx, ty + 10, { lineBreak: false });
    doc
      .font(BODY_BOLD)
      .fontSize(12)
      .fillColor(FG)
      .text(name, rx + 36, ty + 7, { lineBreak: false });
    doc
      .font(MONO)
      .fontSize(8.5)
      .fillColor(MUTED)
      .text(dur, rx, ty + 10, { width: rw, align: "right", lineBreak: false });
    ty += 30;
    rule(rx, ty, W - M);
  }
  doc.font(MONO).fontSize(9.5).fillColor(ACCENT);
  doc.text("SPOTIFY", rx, ty + 22, {
    link: spotifyAlbum,
    underline: true,
    characterSpacing: 1.5,
    lineBreak: false,
  });
  doc.text("YOUTUBE", rx + 90, ty + 22, {
    link: youtubeAlbum,
    underline: true,
    characterSpacing: 1.5,
    lineBreak: false,
  });
  footer(3);

  // 4. Members
  doc.addPage();
  background();
  kicker(t.members.kicker, M, 36, 400);
  title(t.members.title, M, 52, 700, 24);
  doc
    .font(BODY)
    .fontSize(11)
    .fillColor(MUTED)
    .text(t.members.subtitle, M, doc.y + 8);
  const gap = 18;
  const cw = (W - 2 * M - 3 * gap) / 4;
  const ch = 290;
  const my = 130;
  memberData.forEach(([name, image], i) => {
    const x = M + i * (cw + gap);
    doc.save();
    doc.rect(x, my, cw, ch).clip();
    doc.image(asset(image), x, my, { cover: [cw, ch], align: "center", valign: "center" });
    doc.restore();
    doc.rect(x, my + ch, 30, 2).fill(ACCENT);
    doc
      .font(BODY_BOLD)
      .fontSize(10.5)
      .fillColor(FG)
      .text(name, x, my + ch + 10, { width: cw });
    doc
      .font(MONO)
      .fontSize(8)
      .fillColor(MUTED)
      .text(t.members.roles[i].toUpperCase(), x, doc.y + 3, { characterSpacing: 1.5 });
  });
  footer(4);

  // 5. Press
  doc.addPage();
  background();
  kicker(t.press.kicker, M, 36, 400);
  title(t.press.title, M, 52, 700, 24);
  doc
    .font(BODY)
    .fontSize(11)
    .fillColor(MUTED)
    .text(t.press.subtitle, M, doc.y + 8);
  const colGap = 28;
  const colW = (W - 2 * M - 2 * colGap) / 3;
  ["nota", "entrevista", "podcast"].forEach((cat, ci) => {
    const x = M + ci * (colW + colGap);
    let py = 138;
    doc
      .font(MONO)
      .fontSize(8.5)
      .fillColor(ACCENT)
      .text(t.press.filters[cat].toUpperCase(), x, py, { characterSpacing: 2, lineBreak: false });
    py += 18;
    for (const item of press.filter((p) => p.category === cat)) {
      rule(x, py, x + colW);
      doc
        .font(BODY_BOLD)
        .fontSize(9.5)
        .fillColor(FG)
        .text(item.outlet, x, py + 5, { width: colW - 36, lineBreak: false, ellipsis: true });
      doc
        .font(BODY)
        .fontSize(8)
        .fillColor(MUTED)
        .text(item.country, x, py + 18, { width: colW - 36, lineBreak: false });
      doc
        .font(MONO)
        .fontSize(7.5)
        .fillColor(ACCENT)
        .text(t.press.viewLabel.toUpperCase(), x, py + 9, {
          width: colW,
          align: "right",
          link: item.url,
          underline: true,
          lineBreak: false,
        });
      py += 30;
    }
  });
  footer(5);

  // 6. Contact
  doc.addPage();
  background();
  doc.image(asset("ruido-hero.jpg"), 0, 0, { cover: [W, H], align: "center", valign: "center" });
  darken(0.82);
  doc.image(asset("logoFinal.png"), M, M, { fit: [150, 60] });
  kicker(t.contact.kicker, M, 200, 380);
  title(t.contact.title, M, 218, 420, 26);
  doc
    .font(MONO)
    .fontSize(9)
    .fillColor(MUTED)
    .text(t.contact.tagline.trim().toUpperCase(), M, doc.y + 10, { characterSpacing: 2 });
  const cx = 500;
  let cy = 110;
  for (const [label, text, url] of contacts) {
    rule(cx, cy, W - M);
    doc
      .font(MONO)
      .fontSize(8.5)
      .fillColor(ACCENT)
      .text(label.toUpperCase(), cx, cy + 16, { characterSpacing: 2, lineBreak: false });
    doc
      .font(BODY_BOLD)
      .fontSize(11)
      .fillColor(FG)
      .text(text, cx + 95, cy + 14, { link: url, underline: true, lineBreak: false });
    cy += 46;
  }
  rule(cx, cy, W - M);
  footer(6);

  doc.end();
  console.log(`Press kit generado: ${output}`);
}

for (const lang of languages) build(lang);
