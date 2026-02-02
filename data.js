let currentStep = 0;
let playerCash = 5000;
let employees = [];
let businesses = [];
let currentTurn = 1;
let totalTurns = 24;
let currentSlideIndex = 0;

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    renderTutorial();
});

// UI制御
function updateInteractiveElements() {
    const step = tutorialSteps[currentStep];
    const allButtons = document.querySelectorAll('button');
    const inputs = document.querySelectorAll('input, select');
    
    const gameControlIds = [
        'employee-btn', 'business-btn', 'end-turn-btn',
        'hire-junior-btn', 'hire-senior-btn', 'hire-expert-btn',
        'close-employee-btn', 'close-business-btn'
    ];

    if (step) {
        // ボタン制御
        allButtons.forEach(btn => {
            // ゲームのコントロールボタンかどうか判定
            if (gameControlIds.includes(btn.id)) {
                if (step.highlight && btn.id === step.highlight) {
                    // ハイライトされているボタンは有効
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                } else if (step.type === 'action-add-business' && btn.type === 'submit') {
                    // 事業追加アクション中の送信ボタンは有効
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    // それ以外は無効
                    btn.disabled = true;
                    btn.classList.add('opacity-50', 'cursor-not-allowed');
                }
            } else {
                // ゲームコントロール以外のボタン（ポップアップのOKボタンなど）は常に有効化
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        });

        // 入力制御
        inputs.forEach(input => {
            if (step.section === 'business' || step.type === 'action-add-business' || step.type === 'action-open-business') {
                 input.disabled = false;
            } else {
                 input.disabled = true;
            }
        });
    }
}

function renderTutorial() {
    const step = tutorialSteps[currentStep];

    if (step.type === 'intro' || step.type === 'phase-explanation') {
        renderSlides(step);
    } else if (step.type === 'tutorial-start') {
        renderTutorialStart(step);
    } else if (step.type === 'guide') {
        renderGameScreen();
        showGuidePopup(step);
    } else if (step.type.startsWith('action-')) {
        hideGuidePopup();
        renderGameScreen();
        // action-add-business 以外は自動進行
        if (step.type !== 'action-add-business') {
            setTimeout(() => nextStep(), 500);
        }
    } else if (step.type === 'complete') {
        showCompletionScreen();
    }
    
    setTimeout(updateInteractiveElements, 50);
}

function renderSlides(step) {
    const slide = step.slides[currentSlideIndex];
    const container = document.getElementById('tutorial-container');

    container.innerHTML = `
        <div class="mb-8">
            <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-slate-400">進捗</span>
                <span class="text-sm font-bold text-slate-300">${currentSlideIndex + 1} / ${step.slides.length}</span>
            </div>
            <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" style="width: ${((currentSlideIndex + 1) / step.slides.length) * 100}%"></div>
            </div>
        </div>

        <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 md:p-10 shadow-2xl" style="padding-bottom: 120px;">
            <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">${slide.title}</h2>
            <div class="fade-in overflow-y-auto max-h-[60vh]">${slide.content}</div>
        </div>

        <div class="mt-8 flex justify-between items-center">
            <button ${currentSlideIndex === 0 ? 'disabled class="opacity-30 cursor-not-allowed"' : ''} onclick="prevSlide()" class="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all">← 前へ</button>
            <div class="flex gap-2">
                ${step.slides.map((_, i) => `<div class="w-2 h-2 rounded-full transition-all ${i === currentSlideIndex ? 'bg-purple-500 w-8' : 'bg-slate-600'}"></div>`).join('')}
            </div>
            <button onclick="${currentSlideIndex === step.slides.length - 1 ? 'nextStep()' : 'nextSlide()'}" class="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                ${currentSlideIndex === step.slides.length - 1 ? (step.type === 'intro' ? '人材を雇う →' : '事業登録へ →') : '次へ →'}
            </button>
        </div>
    `;
    updateInteractiveElements();
}

function renderTutorialStart(step) {
    const container = document.getElementById('tutorial-container');
    
    const configs = {
        hiring: {
            emoji: '👥',
            title: 'まずは人材を雇ってみましょう！',
            description: '',
            content: `
                <div class="bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-3xl mx-auto">
                    <h3 class="text-xl font-bold mb-6 text-center">人財市場からえらぶ</h3>
                    <div class="space-y-6 text-slate-200 text-lg">
                        <div class="bg-slate-900/50 p-6 rounded-xl">
                            <p class="font-bold text-blue-300 mb-3">1. 自分のターンになったら</p>
                            <p class="leading-relaxed">「人材を雇う」を選択します。</p>
                        </div>
                        
                        <div class="bg-slate-900/50 p-6 rounded-xl">
                            <p class="font-bold text-blue-300 mb-3">2. 人材市場から選ぶ</p>
                            <p class="leading-relaxed">市場に並んでいる人材カードから、欲しい人材を<span class="text-yellow-400 font-bold">2枚まで</span>選びます。</p>
                        </div>

                        <div class="bg-slate-900/50 p-6 rounded-xl">
                            <p class="font-bold text-blue-300 mb-3">3. 人材カードを裏返す</p>
                            <p class="leading-relaxed">選んだ人材カードを<span class="text-purple-400 font-bold">裏返して</span>、真の能力値を確認します。</p>
                            <p class="text-slate-400 text-base mt-2">（面接時能力 → 雇用時能力）</p>
                        </div>

                        <div class="bg-slate-900/50 p-6 rounded-xl">
                            <p class="font-bold text-purple-300 mb-2">4. アプリで登録する</p>
                            <p class="leading-relaxed">人件費にあった人材を登録する。</p>
                        </div>

                        <div class="bg-slate-900/50 p-6 rounded-xl">
                            <p class="font-bold text-blue-300 mb-3">5. 手札に加える</p>
                            <p class="leading-relaxed">雇用した人材カードを手札に加えます。</p>
                        </div>
                        
                        <div class="text-center mt-6 pt-6 border-t border-slate-700">
                            <p class="text-xl font-bold text-yellow-400">今回はジュニア社員を雇ったとしてやってみましょう！</p>
                        </div>
                    </div>
                </div>
            `,
            buttonText: 'やってみる',
            buttonColor: 'from-blue-600 to-blue-700'
        },
        phase: {
            emoji: '📊',
            title: '次はアイディアのフェーズを進ませる流れを見ていきましょう！',
            description: '',
            content: `
                <div class="bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-3xl mx-auto">
                    <h3 class="text-xl font-bold mb-6 text-center">🎲 実際のプレイでは...</h3>
                    <div class="space-y-6 text-slate-200 text-lg">
                        <p class="leading-relaxed text-center">アイデアカードを選び、人材を配置して、<br>ダイス判定でフェーズを進めていきます。</p>
                        <p class="leading-relaxed text-center text-slate-400">詳しい流れを順番に見ていきましょう！</p>
                    </div>
                </div>
            `,
            buttonText: '流れを見る 📊',
            buttonColor: 'from-purple-600 to-purple-700'
        },
        business: {
            emoji: '🏢',
            title: '実際にアプリで事業を登録してみましょう！',
            description: 'ビジネス構築に成功したときの操作です',
            content: `
                <div class="bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-3xl mx-auto">
                    <h3 class="text-xl font-bold mb-6 text-center">🎉 ビジネス構築成功！</h3>
                    <div class="space-y-6 text-slate-200 text-lg">
                        <p class="leading-relaxed text-center">アイデアが事業として完成しました！</p>
                        <p class="leading-relaxed text-center">📱 アプリで事業情報を登録して、<br>毎月の収益を受け取れるようにしましょう。</p>
                    </div>
                </div>
            `,
            buttonText: '事業を登録する 🏢',
            buttonColor: 'from-green-600 to-green-700'
        }
    };

    const config = configs[step.section];

    container.innerHTML = `
        <div class="text-center space-y-8">
            <div class="text-8xl mb-6 animate-bounce">${config.emoji}</div>
            <h2 class="text-4xl font-bold">${config.title}</h2>
            <p class="text-xl text-slate-300">${config.description}</p>
            ${config.content}
            <button onclick="nextStep()" class="px-12 py-4 bg-gradient-to-r ${config.buttonColor} text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-lg transform hover:scale-105 transition-all pulse-slow">
                ${config.buttonText}
            </button>
        </div>
    `;
    updateInteractiveElements();
}

function renderGameScreen() {
    const container = document.getElementById('tutorial-container');
    const year = Math.floor((currentTurn - 1) / 12) + 1;
    const month = ((currentTurn - 1) % 12) + 1;

    container.innerHTML = `
        <header class="mb-8">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 class="game-title text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-black">
                        ロんチ
                    </h1>
                    <div class="flex flex-wrap items-center gap-3">
                        <div class="text-sm text-slate-400">
                            ${year}年目 ${month}月 (${currentTurn}/${totalTurns})
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-slate-800 rounded-xl p-4 flex items-center justify-between border border-slate-700">
                <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="font-semibold">現在のプレイヤー:</span>
                    <span class="text-lg font-bold text-purple-400">あなた</span>
                </div>
                <div class="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full font-semibold flex items-center gap-2">
                    <span>👉</span><span>あなたの番です</span>
                </div>
            </div>
        </header>

        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"><span>🏆</span><span>ランキング</span></h2>
            <div class="space-y-4">
                <div class="bg-slate-800 rounded-xl p-4 border border-purple-500 shadow-lg shadow-purple-500/30">
                    <div class="flex items-start gap-4">
                        <div class="rank-badge rank-1">1</div>
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <h3 class="text-xl font-bold">あなた</h3>
                                <span class="px-2 py-1 bg-green-900/50 border border-green-500 text-green-400 text-xs font-semibold rounded-full">YOU</span>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-3">
                                <div>
                                    <div class="text-xs text-slate-400 mb-1">現金</div>
                                    <div class="text-xl font-bold text-green-400">+${playerCash.toLocaleString()}万</div>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400 mb-1">事業価値</div>
                                    <div class="text-lg font-bold text-green-400">+${calculateBusinessValue()}万</div>
                                </div>
                            </div>
                            <div class="mt-3 pt-3 border-t border-slate-700">
                                <div class="flex justify-between items-center">
                                    <div class="text-xs text-slate-400">総合スコア</div>
                                    <div class="text-xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                        ${(playerCash + calculateBusinessValue()).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex flex-wrap gap-2 text-sm">
                                <span class="text-slate-400">👥 ${employees.length}人</span>
                                <span class="text-slate-400">🏢 ${businesses.length}事業</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-32">
            <button id="employee-btn" onclick="handleEmployeeBtn()" class="py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all">
                👥 人材管理
            </button>
            <button id="business-btn" onclick="handleBusinessBtn()" class="py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all">
                🏢 事業管理
            </button>
            <button id="end-turn-btn" onclick="handleEndTurnBtn()" class="col-span-2 md:col-span-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg shadow-xl hover:shadow-green-500/50 transition-all text-lg">
                ➡️ ターン終了
            </button>
        </section>
    `;

    const step = tutorialSteps[currentStep];
    if (step && step.highlight) {
        setTimeout(() => {
            const el = document.getElementById(step.highlight);
            if (el) {
                el.classList.add('tutorial-highlight');
                if (step.maskOthers) {
                    el.style.position = 'relative';
                    el.style.zIndex = '105';
                }
            }
        }, 100);
    }
    
    updateInteractiveElements();
}

function showGuidePopup(step) {
    const overlay = document.getElementById('tutorial-overlay');
    const message = document.getElementById('tutorial-message');

    if (step.maskOthers) {
        overlay.classList.remove('hidden');
        if (!step.message) {
            message.classList.add('hidden');
        } else {
            message.classList.remove('hidden');
        }
    } else if (step.message) {
        overlay.classList.remove('hidden');
        message.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
        return;
    }

    if (step.message) {
        message.innerHTML = `
            <div class="text-4xl mb-3">${step.highlight ? '👇' : '📱'}</div>
            <h3 class="text-xl font-bold mb-3 whitespace-pre-line">${step.message}</h3>
            <button onclick="hideGuidePopupAndNext()" class="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
                OK 👍
            </button>
        `;
    }
    // ポップアップ自体のZ-Indexを強制的に上げて最前面にする
    message.style.zIndex = '9999';
    updateInteractiveElements();
}

function hideGuidePopupAndNext() {
    hideGuidePopup();
    nextStep();
}

function hideGuidePopup() {
    const overlay = document.getElementById('tutorial-overlay');
    const message = document.getElementById('tutorial-message');
    
    const highlighted = document.querySelectorAll('.tutorial-highlight');
    highlighted.forEach(el => {
        el.classList.remove('tutorial-highlight');
        el.style.position = '';
        el.style.zIndex = '';
    });

    overlay.classList.add('hidden');
    message.classList.remove('hidden');
    message.style.zIndex = '';
}

function showCompletionScreen() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="text-center space-y-8">
            <div class="text-8xl mb-6 animate-bounce">🎉</div>
            <h2 class="text-4xl font-bold">チュートリアル完了！</h2>
            <p class="text-xl text-slate-300">お疲れさまでした！</p>
            <div class="bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-3xl mx-auto">
                <h3 class="text-2xl font-bold mb-6">📋 学んだこと</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div class="bg-slate-900/50 p-4 rounded-lg">
                        <p class="text-lg font-bold text-purple-400 mb-2">🎲 3つのフェーズ</p>
                        <p class="text-sm text-slate-400">立案→検証→構築</p>
                    </div>
                    <div class="bg-slate-900/50 p-4 rounded-lg">
                        <p class="text-lg font-bold text-blue-400 mb-2">👥 人材の雇用</p>
                        <p class="text-sm text-slate-400">市場から選んで裏返す</p>
                    </div>
                    <div class="bg-slate-900/50 p-4 rounded-lg">
                        <p class="text-lg font-bold text-green-400 mb-2">📊 フェーズ進行</p>
                        <p class="text-sm text-slate-400">配置→判定→結果</p>
                    </div>
                    <div class="bg-slate-900/50 p-4 rounded-lg">
                        <p class="text-lg font-bold text-yellow-400 mb-2">🏢 事業登録</p>
                        <p class="text-sm text-slate-400">アプリで記録</p>
                    </div>
                </div>
            </div>
            <button onclick="startGame()" class="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
                ゲームを始める 🎮
            </button>
        </div>
    `;
    updateInteractiveElements();
}

function calculateBusinessValue() {
    return businesses.reduce((sum, biz) => sum + (biz.profit * 12), 0);
}

function nextSlide() {
    currentSlideIndex++;
    renderTutorial();
}

function prevSlide() {
    currentSlideIndex--;
    renderTutorial();
}

function nextStep() {
    currentStep++;
    currentSlideIndex = 0;
    renderTutorial();
}

// 汎用確認ダイアログ表示関数
function showConfirmDialog(title, text, onConfirm) {
    const modal = document.getElementById('confirmation-modal');
    
    if (!modal) {
        if (confirm(text)) {
            onConfirm();
        }
        return;
    }

    document.getElementById('confirmation-title').textContent = title;
    document.getElementById('confirmation-text').textContent = text;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.zIndex = '9999';

    const okBtn = document.getElementById('confirm-ok-btn');
    const cancelBtn = document.getElementById('confirm-cancel-btn');

    const newOkBtn = okBtn.cloneNode(true);
    const newCancelBtn = cancelBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

    newOkBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        onConfirm();
    });

    newCancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
}

function handleEmployeeBtn() {
    const step = tutorialSteps[currentStep];
    if (step && step.type === 'guide' && step.highlight === 'employee-btn') {
        openEmployeeModal();
        hideGuidePopup();
        nextStep();
    } else {
        openEmployeeModal();
    }
}

function handleBusinessBtn() {
    const step = tutorialSteps[currentStep];
    if (step && step.type === 'guide' && step.highlight === 'business-btn') {
        openBusinessModal();
        hideGuidePopup();
        nextStep();
    } else {
        openBusinessModal();
    }
}

function handleEndTurnBtn() {
    const step = tutorialSteps[currentStep];
    // ハイライト中のクリック（ガイドステップ）でも次に進めるように修正
    if (step && step.type === 'guide' && step.highlight === 'end-turn-btn') {
        hideGuidePopup();
        // ガイドからアクションへ即座に移行して処理実行
        nextStep(); 
        setTimeout(() => {
            const next = tutorialSteps[currentStep];
            if (next && next.type === 'action-end-turn') {
                endTurn();
            }
        }, 100);
    } else if (step && step.type === 'action-end-turn') {
        endTurn();
    }
}

function openEmployeeModal() {
    const modal = document.getElementById('employee-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.zIndex = '110';
    
    setTimeout(() => {
        const step = tutorialSteps[currentStep];
        if (step && step.highlight && step.maskOthers) {
            const el = document.getElementById(step.highlight);
            if (el) {
                el.classList.add('tutorial-highlight');
                el.style.position = 'relative';
                el.style.zIndex = '115';
                
                const overlay = document.getElementById('tutorial-overlay');
                overlay.classList.remove('hidden');
                document.getElementById('tutorial-message').classList.add('hidden');
            }
        }
        updateInteractiveElements();
    }, 100);
}

function closeEmployeeModal() {
    const modal = document.getElementById('employee-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.zIndex = '';
    
    const highlighted = document.querySelectorAll('.tutorial-highlight');
    highlighted.forEach(el => {
        el.classList.remove('tutorial-highlight');
        el.style.position = '';
        el.style.zIndex = '';
    });
    
    document.getElementById('close-employee-btn').disabled = false;
    document.getElementById('close-employee-btn').classList.remove('opacity-50', 'cursor-not-allowed');
    
    setTimeout(updateInteractiveElements, 50);
}

function hireEmployee(type) {
    const step = tutorialSteps[currentStep];
    
    const confirmMessage = {
        junior: "ジュニア社員を雇用しますか？\n（人件費: 100万円/月）",
        senior: "シニア社員を雇用しますか？\n（人件費: 200万円/月）",
        expert: "エキスパートを雇用しますか？\n（人件費: 300万円/月）"
    };

    if (type === 'junior' && step && step.highlight === 'hire-junior-btn') {
        showConfirmDialog("雇用の確認", confirmMessage[type], () => {
            executeHire(type, step);
        });
    } else {
        executeHire(type, step);
    }
}

function executeHire(type, step) {
    const employeeTypes = {
        junior: { name: 'ジュニア社員', cost: 100, icon: '👨‍💼', skills: '企画力:1 営業力:1' },
        senior: { name: 'シニア社員', cost: 200, icon: '👔', skills: '企画力:2 営業力:1 技術力:1' },
        expert: { name: 'エキスパート', cost: 300, icon: '🎓', skills: '企画力:2 営業力:2 技術力:1 法務力:1' }
    };
    const emp = employeeTypes[type];
    employees.push({ ...emp, id: Date.now() });
    
    updateEmployeeList();
    closeEmployeeModal();
    hideGuidePopup();
    
    if (step && step.highlight === 'hire-junior-btn' && type === 'junior') {
        nextStep(); 
        setTimeout(() => {
            const nextStepData = tutorialSteps[currentStep];
            if (nextStepData && nextStepData.type === 'action-hire') {
                nextStep();
            }
        }, 500);
    } else if (step && step.type === 'action-hire') {
        setTimeout(() => nextStep(), 500);
    }
}

function updateEmployeeList() {
    const list = document.getElementById('employee-list');
    const count = document.getElementById('employee-count');
    count.textContent = employees.length;
    
    if (employees.length === 0) {
        list.innerHTML = '<p class="text-slate-400 text-sm">まだ社員はいません</p>';
    } else {
        list.innerHTML = employees.map(emp => `
            <div class="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-slate-700">
                <div>
                    <div class="font-semibold">${emp.icon} ${emp.name}</div>
                    <div class="text-xs text-slate-400">${emp.skills}</div>
                </div>
                <div class="text-sm text-red-400">-${emp.cost}万/月</div>
            </div>
        `).join('');
    }
}

function openBusinessModal() {
    const modal = document.getElementById('business-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.zIndex = '110';
    setTimeout(updateInteractiveElements, 100);
}

function closeBusinessModal() {
    const modal = document.getElementById('business-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.zIndex = '';
    
    const highlighted = document.querySelectorAll('.tutorial-highlight');
    highlighted.forEach(el => el.classList.remove('tutorial-highlight'));
    document.getElementById('close-business-btn').disabled = false;
    document.getElementById('close-business-btn').classList.remove('opacity-50', 'cursor-not-allowed');
    setTimeout(updateInteractiveElements, 50);
}

const businessForm = document.getElementById('business-form');
if (businessForm) {
    businessForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const step = tutorialSteps[currentStep];
        
        const name = document.getElementById('business-name-input').value;
        const profit = parseInt(document.getElementById('business-profit-input').value);
        const cost = parseInt(document.getElementById('business-cost-input').value);

        playerCash -= cost;

        businesses.push({ id: Date.now(), name, profit, cost });
        updateBusinessList();
        
        document.getElementById('business-name-input').value = '';
        document.getElementById('business-profit-input').value = '';
        document.getElementById('business-cost-input').value = '';
        
        closeBusinessModal();
        
        if (step && step.type === 'action-add-business') {
            setTimeout(() => nextStep(), 500);
        }
    });
}

function updateBusinessList() {
    const list = document.getElementById('business-list');
    if (businesses.length === 0) {
        list.innerHTML = '<p class="text-slate-400 text-sm">まだ事業はありません</p>';
    } else {
        list.innerHTML = businesses.map(biz => {
            const value = biz.profit * 12;
            return `
                <div class="p-4 bg-slate-900 rounded-lg border border-slate-700">
                    <div class="mb-2">
                        <h4 class="font-bold text-lg">${biz.name}</h4>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div class="${biz.profit >= 0 ? 'text-green-400' : 'text-red-400'}">
                            月間利益: ${biz.profit >= 0 ? '+' : ''}${biz.profit.toLocaleString()}万
                        </div>
                        <div class="${value >= 0 ? 'text-green-400' : 'text-red-400'} font-bold">
                            事業価値: ${value >= 0 ? '+' : ''}${value.toLocaleString()}万
                        </div>
                    </div>
                    <div class="mt-2 text-xs text-slate-500">
                        構築費用: ${biz.cost.toLocaleString()}万円
                    </div>
                </div>
            `;
        }).join('');
    }
}

function endTurn() {
    const monthlyIncome = 500;
    const businessIncome = businesses.reduce((sum, biz) => sum + biz.profit, 0);
    const employeeCost = employees.reduce((sum, emp) => sum + emp.cost, 0);
    const total = monthlyIncome + businessIncome - employeeCost;
    
    playerCash += total;
    currentTurn++;
    
    document.getElementById('result-business-income').textContent = `+${businessIncome}万`;
    document.getElementById('result-employee-cost').textContent = `-${employeeCost}万`;
    const totalEl = document.getElementById('result-total');
    totalEl.textContent = `${total >= 0 ? '+' : ''}${total}万`;
    totalEl.className = `text-xl font-black ${total >= 0 ? 'text-green-400' : 'text-red-400'}`;
    document.getElementById('result-cash').textContent = `${playerCash.toLocaleString()}万`;

    const resultModal = document.getElementById('turn-result-modal');
    resultModal.classList.remove('hidden');
    resultModal.classList.add('flex');

    const okBtn = document.getElementById('turn-result-ok-btn');
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);

    newOkBtn.addEventListener('click', () => {
        resultModal.classList.add('hidden');
        resultModal.classList.remove('flex');
        
        const step = tutorialSteps[currentStep];
        if (step && step.type === 'action-end-turn') {
            setTimeout(() => nextStep(), 500);
        }
    });
}

function startGame() {
    alert('ゲームを始めます！');
}