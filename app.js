document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render
  renderAllTables();

  // 2. DOM Elements
  const tabsContainer = document.getElementById('tabs-container');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const printBtn = document.getElementById('print-btn');
  const emptyState = document.getElementById('empty-state');
  const tablesContainerDiv = document.getElementById('pricing-tables-container');

  // SVG Moon and Sun selectors
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  // 3. Theme Toggle Logic
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  };

  themeToggleBtn.addEventListener('click', toggleTheme);
  initTheme();

  // 4. Tab Click Logic
  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    // Set active tab styling
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const targetCategory = btn.getAttribute('data-category');
    const query = searchInput.value;

    // Filter display based on selection
    Object.keys(PRICING_DATA).forEach(key => {
      const section = document.getElementById(`cat-${key}`);
      if (!section) return;

      if (query.trim() === '') {
        section.style.display = (key === targetCategory ? 'block' : 'none');
      } else {
        // If searching, only show the active tab IF it has matching rows
        const rows = section.querySelectorAll('tbody tr');
        let visibleRowsCount = 0;
        rows.forEach(row => {
          if (row.style.display !== 'none') visibleRowsCount++;
        });
        section.style.display = (key === targetCategory && visibleRowsCount > 0 ? 'block' : 'none');
      }
    });
  });

  // 5. Search Logic
  const filterTableData = (query) => {
    const q = query.trim().toLowerCase();
    let totalMatches = 0;

    // Get the currently active category key
    const activeTabBtn = document.querySelector('.tab-btn.active');
    const activeCategoryKey = activeTabBtn ? activeTabBtn.getAttribute('data-category') : 'stock';

    Object.keys(PRICING_DATA).forEach(categoryKey => {
      const section = document.getElementById(`cat-${categoryKey}`);
      if (!section) return;

      const rows = section.querySelectorAll('tbody tr');
      let categoryMatches = 0;

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(q)) {
          row.style.display = '';
          categoryMatches++;
          totalMatches++;
        } else {
          row.style.display = 'none';
        }
      });

      // Update Tab Badges
      const tabBtn = document.querySelector(`.tab-btn[data-category="${categoryKey}"]`);
      if (tabBtn) {
        const tabName = tabBtn.getAttribute('data-category-name') || tabBtn.innerText.replace(/\s\(\d+\)$/, '').trim();
        
        // Save the raw category name if not saved yet
        if (!tabBtn.getAttribute('data-category-name')) {
          tabBtn.setAttribute('data-category-name', tabName);
        }

        if (q === '') {
          tabBtn.innerHTML = tabName;
        } else {
          tabBtn.innerHTML = `${tabName} <span style="background: var(--primary); color: white; padding: 1px 6px; border-radius: 10px; font-size: 0.75rem; margin-left: 5px; font-weight: bold;">${categoryMatches}</span>`;
        }
      }

      // Hide or show the category container
      if (q !== '' && categoryMatches === 0) {
        section.style.display = 'none';
      } else {
        // If no search is active, show only the active tab. If search IS active, show only if it matches and is the active tab.
        const isCurrentActiveTab = (categoryKey === activeCategoryKey);
        if (q === '') {
          section.style.display = isCurrentActiveTab ? 'block' : 'none';
        } else {
          section.style.display = (isCurrentActiveTab && categoryMatches > 0) ? 'block' : 'none';
        }
      }
    });

    // Handle empty state screen wide
    if (q !== '' && totalMatches === 0) {
      emptyState.style.display = 'flex';
      tablesContainerDiv.style.display = 'none';
    } else {
      emptyState.style.display = 'block';
      tablesContainerDiv.style.display = 'block';
    }
  };

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.trim() !== '') {
      clearSearchBtn.style.display = 'flex';
    } else {
      clearSearchBtn.style.display = 'none';
    }
    filterTableData(value);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    filterTableData('');
    searchInput.focus();
  });

  // 6. Print Button Logic
  printBtn.addEventListener('click', () => {
    window.print();
  });
});

// Helper: Rendering Function
function renderAllTables() {
  const container = document.getElementById('pricing-tables-container');
  if (!container) return;
  container.innerHTML = ''; // Clear loading spinner/text

  // Helper to highlight AR suffixes
  function renderNameWithHighlight(name) {
    if (!name) return '';
    const arPatterns = [
      "c/ Antirreflex Super Hidrofóbico",
      "c/ Antirreflex Block",
      "c/ Antirreflex"
    ];
    for (const pattern of arPatterns) {
      if (name.endsWith(pattern)) {
        const baseName = name.substring(0, name.length - pattern.length);
        return `${baseName}<span class="ar-highlight">${pattern}</span>`;
      }
    }
    return name;
  }

  Object.keys(PRICING_DATA).forEach(key => {
    const cat = PRICING_DATA[key];
    const section = document.createElement('section');
    section.id = `cat-${key}`;
    section.className = 'tab-content';
    
    // Default show only 'stock' category on screen
    if (key === 'stock') {
      section.classList.add('active');
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }

    let html = `
      <div class="category-info">
        <h2>${cat.title}</h2>
        <p>${cat.description}</p>
      </div>
      <div class="table-card">
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
    `;

    // 1. Add headers
    cat.headers.forEach(h => {
      let headerClass = '';
      if (h === 'Parámetros de Graduación') headerClass = ' class="col-params-stock"';
      else if (h === 'Rango Esférico' || h === 'Rango Cilíndrico') {
        headerClass = key === 'monofocal_lab' ? ' class="col-params-lab"' : ' class="col-params-bifocal"';
      } else if (h === 'Rango Adición') headerClass = ' class="col-params-bifocal"';

      if (key === 'multifocal_digital' && cat.subheaders && cat.subheaders[h]) {
        html += `
          <th${headerClass}>
            <div class="column-title-wrapper">
              <span>${h}</span>
              <span class="column-desc">${cat.subheaders[h]}</span>
            </div>
          </th>
        `;
      } else {
        html += `<th${headerClass}>${h}</th>`;
      }
    });

    html += `
              </tr>
            </thead>
            <tbody>
    `;

    // 2. Add item rows
    let lastGroup = null;
    cat.items.forEach((item, index) => {
      const rowClass = item.featured ? ' class="row-featured"' : '';
      
      // Subgroup divider row
      if (item.group && item.group !== lastGroup) {
        lastGroup = item.group;
        html += `
          <tr class="subgroup-header-row">
            <td colspan="${cat.headers.length}">
              <span class="subgroup-title">${item.group}</span>
            </td>
          </tr>
        `;
      }

      html += `<tr${rowClass}>`;

      if (key === 'stock') {
        let nameHtml = `
          <div class="product-name-container">
            <span class="badge-index-inline">${item.index}</span>
            <strong class="product-name">${renderNameWithHighlight(item.name)}</strong>
            ${item.featured ? '<span class="badge-promo" style="display: inline-block; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; border-radius: 4px; background: var(--gradient-primary); color: white; margin-left: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: middle;">Destacado 🔥</span>' : ''}
            <button type="button" class="mobile-info-trigger" onclick="toggleVanillaRow(this)" title="Ver parámetros">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </button>
          </div>
          <div class="mobile-collapsed-details" style="display: none;">
            <strong>Graduación:</strong> ${item.params}
          </div>
        `;
        
        html += `
          <td>${nameHtml}</td>
          <td><span class="badge-range">${item.type}</span></td>
          <td class="col-params-stock"><span class="params-text">${item.params}</span></td>
          <td class="price-value">${item.price}</td>
        `;
      } else if (key === 'monofocal_lab') {
        let nameHtml = `
          <div class="product-name-container">
            <strong class="product-name">${renderNameWithHighlight(item.name)}</strong>
            <button type="button" class="mobile-info-trigger" onclick="toggleVanillaRow(this)" title="Ver parámetros">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </button>
          </div>
          <div class="mobile-collapsed-details" style="display: none;">
            <div><strong>Rango Esférico:</strong> ${item.sphRange}</div>
            <div><strong>Rango Cilíndrico:</strong> ${item.cylRange}</div>
          </div>
        `;
        if (item.colors) {
          nameHtml += '<div class="color-options" style="margin-top: 0.35rem; display: flex; gap: 0.35rem; flex-wrap: wrap;">';
          item.colors.forEach(c => {
            let colorBg, colorText;
            switch(c.toLowerCase()) {
              case 'brown':
                colorBg = 'rgba(139, 69, 19, 0.1)';
                colorText = '#c66a38';
                break;
              case 'green':
                colorBg = 'rgba(16, 185, 129, 0.1)';
                colorText = '#10b981';
                break;
              case 'blue':
                colorBg = 'rgba(59, 130, 246, 0.1)';
                colorText = '#3b82f6';
                break;
              case 'pink':
                colorBg = 'rgba(236, 72, 153, 0.1)';
                colorText = '#ec4899';
                break;
              case 'purple':
                colorBg = 'rgba(139, 92, 246, 0.1)';
                colorText = '#8b5cf6';
                break;
              default:
                colorBg = 'rgba(100, 116, 139, 0.1)';
                colorText = 'var(--text-muted)';
            }
            nameHtml += `<span style="font-size: 0.725rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: ${colorBg}; color: ${colorText}; text-transform: uppercase;">${c}</span>`;
          });
          nameHtml += '</div>';
        }
        
        html += `
          <td>${nameHtml}</td>
          <td class="col-params-lab"><span class="params-text">${item.sphRange}</span></td>
          <td class="col-params-lab"><span class="params-text">${item.cylRange}</span></td>
          <td class="price-value">${item.traditionalPrice}</td>
          <td class="price-value">${item.digitalPrice}</td>
        `;
      } else if (key === 'bifocal') {
        let nameHtml = `
          <div class="product-name-container">
            <strong class="product-name">${renderNameWithHighlight(item.name)}</strong>
            <button type="button" class="mobile-info-trigger" onclick="toggleVanillaRow(this)" title="Ver parámetros">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </button>
          </div>
          <div class="mobile-collapsed-details" style="display: none;">
            <div><strong>Rango Esférico:</strong> ${item.sphRange}</div>
            <div><strong>Rango Cilíndrico:</strong> ${item.cylRange}</div>
            <div><strong>Rango Adición:</strong> ${item.addRange}</div>
          </div>
        `;
        
        html += `
          <td>${nameHtml}</td>
          <td class="col-params-bifocal"><span class="params-text">${item.sphRange}</span></td>
          <td class="col-params-bifocal"><span class="params-text">${item.cylRange}</span></td>
          <td class="col-params-bifocal"><span class="params-text">${item.addRange}</span></td>
          <td class="price-value">${item.price}</td>
        `;
      } else if (key === 'multifocal_digital') {
        html += `
          <td><strong>${renderNameWithHighlight(item.name)}</strong></td>
          <td><span class="badge-index">${item.index}</span></td>
          <td class="price-value">${item.one}</td>
          <td class="price-value">${item.new}</td>
          <td class="price-value">${item.free}</td>
          <td class="price-value">${item.pro}</td>
        `;
      } else if (key === 'ocupacional_digital') {
        html += `
          <td><strong>${renderNameWithHighlight(item.name)}</strong></td>
          <td><span class="badge-index">${item.index}</span></td>
          <td class="price-value">${item.price}</td>
        `;
      } else if (key === 'tratamientos') {
        html += `
          <td><strong>${renderNameWithHighlight(item.name)}</strong></td>
          <td class="price-value">${item.price}</td>
        `;
      } else if (key === 'calibrados_trabajos') {
        html += `
          <td><strong>${renderNameWithHighlight(item.name)}</strong></td>
          <td class="price-value">${item.fullRim}</td>
          <td class="price-value">${item.grooved}</td>
          <td class="price-value">${item.drilled}</td>
        `;
      }

      html += '</tr>';
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    section.innerHTML = html;
    container.appendChild(section);
  });
}

// Global toggle row details helper for mobile
window.toggleVanillaRow = function(btn) {
  btn.classList.toggle('active');
  const td = btn.closest('td');
  const details = td.querySelector('.mobile-collapsed-details');
  if (details) {
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  }
};

// Initialize mobile event listeners when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile search bar
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchWrapper = document.getElementById('search-wrapper');
  if (searchToggleBtn && searchWrapper) {
    searchToggleBtn.addEventListener('click', () => {
      searchToggleBtn.classList.toggle('active');
      searchWrapper.classList.toggle('show-mobile');
      if (searchWrapper.classList.contains('show-mobile')) {
        const input = searchWrapper.querySelector('input');
        if (input) input.focus();
      }
    });
  }

  // Mobile Category Selector Change Handler
  const mobileCategorySelect = document.getElementById('mobile-category-select');
  if (mobileCategorySelect) {
    mobileCategorySelect.addEventListener('change', (e) => {
      const category = e.target.value;
      const tabs = document.querySelectorAll('.tab-btn');
      tabs.forEach(tab => {
        if (tab.getAttribute('data-category') === category) {
          tab.click();
        }
      });
    });

    // Keep mobile selector in sync with desktop tab clicks
    document.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab-btn');
      if (tab) {
        mobileCategorySelect.value = tab.getAttribute('data-category');
      }
    });
  }
});
