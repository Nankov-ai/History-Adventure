// History Adventure — images.js
// Simple inline HTML/CSS visuals (no external images) referenced via `img: 'key'` on quiz questions.

const quizImages = {

  // A1 — continents grid highlighting the Península Ibérica in Europe
  mapaContinentes: `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:420px;margin:0 auto;font-weight:bold;">
      <div style="background:#f6d365;padding:14px;border-radius:10px;">🌎 América</div>
      <div style="background:#8b4513;color:white;padding:14px;border-radius:10px;border:3px solid #ffd700;">🌍 Europa<br><span style="font-size:0.7em;font-weight:normal;">📍 Península Ibérica aqui</span></div>
      <div style="background:#4facfe;color:white;padding:14px;border-radius:10px;">🌏 Ásia</div>
      <div style="background:#84fab0;padding:14px;border-radius:10px;">🌍 África</div>
      <div style="background:#e0c3fc;padding:14px;border-radius:10px;">🧊 Oceânia</div>
      <div style="background:#cfd9df;padding:14px;border-radius:10px;">❄️ Antártida</div>
    </div>`,

  // A2 — schematic relief regions of the Iberian Peninsula
  mapaRelevoEsquema: `
    <div style="max-width:420px;margin:0 auto;">
      <div style="background:linear-gradient(180deg,#8b4513 0%,#b8860b 100%);color:white;padding:10px;border-radius:10px 10px 0 0;font-weight:bold;text-align:center;">⛰️ Norte / Centro — Montanhas</div>
      <div style="background:linear-gradient(180deg,#f6d365 0%,#fda085 100%);padding:10px;text-align:center;font-weight:bold;">🏞️ Meseta / Rios principais</div>
      <div style="background:linear-gradient(180deg,#84fab0 0%,#8fd3f4 100%);padding:10px;border-radius:0 0 10px 10px;text-align:center;font-weight:bold;">🌾 Sudoeste — Planícies</div>
    </div>`,

  // B4 — Reconquista progress: Condado Portucalense → Kingdom of Portugal
  mapaReconquista: `
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;max-width:500px;margin:0 auto;">
      <div style="background:#b8860b;color:white;padding:16px;border-radius:10px;text-align:center;font-weight:bold;">🏰<br>Condado Portucalense<br><span style="font-size:0.75em;font-weight:normal;">séc. XI</span></div>
      <div style="align-self:center;font-size:1.5em;">➡️</div>
      <div style="background:#8b4513;color:white;padding:16px;border-radius:10px;text-align:center;font-weight:bold;">👑<br>Reino de Portugal<br><span style="font-size:0.75em;font-weight:normal;">1128 em diante</span></div>
      <div style="align-self:center;font-size:1.5em;">➡️</div>
      <div style="background:#2a5298;color:white;padding:16px;border-radius:10px;text-align:center;font-weight:bold;">🌊<br>+ Algarve<br><span style="font-size:0.75em;font-weight:normal;">1249</span></div>
    </div>`,

  // C2 — Portuguese maritime expansion stages
  mapaExpansaoMaritima: `
    <div style="display:flex;flex-direction:column;gap:6px;max-width:480px;margin:0 auto;font-weight:bold;">
      <div style="background:#4facfe;color:white;padding:10px 16px;border-radius:10px;">1415 ⛵ Ceuta</div>
      <div style="background:#00f2fe;color:#333;padding:10px 16px;border-radius:10px;">1418-1460 🧭 Costa africana (Infante D. Henrique)</div>
      <div style="background:#84fab0;color:#333;padding:10px 16px;border-radius:10px;">1488 🌊 Cabo da Boa Esperança (Bartolomeu Dias)</div>
      <div style="background:#f6d365;color:#333;padding:10px 16px;border-radius:10px;">1498 🇮🇳 Índia (Vasco da Gama)</div>
      <div style="background:#fda085;color:white;padding:10px 16px;border-radius:10px;">1500 🌴 Brasil (Pedro Álvares Cabral)</div>
    </div>`,
};
