// ============================================
// iOS Chrome (CriOS) - Ana Ekrana Əlavə Et
// Bu fayl Safari üçün olan banner ilə paralel işləyir.
// Chrome iOS-da "Add to Home Screen" mümkündür,
// lakin interfeys Safari-dən fərqlidir.
// ============================================

(function () {
    'use strict';

    var STORAGE_KEY = 'ios-chrome-banner-closed';
    var SHOW_AGAIN_DAYS = 7;

    function isChromeIOS() {
        return /CriOS/i.test(navigator.userAgent);
    }

    function isInStandaloneMode() {
        return (navigator.standalone === true) ||
            window.matchMedia('(display-mode: standalone)').matches;
    }

    function shouldShow() {
        if (isInStandaloneMode()) return false;
        if (!isChromeIOS()) return false;
        var stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return true;
        var daysPassed = (Date.now() - parseInt(stored, 10)) / (1000 * 60 * 60 * 24);
        return daysPassed >= SHOW_AGAIN_DAYS;
    }

    function closeBanner() {
        var el = document.getElementById('ios-chrome-banner');
        if (el) el.style.display = 'none';
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }

    function createBanner() {
        if (document.getElementById('ios-chrome-banner')) return;

        var style = document.createElement('style');
        style.textContent = [
            '#ios-chrome-banner {',
            '  position: fixed;',
            '  bottom: 0;',
            '  left: 0;',
            '  right: 0;',
            '  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);',
            '  color: #fff;',
            '  padding: 16px 16px 20px;',
            '  box-shadow: 0 -4px 24px rgba(0,0,0,0.25);',
            '  z-index: 1002;',
            '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
            '  animation: icbSlideUp 0.4s ease;',
            '}',
            '@keyframes icbSlideUp {',
            '  from { transform: translateY(100%); opacity: 0; }',
            '  to   { transform: translateY(0);    opacity: 1; }',
            '}',
            '#ios-chrome-banner .icb-inner {',
            '  max-width: 600px;',
            '  margin: 0 auto;',
            '  position: relative;',
            '  display: flex;',
            '  align-items: flex-start;',
            '  gap: 12px;',
            '}',
            '#ios-chrome-banner .icb-logo {',
            '  width: 44px;',
            '  height: 44px;',
            '  border-radius: 10px;',
            '  flex-shrink: 0;',
            '  margin-top: 2px;',
            '}',
            '#ios-chrome-banner .icb-body {',
            '  flex: 1;',
            '  min-width: 0;',
            '}',
            '#ios-chrome-banner .icb-title {',
            '  font-size: 16px;',
            '  font-weight: 700;',
            '  margin: 0 24px 6px 0;',
            '}',
            '#ios-chrome-banner .icb-desc {',
            '  font-size: 13px;',
            '  opacity: 0.92;',
            '  margin: 0 0 8px 0;',
            '  line-height: 1.45;',
            '}',
            '#ios-chrome-banner .icb-steps {',
            '  display: flex;',
            '  flex-direction: column;',
            '  gap: 5px;',
            '  background: rgba(255,255,255,0.13);',
            '  border-radius: 8px;',
            '  padding: 9px 10px;',
            '  font-size: 12px;',
            '  line-height: 1.4;',
            '}',
            '#ios-chrome-banner .icb-step {',
            '  display: flex;',
            '  align-items: center;',
            '  gap: 6px;',
            '}',
            '#ios-chrome-banner .icb-close {',
            '  position: absolute;',
            '  top: -4px;',
            '  right: 0;',
            '  background: rgba(255,255,255,0.18);',
            '  border: none;',
            '  color: #fff;',
            '  width: 28px;',
            '  height: 28px;',
            '  border-radius: 50%;',
            '  font-size: 18px;',
            '  line-height: 1;',
            '  cursor: pointer;',
            '  display: flex;',
            '  align-items: center;',
            '  justify-content: center;',
            '  padding: 0;',
            '}'
        ].join('\n');
        document.head.appendChild(style);

        var banner = document.createElement('div');
        banner.id = 'ios-chrome-banner';

        // Share icon SVG (iOS style)
        var shareIconSVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin:0 2px;">'
            + '<path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/>'
            + '</svg>';

        banner.innerHTML = [
            '<div class="icb-inner">',
            '  <img src="/logo.png" alt="UniFy" class="icb-logo">',
            '  <div class="icb-body">',
            '    <p class="icb-title" id="icb-title">UniFy Tətbiqini Quraşdır</p>',
            '    <p class="icb-desc" id="icb-desc">Chrome-da <strong>Paylaş</strong> ' + shareIconSVG + ' düyməsinə basın və <strong>"Ana Ekrana Əlavə Et"</strong> seçin</p>',
            '    <div class="icb-steps" id="icb-steps">',
            '      <span class="icb-step" id="icb-s1">1️⃣ Yuxarı sağdakı ' + shareIconSVG + ' Paylaş düyməsinə basın</span>',
            '      <span class="icb-step" id="icb-s2">2️⃣ Aşağı sürüşdürün → <strong>"Ana Ekrana Əlavə Et"</strong> seçin</span>',
            '      <span class="icb-step" id="icb-s3">3️⃣ <strong>"Əlavə Et"</strong> düyməsinə basın</span>',
            '    </div>',
            '  </div>',
            '  <button class="icb-close" onclick="(function(){document.getElementById(\'ios-chrome-banner\').style.display=\'none\';localStorage.setItem(\'ios-chrome-banner-closed\',Date.now().toString());})()" aria-label="Bağla">✕</button>',
            '</div>'
        ].join('\n');

        document.body.appendChild(banner);
        applyI18n();
    }

    function applyI18n() {
        // Try to detect language from localStorage (same key as app.js uses)
        var lang = (localStorage.getItem('unify_lang') || 'az').toLowerCase();

        var strings = {
            az: {
                title: 'UniFy Tətbiqini Quraşdır',
                desc: 'Chrome-da <strong>Paylaş</strong> düyməsinə basın və <strong>"Ana Ekrana Əlavə Et"</strong> seçin',
                s1: '1️⃣ Yuxarı sağdakı <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle"><path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/></svg> Paylaş düyməsinə basın',
                s2: '2️⃣ Aşağı sürüşdürün → <strong>"Ana Ekrana Əlavə Et"</strong> seçin',
                s3: '3️⃣ <strong>"Əlavə Et"</strong> düyməsinə basın'
            },
            ru: {
                title: 'Установить приложение UniFy',
                desc: 'В Chrome нажмите кнопку <strong>Поделиться</strong> и выберите <strong>«Добавить на экран»</strong>',
                s1: '1️⃣ Нажмите кнопку <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle"><path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/></svg> вверху справа',
                s2: '2️⃣ Прокрутите вниз → выберите <strong>«Добавить на главный экран»</strong>',
                s3: '3️⃣ Нажмите <strong>«Добавить»</strong>'
            },
            en: {
                title: 'Install UniFy App',
                desc: 'In Chrome, tap the <strong>Share</strong> button and select <strong>"Add to Home Screen"</strong>',
                s1: '1️⃣ Tap the <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle"><path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/></svg> Share button in the top-right',
                s2: '2️⃣ Scroll down → tap <strong>"Add to Home Screen"</strong>',
                s3: '3️⃣ Tap <strong>"Add"</strong>'
            }
        };

        var s = strings[lang] || strings.az;

        var t = document.getElementById('icb-title');
        var d = document.getElementById('icb-desc');
        var s1 = document.getElementById('icb-s1');
        var s2 = document.getElementById('icb-s2');
        var s3 = document.getElementById('icb-s3');

        if (t) t.textContent = s.title;
        if (d) d.innerHTML = s.desc;
        if (s1) s1.innerHTML = s.s1;
        if (s2) s2.innerHTML = s.s2;
        if (s3) s3.innerHTML = s.s3;
    }

    function init() {
        if (!shouldShow()) return;
        // Also log to Supabase if available (app.js-dəki funksiya adı ilə uyğun)
        if (typeof logInstallClickToSupabase === 'function') {
            logInstallClickToSupabase('ios_chrome_banner_shown');
        }
        createBanner();
    }

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Listen for language changes from app.js (re-apply strings if banner is open)
    document.addEventListener('unify-lang-change', function () {
        var banner = document.getElementById('ios-chrome-banner');
        if (banner && banner.style.display !== 'none') {
            applyI18n();
        }
    });

})();
