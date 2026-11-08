export function initRolesFilter(): void {
  const bar = document.querySelector<HTMLElement>('.filter-bar');
  if (!bar) return;

  const template = bar.getAttribute('data-showing-template') || '{count} / {total}';
  const total = parseInt(bar.getAttribute('data-total-roles') || '8', 10);
  const countEl = document.getElementById('role-filter-count');

  const filterLinks = Array.from(
    bar.querySelectorAll<HTMLAnchorElement>('.filter-pill[data-filter-for]')
  );
  const groups = Array.from(
    document.querySelectorAll<HTMLElement>('.audience-group[data-audience-group]')
  );
  const flatCards = Array.from(
    document.querySelectorAll<HTMLElement>('#roles-view-pay .role-card, #roles-view-az .role-card')
  );

  const radioGroup = document.getElementById('sort-mode-group') as HTMLInputElement | null;
  const radioPay = document.getElementById('sort-mode-pay') as HTMLInputElement | null;
  const radioAz = document.getElementById('sort-mode-az') as HTMLInputElement | null;

  let currentFor = 'all';
  let currentSort = 'group';

  function updateUrl(forVal: string, sortVal: string) {
    const url = new URL(window.location.href);
    if (forVal && forVal !== 'all') {
      url.searchParams.set('for', forVal);
    } else {
      url.searchParams.delete('for');
    }
    if (sortVal && sortVal !== 'group') {
      url.searchParams.set('sort', sortVal);
    } else {
      url.searchParams.delete('sort');
    }
    url.hash = '';
    window.history.replaceState({}, '', url.toString());
  }

  function applyState(forVal: string, sortVal: string, syncUrl: boolean) {
    currentFor = forVal || 'all';
    currentSort = sortVal || 'group';

    if (currentSort === 'pay' && radioPay) radioPay.checked = true;
    else if (currentSort === 'az' && radioAz) radioAz.checked = true;
    else if (radioGroup) radioGroup.checked = true;

    filterLinks.forEach((link) => {
      const val = link.getAttribute('data-filter-for');
      if (val === currentFor) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    groups.forEach((grp) => {
      const gSlug = grp.getAttribute('data-audience-group');
      if (currentFor === 'all' || gSlug === currentFor) {
        grp.removeAttribute('hidden');
      } else {
        grp.setAttribute('hidden', '');
      }
    });

    const matchedRoleIds = new Set<string>();
    flatCards.forEach((card) => {
      const auds = (card.getAttribute('data-audiences') || '').split(',');
      const roleId = card.getAttribute('data-role-id') || '';
      const match =
        currentFor === 'all' ||
        auds.includes(currentFor) ||
        roleId === 'generalist-expert';
      if (match) {
        card.removeAttribute('hidden');
        if (currentFor === 'all' || auds.includes(currentFor)) {
          matchedRoleIds.add(roleId);
        }
      } else {
        card.setAttribute('hidden', '');
      }
    });

    const visibleCount = currentFor === 'all' ? total : matchedRoleIds.size;
    if (countEl) {
      countEl.textContent = template
        .replace('{count}', String(visibleCount))
        .replace('{total}', String(total));
    }

    if (syncUrl) {
      updateUrl(currentFor, currentSort);
    }
  }

  filterLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const selected = link.getAttribute('data-filter-for') || 'all';
      applyState(selected, currentSort, true);
    });
  });

  [
    { el: radioGroup, mode: 'group' },
    { el: radioPay, mode: 'pay' },
    { el: radioAz, mode: 'az' },
  ].forEach((item) => {
    if (!item.el) return;
    item.el.addEventListener('change', () => {
      if (item.el && item.el.checked) {
        applyState(currentFor, item.mode, true);
      }
    });
  });

  // Read initial ?for=<slug>&sort=<mode> from URL on load
  const params = new URLSearchParams(window.location.search);
  const initFor = params.get('for') || 'all';
  const initSort = params.get('sort') || 'group';
  if (initFor !== 'all' || initSort !== 'group') {
    applyState(initFor, initSort, false);
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRolesFilter);
  } else {
    initRolesFilter();
  }
}
