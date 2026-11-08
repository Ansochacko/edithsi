export function initHeaderMenus(): void {
  const menus = Array.from(
    document.querySelectorAll<HTMLDetailsElement>('#lang-menu-details, #for-you-menu-details')
  );
  if (!menus.length) return;

  document.addEventListener('click', (e) => {
    menus.forEach((menu) => {
      if (menu.hasAttribute('open') && !menu.contains(e.target as Node)) {
        menu.removeAttribute('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menus.forEach((menu) => {
        if (menu.hasAttribute('open')) {
          menu.removeAttribute('open');
          const summary = menu.querySelector('summary');
          if (summary) summary.focus();
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderMenus);
  } else {
    initHeaderMenus();
  }
}
