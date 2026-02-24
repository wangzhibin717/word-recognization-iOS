document.addEventListener('DOMContentLoaded', () => {
    // Default Data
    const defaultChars = "天 地 人 你 我 他 一 二 三 四 五 上 下 口 耳 目 手 足 站 坐 日 月 水 火 山 石 田 禾 对 云 雨 风 花 鸟 虫 六 七 八 九 十 爸 妈 马 土 不 画 打 棋 鸡 字 词 语 句 子 桌 纸 文 数 学 音 乐 妹 奶 白 皮 小 桥 台 雪 儿 草 家 是 车 羊 走 也 秋 气 了 树 叶 片 大 飞 会 个 的 船 两 头 在 里 看 见 闪 星 江 南 可 采 莲 鱼 东 西 北 尖 说 春 青 蛙 夏 弯 就 冬 男 女 开 关 正 反 远 有 色 近 听 无 声 去 还 来 多 少 黄 牛 只 猫 边 鸭 苹 果 杏 桃 书 包 尺 作 业 本 笔 刀 课 早 校 明 力 尘 从 众 双 木 林 森 条 心 升 国 旗 中 红 歌 起 么 美 丽 立 影 前 后 黑 狗 左 右 它 好 朋 友 比 尾 巴 谁 长 短 把 伞 兔 最 公 写 诗 点 要 过 给 当 串 们 以 成 彩 半 空 问 到 方 没 更 绿 出 种 睡 那 海 真 老 师 吗 同 什 才 亮 时 候 觉 得 自 己 很 穿 衣 服 快 蓝 又 笑 着 向 和 贝 娃 挂 活 金 哥 群 竹 牙 用 几 步 为 参 加 洞 乌 鸦 处 找 办 旁 许 法 放 进 高 蜗 玩 吧 发 芽 爬 久 回 全 变 工 厂 医 院 病 护 士 唱 喝 跳 踢 晨 晚 夜 跑 霜 吹 落 降 飘 游 池 入 姓 氏 李 张 古 吴 赵 钱 孙 周 王 官 清 晴 眼 睛 保 害 事 情 请 让 相 遇 喜 欢 怕 言 互 令 动 万 纯 净 阴 雷 电 阵 冰 冻 夹 吃 忘 井 村 叫 毛 主 席 乡 亲 战 面 想 告 诉 路 京 安 门 广 非 常 壮 观 接 再 做 各 样 梦 伙 伴 却 趣 这 太 阳 道 送 忙 尝 香 甜 温 暖 该 颜 因 辆 匹 册 支 铅 棵 架 球 拔 拍 铃 热 闹 锻 炼 体 操 窝 孤 单 都 邻 居 招 呼 静 怎 独 绳 羽 戏 排 篮 连 运 思 床 光 疑 举 望 低 故 胆 敢 往 外 勇 窗 乱 偏 散 原 像 微 端 粽 节 总 米 间 分 豆 肉 带 知 据 念 虹 座 提 浇 洒 挑 兴 拿 镜 照 千 裙 眉 鼻 嘴 脖 臂 肚 腿 脚 蜻 蜓 迷 藏 造 蚂 蚁 食 粮 蜘 蛛 网 圆 严 寒 酷 暑 凉 朝 霞 夕 杨 场 之 初 性 善 习 教 迁 贵 专 幼 玉 器 义 饭 能 饱 茶 泡 轻 鞭 炮 捉 首 踪 迹 浮 萍 泉 流 爱 柔 荷 露 角 珠 摇 躺 晶 停 机 展 透 翅 膀 朵 闷 伸 喊 潮 湿 消 搬 哗 拨 拦 擦 抄 拾 摔 猴 结 掰 扛 满 扔 摘 捧 瓜 抱 蹦 追 物 虎 熊 通 注 意 遍 百 舌 鬼 脸 准 第 棉 娘 治 燕 别 干 然 奇 颗 瓢 碧 吐 啦 咕 咚 熟 掉 吓 狮 鹿 逃 命 象 野 领 壁 借 蚊 蛇 难 姐 新 刷 梳 皂 澡 盆 具 票 现 交 弓 胖 岁 肥 瘦 慢 粗 细 宽 窄 厚 薄 深 浅 胜 败 赞 夸 奖 励 功 劳 勤 奋 努 历 史 纪 世 界 宇 宙 航 舰 舱 巨 确 忽 丝 软 硬 滴 答 唤 鸣 啼 吼 啸 嘶 吟 颂 叹 咏 辞 赋 曲 调 弹 琴 瑟 琵 琶 筝 笛 箫 鼓 锣";
    
    // Split and map to object structure
    let quizData = defaultChars.split(/\s+/).filter(c => c.trim()).map(text => ({ 
        text: text, 
        pinyin: '...' 
    }));
    
    // Shuffle Function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Shuffle on load
    quizData = shuffleArray(quizData);
    let fullQuizData = quizData.slice();

    let currentIndex = 0;
    let score = 0;
    let currentMode = 'typing'; // 'typing', 'handwriting', 'word-quiz'
    let isWrongMode = false;
    const wrongBankKey = 'word-recognization-iOS.wrongBank.v1';
    let wrongBank = loadWrongBank();
    let consecutiveCorrect = 0;

    // DOM Elements
    const characterDisplay = document.getElementById('character-display');
    const pinyinInput = document.getElementById('pinyin-input');
    const checkBtn = document.getElementById('check-btn');
    const feedbackEl = document.getElementById('feedback');
    const progressText = document.getElementById('progress-text');
    const scoreText = document.getElementById('score-text');
    const wrongText = document.getElementById('wrong-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const modeSelect = document.getElementById('mode-select');
    const wrongOnlyToggle = document.getElementById('wrong-only-toggle');
    const clearWrongBtn = document.getElementById('clear-wrong-btn');
    
    // Areas
    const typingArea = document.getElementById('typing-area');
    const handwritingArea = document.getElementById('handwriting-area');
    const wordQuizArea = document.getElementById('word-quiz-area');
    
    // Canvas Elements
    const canvas = document.getElementById('drawing-board');
    const ctx = canvas.getContext('2d');
    const clearCanvasBtn = document.getElementById('clear-canvas-btn');
    const checkHandwritingBtn = document.getElementById('check-handwriting-btn');
    const canvasPlaceholder = document.querySelector('.canvas-placeholder');
    const pronounceBtn = document.getElementById('pronounce-btn');

    // Word Quiz Elements
    const wordOptionsContainer = document.getElementById('word-options');

    // Import Modal Elements
    const importBtn = document.getElementById('import-btn');
    const importModal = document.getElementById('import-modal');
    const closeBtn = document.querySelector('.close-btn');
    const confirmImportBtn = document.getElementById('confirm-import-btn');
    const cancelImportBtn = document.getElementById('cancel-import-btn');
    const clearLibBtn = document.getElementById('clear-lib-btn');
    const importText = document.getElementById('import-text');

    // Canvas State
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Custom Word List (for imported words)
    let customWords = [];
    
    // Default words for word quiz (basic)
    // Pre-populate with some common words if user doesn't import
    // But since user imports, we can rely on import. 
    // Or we can parse the defaultChars to build a base library? 
    // No, defaultChars is just a string of chars.
    
    // Initialize
    updateWrongText();
    loadQuestion(currentIndex);
    setupCanvas();

    // Event Listeners
    checkBtn.addEventListener('click', checkAnswer);
    pinyinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < quizData.length - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        } else {
            alert(`练习结束！得分: ${score}`);
            currentIndex = 0;
            score = 0;
            loadQuestion(currentIndex);
        }
    });
    
    // Toggle Wrong Only Mode
    wrongOnlyToggle.addEventListener('change', (e) => {
        isWrongMode = e.target.checked;
        refreshQuizData();
    });

    // Clear Wrong Bank
    clearWrongBtn.addEventListener('click', () => {
        if (Object.keys(wrongBank).length === 0) return;
        if (confirm('确定要清空错题库吗？')) {
            wrongBank = {};
            saveWrongBank();
            updateWrongText();
            if (isWrongMode) {
                refreshQuizData();
            }
        }
    });

    function refreshQuizData() {
        if (isWrongMode) {
            const wrongData = getWrongQuizData();
            if (wrongData.length === 0) {
                alert('错题库为空，已切换回全部练习');
                wrongOnlyToggle.checked = false;
                isWrongMode = false;
                setActiveQuizData(fullQuizData);
            } else {
                setActiveQuizData(shuffleArray(wrongData));
            }
        } else {
            setActiveQuizData(fullQuizData);
        }
        resetQuestionState();
        loadQuestion(currentIndex);
    }

    // Mode Switching
    modeSelect.addEventListener('change', (e) => {
        currentMode = e.target.value;
        if (currentMode === 'typing') {
            typingArea.style.display = 'flex';
            handwritingArea.style.display = 'none';
            wordQuizArea.style.display = 'none';
            pinyinInput.focus();
        } else if (currentMode === 'handwriting') {
            typingArea.style.display = 'none';
            handwritingArea.style.display = 'flex';
            wordQuizArea.style.display = 'none';
            resizeCanvas();
        } else if (currentMode === 'word-quiz') {
            typingArea.style.display = 'none';
            handwritingArea.style.display = 'none';
            wordQuizArea.style.display = 'block';
            loadWordQuiz();
        }
        
        // Refresh data only if switching to/from word-quiz might need specific handling? 
        // No, setActiveQuizData handles the data source.
        // But if we switch modes, we should reload the current question in the new mode UI.
        resetQuestionState();
        loadQuestion(currentIndex);
    });

    // Canvas Events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch Events for Canvas
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent scrolling
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        lastX = touch.clientX - rect.left;
        lastY = touch.clientY - rect.top;
        isDrawing = true;
        canvasPlaceholder.style.display = 'none';
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
    }, { passive: false });

    canvas.addEventListener('touchend', stopDrawing);

    clearCanvasBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasPlaceholder.style.display = 'block';
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
    });
    
    checkHandwritingBtn.addEventListener('click', () => {
        // Show correct answer
        const data = quizData[currentIndex];
        let correctPinyin = data.pinyin;
        if (typeof pinyinPro !== 'undefined') {
            correctPinyin = pinyinPro.pinyin(data.text);
        }
        feedbackEl.textContent = `正确答案: ${correctPinyin}`;
        feedbackEl.className = 'feedback'; // Neutral color
        
        // Show Pronounce Button
        pronounceBtn.style.display = 'inline-block';
    });
    
    pronounceBtn.addEventListener('click', () => {
        const data = quizData[currentIndex];
        speakText(data.text);
    });
    
    window.addEventListener('resize', resizeCanvas);

    // Import Modal Logic
    importBtn.addEventListener('click', () => {
        importModal.style.display = 'flex';
        importText.value = '';
        importText.focus();
    });

    const closeModal = () => {
        importModal.style.display = 'none';
    };

    closeBtn.addEventListener('click', closeModal);
    cancelImportBtn.addEventListener('click', closeModal);
    
    clearLibBtn.addEventListener('click', () => {
        if (confirm('确定要清空所有练习数据吗？这将恢复到初始状态。')) {
            // Reset to default
            const defaultData = defaultChars.split(/\s+/).filter(c => c.trim()).map(text => ({ 
                text: text, 
                pinyin: '...' 
            }));
            quizData = shuffleArray(defaultData);
            fullQuizData = quizData.slice();
            customWords = []; // Clear custom words
            currentIndex = 0;
            score = 0;
            loadQuestion(currentIndex);
            closeModal();
            alert('词库已重置为默认状态。');
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target === importModal) closeModal();
    });

    confirmImportBtn.addEventListener('click', () => {
        const text = importText.value.trim();
        if (!text) {
            alert('请输入内容');
            return;
        }

        // Fix regex to support multiple complex lines or simpler parsing
        // Current approach handles: "天(白天 天上)" 
        // We need to robustly handle the user input.
        
        let newItems = [];
        let newWords = [];
        
        // Check if input looks like "Char(Word Word)" format
        if (text.includes('(') && text.includes(')')) {
             // Split by line or pipe
             const parts = text.split(/[\n|]+/);
             parts.forEach(part => {
                 // Match "Char (Word Word)"
                 const match = part.match(/([\u4e00-\u9fa5])\s*\(([^)]+)\)/);
                 if (match) {
                     const char = match[1];
                     const wordsStr = match[2];
                     // Split words by space
                     const words = wordsStr.split(/\s+/).filter(w => w.trim().length >= 2);
                     
                     newItems.push(char);
                     newWords = newWords.concat(words);
                 }
             });
        }
        
        // If no complex items found, try simple list
        if (newItems.length === 0) {
            // Fallback to simple list splitting
            // Remove (words) content first if any exists but failed matching?
            // No, just split everything
            
            const simpleItems = text.split(/[\n\r\s,，、|]+/g).filter(item => {
                 // Clean up items
                 return item.trim() !== '' && !item.includes('(') && !item.includes(')');
            });
            
            simpleItems.forEach(item => {
                if (item.length === 1) {
                    newItems.push(item);
                } else if (item.length >= 2) {
                    newWords.push(item);
                    // Also add the characters of the word as practice items?
                    // Optional: newItems.push(item[0], item[1]...);
                    // Let's keep it simple: if it's a word, it's a custom word.
                    // If user wants to practice chars, they should list chars.
                }
            });
        }

        if (newItems.length === 0 && newWords.length === 0) {
            alert('未检测到有效内容');
            return;
        }

        const newData = newItems.map(item => {
            let py = '...';
            try {
                if (typeof pinyinPro !== 'undefined') {
                    py = pinyinPro.pinyin(item);
                }
            } catch (e) {
                console.error(e);
            }
            return { text: item, pinyin: py };
        });

        if (newWords.length > 0) {
            customWords = customWords.concat(newWords);
        }

        quizData = shuffleArray(newData);
        fullQuizData = quizData.slice();
        currentIndex = 0;
        score = 0;
        loadQuestion(currentIndex);
        closeModal();
        alert(`成功导入 ${newData.length} 个词条！`);
    });

    // Functions
    function showReward(message) {
        // Create or reuse reward element
        let rewardEl = document.getElementById('reward-popup');
        if (!rewardEl) {
            rewardEl = document.createElement('div');
            rewardEl.id = 'reward-popup';
            rewardEl.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(255, 215, 0, 0.95);
                color: #d35400;
                padding: 20px 40px;
                border-radius: 50px;
                font-size: 24px;
                font-weight: bold;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                pointer-events: none;
            `;
            // Add keyframes if not exists
            if (!document.getElementById('reward-style')) {
                const style = document.createElement('style');
                style.id = 'reward-style';
                style.textContent = `
                    @keyframes popIn {
                        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    }
                    @keyframes fadeOut {
                        0% { opacity: 1; }
                        100% { opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
            document.body.appendChild(rewardEl);
        }
        
        rewardEl.textContent = message;
        rewardEl.style.display = 'block';
        rewardEl.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        // Auto hide
        setTimeout(() => {
            rewardEl.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => {
                rewardEl.style.display = 'none';
            }, 500);
        }, 2000);
    }

    function setupCanvas() {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#333';
        resizeCanvas();
    }
    
    function resizeCanvas() {
        // Only resize if visible to avoid 0 size issues
        if (handwritingArea.style.display !== 'none') {
             const container = document.querySelector('.canvas-container');
             if (container) {
                 // Save content? (Optional, complex. For now just resize clears)
                 canvas.width = container.clientWidth;
                 canvas.height = container.clientHeight;
                 
                 // Restore context styles after resize
                 ctx.lineJoin = 'round';
                 ctx.lineCap = 'round';
                 ctx.lineWidth = 3;
                 ctx.strokeStyle = '#333';
             }
        }
    }

    function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
        canvasPlaceholder.style.display = 'none';
        
        // Clear previous feedback if user starts drawing again
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
    }

    function draw(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        lastX = x;
        lastY = y;
    }

    function stopDrawing() {
        isDrawing = false;
    }
    
    function resetQuestionState() {
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
        pinyinInput.value = '';
        pronounceBtn.style.display = 'none';
        
        if (currentMode === 'handwriting') {
             // Clear canvas
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             canvasPlaceholder.style.display = 'block';
        } else if (currentMode === 'word-quiz') {
             wordOptionsContainer.innerHTML = '';
        } else {
             pinyinInput.focus();
        }
    }

    function loadQuestion(index) {
        const data = quizData[index];
        
        // Ensure pinyin is up to date
        if ((!data.pinyin || data.pinyin === '...') && typeof pinyinPro !== 'undefined') {
             try {
                 data.pinyin = pinyinPro.pinyin(data.text);
             } catch (e) {}
        }

        characterDisplay.textContent = data.text;
        
        resetQuestionState();
        
        // If in Word Quiz mode, load options
        if (currentMode === 'word-quiz') {
            loadWordQuiz();
        }
        
        // Update UI
        progressText.textContent = `进度: ${index + 1} / ${quizData.length}`;
        scoreText.textContent = `得分: ${score}`;
        
        prevBtn.disabled = index === 0;
    }

    function loadWordQuiz() {
        const data = quizData[currentIndex];
        const currentChar = data.text;
        wordOptionsContainer.innerHTML = '加载中...';
        
        // 1. Try to find words from Custom Words first
        let validWords = customWords.filter(w => w.includes(currentChar));
        
        // 2. If no custom words, try cnchar
        if (validWords.length === 0 && typeof cnchar !== 'undefined' && typeof cnchar.words !== 'undefined') {
             const words = cnchar.words(currentChar, 'trad');
             if (Array.isArray(words)) {
                 validWords = words.filter(w => w.length === 2 && w.includes(currentChar));
             }
        }
        
        // Strategy:
        // We need 2 correct answers (words that pair with current char)
        // And 2 wrong answers (random characters)
        // Total 4 options
        
        // Find distinct correct words
        let correctWords = [];
        if (validWords.length >= 2) {
             // Pick 2 random distinct words
             const shuffledWords = shuffleArray([...validWords]);
             correctWords = [shuffledWords[0], shuffledWords[1]];
        } else if (validWords.length === 1) {
             // Only 1 valid word found, fallback to 1 correct answer logic?
             // Or just show 1 correct and 2 wrong?
             // Requirement says "choose 2 correct answers".
             // Let's force 1 correct if only 1 available, but UI says "choose 2".
             // Better: try to find more from cnchar if customWords is low.
             if (typeof cnchar !== 'undefined' && typeof cnchar.words !== 'undefined') {
                 const extraWords = cnchar.words(currentChar, 'trad');
                 if (Array.isArray(extraWords)) {
                     const extras = extraWords.filter(w => w.length === 2 && w.includes(currentChar) && !validWords.includes(w));
                     if (extras.length > 0) {
                         const randomExtra = extras[Math.floor(Math.random() * extras.length)];
                         correctWords = [validWords[0], randomExtra];
                     } else {
                         correctWords = [validWords[0]]; // Still only 1
                     }
                 } else {
                     correctWords = [validWords[0]];
                 }
             } else {
                 correctWords = [validWords[0]];
             }
        } else {
             wordOptionsContainer.innerHTML = '暂无该字组词数据';
             return;
        }

        // Generate wrong options
        const wrongOptions = [];
        const correctChars = correctWords.map(w => w.replace(currentChar, ''));
        
        while (wrongOptions.length < 2) {
            const randomItem = quizData[Math.floor(Math.random() * quizData.length)];
            const randomChar = randomItem.text.charAt(0);
            if (!correctChars.includes(randomChar) && randomChar !== currentChar && !wrongOptions.includes(randomChar)) {
                wrongOptions.push(randomChar);
            }
        }
        
        // Build options array
        let options = [];
        correctWords.forEach(word => {
            options.push({ char: word.replace(currentChar, ''), isCorrect: true, word: word });
        });
        wrongOptions.forEach(char => {
            options.push({ char: char, isCorrect: false });
        });
        
        options = shuffleArray(options);
        
        // Render buttons
        wordOptionsContainer.innerHTML = '';
        let correctCount = 0;
        const totalCorrect = correctWords.length;
        const selectedCorrectWords = [];
        
        // Update instruction text if only 1 correct answer available
        const instruction = document.querySelector('.quiz-instruction');
        if (totalCorrect < 2) {
            instruction.textContent = '请选择能组成词语的字：';
        } else {
            instruction.textContent = '请选择能组成词语的字（需选对2个）：';
        }

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'word-option-btn';
            btn.textContent = opt.char;
            btn.onclick = () => {
                if (opt.isCorrect) {
                    btn.classList.add('correct');
                    btn.disabled = true;
                    correctCount++;
                    selectedCorrectWords.push(opt.word);
                    
                    if (correctCount === totalCorrect) {
                        // All correct found
                        feedbackEl.textContent = `✅ 回答正确！组词: ${selectedCorrectWords.join('、')}`;
                        feedbackEl.className = 'feedback correct';
                        score++;
                        scoreText.textContent = `得分: ${score}`;
                        consecutiveCorrect++;
                        if (consecutiveCorrect === 5) showReward('真棒！🎉');
                        if (consecutiveCorrect === 10) showReward('你真优秀！🌟');
                        
                        pronounceBtn.style.display = 'inline-block';
                        speakText(selectedCorrectWords.join('，'));
                        
                        // Disable all other buttons
                        const allBtns = wordOptionsContainer.querySelectorAll('.word-option-btn');
                        allBtns.forEach(b => b.disabled = true);

                        // If in wrong mode, remove from wrong bank
                        if (isWrongMode) {
                            // In word quiz, we are testing "currentChar".
                            // If user passes, we remove currentChar from wrong bank.
                            removeWrongItem(currentChar);
                            
                            // Delay slightly to let user see feedback before switching?
                            // Or just wait for them to click Next.
                            // The next question loading happens on "Next" click usually.
                            // But here we need to update the data for the *next* round.
                            // Since we don't auto-advance, we just update the backing data.
                            
                            // Check if empty
                            const wrongData = getWrongQuizData();
                            if (wrongData.length === 0) {
                                // We can't alert immediately because speech might be playing
                                setTimeout(() => {
                                    alert('错题已清空，将自动切换回全部练习');
                                    wrongOnlyToggle.checked = false;
                                    isWrongMode = false;
                                    setActiveQuizData(fullQuizData);
                                    // We don't auto load next here, user will click next or we can auto load.
                                    // Let's reload current index (which is now new data)
                                    loadQuestion(0); 
                                }, 1500);
                            } else {
                                // Update quizData for next button click
                                quizData = shuffleArray(wrongData);
                                // currentIndex is tricky. User is at X. Data changed.
                                // If we don't reset index, next click might be out of bounds.
                                // But if we reset index now, "Next" button logic `currentIndex++` might skip 0.
                                // Best strategy: Set quizData, set currentIndex = -1 so Next makes it 0?
                                // Or just let Next logic handle bounds?
                                // "Next" logic: if (currentIndex < quizData.length - 1) currentIndex++ else ...
                                // If we reduce quizData length, currentIndex might be >= length.
                                // Let's keep it simple: Don't reshuffle *active* quizData until Next is clicked?
                                // No, we must ensure the *removed* item is gone.
                                
                                // Actually, standard practice: Mark it as "done" internally?
                                // Let's just update the global `quizData` variable so `Next` picks from new list.
                                // And clamp currentIndex.
                                // But `loadQuestion` uses `quizData[index]`.
                                // If we change `quizData` NOW, `quizData[currentIndex]` might change to a different char instantly if we rerender?
                                // We are NOT rerendering the question, just the result.
                                // So changing `quizData` is fine as long as we adjust `currentIndex` for the *next* step.
                                // Let's not complicate. Just update the backing store.
                                // The Next button uses `currentIndex` and `quizData`.
                                // If we remove item at `currentIndex`, the item at `currentIndex` becomes the *next* item.
                                // So `currentIndex` should effectively *decrement* so that `currentIndex++` hits the new item at same index?
                                currentIndex--; 
                                setActiveQuizData(shuffleArray(wrongData)); 
                                // setActiveQuizData resets index to 0. That's annoying for flow.
                                // Let's manually update.
                                // quizData = shuffleArray(wrongData);
                                // currentIndex = -1; // So next click (++) goes to 0.
                            }
                        }
                    } else {
                        // Partial correct
                         feedbackEl.textContent = `不错！还有一个...`;
                         feedbackEl.className = 'feedback';
                    }
                } else {
                    btn.classList.add('wrong');
                    btn.disabled = true;
                    feedbackEl.textContent = `❌ 错误。`;
                    feedbackEl.className = 'feedback wrong';
                    
                    // Reset consecutive correct
                    consecutiveCorrect = 0;
                    
                    // Add to wrong bank
                    addWrongItem(currentChar);
                }
            };
            wordOptionsContainer.appendChild(btn);
        });
    }

    // Deprecated single check function, logic moved inside loadWordQuiz
    function checkWordQuiz(btn, option, currentChar) {}

    function checkAnswer() {
        const input = pinyinInput.value.trim().toLowerCase();
        if (!input) return;

        const data = quizData[currentIndex];
        
        let correctSymbol = data.pinyin;
        let correctNum = '';
        let correctNone = '';

        if (typeof pinyinPro !== 'undefined') {
            correctSymbol = pinyinPro.pinyin(data.text, { toneType: 'symbol' });
            correctNum = pinyinPro.pinyin(data.text, { toneType: 'num' });
            correctNone = pinyinPro.pinyin(data.text, { toneType: 'none' });
        }

        // Helper to remove spaces and lowercase
        const clean = (str) => (str || '').replace(/\s+/g, '').toLowerCase();
        
        const cleanInput = clean(input);
        const cleanSymbol = clean(correctSymbol);
        const cleanNum = clean(correctNum);
        const cleanNone = clean(correctNone);

        const isCorrect = cleanInput === cleanSymbol || cleanInput === cleanNum;
        const isToneMissing = !isCorrect && cleanInput === cleanNone;

        if (isCorrect) {
            feedbackEl.textContent = '✅ 回答正确！ (' + correctSymbol + ')';
            feedbackEl.className = 'feedback correct';
            score++;
            scoreText.textContent = `得分: ${score}`;
            consecutiveCorrect++;
            if (consecutiveCorrect === 5) showReward('真棒！🎉');
            if (consecutiveCorrect === 10) showReward('你真优秀！🌟');
            
            pronounceBtn.style.display = 'inline-block';
            
            if (isWrongMode) {
                removeWrongItem(data.text);
                const wrongData = getWrongQuizData();
                if (wrongData.length === 0) {
                    updateWrongText();
                    alert('错题已清空，将自动切换回全部练习');
                    wrongOnlyToggle.checked = false;
                    isWrongMode = false;
                    setActiveQuizData(fullQuizData);
                    resetQuestionState();
                    loadQuestion(currentIndex);
                    return;
                }
                // Refresh data to remove the corrected item
                setActiveQuizData(shuffleArray(wrongData));
                // currentIndex is reset to 0 by setActiveQuizData, so load 0
                loadQuestion(0);
            }
        } else {
            if (isToneMissing) {
                feedbackEl.textContent = '⚠️ 声调缺失或错误。正确答案: ' + correctSymbol;
            } else {
                feedbackEl.textContent = '❌ 错误。正确答案: ' + correctSymbol;
            }
            feedbackEl.className = 'feedback wrong';
            pronounceBtn.style.display = 'inline-block';
            addWrongItem(data.text);
            consecutiveCorrect = 0;
        }
    }

    function setActiveQuizData(list) {
        quizData = Array.isArray(list) ? list.slice() : [];
        currentIndex = 0;
        score = 0;
        progressText.textContent = `进度: ${quizData.length === 0 ? 0 : 1} / ${quizData.length}`;
        scoreText.textContent = `得分: ${score}`;
        prevBtn.disabled = currentIndex === 0;
    }

    function getWrongQuizData() {
        return Object.keys(wrongBank).map(text => ({ text, pinyin: '...' }));
    }

    function loadWrongBank() {
        try {
            const raw = localStorage.getItem(wrongBankKey);
            if (!raw) return {};
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return {};
            return parsed;
        } catch (e) {
            return {};
        }
    }

    function saveWrongBank() {
        try {
            localStorage.setItem(wrongBankKey, JSON.stringify(wrongBank));
        } catch (e) {}
    }

    function addWrongItem(text) {
        if (!text) return;
        const key = String(text);
        const item = wrongBank[key] && typeof wrongBank[key] === 'object' ? wrongBank[key] : {};
        item.wrongCount = typeof item.wrongCount === 'number' ? item.wrongCount + 1 : 1;
        item.lastWrongAt = Date.now();
        wrongBank[key] = item;
        saveWrongBank();
        updateWrongText();
    }

    function removeWrongItem(text) {
        if (!text) return;
        const key = String(text);
        if (wrongBank[key]) {
            delete wrongBank[key];
            saveWrongBank();
            updateWrongText();
        }
    }

    function updateWrongText() {
        if (!wrongText) return;
        const count = Object.keys(wrongBank).length;
        wrongText.textContent = `错题: ${count}`;
    }
    
    function speakText(text) {
        if ('speechSynthesis' in window) {
            // iOS Safari requires cancelling before speaking to avoid getting stuck
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.8; // Slightly slower

            // Try to set a Chinese voice explicitly if available
            // On iOS, voices are loaded asynchronously, so we might need to wait or just let it pick default
            let voices = window.speechSynthesis.getVoices();
            
            const setVoice = () => {
                voices = window.speechSynthesis.getVoices();
                // Prefer specific high-quality Chinese female voices if available
                // "Ting-Ting" (iOS/macOS), "Google 普通话" (Android/Chrome), "Microsoft Yaoyao" (Windows)
                let zhVoice = voices.find(v => v.name.includes('Ting-Ting') || v.name.includes('Yaoyao') || v.name.includes('HiuGaai'));
                
                // Fallback to any zh-CN voice if preferred ones not found
                if (!zhVoice) {
                    zhVoice = voices.find(v => v.lang === 'zh-CN');
                }
                
                // Fallback to any Chinese voice (HK/TW)
                if (!zhVoice) {
                    zhVoice = voices.find(v => v.lang.includes('zh'));
                }

                if (zhVoice) {
                    utterance.voice = zhVoice;
                }
                
                // Ensure speaking happens after a short delay to allow cancel() to take effect on iOS
                setTimeout(() => {
                    window.speechSynthesis.speak(utterance);
                }, 10);
            };

            if (voices.length === 0) {
                // If no voices yet, try to wait for them, BUT also force speak with default voice as fallback immediately
                // to prevent silence if the event never fires (common on some iOS versions).
                
                // 1. Set up listener for when voices arrive
                const onVoicesChanged = () => {
                    window.speechSynthesis.onvoiceschanged = null; // Clean up
                    setVoice();
                };
                window.speechSynthesis.onvoiceschanged = onVoicesChanged;
                
                // 2. Fallback timeout: If voices don't load in 500ms, speak anyway with default
                setTimeout(() => {
                    // If we haven't spoken yet (meaning setVoice wasn't called by event)
                    // Just speak. On iOS, default voice usually works even if getVoices() is empty.
                    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) return;
                    window.speechSynthesis.speak(utterance);
                }, 500);
            } else {
                setVoice();
            }
            
            utterance.onerror = function(event) {
                console.error('SpeechSynthesis error', event);
            };
        } else {
            alert('抱歉，您的浏览器不支持语音朗读功能。');
        }
    }
});
