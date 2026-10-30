// Sector Arcade Game Engine with Canvas Particle System, Lives & Combo Fire
class ArcadeGame {
    constructor(options = {}) {
        this.container = options.container || document.getElementById('game-area');
        this.scoreDisplay = options.scoreDisplay || document.getElementById('score');
        this.highScoreDisplay = options.highScoreDisplay || document.getElementById('high-score');
        this.streakDisplay = options.streakDisplay || document.getElementById('streak');
        this.livesDisplay = options.livesDisplay || document.getElementById('lives-container');
        this.comboBar = options.comboBar || document.getElementById('combo-fill');
        this.finalScoreDisplay = options.finalScoreDisplay || document.getElementById('final-score');
        this.rankBadge = options.rankBadge || document.getElementById('rank-badge');
        this.overlay = options.overlay || document.getElementById('game-over-overlay');
        
        this.bins = {
            pri: document.getElementById('bin-pri'),
            sec: document.getElementById('bin-sec'),
            ter: document.getElementById('bin-ter')
        };

        // State variables
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('cg_arcade_high_score') || '0', 10);
        this.streak = 0;
        this.maxStreak = 0;
        this.lives = 3;
        this.maxLives = 3;
        this.gameActive = false;
        this.animationId = null;
        this.currentItem = null;
        this.itemY = 0;
        this.itemX = 0;
        this.baseSpeed = 1.3;
        this.currentSpeed = 1.3;
        this.itemsSpawned = 0;
        this.maxItems = 20;

        // Particle System
        this._initCanvas();
        this._setupListeners();
        this.updateHighScoreDisplay();
    }

    _initCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'arcade-particle-canvas';
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];

        this._resizeCanvas();
        window.addEventListener('resize', () => this._resizeCanvas());
    }

    _resizeCanvas() {
        if (!this.canvas) return;
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
    }

    updateHighScoreDisplay() {
        if (this.highScoreDisplay) {
            this.highScoreDisplay.innerText = this.highScore;
        }
    }

    _setupListeners() {
        const gameScreen = document.getElementById('game-screen');
        
        // Mouse and Touch dragging
        const handlePointer = (clientX) => {
            if (!this.gameActive || !this.currentItem) return;
            const rect = this.container.getBoundingClientRect();
            const itemWidth = this.currentItem.offsetWidth || 90;
            let targetX = clientX - rect.left - (itemWidth / 2);

            // Confine inside boundaries
            targetX = Math.max(12, Math.min(targetX, rect.width - itemWidth - 12));
            this.itemX = targetX;
            this.currentItem.style.left = `${this.itemX}px`;
        };

        gameScreen.addEventListener('mousemove', (e) => handlePointer(e.clientX));
        gameScreen.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches[0]) {
                handlePointer(e.touches[0].clientX);
            }
        }, { passive: true });

        // Keyboard navigation (Arrow keys / A,S,D / 1,2,3)
        window.addEventListener('keydown', (e) => {
            if (!this.gameActive || !this.currentItem) return;
            const rect = this.container.getBoundingClientRect();

            let targetBinId = null;
            if (e.key === 'ArrowLeft' || e.key === '1' || e.key.toLowerCase() === 'a') targetBinId = 'pri';
            if (e.key === 'ArrowDown' || e.key === '2' || e.key.toLowerCase() === 's') targetBinId = 'sec';
            if (e.key === 'ArrowRight' || e.key === '3' || e.key.toLowerCase() === 'd') targetBinId = 'ter';

            if (targetBinId && this.bins[targetBinId]) {
                const binRect = this.bins[targetBinId].getBoundingClientRect();
                const itemWidth = this.currentItem.offsetWidth || 108;
                const centerBinX = (binRect.left + binRect.width / 2) - rect.left - (itemWidth / 2);
                this.itemX = Math.max(12, Math.min(centerBinX, rect.width - itemWidth - 12));
                this.currentItem.style.left = `${this.itemX}px`;
            }
        });
    }

    start() {
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.lives = this.maxLives;
        this.itemsSpawned = 0;
        this.currentSpeed = this.baseSpeed;
        this.gameActive = true;
        this.particles = [];

        this._resizeCanvas();

        if (this.scoreDisplay) this.scoreDisplay.innerText = '0';
        if (this.streakDisplay) this.streakDisplay.innerText = '0x';
        this.renderLives();
        this.updateComboBar();
        this.updateHighScoreDisplay();

        if (this.overlay) this.overlay.style.display = 'none';

        // Clear any orphan items
        this.container.querySelectorAll('.falling-item, .floating-badge').forEach(el => el.remove());
        this.currentItem = null;

        this.spawnItem();
        this._loop();
    }

    renderLives() {
        if (!this.livesDisplay) return;
        let heartsHtml = '';
        for (let i = 0; i < this.maxLives; i++) {
            if (i < this.lives) {
                heartsHtml += '<span class="heart active">❤️</span>';
            } else {
                heartsHtml += '<span class="heart lost">🖤</span>';
            }
        }
        this.livesDisplay.innerHTML = heartsHtml;
    }

    updateComboBar() {
        if (!this.comboBar) return;
        const pct = Math.min((this.streak / 5) * 100, 100);
        this.comboBar.style.width = `${pct}%`;
        
        if (this.streak >= 5) {
            this.comboBar.classList.add('fire-mode');
        } else {
            this.comboBar.classList.remove('fire-mode');
        }
    }

    spawnItem() {
        if (this.itemsSpawned >= this.maxItems || this.lives <= 0) {
            this.end();
            return;
        }

        if (this.currentItem) {
            this.currentItem.remove();
            this.currentItem = null;
        }

        const items = window.ARCADE_ITEMS || [];
        if (!items.length) return;

        // 12% chance for special golden booster wildcard
        let itemData;
        const isGoldenRoll = Math.random() < 0.12 && this.itemsSpawned > 2;
        if (isGoldenRoll) {
            itemData = items.find(i => i.bonus) || items[0];
        } else {
            const standardItems = items.filter(i => !i.bonus);
            itemData = standardItems[Math.floor(Math.random() * standardItems.length)];
        }
        
        const isHi = (window.currentLang === 'hi');
        const label = isHi ? (itemData.labelHi || itemData.labelEn) : itemData.labelEn;
        const detail = isHi ? (itemData.detailHi || itemData.detailEn) : itemData.detailEn;
        const wildcardText = isHi ? '★ वाइल्डकार्ड ★' : '★ WILDCARD ★';

        const el = document.createElement('div');
        el.className = `falling-item ${itemData.bonus ? 'item-golden' : ''}`;
        el.dataset.type = itemData.type;
        el.dataset.bonus = itemData.bonus ? 'true' : 'false';

        el.innerHTML = `
            <span class="item-icon">${itemData.icon}</span>
            <div class="item-label">${label}</div>
            <div class="item-hint">${detail}</div>
            ${itemData.bonus ? `<span class="golden-sparkle">${wildcardText}</span>` : ''}
        `;

        const containerRect = this.container.getBoundingClientRect();
        const itemWidth = 108;
        
        const maxX = Math.max(containerRect.width - itemWidth - 24, 20);
        this.itemX = Math.random() * maxX + 12;
        this.itemY = -105;

        el.style.left = `${this.itemX}px`;
        el.style.top = `${this.itemY}px`;

        this.container.appendChild(el);
        this.currentItem = el;
        this.itemsSpawned++;

        // Increase speed gently so player can easily read services and economic activities
        this.currentSpeed = this.baseSpeed + (this.itemsSpawned * 0.04);
        if (window.sounds) window.sounds.playSpawn();
    }

    _loop() {
        if (!this.gameActive) return;

        // Update physics
        if (this.currentItem) {
            this.itemY += this.currentSpeed;
            this.currentItem.style.top = `${this.itemY}px`;

            const containerHeight = this.container.clientHeight;
            if (this.itemY >= containerHeight - 115) {
                this.checkCollision();
            }
        }

        // Render Canvas Particles
        this._updateParticles();

        this.animationId = requestAnimationFrame(() => this._loop());
    }

    _updateParticles() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.alpha -= p.decay;
            p.rotation += p.vRot;

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);
            this.ctx.fillStyle = p.color;

            if (p.shape === 'star') {
                this._drawStar(this.ctx, 0, 0, 5, p.size, p.size / 2);
            } else {
                this.ctx.beginPath();
                this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                this.ctx.fill();
            }
            this.ctx.restore();
        }
    }

    _drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
    }

    createExplosion(x, y, color, count = 28) {
        const colors = [color, '#ffffff', '#fbbf24', '#38bdf8', '#34d399'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 3;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                gravity: 0.18,
                decay: Math.random() * 0.025 + 0.015,
                alpha: 1,
                size: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: Math.random() > 0.4 ? 'star' : 'circle',
                rotation: Math.random() * Math.PI,
                vRot: (Math.random() - 0.5) * 0.2
            });
        }
    }

    checkCollision() {
        if (!this.currentItem) return;

        const itemRect = this.currentItem.getBoundingClientRect();
        const itemCenterX = itemRect.left + (itemRect.width / 2);
        const correctType = this.currentItem.dataset.type;
        const isBonus = this.currentItem.dataset.bonus === 'true';

        let detectedBinId = null;

        for (const [key, binEl] of Object.entries(this.bins)) {
            const binRect = binEl.getBoundingClientRect();
            if (itemCenterX >= binRect.left && itemCenterX <= binRect.right) {
                detectedBinId = key;
                break;
            }
        }

        const isCorrect = (isBonus && detectedBinId) || (detectedBinId === correctType);
        const targetBin = detectedBinId ? this.bins[detectedBinId] : null;

        const containerRect = this.container.getBoundingClientRect();
        const localX = itemCenterX - containerRect.left;
        const localY = itemRect.top - containerRect.top;

        const isHi = (window.currentLang === 'hi');
        const langDict = window.I18N ? (window.I18N[isHi ? 'hi' : 'en'] || window.I18N.en) : null;

        if (isBonus && detectedBinId) {
            // Wildcard Bonus item caught!
            this.streak++;
            const points = 50 * (this.streak >= 3 ? 2 : 1);
            this.score += points;
            if (this.lives < this.maxLives) {
                this.lives++;
                this.renderLives();
            }
            if (window.sounds) window.sounds.playBonus();
            this.createExplosion(localX, localY, '#fbbf24', 40);
            
            const bonusMsg = isHi ? `🌟 बोनस! +${points} अंक` : `🌟 WILDCARD! +${points} PTS`;
            const lifeMsg = this.lives < this.maxLives ? (isHi ? ' +❤️ जीवन' : ' +❤️ LIFE') : '';
            this.showFeedback(`${bonusMsg}${lifeMsg}`, localX, localY, true, true);

            if (targetBin) {
                targetBin.classList.add('bin-bonus');
                setTimeout(() => targetBin.classList.remove('bin-bonus'), 300);
            }
        } else if (isCorrect) {
            this.streak++;
            if (this.streak > this.maxStreak) this.maxStreak = this.streak;
            
            const comboMultiplier = this.streak >= 5 ? 3 : (this.streak >= 3 ? 2 : 1);
            const points = 10 * comboMultiplier;
            this.score += points;
            
            if (window.sounds) window.sounds.playSuccess(this.streak);
            
            const binColor = window.ECONOMY_DATA?.sectors?.[detectedBinId]?.color || '#10b981';
            this.createExplosion(localX, localY, binColor, 26);
            
            const comboText = comboMultiplier > 1 ? (isHi ? ` 🔥 ${comboMultiplier}X कॉम्बो!` : ` 🔥 ${comboMultiplier}X COMBO!`) : '';
            this.showFeedback(`+${points}${comboText}`, localX, localY, true, false);

            if (targetBin) {
                targetBin.classList.add('bin-success');
                setTimeout(() => targetBin.classList.remove('bin-success'), 250);
            }
        } else {
            // Wrong catch or missed
            this.streak = 0;
            this.lives--;
            this.renderLives();
            
            if (window.sounds) window.sounds.playError();
            
            let sectorName = correctType;
            if (isHi) {
                if (correctType === 'pri') sectorName = 'प्राथमिक क्षेत्र';
                else if (correctType === 'sec') sectorName = 'द्वितीयक क्षेत्र';
                else if (correctType === 'ter') sectorName = 'तृतीयक क्षेत्र';
            } else {
                if (correctType === 'pri') sectorName = 'Primary Sector';
                else if (correctType === 'sec') sectorName = 'Secondary Sector';
                else if (correctType === 'ter') sectorName = 'Tertiary Sector';
            }

            const missPrefix = isHi ? '💔 चूक! सही था:' : '💔 Miss! Needed:';
            this.showFeedback(`${missPrefix} ${sectorName}`, localX, localY, false, false);

            if (targetBin) {
                targetBin.classList.add('bin-error');
                setTimeout(() => targetBin.classList.remove('bin-error'), 250);
            }
        }

        this.updateComboBar();

        if (this.scoreDisplay) this.scoreDisplay.innerText = this.score;
        if (this.streakDisplay) {
            this.streakDisplay.innerHTML = this.streak >= 5 
                ? `<span class="streak-fire">🔥 ${this.streak}x</span>` 
                : `${this.streak}x`;
        }

        // Check High Score
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('cg_arcade_high_score', this.highScore.toString());
            this.updateHighScoreDisplay();
        }

        this.currentItem.remove();
        this.currentItem = null;

        if (this.lives <= 0) {
            this.end();
        } else {
            // Comfortable breather pause so player can read score feedback before next activity
            setTimeout(() => {
                if (this.gameActive) {
                    this.spawnItem();
                }
            }, 350);
        }
    }

    showFeedback(text, localX, localY, isSuccess, isBonus) {
        const badge = document.createElement('div');
        let badgeClass = 'floating-badge ';
        if (isBonus) badgeClass += 'badge-bonus';
        else if (isSuccess) badgeClass += 'badge-success';
        else badgeClass += 'badge-error';

        badge.className = badgeClass;
        badge.innerHTML = text;

        const containerRect = this.container.getBoundingClientRect();
        badge.style.left = `${Math.max(20, Math.min(localX - 60, containerRect.width - 150))}px`;
        badge.style.top = `${localY - 25}px`;

        this.container.appendChild(badge);
        setTimeout(() => badge.remove(), 800);
    }

    calculateRank(score) {
        const isHi = (window.currentLang === 'hi');
        if (score >= 200) {
            return {
                title: isHi ? "मुख्य आर्थिक नीति निर्माता" : "Chief Economic Visionary",
                grade: isHi ? "टियर S • मास्टर अर्थशास्त्री" : "Tier S • Master Economist",
                icon: "👑",
                color: "#fbbf24"
            };
        } else if (score >= 120) {
            return {
                title: isHi ? "राज्य राजस्व निदेशक" : "State Revenue Director",
                grade: isHi ? "टियर A • विशेषज्ञ योजनाकार" : "Tier A • Expert Planner",
                icon: "🥇",
                color: "#38bdf8"
            };
        } else if (score >= 60) {
            return {
                title: isHi ? "जिला योजना अधिकारी" : "District Planning Officer",
                grade: isHi ? "टियर B • सेक्टर विशेषज्ञ" : "Tier B • Sector Specialist",
                icon: "🥈",
                color: "#34d399"
            };
        } else {
            return {
                title: isHi ? "आर्थिक शिक्षार्थी" : "Economic Apprentice",
                grade: isHi ? "टियर C • कैडेट" : "Tier C • Cadet",
                icon: "🥉",
                color: "#cbd5e1"
            };
        }
    }

    end() {
        this.gameActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        if (this.currentItem) {
            this.currentItem.remove();
            this.currentItem = null;
        }

        if (window.sounds) window.sounds.playGameOver();

        if (this.finalScoreDisplay) {
            this.finalScoreDisplay.innerText = this.score;
        }

        const rank = this.calculateRank(this.score);
        if (this.rankBadge) {
            this.rankBadge.innerHTML = `
                <div class="rank-icon">${rank.icon}</div>
                <div class="rank-details">
                    <div class="rank-title" style="color: ${rank.color}">${rank.title}</div>
                    <div class="rank-grade">${rank.grade} • Max Streak: ${this.maxStreak}x</div>
                </div>
            `;
        }

        if (this.overlay) {
            this.overlay.style.display = 'flex';
        }
    }
}

if (typeof window !== 'undefined') {
    window.ArcadeGame = ArcadeGame;
}
