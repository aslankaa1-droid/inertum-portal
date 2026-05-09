/* INERTUM · Universal sticky topbar with theme switcher
   Подключение: <script src="path/to/topbar.js" defer></script>
   На каждой странице путь до assets/icons.svg вычисляется автоматически.
   Сохраняет выбор темы в localStorage (inertum_theme = dark|light|auto). */

(function() {
  'use strict';

  // ============== ОПРЕДЕЛИТЬ ОТНОСИТЕЛЬНЫЙ ПУТЬ К ASSETS ==============
  // Получаем src собственного скрипта чтобы понять, где assets/
  const ownScript = document.currentScript || (function() {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  const ownSrc = ownScript ? ownScript.src : '';
  // Из src выделяем prefix до /assets/topbar.js
  const assetsPrefix = ownSrc.replace(/topbar\.js.*$/, ''); // ".../assets/"
  const portalRoot = assetsPrefix.replace(/assets\/$/, ''); // ".../"
  const iconsUrl = assetsPrefix + 'icons.svg';
  const hubUrl = portalRoot + 'hub.html';
  const homeUrl = portalRoot + 'index.html';

  // ============== РАННЯЯ УСТАНОВКА ТЕМЫ (до DOMContentLoaded) ==============
  function getStoredTheme() {
    try { return localStorage.getItem('inertum_theme') || 'dark'; }
    catch (e) { return 'dark'; }
  }
  function effectiveTheme(mode) {
    if (mode === 'auto') {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return mode;
  }
  function applyTheme(mode) {
    const eff = effectiveTheme(mode);
    document.documentElement.setAttribute('data-theme', eff);
    document.documentElement.setAttribute('data-theme-mode', mode);
  }

  // Сразу применяем сохранённую тему
  applyTheme(getStoredTheme());

  // Реакция на смену системной темы при auto
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
      if (getStoredTheme() === 'auto') applyTheme('auto');
    });
  }

  // ============== СТИЛИ TOPBAR + ТЕМЫ ==============
  const css = `
  /* === Theme tokens === */
  :root[data-theme="dark"] {
    --bg-base: #0A0B0D; --bg-elev: #13151A; --bg-elev-2: #1C1F26;
    --ink: #F2F4F7; --ink-muted: #8A93A6; --ink-secondary: #C7CCD6;
    --argon: #5BC0EB; --argon-bright: #82d3f3;
    --warn: #E8A33D; --success: #3FB984; --danger: #E5685A;
    --stroke: #2A2F3A;
    --tb-bg: rgba(13, 15, 20, 0.92);
    --tb-stroke: rgba(91, 192, 235, 0.18);
    --tb-ink: #F2F4F7;
    --tb-ink-muted: #8A93A6;
  }
  :root[data-theme="light"] {
    --bg-base: #FAFBFC; --bg-elev: #FFFFFF; --bg-elev-2: #F0F2F5;
    --ink: #0A0B0D; --ink-muted: #5A6270; --ink-secondary: #2A2F3A;
    --argon: #1565C0; --argon-bright: #1976D2;
    --warn: #C77400; --success: #2E7D32; --danger: #C62828;
    --stroke: #DDE2E8;
    --tb-bg: rgba(255, 255, 255, 0.92);
    --tb-stroke: rgba(21, 101, 192, 0.18);
    --tb-ink: #0A0B0D;
    --tb-ink-muted: #5A6270;
  }
  /* Light overrides for elements that hardcode dark colors */
  :root[data-theme="light"] body { background: var(--bg-base) !important; color: var(--ink) !important; }
  :root[data-theme="light"] body::before {
    background-image:
      linear-gradient(rgba(21, 101, 192, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(21, 101, 192, 0.05) 1px, transparent 1px) !important;
  }

  /* === Topbar === */
  .inertum-topbar {
    position: sticky;
    top: 0;
    z-index: 9999;
    width: 100%;
    background: var(--tb-bg);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--tb-stroke);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .inertum-topbar .tb-group { display: flex; gap: 6px; align-items: center; }
  .inertum-topbar .tb-divider {
    width: 1px; height: 18px; background: var(--tb-stroke); margin: 0 4px;
  }
  .inertum-topbar .tb-title {
    flex: 1; min-width: 0;
    font: 500 12px 'JetBrains Mono', monospace;
    color: var(--tb-ink-muted);
    letter-spacing: 0.06em;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    text-align: center;
  }
  .inertum-topbar .tb-title strong {
    color: var(--tb-ink); font-weight: 600;
  }
  .inertum-topbar .tb-icon {
    width: 32px; height: 32px;
    background: transparent;
    border: 1px solid transparent;
    color: var(--tb-ink-muted);
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex; align-items: center; justify-content: center;
    text-decoration: none;
    transition: all .15s;
    padding: 0;
  }
  .inertum-topbar .tb-icon:hover {
    border-color: var(--argon);
    color: var(--argon);
  }
  .inertum-topbar .tb-icon.active {
    border-color: var(--argon);
    color: var(--argon);
    background: rgba(91, 192, 235, 0.08);
  }
  :root[data-theme="light"] .inertum-topbar .tb-icon.active {
    background: rgba(21, 101, 192, 0.08);
  }
  .inertum-topbar .tb-icon svg {
    width: 16px; height: 16px;
    fill: none; stroke: currentColor; stroke-width: 1.6;
    stroke-linecap: round; stroke-linejoin: round;
  }

  /* Адаптация под маленькие экраны */
  @media (max-width: 600px) {
    .inertum-topbar .tb-title { display: none; }
    .inertum-topbar { padding: 8px 12px; gap: 8px; }
  }

  /* Не печатать topbar */
  @media print { .inertum-topbar { display: none !important; } }

  /* Сдвигаем существующие sticky-меню (header.nav в style-v2.css) под topbar */
  body > header.nav { top: 49px !important; }
  body > header.bar { margin-top: 16px !important; }
  `;

  const styleEl = document.createElement('style');
  styleEl.id = 'inertum-topbar-style';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ============== ИНЖЕКТ TOPBAR В DOM ==============
  function buildTopbar() {
    if (document.getElementById('inertum-topbar')) return;

    const pageTitle = document.title.replace(/^INERTUM[\s·\-]+/i, '');

    const tb = document.createElement('div');
    tb.id = 'inertum-topbar';
    tb.className = 'inertum-topbar';
    tb.innerHTML = `
      <div class="tb-group">
        <a href="${homeUrl}" class="tb-icon" title="Главная INERTUM"><svg><use href="${iconsUrl}#home"/></svg></a>
        <a href="${hubUrl}" class="tb-icon" title="Hub — все материалы"><svg><use href="${iconsUrl}#globe"/></svg></a>
        <div class="tb-divider"></div>
        <button class="tb-icon" data-action="back" title="Назад"><svg><use href="${iconsUrl}#arrow-left"/></svg></button>
        <button class="tb-icon" data-action="forward" title="Вперёд"><svg><use href="${iconsUrl}#arrow-right"/></svg></button>
        <button class="tb-icon" data-action="top" title="В начало страницы"><svg><use href="${iconsUrl}#top"/></svg></button>
      </div>

      <div class="tb-title"><strong>INERTUM</strong> · ${escapeHtml(pageTitle)}</div>

      <div class="tb-group">
        <button class="tb-icon" data-theme-set="light" title="Светлая тема"><svg><use href="${iconsUrl}#sun"/></svg></button>
        <button class="tb-icon" data-theme-set="dark" title="Тёмная тема"><svg><use href="${iconsUrl}#moon"/></svg></button>
        <button class="tb-icon" data-theme-set="auto" title="Системная тема"><svg><use href="${iconsUrl}#auto-theme"/></svg></button>
      </div>
    `;
    document.body.insertBefore(tb, document.body.firstChild);

    // Bind events
    tb.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const a = btn.dataset.action;
        if (a === 'back') history.back();
        else if (a === 'forward') history.forward();
        else if (a === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    tb.querySelectorAll('[data-theme-set]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.themeSet;
        try { localStorage.setItem('inertum_theme', mode); } catch (e) {}
        applyTheme(mode);
        markActiveTheme();
      });
    });

    markActiveTheme();
    removeOldNavIcons();
  }

  function markActiveTheme() {
    const mode = getStoredTheme();
    document.querySelectorAll('[data-theme-set]').forEach(b => {
      b.classList.toggle('active', b.dataset.themeSet === mode);
    });
  }

  // Удалить старые блоки navigation-iconов (избежать дублирования)
  function removeOldNavIcons() {
    document.querySelectorAll('.nav-icons, .nav-icons-bar').forEach(el => {
      if (!el.closest('#inertum-topbar')) el.remove();
    });
    // Убираем старые "← Hub" текстовые ссылки в md-viewer
    document.querySelectorAll('.bar a').forEach(a => {
      if (/^\s*←\s*Hub\s*$/i.test(a.textContent)) a.remove();
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // ============== ЗАПУСК ==============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildTopbar);
  } else {
    buildTopbar();
  }
})();
