// Global Application Controller with 100% Resilient Themes, Language & Screen Management

// 1. Initial State
window.currentTheme = localStorage.getItem('cg_arcade_theme') || 'light';
window.currentLang = localStorage.getItem('cg_arcade_lang') || 'en';
window.gdpTotalCr = 358000;

// 2. Immediate Theme Controller
window.setAppTheme = function(theme) {
    window.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) document.body.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('cg_arcade_theme', theme);
    } catch (e) {}

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        const isHi = window.currentLang === 'hi';
        themeBtn.innerHTML = theme === 'dark' 
            ? (isHi ? '☀️ लाइट' : '☀️ Light') 
            : (isHi ? '🌙 डार्क' : '🌙 Dark');
    }
};

window.toggleAppTheme = function() {
    try {
        if (window.sounds) window.sounds.playClick();
    } catch (e) {}
    const nextTheme = window.currentTheme === 'dark' ? 'light' : 'dark';
    window.setAppTheme(nextTheme);
};

// 3. Immediate Language Controller (data-i18n based)
window.setAppLanguage = function(lang) {
    window.currentLang = lang;
    try {
        localStorage.setItem('cg_arcade_lang', lang);
    } catch (e) {}

    const dict = window.I18N ? (window.I18N[lang] || window.I18N.en) : null;
    if (!dict) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.innerHTML = lang === 'en' ? '🌐 हिंदी' : '🌐 English';
    }

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        const isHi = lang === 'hi';
        themeBtn.innerHTML = window.currentTheme === 'dark' 
            ? (isHi ? '☀️ लाइट' : '☀️ Light') 
            : (isHi ? '🌙 डार्क' : '🌙 Dark');
    }

    // Refresh GDP counter format in builder
    const gdpValDisplay = document.getElementById('builder-gdp-val');
    if (gdpValDisplay) {
        gdpValDisplay.innerText = lang === 'hi' 
            ? `₹${window.gdpTotalCr.toLocaleString('en-IN')} करोड़`
            : `₹${window.gdpTotalCr.toLocaleString('en-IN')} Cr`;
    }
};

window.toggleAppLanguage = function() {
    try {
        if (window.sounds) window.sounds.playClick();
    } catch (e) {}
    const nextLang = window.currentLang === 'en' ? 'hi' : 'en';
    window.setAppLanguage(nextLang);
};

// 4. Immediate Screen Controller
window.switchAppScreen = function(screenKey) {
    if (window.sounds) window.sounds.playClick();

    const screens = {
        hub: document.getElementById('hub-screen'),
        intro: document.getElementById('intro-screen'),
        dashboard: document.getElementById('dashboard-screen'),
        game: document.getElementById('game-screen')
    };
    const overlay = document.getElementById('game-over-overlay');
    if (overlay) overlay.style.display = 'none';

    // Toggle active screen
    Object.entries(screens).forEach(([key, el]) => {
        if (el) el.style.display = (key === screenKey) ? 'flex' : 'none';
    });

    // Toggle active nav tab
    const hubTab = document.getElementById('tab-hub');
    const introTab = document.getElementById('tab-intro');
    if (hubTab) {
        if (screenKey === 'hub') hubTab.classList.add('active');
        else hubTab.classList.remove('active');
    }
    if (introTab) {
        if (screenKey === 'intro' || screenKey === 'dashboard' || screenKey === 'game') introTab.classList.add('active');
        else introTab.classList.remove('active');
    }

    // Start/Stop arcade game loop
    if (window.arcadeInstance) {
        if (screenKey === 'game') {
            window.arcadeInstance.start();
        } else {
            window.arcadeInstance.end();
            if (overlay) overlay.style.display = 'none';
        }
    }
};

// 5. Interactive GDP Builder Toy
window.addBuilderGDP = function(amount, btnElement) {
    window.gdpTotalCr += amount;
    const gdpValDisplay = document.getElementById('builder-gdp-val');
    if (gdpValDisplay) {
        const isHi = window.currentLang === 'hi';
        gdpValDisplay.innerText = isHi 
            ? `₹${window.gdpTotalCr.toLocaleString('en-IN')} करोड़` 
            : `₹${window.gdpTotalCr.toLocaleString('en-IN')} Cr`;
        gdpValDisplay.style.transform = 'scale(1.12)';
        setTimeout(() => gdpValDisplay.style.transform = 'scale(1)', 150);
    }
    if (window.sounds) window.sounds.playSuccess(1);

    if (btnElement) {
        btnElement.classList.add('btn-clicked');
        setTimeout(() => btnElement.classList.remove('btn-clicked'), 200);
    }
};

// 6. DOM Ready Setup
document.addEventListener('DOMContentLoaded', () => {
    // Apply current theme & language
    window.setAppTheme(window.currentTheme);
    window.setAppLanguage(window.currentLang);

    // Initialize Arcade Instance
    if (window.ArcadeGame) {
        window.arcadeInstance = new window.ArcadeGame({
            container: document.getElementById('game-area'),
            scoreDisplay: document.getElementById('score'),
            highScoreDisplay: document.getElementById('high-score'),
            streakDisplay: document.getElementById('streak'),
            livesDisplay: document.getElementById('lives-container'),
            comboBar: document.getElementById('combo-fill'),
            finalScoreDisplay: document.getElementById('final-score'),
            rankBadge: document.getElementById('rank-badge'),
            overlay: document.getElementById('game-over-overlay')
        });
    }

    // Sound Mute Toggle
    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    if (soundToggleBtn && window.sounds) {
        soundToggleBtn.addEventListener('click', () => {
            const isMuted = window.sounds.toggleMute();
            soundToggleBtn.textContent = isMuted ? '🔇' : '🔊';
            soundToggleBtn.title = isMuted ? 'Unmute Sound' : 'Mute Sound';
        });
    }

    // Keyboard ESC to return to Hub
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const gameScreen = document.getElementById('game-screen');
            if (gameScreen && gameScreen.style.display === 'flex') {
                window.switchAppScreen('hub');
            }
        }
    });

    // Initial Screen (Central Games Hub)
    window.switchAppScreen('hub');
});
