// State
let currentCategory = 'all';
let searchQuery = '';
let currentModalIndex = 0;
let filteredVariations = [...VARIATIONS];

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const countDisplay = document.getElementById('itemCount');

// Modal Elements
const modal = document.getElementById('artModal');
const modalImg = document.getElementById('modalImg');
const modalNum = document.getElementById('modalNum');
const modalTitleCN = document.getElementById('modalTitleCN');
const modalTitleEN = document.getElementById('modalTitleEN');
const modalTouch = document.getElementById('modalTouch');
const modalMeaning = document.getElementById('modalMeaning');
const modalQuote = document.getElementById('modalQuote');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalPrevBtn = document.getElementById('modalPrevBtn');
const modalNextBtn = document.getElementById('modalNextBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  initTheme();
});

function initTheme() {
  const saved = localStorage.getItem('genesis_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'parchment' ? 'dark' : 'parchment';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('genesis_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  themeToggleBtn.innerHTML = theme === 'parchment' ? '🌙' : '☀️';
  themeToggleBtn.setAttribute('title', theme === 'parchment' ? '切换为深色模式' : '切换为羊皮纸古典模式');
}

function initEventListeners() {
  // Category filter
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      applyFilters();
    });
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  // Theme toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // Modal controls
  modalCloseBtn.addEventListener('click', closeModal);
  modalPrevBtn.addEventListener('click', showPrevModal);
  modalNextBtn.addEventListener('click', showNextModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPrevModal();
    if (e.key === 'ArrowRight') showNextModal();
  });

  // Card click event delegation
  galleryGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.art-card');
    if (!card) return;
    const id = parseInt(card.dataset.id, 10);
    const index = filteredVariations.findIndex(item => item.id === id);
    if (index !== -1) {
      openModal(index);
    }
  });
}

function applyFilters() {
  filteredVariations = VARIATIONS.filter(item => {
    const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);
    const matchSearch = !searchQuery || 
      item.titleCN.toLowerCase().includes(searchQuery) ||
      item.titleEN.toLowerCase().includes(searchQuery) ||
      item.meaning.toLowerCase().includes(searchQuery) ||
      item.touchSubject.toLowerCase().includes(searchQuery) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery));
    return matchCategory && matchSearch;
  });

  renderGallery();
}

function renderGallery() {
  galleryGrid.innerHTML = '';
  countDisplay.textContent = filteredVariations.length;

  if (filteredVariations.length === 0) {
    galleryGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--text-muted);">
        <p style="font-size: 1.3rem; margin-bottom: 8px;">未找到匹配的作品</p>
        <p style="font-size: 0.95rem;">请尝试更换关键词或选择不同的主题分类</p>
      </div>
    `;
    return;
  }

  filteredVariations.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.dataset.index = index;
    card.dataset.id = item.id;

    const formattedId = String(item.id).padStart(2, '0');

    card.innerHTML = `
      <div class="card-media">
        <span class="card-badge-num">#${formattedId}</span>
        <span class="card-category-tag">${item.categoryLabel}</span>
        <img src="${item.image}" alt="${item.titleCN}" loading="lazy" decoding="async">
        <div class="card-touch-indicator">
          <span class="touch-spark">✦</span>
          <span>${item.touchSubject}</span>
          <span class="touch-spark">✦</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title-cn">${item.titleCN}</h3>
        <div class="card-title-en">${item.titleEN}</div>
        <p class="card-meaning">${item.meaning}</p>
        <div class="card-tags">
          ${item.tags.map(tag => `<span class="tag-pill">#${tag}</span>`).join('')}
        </div>
      </div>
    `;

    galleryGrid.appendChild(card);
  });
}

function openModal(index) {
  currentModalIndex = index;
  const item = filteredVariations[currentModalIndex];
  if (!item) return;

  const formattedId = String(item.id).padStart(2, '0');
  modalNum.textContent = `VARIATION #${formattedId} · ${item.categoryLabel.toUpperCase()}`;
  modalTitleCN.textContent = item.titleCN;
  modalTitleEN.textContent = item.titleEN;
  modalTouch.textContent = item.touchSubject;
  modalMeaning.textContent = item.meaning;
  modalQuote.textContent = item.quote;
  modalImg.src = item.image;
  modalImg.alt = item.titleCN;

  modalDownloadBtn.href = item.image;
  modalDownloadBtn.setAttribute('download', `${formattedId}-${item.titleEN.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrevModal() {
  if (filteredVariations.length <= 1) return;
  currentModalIndex = (currentModalIndex - 1 + filteredVariations.length) % filteredVariations.length;
  openModal(currentModalIndex);
}

function showNextModal() {
  if (filteredVariations.length <= 1) return;
  currentModalIndex = (currentModalIndex + 1) % filteredVariations.length;
  openModal(currentModalIndex);
}
