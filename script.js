// チュートリアルスライドのデータ
const tutorialSteps = [
    // 概要説明ステップ（1-5枚目）
    {
        type: 'intro',
        slides: [
            {
                title: "🎮 ロんチへようこそ！",
                content: `
                    <div class="space-y-8">
                        <div class="text-center">
                            <div class="text-6xl mb-4">🚀</div>
                            <h2 class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                                ロんチ
                            </h2>
                            <p class="text-xl font-bold text-slate-200 leading-relaxed mb-4">
                                新規事業を立ち上げ、成長させて<br>
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-black text-3xl">No.1</span> を目指すゲームです
                            </p>
                        </div>

                        <div class="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-8 rounded-2xl border-2 border-purple-500 shadow-2xl">
                            <h3 class="text-2xl font-bold text-purple-300 mb-6 text-center">👔 あなたの役割</h3>
                            <div class="space-y-4 text-slate-200 text-lg">
                                <p class="leading-relaxed">
                                    あなたは<span class="text-purple-300 font-bold">「新規事業部署の担当者」</span>です。
                                </p>
                                <p class="leading-relaxed">
                                    <span class="font-bold text-yellow-200">他の社員が稼いだお金</span>を<br>
                                    <span class="text-green-400 font-bold text-xl">毎月500万円</span>いただきながら、<br>
                                    新しい事業創出に挑戦しています。
                                </p>
                            </div>
                        </div>

                        <div class="bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-8 rounded-2xl border-2 border-blue-500 shadow-2xl">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6 text-center">🎯 ゲームの目的</h3>
                            <div class="space-y-4 text-slate-200 text-lg">
                                <p class="leading-relaxed text-center">
                                    限られた<span class="text-yellow-400 font-bold">「資金」</span>と<span class="text-yellow-400 font-bold">「時間（2年間）」</span>の中で、
                                </p>
                                <ul class="space-y-2 ml-6 text-left inline-block">
                                    <li class="flex items-center gap-2">
                                        <span class="text-green-400 text-xl">✓</span>
                                        <span>人材を採用し</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-green-400 text-xl">✓</span>
                                        <span>アイデアを育て</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-green-400 text-xl">✓</span>
                                        <span>事業を構築すること</span>
                                    </li>
                                </ul>
                                <p class="leading-relaxed pt-4 border-t border-blue-700 text-center">
                                    新規事業が辿るプロセスでの<br>
                                    <span class="text-blue-300 font-bold">「人材」「アイデア」「資金」</span>の動きを<br>
                                    シミュレートするゲームです！
                                </p>
                            </div>
                        </div>

                        <div class="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border-2 border-slate-600 shadow-2xl">
                            <h3 class="text-2xl font-bold text-slate-200 mb-4 text-center">🏆 勝利条件</h3>
                            <p class="text-lg text-slate-300 text-center mb-4">終了時にスコアが高かった人が勝ちです。</p>
                            <p class="text-xl font-bold text-green-400 text-center mb-3">スコア ＝ 現金 ＋ 事業価値</p>
                            <p class="text-base text-slate-300 text-center">※ 事業価値 = 1年間で上げる利益（月間利益 × 36ヶ月）</p>
                        </div>

                        <div class="p-6 bg-blue-900/30 border-2 border-blue-500 rounded-xl">
                            <p class="text-blue-200 text-center text-lg">
                                💡 このゲームは<span class="font-bold">ボードゲーム</span>と<span class="font-bold">アプリ</span>を<br>
                                組み合わせて遊びます
                            </p>
                        </div>
                    </div>
                `
            },
            {
                title: "📊 新規事業の3つのフェーズ",
                content: `
                    <p class="text-slate-200 text-center mb-8 text-lg">新規事業には3つのフェーズがあります</p>
                    <p class="text-slate-300 text-center mb-8">アイデアに必要な人材を配置して、判定に成功するとフェーズが進みます</p>
                    <div class="space-y-4">
                        <div class="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-6 rounded-xl border-2 border-purple-500">
                            <div class="flex items-center gap-4 mb-3">
                                <div class="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                <h3 class="text-2xl font-bold text-purple-300">仮説立案</h3>
                            </div>
                            <p class="text-slate-200 ml-16 mb-2 text-base">💡 アイデアを考え、顧客課題を特定する段階</p>
                        </div>

                        <div class="bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-6 rounded-xl border-2 border-blue-500">
                            <div class="flex items-center gap-4 mb-3">
                                <div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                <h3 class="text-2xl font-bold text-blue-300">仮説検証</h3>
                            </div>
                            <p class="text-slate-200 ml-16 mb-2 text-base">🔬 小さく試して、顧客の反応を確かめる段階</p>
                        </div>

                        <div class="bg-gradient-to-r from-green-900/50 to-green-800/30 p-6 rounded-xl border-2 border-green-500">
                            <div class="flex items-center gap-4 mb-3">
                                <div class="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                <h3 class="text-2xl font-bold text-green-300">ビジネス構築</h3>
                            </div>
                            <p class="text-slate-200 ml-16 mb-2 text-base">🏗️ 事業を本格的に立ち上げる段階</p>
                            <div class="ml-16 p-4 bg-green-900/30 border-2 border-green-500 rounded-lg">
                                <p class="text-base font-bold text-green-200">💰 成功すると...</p>
                                <p class="text-sm text-slate-200 mt-1">毎月の利益が入ってくるようになります！</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "📈 事業規模（S・M・L）",
                content: `
                    <p class="text-slate-200 text-center mb-6 text-lg">事業規模によって利益・判定難易度・必要能力が変わります</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="bg-slate-800 p-6 rounded-xl border-2 border-slate-500">
                            <div class="text-center mb-4">
                                <div class="text-5xl mb-2">🏪</div>
                                <h4 class="text-2xl font-bold text-slate-300">S (小規模)</h4>
                            </div>
                            <div class="space-y-3">
                                <div class="p-4 bg-slate-900/50 rounded-lg">
                                    <p class="text-sm text-slate-400 mb-1">月間利益</p>
                                    <p class="text-2xl font-bold text-green-400">200〜400万</p>
                                </div>
                                <div class="p-4 bg-green-900/30 border border-green-600 rounded-lg">
                                    <p class="text-sm text-green-300 font-bold mb-1">ダイス判定</p>
                                    <p class="text-sm text-slate-200">通りやすい</p>
                                    <p class="text-xs text-slate-400">(10面ダイスで3以上)</p>
                                </div>
                                <div class="p-4 bg-blue-900/30 border border-blue-600 rounded-lg">
                                    <p class="text-sm text-blue-300 font-bold mb-1">必要能力</p>
                                    <p class="text-sm text-slate-200">低い</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-800 p-6 rounded-xl border-2 border-blue-500">
                            <div class="text-center mb-4">
                                <div class="text-5xl mb-2">🏢</div>
                                <h4 class="text-2xl font-bold text-blue-300">M (中規模)</h4>
                            </div>
                            <div class="space-y-3">
                                <div class="p-4 bg-slate-900/50 rounded-lg">
                                    <p class="text-sm text-slate-400 mb-1">月間利益</p>
                                    <p class="text-2xl font-bold text-green-400">1,000〜3,000万</p>
                                </div>
                                <div class="p-4 bg-yellow-900/30 border border-yellow-600 rounded-lg">
                                    <p class="text-sm text-yellow-300 font-bold mb-1">ダイス判定</p>
                                    <p class="text-sm text-slate-200">中程度の難易度</p>
                                    <p class="text-xs text-slate-400">(10面ダイスで5以上)</p>
                                </div>
                                <div class="p-4 bg-blue-900/30 border border-blue-600 rounded-lg">
                                    <p class="text-sm text-blue-300 font-bold mb-1">必要能力</p>
                                    <p class="text-sm text-slate-200">中程度</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-800 p-6 rounded-xl border-2 border-green-500">
                            <div class="text-center mb-4">
                                <div class="text-5xl mb-2">🏭</div>
                                <h4 class="text-2xl font-bold text-green-300">L (大規模)</h4>
                            </div>
                            <div class="space-y-3">
                                <div class="p-4 bg-slate-900/50 rounded-lg">
                                    <p class="text-sm text-slate-400 mb-1">月間利益</p>
                                    <p class="text-2xl font-bold text-green-400">7,000万〜3億</p>
                                </div>
                                <div class="p-4 bg-red-900/30 border border-red-600 rounded-lg">
                                    <p class="text-sm text-red-300 font-bold mb-1">ダイス判定</p>
                                    <p class="text-sm text-slate-200">難しい</p>
                                    <p class="text-xs text-slate-400">(10面ダイスで8以上)</p>
                                </div>
                                <div class="p-4 bg-blue-900/30 border border-blue-600 rounded-lg">
                                    <p class="text-sm text-blue-300 font-bold mb-1">必要能力</p>
                                    <p class="text-sm text-slate-200">高い</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-8 bg-red-900/40 border-2 border-red-500 rounded-xl w-full">
                        <p class="text-2xl font-bold text-red-400 mb-4 text-center">⚠️ 重要なルール</p>
                        <div class="space-y-3 text-base text-slate-200">
                            <p>• <span class="font-bold text-yellow-300">M規模</span>を仮説立案するには、<span class="font-bold">S規模</span>をビジネス構築する必要があります</p>
                            <p>• <span class="font-bold text-yellow-300">L規模</span>を仮説立案するには、<span class="font-bold">M規模</span>をビジネス構築する必要があります</p>
                            <p class="mt-4 pt-4 border-t-2 border-red-600 font-bold text-red-200 text-lg">
                                → 必ず一つ前の段階のビジネスを構築してから次の規模に挑戦できます
                            </p>
                        </div>
                    </div>
                `
            },
            {
                title: "👥 人材の能力値",
                content: `
                    <div class="text-center mb-6">
                        <p class="text-slate-200 text-lg font-bold">人材は４つの（営業・企画・技術・法務）の能力で評価されます</p>
                    </div>
                    
                    <div class="bg-purple-900/30 border-2 border-purple-500 rounded-xl p-6 mb-8">
                        <h3 class="text-xl font-bold text-purple-300 mb-4 text-center">🎴 面接時と雇用時で能力が変わる！</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div class="text-center">
                                <div class="mb-3">
                                    <div class="inline-block p-4 bg-slate-800 rounded-xl border-2 border-blue-500">
                                        <div class="w-32 h-60 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                            <div class="text-center">
                                                <div class="text-4xl mb-2">👔</div>
                                                <p class="text-sm text-white font-bold">面接時能力</p>
                                                <div class="mt-2 text-xs text-blue-200 bg-slate-900/50 p-2 rounded">
                                                    <p>企画: 1</p>
                                                    <p>営業: 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="font-bold text-blue-300 text-lg">面接時（表）</p>
                                <p class="text-sm text-slate-300 mt-2">面接時ので見える<br>仮の能力がわかる</p>
                            </div>
                            <div class="text-center">
                                <div class="mb-3">
                                    <div class="inline-block p-4 bg-slate-800 rounded-xl border-2 border-purple-500">
                                        <div class="w-32 h-60 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                                            <div class="text-center">
                                                <div class="text-4xl mb-2">✨</div>
                                                <p class="text-sm text-white font-bold">雇用時能力</p>
                                                <div class="mt-2 text-xs text-purple-200 bg-slate-900/50 p-2 rounded">
                                                    <p>企画: 2</p>
                                                    <p>営業: 1</p>
                                                    <p>技術: 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="font-bold text-purple-300 text-lg">雇用時（裏）</p>
                                <p class="text-sm text-slate-300 mt-2">真の能力を把握</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div class="mb-6 text-center">
                            <h4 class="text-xl font-bold text-slate-200 mb-2">社員は３種類います。</h4>
                            <p class="text-slate-300">人件費と能力値が変わります。</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-slate-900 p-6 rounded-xl border-2 border-blue-500">
                                <div class="text-4xl text-center mb-3">👨‍💼</div>
                                <h4 class="text-xl font-bold text-center mb-3 text-blue-300">ジュニア社員</h4>
                                <div class="space-y-2">
                                    <p class="text-slate-200 text-base">💰 人件費: <span class="text-red-400 font-bold">100万/月</span></p>
                                    <div class="p-3 bg-slate-800 rounded-lg">
                                        <p class="font-bold text-blue-200 mb-1">能力値の例:</p>
                                        <p class="text-slate-200">企画力: 1</p>
                                        <p class="text-slate-200">営業力: 1</p>
                                        <p class="text-slate-500">技術力: 0</p>
                                        <p class="text-slate-500">法務力: 0</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-slate-900 p-6 rounded-xl border-2 border-purple-500">
                                <div class="text-4xl text-center mb-3">👔</div>
                                <h4 class="text-xl font-bold text-center mb-3 text-purple-300">シニア社員</h4>
                                <div class="space-y-2">
                                    <p class="text-slate-200 text-base">💰 人件費: <span class="text-red-400 font-bold">200万/月</span></p>
                                    <div class="p-3 bg-slate-800 rounded-lg">
                                        <p class="font-bold text-purple-200 mb-1">能力値の例:</p>
                                        <p class="text-slate-200">企画力: 2</p>
                                        <p class="text-slate-200">営業力: 1</p>
                                        <p class="text-slate-200">技術力: 1</p>
                                        <p class="text-slate-500">法務力: 0</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-slate-900 p-6 rounded-xl border-2 border-yellow-500">
                                <div class="text-4xl text-center mb-3">🎓</div>
                                <h4 class="text-xl font-bold text-center mb-3 text-yellow-300">エキスパート</h4>
                                <div class="space-y-2">
                                    <p class="text-slate-200 text-base">💰 人件費: <span class="text-red-400 font-bold">300万/月</span></p>
                                    <div class="p-3 bg-slate-800 rounded-lg">
                                        <p class="font-bold text-yellow-200 mb-1">能力値の例:</p>
                                        <p class="text-slate-200">企画力: 2</p>
                                        <p class="text-slate-200">営業力: 2</p>
                                        <p class="text-slate-200">技術力: 1</p>
                                        <p class="text-slate-200">法務力: 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "🔄 1ターンの流れ",
                content: `
                    <p class="text-slate-200 text-center mb-8 text-xl">プレイヤーは以下の<span class="text-yellow-400 font-bold">二つのアクションのうち一つ</span>を選んで実行できます</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
                        <!-- アクション1: 人材雇用 -->
                        <div class="bg-gradient-to-br from-blue-900/50 to-slate-800 p-6 rounded-2xl border-2 border-blue-500 relative">
                            <h4 class="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2 justify-center border-b border-blue-500/50 pb-3">
                                <span>👥</span><span>人材を雇う</span>
                            </h4>
                            <div class="space-y-4 text-base text-slate-200">
                                <div class="flex items-start gap-3">
                                    <span class="text-2xl">🎴</span>
                                    <div>
                                        <p class="font-bold text-blue-200">人材カード</p>
                                        <p class="text-sm">市場から2枚までえらぶ</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="text-2xl">📱</span>
                                    <div>
                                        <p class="font-bold text-blue-200">アプリ</p>
                                        <p class="text-sm">「人材管理」で記録</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- アクション2: アイディアのフェーズ進行 -->
                        <div class="bg-gradient-to-br from-purple-900/50 to-slate-800 p-6 rounded-2xl border-2 border-purple-500 relative">
                            <h4 class="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2 justify-center border-b border-purple-500/50 pb-3">
                                <span>🚀</span><span>アイディアのフェーズを進ませる</span>
                            </h4>
                            <div class="space-y-4 text-base text-slate-200">
                                <div class="flex items-center gap-3">
                                    <span class="text-xl">🎴</span>
                                    <p>アイディアに<span class="font-bold text-purple-200">人材</span>を配置</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="text-xl">🎲</span>
                                    <p><span class="font-bold text-purple-200">ダイス</span>で判定</p>
                                </div>
                                
                                <!-- 結果処理 -->
                                <div class="bg-slate-900/50 p-4 rounded-lg mt-2 border border-slate-700">
                                    <p class="font-bold text-slate-200 mb-2">📋 結果の処理</p>
                                    <div class="space-y-2 text-sm">
                                        <div class="flex items-center gap-2">
                                            <span class="text-green-400">✅ 成功:</span>
                                            <span class="text-slate-300">事業のフェーズを進ませる</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span class="text-red-400">❌ 失敗:</span>
                                            <span class="text-slate-300">現在のフェーズに留まる</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-3 bg-purple-900/30 border border-purple-500 rounded-lg">
                                    <p class="font-bold text-purple-300 text-base">🎉 ビジネス構築成功時</p>
                                    <p class="text-slate-200 text-sm">📱 アプリで事業登録（事業構築費用も入力）</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-green-900/80 to-slate-800 p-6 rounded-xl border-4 border-green-600 shadow-xl max-w-4xl mx-auto">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div class="text-center md:text-left">
                                <h4 class="text-2xl font-black text-green-400 mb-1">⏭️ ターン終了</h4>
                                <p class="text-green-100 font-bold">ターンの最後に毎回実施します</p>
                            </div>
                            <div class="flex-1 text-center md:text-right">
                                <p class="text-xl text-white font-bold mb-1">終了ボタンを押すと、人件費と事業の収益が自動計算されます</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },

    // 人材雇用チュートリアル開始 (6ページ目)
    { type: 'tutorial-start', section: 'hiring', message: 'まずは人材を雇ってみましょう！' },
    
    // 7ページ目
    { 
        type: 'guide', 
        message: null, 
        highlight: 'employee-btn',
        maskOthers: true
    },
    { type: 'action-open-employee' },

    // 9ページ目
    { 
        type: 'guide', 
        message: null, 
        highlight: 'hire-junior-btn',
        maskOthers: true
    },
    // ジュニア雇用アクション
    { type: 'action-hire' },

    // 11枚目
    { 
        type: 'guide', 
        message: '人材カードを裏返して手札に加えましょう', 
        highlight: null 
    },

    // フェーズ進行の詳細説明（複数スライド）
    { type: 'tutorial-start', section: 'phase', message: '次はフェーズを進ませる流れを見ていきましょう！' },
    { 
        type: 'guide', 
        message: 'これから4つのステップで\nフェーズ進行の流れを説明します。\n\n準備ができたらOKを押してください。', 
        highlight: null 
    },
    {
        type: 'phase-explanation',
        slides: [
            // 12枚目: タイトル変更
            // {
            //     title: "🚀 アイディアのフェーズを進ませる",
            //     content: `
            //         <div class="max-w-4xl mx-auto space-y-8">
            //             <div class="bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-8 rounded-2xl border-2 border-purple-500">
            //                 <h3 class="text-2xl font-bold text-purple-300 mb-6 text-center">🎲 実際のプレイでは...</h3>
            //                 <div class="space-y-6 text-slate-200 text-lg">
            //                     <div class="bg-slate-900/50 p-6 rounded-xl">
            //                         <p class="font-bold text-purple-200 mb-3">1️⃣ 自分のターンになったら</p>
            //                         <p class="leading-relaxed">「人材を雇う」か「フェーズを進ませる」を選びます。</p>
            //                         <p class="leading-relaxed mt-2">フェーズを進ませることを選んだら、アイデアカードを1つ選びます。</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     `
            // },
            // 14枚目: 説明更新
            {
                title: "📊 フェーズを進ませるとは？",
                content: `
                    <div class="max-w-4xl mx-auto space-y-8">
                        <div class="bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-8 rounded-2xl border-2 border-blue-500">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6 text-center">📋 基本的な流れ</h3>
                            
                            <div class="space-y-6 text-slate-200 text-lg">
                                <div class="bg-slate-900/50 p-6 rounded-xl flex items-start gap-4">
                                    <div class="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <p class="font-bold text-blue-200 mb-2">アイディアカードを選ぶ</p>
                                        <p class="leading-relaxed text-base">自分の手元にあるアイディアカードから進ませたいアイディアを一つ選びます。</p>
                                    </div>
                                </div>

                                <div class="bg-slate-900/50 p-6 rounded-xl flex items-start gap-4">
                                    <div class="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <p class="font-bold text-blue-200 mb-2">必要能力を確認する</p>
                                        <p class="leading-relaxed text-base">アイディアカードの必要能力を確認します。</p>
                                        
                                        <!-- 15枚目の内容をここに統合（縦配置） -->
                                        <div class="mt-4 bg-slate-800 p-4 rounded-lg border border-slate-600">
                                            <p class="text-sm text-slate-400 mb-2 text-center">🎴 アイディアカードの例</p>
                                            <div class="flex flex-col gap-3">
                                                <div class="bg-purple-900/50 p-3 rounded flex justify-between items-center">
                                                    <span class="font-bold text-purple-300 text-sm">仮説立案</span>
                                                    <span class="text-slate-300 text-sm">企画: 2 / 営業: 1</span>
                                                </div>
                                                <div class="bg-blue-900/50 p-3 rounded flex justify-between items-center">
                                                    <span class="font-bold text-blue-300 text-sm">仮説検証</span>
                                                    <span class="text-slate-300 text-sm">企画: 2 / 営業: 2 / 技術: 1</span>
                                                </div>
                                                <div class="bg-green-900/50 p-3 rounded flex justify-between items-center">
                                                    <span class="font-bold text-green-300 text-sm">構築</span>
                                                    <span class="text-slate-300 text-sm">企画: 2 / 営業: 5 / 技術: 5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            // 16枚目: 人材配置（アイディア→人材の順、複数可）
            {
                title: "👥 人材を配置する",
                content: `
                    <div class="max-w-4xl mx-auto space-y-8">
                        <div class="bg-gradient-to-r from-green-900/50 to-green-800/30 p-8 rounded-2xl border-2 border-green-500">
                            <h3 class="text-2xl font-bold text-green-300 mb-6 text-center">🎲 配置のイメージ</h3>
                            
                            <div class="flex flex-col items-center gap-4 text-slate-200">
                                <!-- アイディアカード -->
                                <div class="bg-purple-900 p-4 rounded-xl border-2 border-purple-400 w-48 text-center relative">
                                    <p class="font-bold mb-2">🎴 アイディア</p>
                                    <p class="text-xs text-purple-200 mb-1">現在のフェーズ: 仮説立案</p>
                                    <div class="bg-black/40 p-2 rounded text-sm font-bold text-white">
                                        企画2 / 営業1
                                    </div>
                                </div>

                                <div class="text-2xl font-bold text-slate-400">➕</div>

                                <!-- 人材カード（2枚） -->
                                <div class="flex gap-4">
                                    <div class="bg-blue-900 p-4 rounded-xl border-2 border-blue-400 w-32 text-center">
                                        <p class="font-bold mb-1">👨‍💼 ジュニア</p>
                                        <p class="text-xs text-blue-200">企画:1 / 営業:1</p>
                                    </div>
                                    <div class="bg-purple-900 p-4 rounded-xl border-2 border-purple-400 w-32 text-center">
                                        <p class="font-bold mb-1">👔 シニア</p>
                                        <p class="text-xs text-purple-200">企画:2 / 営業:1</p>
                                    </div>
                                </div>

                                <div class="text-center mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 w-full max-w-lg">
                                    <p class="text-lg font-bold text-green-400 mb-2">合計能力値</p>
                                    <p class="text-slate-300">企画: <span class="font-bold text-white">3</span> (>=2) OK!</p>
                                    <p class="text-slate-300">営業: <span class="font-bold text-white">2</span> (>=1) OK!</p>
                                </div>

                                <p class="text-yellow-300 font-bold mt-2">※ 複数人を配置して、必要能力を満たすようにします</p>
                            </div>
                        </div>
                    </div>
                `
            },
            // 17枚目: 判定（ダイスアイコン削除、縦配置、正確な基準）
            {
                title: "🎲 成功判定を行う",
                content: `
                    <div class="max-w-4xl mx-auto space-y-8">
                        <div class="bg-gradient-to-r from-yellow-900/50 to-orange-900/30 p-8 rounded-2xl border-2 border-yellow-500">
                            <h3 class="text-2xl font-bold text-yellow-300 mb-6 text-center">📊 判定基準</h3>
                            
                            <div class="bg-slate-900/50 p-6 rounded-xl mb-6 text-center">
                                <p class="text-xl text-slate-200 font-bold mb-2">
                                    ダイスの目 <span class="text-yellow-400 text-2xl">≧</span> アイディアに記載されている値
                                </p>
                                <p class="text-sm text-slate-400">ダイスを振ってそれ以上が出たら成功になります。</p>
                            </div>

                            <div class="flex flex-col gap-4">
                                <div class="bg-green-900/30 border-2 border-green-500 p-6 rounded-xl flex items-center gap-4">
                                    <div class="text-4xl">✅</div>
                                    <div>
                                        <p class="font-bold text-green-300 text-xl mb-1">成功</p>
                                        <p class="text-slate-200">アイデアカードを次のフェーズエリアに進める</p>
                                    </div>
                                </div>
                                <div class="bg-red-900/30 border-2 border-red-500 p-6 rounded-xl flex items-center gap-4">
                                    <div class="text-4xl">❌</div>
                                    <div>
                                        <p class="font-bold text-red-300 text-xl mb-1">失敗</p>
                                        <p class="text-slate-200">アイデアカードは現在のフェーズに留まる</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            // 18枚目: ビジネス構築成功（費用色修正、事業規模削除）
            {
                title: "🎉 ビジネス構築まで成功したら",
                content: `
                    <div class="max-w-4xl mx-auto space-y-8">
                        <div class="bg-gradient-to-r from-purple-900/50 to-pink-900/30 p-8 rounded-2xl border-2 border-purple-500">
                            <h3 class="text-2xl font-bold text-purple-300 mb-6 text-center">🎉 ビジネス構築に成功！</h3>
                            
                            <div class="space-y-6 text-slate-200 text-lg">
                                <div class="bg-slate-900/50 p-6 rounded-xl">
                                    <p class="font-bold text-purple-200 mb-3">🎲 ボードゲーム側</p>
                                    <p class="leading-relaxed">アイデアカードを「完成」エリアに移動させます。</p>
                                    <p class="leading-relaxed mt-2">このアイデアは事業として収益を生み出すようになります！</p>
                                </div>

                                <div class="bg-slate-900/50 p-6 rounded-xl border-2 border-purple-500">
                                    <p class="font-bold text-purple-200 mb-4">📱 アプリ側</p>
                                    <p class="leading-relaxed mb-4">アプリで事業を登録します。</p>
                                    <div class="bg-slate-800 p-4 rounded-lg">
                                        <p class="font-bold text-yellow-200 mb-3">登録する内容:</p>
                                        <ul class="space-y-2 ml-4 text-base">
                                            <li>• 事業名（アイデアカードに書かれた名前）</li>
                                            <li>• 月間利益（アイデアカードに書かれた金額）</li>
                                            <li class="text-slate-300">• 事業構築費用（支払う費用）</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="text-center p-6 bg-green-900/30 border-2 border-green-500 rounded-xl">
                                    <p class="text-2xl font-bold text-green-300">💰 次のターンから</p>
                                    <p class="text-lg mt-2">登録した月間利益が毎月入ってくるようになります！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    
    // 事業登録チュートリアル開始（短縮版）
    { type: 'tutorial-start', section: 'business', message: '実際にアプリで事業を登録してみましょう！' },
    
    // ポップアップなしでボタンのみハイライト
    { 
        type: 'guide', 
        message: null, 
        highlight: 'business-btn',
        maskOthers: true,
        section: 'business' // 入力有効化のフラグ
    },
    // 自動的にモーダルが開く（ように見せる）
    { type: 'action-open-business', section: 'business' },
    
    // 入力待ち（ガイドメッセージなし、自動進行もしない）
    { type: 'action-add-business', section: 'business' },
    
    // ターン終了
    { 
        type: 'guide', 
        message: '✅ 事業が登録されました！\n\n📱 ターンを終了して収支を確認しましょう', 
        highlight: null 
    },
    // ★ここを修正しました★
    // まずガイドメッセージのみを表示（ハイライトはnull、maskOthersなしでボタン押下を防止）
    { 
        type: 'guide', 
        message: '➡️ ターン終了ボタンをクリックしてください', 
        highlight: null
    },
    // 次にハイライトとマスクを適用してクリックを促す
    { 
        type: 'guide', 
        message: null, // メッセージなし（マスクのみ）
        highlight: 'end-turn-btn',
        maskOthers: true
    },
    { type: 'action-end-turn' },
    
    { type: 'complete', message: 'チュートリアル完了！' }
];