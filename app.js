// History Adventure — app.js

// Global State
let score = 0;
let selectedCard = null;
let correctAnswers = 0;
let wrongAnswers = 0;
let highScore = parseInt(localStorage.getItem('ha_highScore') || '0');
let currentTopic = 'peninsulaLocalizacao';

// Match Game State
let currentQuestion = 0;

// Complete Sentence State
let currentSentence = 0;
let selectedWord = null;
let currentBlanks = {};

// Timeline Game State
let selectedTimelineCard = null;
let timelinePlacements = {}; // slotIndex(1-based) -> event object

// Map Label Game State
let selectedMapTerm = null;
let mapLabelPlacements = {}; // rowIndex(1-based) -> term string

// Helper: get active topic data
function td() { return gameData[currentTopic]; }

// Helper: get glossary explanation (case-insensitive)
function explica(word) {
    if (!word) return '';
    const trans = td().translations || {};
    return trans[word] || trans[word.toLowerCase()] || '';
}

// ===========================================
// TOPIC SELECTOR
// ===========================================

const GAME_TABS = ['match', 'quiz', 'unscramble', 'complete', 'timeline', 'maplabel'];

function selectTopic(topic, btn) {
    currentTopic = topic;

    // Update topic button styles
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    updateTabVisibility();

    // If the currently active tab no longer applies to this unit, fall back to Match
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab || activeTab.hasAttribute('hidden')) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.game-section').forEach(s => s.classList.remove('active'));
        const matchTab = document.querySelector('.tab[data-game="match"]');
        matchTab.classList.add('active');
        document.getElementById('match-game').classList.add('active');
        initMatchGame();
        return;
    }

    // Restart the currently active game with new data
    const activeGame = document.querySelector('.game-section.active');
    if (activeGame) initGameById(activeGame.id);
}

function updateTabVisibility() {
    const data = td();
    document.querySelectorAll('.tab').forEach(tab => {
        const game = tab.dataset.game;
        const needsTimeline = game === 'timeline';
        const needsMapLabel = game === 'maplabel';
        const show = (!needsTimeline || !!data.timelineEvents) && (!needsMapLabel || !!data.mapLabels);
        tab.hidden = !show;
    });
}

function initGameById(id) {
    if (id === 'match-game')      initMatchGame();
    if (id === 'quiz-game')       initQuizGame();
    if (id === 'unscramble-game') initUnscrambleGame();
    if (id === 'complete-game')   initCompleteGame();
    if (id === 'timeline-game')   initTimelineGame();
    if (id === 'maplabel-game')   initMapLabelGame();
}

// ===========================================
// MATCH GAME
// ===========================================

function initMatchGame() {
    const grid = document.getElementById('match-grid');
    grid.innerHTML = '';
    selectedCard = null;

    const entries = Object.entries(td().matchWords);
    const words   = entries.map(([word]) => word);

    const shuffledEmojis = [...entries].sort(() => Math.random() - 0.5);
    const shuffledWords  = [...words].sort(() => Math.random() - 0.5);

    shuffledEmojis.forEach(([word, emoji]) => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `<span class="emoji-badge">${emoji}</span>`;
        card.dataset.type = 'emoji';
        card.dataset.word = word;
        card.onclick = () => selectCard(card);
        grid.appendChild(card);
    });

    shuffledWords.forEach(word => {
        const card = document.createElement('div');
        card.className = 'match-card match-word-card';
        card.innerHTML = word;
        card.dataset.type = 'word';
        card.dataset.word = word;
        card.onclick = () => selectCard(card);
        grid.appendChild(card);
    });

    updateMatchProgress();
}

function updateMatchProgress() {
    const total   = Object.keys(td().matchWords).length;
    const matched = document.querySelectorAll('.match-card.correct').length / 2;
    document.getElementById('match-progress').textContent = `Descobertos: ${matched}/${total}`;
}

function resetMatchGame() {
    selectedCard = null;
    initMatchGame();
}

function selectCard(card) {
    if (card.classList.contains('correct')) return;

    if (!selectedCard) {
        selectedCard = card;
        card.classList.add('selected');
    } else {
        if (selectedCard === card) {
            selectedCard.classList.remove('selected');
            selectedCard = null;
            return;
        }

        if (selectedCard.dataset.word === card.dataset.word &&
            selectedCard.dataset.type !== card.dataset.type) {
            selectedCard.classList.add('correct');
            card.classList.add('correct');
            selectedCard.classList.remove('selected');
            addScore(10);
            showFeedback('🎉', 'Muito bem!', true);
            selectedCard = null;

            updateMatchProgress();

            setTimeout(() => {
                const allCards     = document.querySelectorAll('.match-card');
                const correctCards = document.querySelectorAll('.match-card.correct');
                if (allCards.length === correctCards.length) {
                    showFeedback('🏆', 'Descobriste tudo!', true);
                }
            }, 500);
        } else {
            addWrongAnswer();
            showFeedback('😅', 'Tenta outra vez!', false);
            selectedCard.classList.remove('selected');
            selectedCard = null;
        }
    }
}

// ===========================================
// QUIZ GAME
// ===========================================

function initQuizGame() {
    currentQuestion = 0;
    td().quizQuestions.sort(() => Math.random() - 0.5);
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('quiz-container');
    const questions = td().quizQuestions;

    if (currentQuestion >= questions.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <div style="font-size: 5em;">🏆</div>
                <h2>Quiz completo!</h2>
                <p style="font-size: 1.3em; margin: 20px 0;">Respondeste a todas as ${questions.length} perguntas!</p>
                <p style="font-size: 1.5em; font-weight: bold; color: #2a5298; margin-bottom: 25px;">🌟 Pontos: ${score}</p>
                <button class="btn" onclick="initQuizGame()">🔄 Jogar outra vez</button>
            </div>
        `;
        return;
    }

    const pct = Math.round((currentQuestion / questions.length) * 100);
    const q   = questions[currentQuestion];
    container.innerHTML = `
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
        </div>
        <div class="progress-label">Pergunta ${currentQuestion + 1} / ${questions.length}</div>
        <div class="quiz-question">${q.emoji} ${q.question}</div>
        ${q.img && quizImages && quizImages[q.img] ? `<div class="quiz-image">${quizImages[q.img]}</div>` : ''}
        <div style="text-align: center; margin: 15px 0;">
            <button class="btn btn-hint" onclick="showHint()">💡 Precisas de uma dica?</button>
            <div id="hint-box" class="hint-box">💡 ${q.hint}</div>
        </div>
        <div class="quiz-options" id="quiz-options"></div>
    `;

    const optionsContainer = document.getElementById('quiz-options');
    q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, q.correct);
        optionsContainer.appendChild(btn);
    });
}

function showHint() {
    document.getElementById('hint-box').style.display = 'block';
}

function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');

    if (selected === correct) {
        options[selected].classList.add('correct');
        addScore(15);
        showFeedback('🌟', 'Correto!', true);
        setTimeout(() => { currentQuestion++; showQuestion(); }, 1500);
    } else {
        options[selected].classList.add('wrong');
        options[correct].classList.add('correct');
        addWrongAnswer();
        showFeedback('🔍', 'Quase — repara na resposta certa!', false);
        setTimeout(() => { currentQuestion++; showQuestion(); }, 2200);
    }
}

// ===========================================
// UNSCRAMBLE GAME
// ===========================================

function initUnscrambleGame() {
    const grid = document.getElementById('unscramble-grid');
    grid.innerHTML = '';

    const words = [...td().unscrambleWords].sort(() => Math.random() - 0.5);

    words.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'unscramble-item';
        div.innerHTML = `
            <div style="font-size: 3em; margin-bottom: 6px;">${item.emoji}</div>
            <div class="scrambled-word">${item.scrambled}</div>
            <input type="text" class="unscramble-input" id="unscramble-${index}"
                   placeholder="Escreve a palavra..."
                   autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                   onkeyup="checkUnscramble(${index}, '${item.answer}')">
            <button class="btn btn-hint" style="margin-top: 10px; font-size: 0.9em; padding: 8px 20px;"
                    onclick="showUnscrambleHint(${index}, '${item.hint.replace(/'/g, "\\'")}')">
                💡 Dica
            </button>
            <div id="hint-unscramble-${index}" class="hint-box" style="font-size: 0.95em;"></div>
        `;
        grid.appendChild(div);
    });
}

function showUnscrambleHint(index, hint) {
    const hintBox = document.getElementById(`hint-unscramble-${index}`);
    hintBox.textContent = `💡 ${hint}`;
    hintBox.style.display = 'block';
}

function checkUnscramble(index, answer) {
    const input = document.getElementById(`unscramble-${index}`);
    const value = input.value.toLowerCase().trim();

    if (input.classList.contains('correct')) return;

    if (value === answer) {
        input.classList.remove('wrong');
        input.classList.add('correct');
        input.disabled = true;
        if (!input.dataset.countedWrong) addScore(10);
        showFeedback('✅', 'Perfeito!', true);

        setTimeout(() => {
            const allInputs     = document.querySelectorAll('.unscramble-input');
            const correctInputs = document.querySelectorAll('.unscramble-input.correct');
            if (allInputs.length === correctInputs.length) {
                showFeedback('🏆', 'Todas as palavras descobertas!', true);
            }
        }, 300);
    } else if (value.length >= answer.length && !input.dataset.countedWrong) {
        input.classList.add('wrong');
        input.classList.remove('correct');
        input.dataset.countedWrong = 'true';
        addWrongAnswer();
    } else if (value.length > 0) {
        input.classList.add('wrong');
        input.classList.remove('correct');
    } else {
        input.classList.remove('wrong', 'correct');
    }
}

// ===========================================
// COMPLETE SENTENCE GAME
// ===========================================

function initCompleteGame() {
    currentSentence = 0;
    selectedWord    = null;
    currentBlanks   = {};
    showSentence();
}

function showSentence() {
    const container  = document.getElementById('complete-container');
    const sentences  = td().completeSentences;

    if (currentSentence >= sentences.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <div style="font-size: 5em;">🏆</div>
                <h2>Todas as frases completas!</h2>
                <p style="font-size: 1.3em; margin: 20px 0;">Completaste todas as ${sentences.length} frases!</p>
                <p style="font-size: 1.5em; font-weight: bold; color: #2a5298; margin-bottom: 25px;">🌟 Pontos: ${score}</p>
                <button class="btn" onclick="initCompleteGame()">🔄 Jogar outra vez</button>
            </div>
        `;
        return;
    }

    const pct      = Math.round((currentSentence / sentences.length) * 100);
    const exercise = sentences[currentSentence];
    selectedWord   = null;
    currentBlanks  = {};

    let blankCounter = 0;
    let sentenceHTML = exercise.sentence.replace(/_+/g, () => {
        blankCounter++;
        return `<span class="complete-blank" id="blank-${blankCounter}" onclick="selectBlank(${blankCounter})">[____]</span>`;
    });

    container.innerHTML = `
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
        </div>
        <div class="progress-label">Frase ${currentSentence + 1} / ${sentences.length}</div>
        <div class="complete-exercise">
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="font-size: 3em;">${exercise.emoji}</span>
            </div>
            <div class="complete-sentence">${sentenceHTML}</div>

            <div style="text-align: center; margin: 15px 0;">
                <button class="btn btn-hint" onclick="showCompletionHint()">💡 Precisas de uma dica?</button>
                <div id="hint-complete" class="hint-box">💡 ${exercise.hint}</div>
            </div>

            <div class="word-bank" id="word-bank">
                ${exercise.options.map((word, idx) =>
                    `<div class="word-option" id="word-${idx}" onclick="selectWord('${word}', ${idx})">${word}</div>`
                ).join('')}
            </div>

            <button class="check-answer-btn" onclick="checkCompleteSentence()" id="check-btn" disabled>
                ✓ Verificar resposta
            </button>
        </div>
    `;
}

function showCompletionHint() {
    document.getElementById('hint-complete').style.display = 'block';
}

function selectWord(word, index) {
    document.querySelectorAll('.word-option').forEach(opt => opt.classList.remove('selected'));
    selectedWord = word;
    document.getElementById(`word-${index}`).classList.add('selected');
}

function selectBlank(blankNum) {
    if (!selectedWord) {
        showFeedback('👆', 'Escolhe uma palavra primeiro!', false);
        return;
    }
    const blank = document.getElementById(`blank-${blankNum}`);
    blank.textContent = selectedWord;
    blank.classList.add('filled');
    currentBlanks[blankNum] = selectedWord;

    document.querySelectorAll('.word-option.selected').forEach(opt => {
        opt.classList.remove('selected');
        opt.classList.add('used');
    });
    selectedWord = null;

    const totalBlanks  = document.querySelectorAll('.complete-blank').length;
    const filledBlanks = Object.keys(currentBlanks).length;
    if (filledBlanks === totalBlanks) {
        document.getElementById('check-btn').disabled = false;
    }
}

function checkCompleteSentence() {
    const exercise = td().completeSentences[currentSentence];
    const blanks   = document.querySelectorAll('.complete-blank');
    let allCorrect = true;

    blanks.forEach((blank, index) => {
        const blankNum       = index + 1;
        const userAnswer     = currentBlanks[blankNum];
        const correctAnswer  = exercise.blank;

        if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            blank.classList.add('correct');
            blank.classList.remove('wrong', 'filled');
        } else {
            blank.classList.add('wrong');
            blank.classList.remove('correct', 'filled');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        addScore(20);
        showFeedback('🌟', 'Frase perfeita!', true);
        setTimeout(() => { currentSentence++; showSentence(); }, 2000);
    } else {
        addWrongAnswer();
        showFeedback('🔍', 'Quase — repara nas palavras a vermelho.', false);
        setTimeout(() => {
            blanks.forEach(blank => {
                blank.classList.remove('wrong', 'correct', 'filled');
                blank.textContent = '[____]';
            });
            document.querySelectorAll('.word-option').forEach(opt => {
                opt.classList.remove('used', 'selected');
            });
            currentBlanks = {};
            selectedWord  = null;
            document.getElementById('check-btn').disabled = true;
        }, 2200);
    }
}

// ===========================================
// TIMELINE GAME (Linha do Tempo) — History units only
// ===========================================

function initTimelineGame() {
    const events = td().timelineEvents;
    if (!events) return;

    selectedTimelineCard = null;
    timelinePlacements = {};

    const track = document.getElementById('timeline-track');
    const pool  = document.getElementById('timeline-pool');
    track.innerHTML = '';
    pool.innerHTML = '';

    events.forEach((_, i) => {
        const slot = document.createElement('div');
        slot.className = 'timeline-slot';
        slot.id = `timeline-slot-${i + 1}`;
        slot.onclick = () => placeInTimelineSlot(i + 1);
        slot.innerHTML = `<span class="timeline-slot-number">${i + 1}º</span><span class="timeline-slot-content">arrasta ou clica um acontecimento aqui</span>`;
        track.appendChild(slot);
    });

    const shuffled = [...events].sort(() => Math.random() - 0.5);
    shuffled.forEach((ev, idx) => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.dataset.index = events.indexOf(ev);
        card.innerHTML = `${ev.emoji} ${ev.event}`;
        card.onclick = () => selectTimelineCard(card);
        pool.appendChild(card);
    });

    document.getElementById('timeline-check-btn').disabled = true;
    document.getElementById('timeline-result').innerHTML = '';
}

function selectTimelineCard(card) {
    if (card.classList.contains('used')) return;
    document.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('selected'));
    if (selectedTimelineCard === card) {
        selectedTimelineCard = null;
        return;
    }
    selectedTimelineCard = card;
    card.classList.add('selected');
}

function placeInTimelineSlot(slotNum) {
    if (!selectedTimelineCard) {
        showFeedback('👆', 'Escolhe primeiro um acontecimento!', false);
        return;
    }
    const slot = document.getElementById(`timeline-slot-${slotNum}`);
    const eventIndex = parseInt(selectedTimelineCard.dataset.index);
    const ev = td().timelineEvents[eventIndex];

    slot.innerHTML = `<span class="timeline-slot-number">${slotNum}º</span><span class="timeline-slot-content">${ev.emoji} ${ev.event}</span>`;
    slot.classList.add('filled');
    timelinePlacements[slotNum] = ev;

    selectedTimelineCard.classList.add('used');
    selectedTimelineCard.classList.remove('selected');
    selectedTimelineCard = null;

    const total = td().timelineEvents.length;
    document.getElementById('timeline-check-btn').disabled = Object.keys(timelinePlacements).length !== total;
}

function checkTimeline() {
    const events = td().timelineEvents;
    const placed = events.map((_, i) => timelinePlacements[i + 1]);
    const correctOrder = [...events].sort((a, b) => a.sortYear - b.sortYear);

    let allCorrect = true;
    placed.forEach((ev, i) => {
        const slot = document.getElementById(`timeline-slot-${i + 1}`);
        if (ev === correctOrder[i]) {
            slot.classList.add('correct');
            slot.classList.remove('wrong');
        } else {
            slot.classList.add('wrong');
            slot.classList.remove('correct');
            allCorrect = false;
        }
    });

    const resultBox = document.getElementById('timeline-result');
    if (allCorrect) {
        addScore(25);
        showFeedback('🏆', 'Ordem cronológica perfeita!', true);
        resultBox.innerHTML = correctOrder.map(ev => `<div>${ev.emoji} <strong>${ev.year}</strong> — ${ev.event}</div>`).join('');
    } else {
        addWrongAnswer();
        showFeedback('🔍', 'Quase — repara nas datas a vermelho.', false);
        setTimeout(() => initTimelineGame(), 2400);
    }
}

// ===========================================
// MAP LABEL GAME (Legendar o Mapa) — Geography units only
// ===========================================

function initMapLabelGame() {
    const labels = td().mapLabels;
    if (!labels) return;

    selectedMapTerm = null;
    mapLabelPlacements = {};

    const pool = document.getElementById('maplabel-pool');
    const defs = document.getElementById('maplabel-definitions');
    pool.innerHTML = '';
    defs.innerHTML = '';

    const shuffledTerms = [...labels].sort(() => Math.random() - 0.5);
    shuffledTerms.forEach(item => {
        const chip = document.createElement('div');
        chip.className = 'maplabel-term';
        chip.textContent = item.term;
        chip.onclick = () => selectMapTerm(chip, item.term);
        pool.appendChild(chip);
    });

    const shuffledDefs = [...labels].sort(() => Math.random() - 0.5);
    shuffledDefs.forEach((item, i) => {
        const row = document.createElement('div');
        row.className = 'maplabel-def-row';
        row.innerHTML = `
            <span class="maplabel-def-text">${item.definition}</span>
            <span class="maplabel-answer-slot" id="maplabel-slot-${i + 1}" onclick="placeMapTerm(${i + 1})">?</span>
        `;
        row.dataset.correctTerm = item.term;
        defs.appendChild(row);
    });

    document.getElementById('maplabel-check-btn').disabled = true;
}

function selectMapTerm(chip, term) {
    if (chip.classList.contains('used')) return;
    document.querySelectorAll('.maplabel-term').forEach(c => c.classList.remove('selected'));
    if (selectedMapTerm && selectedMapTerm.chip === chip) {
        selectedMapTerm = null;
        return;
    }
    selectedMapTerm = { chip, term };
    chip.classList.add('selected');
}

function placeMapTerm(slotNum) {
    if (!selectedMapTerm) {
        showFeedback('👆', 'Escolhe primeiro uma palavra!', false);
        return;
    }
    const slot = document.getElementById(`maplabel-slot-${slotNum}`);
    slot.textContent = selectedMapTerm.term;
    slot.classList.add('filled');
    mapLabelPlacements[slotNum] = selectedMapTerm.term;

    selectedMapTerm.chip.classList.add('used');
    selectedMapTerm.chip.classList.remove('selected');
    selectedMapTerm = null;

    const total = td().mapLabels.length;
    document.getElementById('maplabel-check-btn').disabled = Object.keys(mapLabelPlacements).length !== total;
}

function checkMapLabels() {
    const rows = document.querySelectorAll('.maplabel-def-row');
    let allCorrect = true;

    rows.forEach((row, i) => {
        const slotNum = i + 1;
        const slot = document.getElementById(`maplabel-slot-${slotNum}`);
        const correctTerm = row.dataset.correctTerm;
        const userTerm = mapLabelPlacements[slotNum];

        if (userTerm === correctTerm) {
            slot.classList.add('correct');
            slot.classList.remove('wrong');
        } else {
            slot.classList.add('wrong');
            slot.classList.remove('correct');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        addScore(25);
        showFeedback('🏆', 'Legendaste o mapa na perfeição!', true);
    } else {
        addWrongAnswer();
        showFeedback('🔍', 'Quase — repara nas respostas a vermelho.', false);
        setTimeout(() => initMapLabelGame(), 2400);
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

function showGame(game, btn) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.game-section').forEach(section => section.classList.remove('active'));

    if (btn) btn.classList.add('active');
    document.getElementById(`${game}-game`).classList.add('active');

    initGameById(`${game}-game`);
}

function addScore(points) {
    score += points;
    correctAnswers++;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('ha_highScore', highScore);
        document.getElementById('high-score').textContent = highScore;
    }
    updateStats();
}

function addWrongAnswer() {
    wrongAnswers++;
    updateStats();
}

function updateStats() {
    document.getElementById('score').textContent         = score;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent   = wrongAnswers;
    const total    = correctAnswers + wrongAnswers;
    const accuracy = total > 0 ? Math.round((correctAnswers / total) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

function playSound(success) {
    try {
        const ctx  = new (window.AudioContext || window.webkitAudioContext)();
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = success ? 880 : 220;
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
}

function showFeedback(emoji, text, success) {
    playSound(success);
    const feedback = document.getElementById('feedback');
    document.getElementById('feedback-emoji').textContent = emoji;
    document.getElementById('feedback-text').textContent  = text;
    feedback.style.background = success
        ? 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
        : 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
    feedback.classList.add('show');
    setTimeout(() => feedback.classList.remove('show'), 1500);
}

// Initialize on load
window.onload = () => {
    document.getElementById('high-score').textContent = highScore;
    updateTabVisibility();
    initMatchGame();
};
