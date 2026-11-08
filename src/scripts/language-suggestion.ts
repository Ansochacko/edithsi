export function initLanguageSuggestion(): void {
  const bar = document.getElementById('lang-suggestion-bar');
  if (!bar) return;
  try {
    if (sessionStorage.getItem('edithsi_lang_dismissed') === '1') return;
  } catch (_) {}

  const currentLang = bar.getAttribute('data-current-lang') || 'en';
  let alternates: Array<{
    lang: string;
    path: string;
    suggestionPrompt: string;
    suggestionAction: string;
    suggestionDismiss: string;
  }> = [];
  try {
    alternates = JSON.parse(bar.getAttribute('data-alternates') || '[]');
  } catch (_) {
    return;
  }

  const rawLangs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

  let matched: (typeof alternates)[0] | null = null;
  for (let i = 0; i < rawLangs.length; i++) {
    const code = String(rawLangs[i]).toLowerCase().split('-')[0];
    const found = alternates.find((item) => item.lang === code);
    if (found) {
      matched = found;
      break;
    }
  }

  if (!matched || matched.lang === currentLang) return;

  const textEl = document.getElementById('lang-suggestion-text');
  const linkEl = document.getElementById('lang-suggestion-link');
  const dismissBtn = document.getElementById('lang-suggestion-dismiss');
  if (!textEl || !linkEl || !dismissBtn) return;

  bar.setAttribute('lang', matched.lang);
  textEl.textContent = matched.suggestionPrompt;
  linkEl.textContent = matched.suggestionAction;
  linkEl.setAttribute('href', matched.path);
  dismissBtn.setAttribute('aria-label', matched.suggestionDismiss);
  bar.removeAttribute('hidden');

  dismissBtn.addEventListener('click', () => {
    bar.setAttribute('hidden', '');
    try {
      sessionStorage.setItem('edithsi_lang_dismissed', '1');
    } catch (_) {}
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSuggestion);
  } else {
    initLanguageSuggestion();
  }
}
