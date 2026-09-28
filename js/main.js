/**
 * NIGERIAN UPDATES - Main Interactive Engine
 * Handles theme toggling, article reader modal, search filtering,
 * bookmarks storage, comments, video modal, and newsletter subscriptions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentTheme = localStorage.getItem('daily_news_theme') || 'editorial';
  let savedBookmarks = JSON.parse(localStorage.getItem('daily_news_bookmarks') || '[]');
  let currentUser = JSON.parse(localStorage.getItem('daily_news_user') || 'null');
  let currentOpenArticleId = null;

  // Custom Admin Published Articles store
  let customAdminArticles = JSON.parse(localStorage.getItem('nu_custom_articles') || '[]');
  if (typeof BLOG_ARTICLES !== 'undefined' && customAdminArticles.length > 0) {
    customAdminArticles.forEach(customArt => {
      if (!BLOG_ARTICLES.some(a => a.id === customArt.id)) {
        BLOG_ARTICLES.unshift(customArt);
      }
    });
  }

  // Reader Comment tracking & storage
  let readerCommentedMap = JSON.parse(localStorage.getItem('nu_commented_articles') || '{}');
  let articleCommentsStore = JSON.parse(localStorage.getItem('nu_article_comments') || 'null');
  if (!articleCommentsStore) {
    articleCommentsStore = {
      'hero-hot-now': [
        { user: 'Alhaji Danladi', role: 'reader', time: '1 hour ago', text: 'This direct crude-for-naira and domestic distribution will finally ease the pressure on our local transport and haulage sector.' },
        { user: 'Chioma Eze', role: 'reader', time: '3 hours ago', text: 'Huge milestone for our industrial economy! Looking forward to seeing the ripple benefits reaching small manufacturers.' }
      ],
      'trending-1': [
        { user: 'Tunde Bakare', role: 'reader', time: '2 hours ago', text: 'Fintech capital inflows exceeding $1.2B show that international confidence in Nigeria tech infrastructure is stronger than ever.' }
      ]
    };
    localStorage.setItem('nu_article_comments', JSON.stringify(articleCommentsStore));
  }

  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconSun = document.getElementById('themeIconSun');
  const themeIconMoon = document.getElementById('themeIconMoon');
  
  const searchModal = document.getElementById('searchModal');
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  const articleModal = document.getElementById('articleModal');
  const videoModal = document.getElementById('videoModal');
  const subscribeModal = document.getElementById('subscribeModal');
  const signInModal = document.getElementById('signInModal');
  const bookmarksDrawer = document.getElementById('bookmarksDrawer');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  
  const toastContainer = document.getElementById('toastContainer');
  const subscribeNavBtn = document.getElementById('subscribeNavBtn');
  const signInNavBtn = document.getElementById('signInNavBtn');
  const signInNavLabel = document.getElementById('signInNavLabel');
  const userSignOutBtn = document.getElementById('userSignOutBtn');
  const userProfileWrap = document.getElementById('userProfileWrap');
  const userProfileBtn = document.getElementById('userProfileBtn');
  const userProfileDropdown = document.getElementById('userProfileDropdown');
  const userProfileRoleTag = document.getElementById('userProfileRoleTag');
  const userProfileName = document.getElementById('userProfileName');
  const dropdownUserName = document.getElementById('dropdownUserName');
  const dropdownUserEmail = document.getElementById('dropdownUserEmail');
  const dropdownAdminPublishBtn = document.getElementById('dropdownAdminPublishBtn');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');

  // Mobile Drawer Controls
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeMobileNav = document.getElementById('closeMobileNav');
  const drawerSearchInput = document.getElementById('drawerSearchInput');
  const drawerBookmarksBtn = document.getElementById('drawerBookmarksBtn');
  const drawerBookmarksCount = document.getElementById('drawerBookmarksCount');
  const drawerSignInBtn = document.getElementById('drawerSignInBtn');
  const drawerSignInLabel = document.getElementById('drawerSignInLabel');
  const drawerThemeLight = document.getElementById('drawerThemeLight');
  const drawerThemeDark = document.getElementById('drawerThemeDark');
  const drawerSubscribeBtn = document.getElementById('drawerSubscribeBtn');

  // Admin Publishing & Security Controls
  const adminPublishBtn = document.getElementById('adminPublishBtn');
  const drawerAdminPublishBtn = document.getElementById('drawerAdminPublishBtn');
  const publishStoryModal = document.getElementById('publishStoryModal');
  const adminPublishForm = document.getElementById('adminPublishForm');
  const cancelPublishBtn = document.getElementById('cancelPublishBtn');
  
  const adminRequiredModal = document.getElementById('adminRequiredModal');
  const adminLoginShortcutBtn = document.getElementById('adminLoginShortcutBtn');
  const closeAdminRequiredBtn = document.getElementById('closeAdminRequiredBtn');
  
  const adminDispatchesSection = document.getElementById('adminDispatchesSection');
  const adminDispatchesGrid = document.getElementById('adminDispatchesGrid');

  // Sign In Role Selectors
  const tabReaderRole = document.getElementById('tabReaderRole');
  const tabAdminRole = document.getElementById('tabAdminRole');
  const authEmailInput = document.getElementById('authEmailInput');
  const authPasswordInput = document.getElementById('authPasswordInput');
  const authRoleDescription = document.getElementById('authRoleDescription');
  const authSubmitBtn = document.getElementById('authSubmitBtn');
  const quickLoginAdminBtn = document.getElementById('quickLoginAdminBtn');
  const quickLoginReaderBtn = document.getElementById('quickLoginReaderBtn');

  // Reader Comments Elements
  const commentFormWrapper = document.getElementById('commentFormWrapper');
  const commentAlreadySubmittedNotice = document.getElementById('commentAlreadySubmittedNotice');
  const commentIdentityBadge = document.getElementById('commentIdentityBadge');
  const commentIdentityName = document.getElementById('commentIdentityName');
  const commentCountPill = document.getElementById('commentCountPill');

  // ==========================================
  // 1. THEME TOGGLING (Editorial / Dark Mode)
  // ==========================================
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIconSun && themeIconMoon) {
        themeIconSun.style.display = 'block';
        themeIconMoon.style.display = 'none';
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIconSun && themeIconMoon) {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'block';
      }
    }
    localStorage.setItem('daily_news_theme', theme);
    currentTheme = theme;
  }

  // Initialize theme
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'editorial' : 'dark';
      applyTheme(nextTheme);
      showToast(nextTheme === 'dark' ? 'Midnight Dark Mode activated' : 'Standard Editorial Mode activated');
    });
  }

  // ==========================================
  // 2. MODAL CONTROLS (Open / Close)
  // ==========================================
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close buttons inside modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  // Close modal when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key to close any active modal, drawer, or dropdown
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(closeModal);
      if (bookmarksDrawer) bookmarksDrawer.classList.remove('open');
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
      if (langDropdown) {
        langDropdown.classList.remove('show');
        if (langToggleBtn) {
          langToggleBtn.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // ==========================================
  // 3. ARTICLE READER MODAL
  // ==========================================
  function getArticleById(id) {
    if (typeof BLOG_ARTICLES === 'undefined') return null;
    return BLOG_ARTICLES.find(a => a.id === id);
  }

  window.openArticle = function(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;

    currentOpenArticleId = articleId;

    const modalImg = document.getElementById('readerImg');
    const modalTag = document.getElementById('readerTag');
    const modalTitle = document.getElementById('readerTitle');
    const modalSubtitle = document.getElementById('readerSubtitle');
    const modalAuthorImg = document.getElementById('readerAuthorImg');
    const modalAuthorName = document.getElementById('readerAuthorName');
    const modalAuthorRole = document.getElementById('readerAuthorRole');
    const modalDate = document.getElementById('readerDate');
    const modalReadTime = document.getElementById('readerReadTime');
    const modalContent = document.getElementById('readerContent');
    const modalLikeBtn = document.getElementById('readerLikeBtn');
    const modalLikeCount = document.getElementById('readerLikeCount');
    const modalBookmarkBtn = document.getElementById('readerBookmarkBtn');

    if (modalImg) modalImg.src = article.image;
    if (modalTag) modalTag.textContent = article.category;
    if (modalTitle) modalTitle.textContent = article.title;
    if (modalSubtitle) modalSubtitle.textContent = article.subtitle || article.excerpt;
    if (modalAuthorImg) modalAuthorImg.src = article.author?.avatar || 'assets/images/author-1.jpg';
    if (modalAuthorName) modalAuthorName.textContent = article.author?.name || 'Editorial Board';
    if (modalAuthorRole) modalAuthorRole.textContent = article.author?.role || 'Staff Correspondent';
    if (modalDate) modalDate.textContent = article.date;
    if (modalReadTime) modalReadTime.textContent = article.readTime || '4 min read';
    if (modalContent) modalContent.innerHTML = article.content || `<p>${article.excerpt}</p>`;

    // Likes state
    if (modalLikeCount) modalLikeCount.textContent = article.likes || 120;
    if (modalLikeBtn) {
      modalLikeBtn.classList.remove('active');
      modalLikeBtn.onclick = () => {
        article.likes = (article.likes || 120) + 1;
        modalLikeCount.textContent = article.likes;
        modalLikeBtn.classList.add('active');
        showToast('You liked this article!');
      };
    }

    // Bookmark state
    const isBookmarked = savedBookmarks.includes(article.id);
    if (modalBookmarkBtn) {
      modalBookmarkBtn.classList.toggle('active', isBookmarked);
      modalBookmarkBtn.innerHTML = isBookmarked 
        ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M5 5v16l7-5 7 5V5z"/></svg> Saved`
        : `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 5v16l7-5 7 5V5z"/></svg> Bookmark`;

      modalBookmarkBtn.onclick = () => {
        toggleBookmark(article.id);
        const nowBookmarked = savedBookmarks.includes(article.id);
        modalBookmarkBtn.classList.toggle('active', nowBookmarked);
        modalBookmarkBtn.innerHTML = nowBookmarked
          ? `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M5 5v16l7-5 7 5V5z"/></svg> Saved`
          : `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 5v16l7-5 7 5V5z"/></svg> Bookmark`;
      };
    }

    // Load comments
    renderComments(articleId);

    openModal(articleModal);
  };

  // Article card click delegation
  document.querySelectorAll('[data-article-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      // Don't trigger if clicked on a specific action button inside
      if (e.target.closest('.no-modal-trigger')) return;
      const articleId = el.getAttribute('data-article-id');
      if (articleId) {
        window.openArticle(articleId);
      }
    });
  });

  // ==========================================
  // 4. BOOKMARK FUNCTIONALITY
  // ==========================================
  function toggleBookmark(articleId) {
    const idx = savedBookmarks.indexOf(articleId);
    if (idx > -1) {
      savedBookmarks.splice(idx, 1);
      showToast('Article removed from saved bookmarks');
    } else {
      savedBookmarks.push(articleId);
      showToast('Article added to saved bookmarks', 'success');
    }
    localStorage.setItem('daily_news_bookmarks', JSON.stringify(savedBookmarks));
    renderBookmarksDrawer();
  }

  function renderBookmarksDrawer() {
    const container = document.getElementById('bookmarksList');
    if (!container) return;

    if (savedBookmarks.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 40px 0;">
          <svg style="width: 48px; height: 48px; margin-bottom: 12px; stroke: currentColor; fill: none; stroke-width: 1.5;" viewBox="0 0 24 24">
            <path d="M5 5v16l7-5 7 5V5z"/>
          </svg>
          <p>No saved articles yet.</p>
          <p style="font-size: 0.8rem; margin-top: 4px;">Click the bookmark icon on any story to save it for later.</p>
        </div>
      `;
      return;
    }

    const items = savedBookmarks
      .map(id => getArticleById(id))
      .filter(Boolean)
      .map(article => `
        <div class="search-item" style="border: 1px solid var(--border-light);" onclick="openArticle('${article.id}')">
          <img src="${article.image}" class="search-item-img" alt="${article.title}">
          <div style="display: flex; flex-direction: column; flex: 1;">
            <span style="font-size: 0.68rem; font-weight: 800; color: var(--accent-blue); text-transform: uppercase;">${article.category}</span>
            <strong style="font-size: 0.85rem; line-height: 1.3;">${article.title}</strong>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${article.date}</span>
          </div>
          <button style="color: #ef4444; padding: 4px;" title="Remove" onclick="event.stopPropagation(); window.removeBookmark('${article.id}')">
            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      `).join('');

    container.innerHTML = items;
  }

  window.removeBookmark = function(id) {
    toggleBookmark(id);
  };

  // Toggle bookmarks drawer
  const openBookmarksBtn = document.getElementById('openBookmarksBtn');
  const closeBookmarksBtn = document.getElementById('closeBookmarksBtn');
  if (openBookmarksBtn && bookmarksDrawer) {
    openBookmarksBtn.addEventListener('click', () => {
      renderBookmarksDrawer();
      bookmarksDrawer.classList.add('open');
    });
  }
  if (closeBookmarksBtn && bookmarksDrawer) {
    closeBookmarksBtn.addEventListener('click', () => {
      bookmarksDrawer.classList.remove('open');
    });
  }

  // ==========================================
  // 5. COMMENTS ENGINE (STRICT 1 COMMENT PER POST LIMIT)
  // ==========================================
  function hasReaderCommentedOnArticle(articleId) {
    if (!articleId) return false;
    if (readerCommentedMap[articleId]) return true;
    if (currentUser && currentUser.email) {
      if (localStorage.getItem(`nu_comment_${currentUser.email}_${articleId}`)) {
        return true;
      }
    }
    return false;
  }

  function updateCommentFormLimitState(articleId) {
    const alreadyCommented = hasReaderCommentedOnArticle(articleId);

    if (alreadyCommented) {
      if (commentFormWrapper) commentFormWrapper.style.display = 'none';
      if (commentAlreadySubmittedNotice) commentAlreadySubmittedNotice.style.display = 'flex';
    } else {
      if (commentFormWrapper) commentFormWrapper.style.display = 'block';
      if (commentAlreadySubmittedNotice) commentAlreadySubmittedNotice.style.display = 'none';

      // Update commenter identity indicator
      if (commentIdentityBadge && commentIdentityName) {
        if (currentUser) {
          commentIdentityBadge.textContent = currentUser.role === 'admin' ? 'ADMIN' : 'READER';
          commentIdentityBadge.className = `identity-badge ${currentUser.role === 'admin' ? 'admin' : ''}`;
          commentIdentityName.textContent = `Commenting as ${currentUser.name} (${currentUser.role === 'admin' ? 'Editorial Staff' : 'Registered Reader'})`;
        } else {
          commentIdentityBadge.textContent = 'READER';
          commentIdentityBadge.className = 'identity-badge';
          commentIdentityName.textContent = 'Commenting as Guest Reader (1 comment limit applies)';
        }
      }
    }
  }

  function renderComments(articleId) {
    const list = document.getElementById('readerCommentsList');
    if (!list) return;

    const comments = articleCommentsStore[articleId] || [
      { user: 'Alhaji Danladi', role: 'reader', time: '1 hour ago', text: 'This direct crude-for-naira and domestic distribution will finally ease the pressure on our local transport and haulage sector.' },
      { user: 'Chioma Eze', role: 'reader', time: '3 hours ago', text: 'Huge milestone for our industrial economy! Looking forward to seeing the ripple benefits reaching small manufacturers.' }
    ];

    if (commentCountPill) {
      commentCountPill.textContent = `${comments.length} comment${comments.length === 1 ? '' : 's'}`;
    }

    list.innerHTML = comments.map(c => `
      <div class="single-comment">
        <div class="avatar">${c.user ? c.user.charAt(0).toUpperCase() : 'R'}</div>
        <div class="comment-body">
          <div class="comment-user">
            ${c.user}
            ${c.role === 'admin' ? '<span class="user-role-badge admin" style="margin-left: 6px;">Staff Admin</span>' : ''}
          </div>
          <div class="comment-time">${c.time}</div>
          <div class="comment-text">${c.text}</div>
        </div>
      </div>
    `).join('');

    // Update 1-comment limit state
    updateCommentFormLimitState(articleId);
  }

  const commentForm = document.getElementById('commentForm');
  const commentInput = document.getElementById('commentInput');
  if (commentForm && commentInput) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!currentOpenArticleId) return;

      // STRICT LIMIT: Reader cannot comment more than once per post!
      if (hasReaderCommentedOnArticle(currentOpenArticleId)) {
        showToast('Civic Rule Notice: You have already commented on this post (limit: 1 comment per post).', 'info');
        updateCommentFormLimitState(currentOpenArticleId);
        return;
      }

      const val = commentInput.value.trim();
      if (!val || val.length < 3) {
        showToast('Please enter a constructive comment (at least 3 characters).', 'info');
        return;
      }

      if (!articleCommentsStore[currentOpenArticleId]) {
        articleCommentsStore[currentOpenArticleId] = [];
      }

      const commenterName = currentUser ? currentUser.name : (localStorage.getItem('nu_guest_name') || 'Guest Reader');
      const commenterRole = currentUser ? currentUser.role : 'reader';

      const commentObj = {
        user: commenterName,
        role: commenterRole,
        time: 'Just now',
        text: val
      };

      articleCommentsStore[currentOpenArticleId].unshift(commentObj);
      localStorage.setItem('nu_article_comments', JSON.stringify(articleCommentsStore));

      // Mark this post as commented by this reader/device
      readerCommentedMap[currentOpenArticleId] = true;
      localStorage.setItem('nu_commented_articles', JSON.stringify(readerCommentedMap));
      if (currentUser && currentUser.email) {
        localStorage.setItem(`nu_comment_${currentUser.email}_${currentOpenArticleId}`, 'true');
      }

      commentInput.value = '';
      renderComments(currentOpenArticleId);
      updateCommentFormLimitState(currentOpenArticleId);

      showToast('Comment published! (Limit: 1 comment per post is now active for this story)', 'success');
    });
  }

  // ==========================================
  // 6. LIVE SEARCH
  // ==========================================
  if (searchToggleBtn && searchModal) {
    searchToggleBtn.addEventListener('click', () => {
      openModal(searchModal);
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResults.innerHTML = '<p style="color: var(--text-muted); font-size: 0.88rem; padding: 12px 0;">Type to search all articles, authors, or categories...</p>';
        return;
      }

      if (typeof BLOG_ARTICLES === 'undefined') return;

      const matches = BLOG_ARTICLES.filter(a => 
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (a.author && a.author.name.toLowerCase().includes(q))
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem; padding: 12px 0;">No articles found matching "<strong>${q}</strong>".</p>`;
        return;
      }

      searchResults.innerHTML = matches.map(a => `
        <div class="search-item" onclick="closeModal(document.getElementById('searchModal')); openArticle('${a.id}')">
          <img src="${a.image}" class="search-item-img" alt="${a.title}">
          <div style="display: flex; flex-direction: column;">
            <span style="font-size: 0.68rem; font-weight: 800; color: var(--accent-blue); text-transform: uppercase;">${a.category}</span>
            <strong style="font-size: 0.9rem; line-height: 1.35; color: var(--text-primary);">${a.title}</strong>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${a.date} вЂў ${a.readTime}</span>
          </div>
        </div>
      `).join('');
    });
  }

  // ==========================================
  // 7. CATEGORY FILTER NAVIGATION & SECTION TOGGLE SIMULATION
  // ==========================================
  const CATEGORY_MAP = {
    'science': {
      title: 'Science',
      cardSelectors: ['[data-article-id="popular-2"]'],
      parentSection: '.section-dual-grid'
    },
    'politics': {
      title: 'Politics',
      cardSelectors: ['[data-article-id="breaking-featured"]', '[data-article-id="breaking-list-1"]', '[data-article-id="breaking-list-2"]'],
      parentSection: '.section-dual-grid'
    },
    'travel': {
      title: 'Travel',
      cardSelectors: ['[data-article-id="popular-1"]', '[data-article-id="trending-2"]'],
      parentSection: '.section-dual-grid'
    },
    'economy': {
      title: 'Business & Economy',
      cardSelectors: ['[data-article-id="popular-4"]', '[data-article-id="popular-3"]', '[data-article-id="trending-1"]', '[data-article-id="hero-hot-now"]'],
      parentSection: '.section-dual-grid'
    },
    'business': {
      title: 'Business',
      cardSelectors: ['[data-article-id="popular-4"]', '[data-article-id="popular-3"]', '[data-article-id="trending-1"]', '[data-article-id="hero-hot-now"]'],
      parentSection: '.section-dual-grid'
    },
    'technology': {
      title: 'Technology',
      cardSelectors: ['[data-article-id="trending-3"]', '[data-article-id="breaking-list-5"]'],
      parentSection: '.hero-showcase'
    },
    'tech': {
      title: 'Technology',
      cardSelectors: ['[data-article-id="trending-3"]', '[data-article-id="breaking-list-5"]'],
      parentSection: '.hero-showcase'
    },
    'culture': {
      title: 'Entertainment',
      cardSelectors: ['[data-article-id="editor-2"]', '[data-article-id="breaking-list-4"]'],
      parentSection: '.editor-worth-section'
    },
    'entertainment': {
      title: 'Entertainment',
      cardSelectors: ['[data-article-id="editor-2"]', '[data-article-id="breaking-list-4"]'],
      parentSection: '.editor-worth-section'
    },
    'sports': {
      title: 'Sports',
      cardSelectors: ['[data-article-id="breaking-list-3"]'],
      parentSection: '.hero-showcase'
    },
    'world': {
      title: 'World',
      cardSelectors: ['[data-article-id="breaking-list-5"]', '[data-article-id="editor-1"]'],
      parentSection: '.editor-worth-section'
    },
    'home': {
      title: 'Front Page',
      cardSelectors: ['#home .hero-main-story', '#home'],
      parentSection: '#home'
    },
    'contact': {
      title: 'Contact',
      cardSelectors: ['#contact .footer-brand', '#contact'],
      parentSection: '#contact'
    }
  };

  let toggleSimTimers = {};

  function triggerSectionToggleSimulation(cat) {
    if (!cat) return;
    const catLower = cat.toLowerCase();
    const config = CATEGORY_MAP[catLower] || {
      title: cat.toUpperCase(),
      cardSelectors: [],
      parentSection: null
    };

    // Find the best target element for this category
    let targetCard = null;
    for (const selector of config.cardSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        targetCard = el;
        break;
      }
    }

    // Fallback: search for cards with matching data-article-id in memory
    if (!targetCard && typeof BLOG_ARTICLES !== 'undefined') {
      const match = BLOG_ARTICLES.find(a => 
        a.categorySlug === catLower || (a.category && a.category.toLowerCase().includes(catLower))
      );
      if (match) {
        targetCard = document.querySelector(`[data-article-id="${match.id}"]`);
      }
    }

    if (!targetCard && config.parentSection) {
      targetCard = document.querySelector(config.parentSection);
    }

    if (!targetCard) return;

    // Check if the card is already visible in the viewport
    const rect = targetCard.getBoundingClientRect();
    const isAlreadyOnScreen = (
      rect.top >= -80 &&
      rect.top <= window.innerHeight * 0.85
    );

    // If NOT already on the screen, smoothly scroll to bring it into center view
    if (!isAlreadyOnScreen) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Mount container inside card (thumb wrap if available, otherwise the card itself)
    const mountEl = targetCard.querySelector(
      '.popular-thumb-wrap, .feature-img-wrap, .trending-thumb-wrap, .editor-thumb-wrap, .video-thumb-wrap'
    ) || targetCard;

    // Ensure relative positioning on mount container
    if (getComputedStyle(mountEl).position === 'static') {
      mountEl.style.position = 'relative';
    }

    // Remove any simulation pills on other cards
    document.querySelectorAll('.card-toggle-sim-pill').forEach(p => {
      if (p.parentElement !== mountEl) {
        p.remove();
      }
    });

    // Check if a pill already exists on this card
    let existingPill = mountEl.querySelector('.card-toggle-sim-pill');
    if (existingPill) {
      // Re-trigger toggle simulation
      existingPill.classList.remove('re-toggle', 'sim-fade-out');
      void existingPill.offsetWidth; // reflow
      existingPill.classList.add('re-toggle');

      const simSwitch = existingPill.querySelector('.toggle-sim-switch');
      if (simSwitch) {
        simSwitch.classList.remove('is-active');
        setTimeout(() => simSwitch.classList.add('is-active'), 80);
      }
    } else {
      // Create new toggle simulation pop-up
      const pill = document.createElement('div');
      pill.className = 'card-toggle-sim-pill';
      pill.setAttribute('data-category', catLower);
      pill.setAttribute('role', 'status');
      pill.setAttribute('aria-live', 'polite');
      pill.innerHTML = `
        <div class="toggle-sim-switch is-active" title="Section active">
          <span class="toggle-sim-knob"></span>
        </div>
        <div class="toggle-sim-labels">
          <span class="toggle-sim-status">CURRENT SECTION</span>
          <span class="toggle-sim-name">${config.title.toUpperCase()} ACTIVE</span>
        </div>
        <div class="toggle-sim-beacon" aria-hidden="true">
          <span class="toggle-beacon-dot"></span>
          <span class="toggle-beacon-ping"></span>
        </div>
      `;
      mountEl.appendChild(pill);
      existingPill = pill;
    }

    // Apply active border glow and subtle lift on the card
    targetCard.classList.remove('card-section-active-toggle');
    void targetCard.offsetWidth;
    targetCard.classList.add('card-section-active-toggle');

    // Also pulse any matching category tag on the card
    const cardTags = targetCard.querySelectorAll('.mini-tag, .badge-pill, .card-tag-overlay span');
    cardTags.forEach(tag => {
      tag.classList.remove('tag-active-pulse');
      void tag.offsetWidth;
      tag.classList.add('tag-active-pulse');
    });

    // Clear previous timer for this category if active
    if (toggleSimTimers[catLower]) {
      clearTimeout(toggleSimTimers[catLower]);
    }

    // Schedule smooth fade out after 3.8 seconds
    toggleSimTimers[catLower] = setTimeout(() => {
      if (existingPill && existingPill.parentElement) {
        existingPill.classList.add('sim-fade-out');
        setTimeout(() => {
          if (existingPill && existingPill.parentElement) {
            existingPill.remove();
          }
        }, 400);
      }
      targetCard.classList.remove('card-section-active-toggle');
      cardTags.forEach(tag => tag.classList.remove('tag-active-pulse'));
    }, 3800);
  }

  function blinkCategorySection(cat) {
    if (!cat) return;

    // Target both main navbar links and drawer navigation links
    const targetLinks = document.querySelectorAll(
      `.nav-link[data-category="${cat}"], .classy-nav-link[data-category="${cat}"]`
    );

    targetLinks.forEach(link => {
      link.classList.remove('blink-notify');
      // Trigger DOM reflow so animation restarts reliably on every single click
      void link.offsetWidth;
      link.classList.add('blink-notify');
      setTimeout(() => {
        link.classList.remove('blink-notify');
      }, 1000);
    });
  }

  function navigateToCategory(cat) {
    if (!cat) return;

    // 1. COMPLETELY DISMISS any bottom-right toast popups so they NEVER appear on category clicks
    if (toastContainer) {
      while (toastContainer.firstChild) {
        toastContainer.removeChild(toastContainer.firstChild);
      }
    }

    // 2. Update active state in nav links
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('data-category') === cat);
    });

    document.querySelectorAll('.classy-nav-link, .drawer-nav-card').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-category') === cat);
    });

    if (typeof closeDrawer === 'function') {
      closeDrawer();
    } else if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('open');
    }

    // 3. Trigger navbar blink animation
    blinkCategorySection(cat);

    // 4. Trigger on-section toggle sign & slight pop-up simulation directly on the card
    triggerSectionToggleSimulation(cat);
  }

  // Bind category navigation to top nav, mobile drawer links, and footer category links
  document.querySelectorAll('.nav-link[data-category], .mobile-nav-links a[data-category], .footer-cat-link[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-category');
      navigateToCategory(cat);
    });
  });

  // ==========================================
  // 8. SUBSCRIBE & SIGN IN MODALS
  // ==========================================
  if (subscribeNavBtn && subscribeModal) {
    subscribeNavBtn.addEventListener('click', () => openModal(subscribeModal));
  }

  if (signInNavBtn && signInModal) {
    signInNavBtn.addEventListener('click', () => openModal(signInModal));
  }

  const subscribeForm = document.getElementById('subscribeModalForm');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = subscribeForm.querySelector('input[type="email"]').value;
      closeModal(subscribeModal);
      showToast(`Thank you! Subscription confirmed for ${email}`, 'success');
    });
  }

  const footerNewsletterForm = document.getElementById('footerNewsletterForm');
  if (footerNewsletterForm) {
    footerNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = footerNewsletterForm.querySelector('input');
      if (input && input.value) {
        showToast(`Subscribed! Daily briefings will be sent to ${input.value}`, 'success');
        input.value = '';
      }
    });
  }

  // ==========================================
  // 8.1 AUTHENTICATION & ROLE MANAGEMENT
  // ==========================================
  let activeAuthRole = 'reader';

  function updateAuthUI() {
    const isAdmin = currentUser && currentUser.role === 'admin';

    // 1. Admin Story Publishing Buttons: STRICTLY visible only when Admin is logged in!
    if (adminPublishBtn) {
      adminPublishBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    }
    if (drawerAdminPublishBtn) {
      drawerAdminPublishBtn.style.display = isAdmin ? 'flex' : 'none';
    }
    if (dropdownAdminPublishBtn) {
      dropdownAdminPublishBtn.style.display = isAdmin ? 'flex' : 'none';
    }

    // 2. Authentication Navigation States
    if (currentUser) {
      // User is authenticated (either Reader or Admin)
      if (signInNavBtn) signInNavBtn.style.display = 'none';
      if (userProfileWrap) userProfileWrap.style.display = 'inline-flex';

      if (userProfileRoleTag) {
        userProfileRoleTag.textContent = isAdmin ? 'ADMIN' : 'READER';
        userProfileRoleTag.className = `user-role-tag ${isAdmin ? 'admin' : 'reader'}`;
      }
      if (userProfileName) {
        userProfileName.textContent = currentUser.name;
      }
      if (dropdownUserName) {
        dropdownUserName.textContent = currentUser.name;
      }
      if (dropdownUserEmail) {
        dropdownUserEmail.textContent = currentUser.email || (isAdmin ? 'admin@nigerianupdates.ng' : 'reader@dailynigerian.ng');
      }
      if (drawerSignInLabel) {
        drawerSignInLabel.innerHTML = `${isAdmin ? 'Admin: ' : 'Reader: '}${currentUser.name}`;
      }
    } else {
      // Guest (Not logged in)
      if (signInNavBtn) signInNavBtn.style.display = 'inline-flex';
      if (userProfileWrap) userProfileWrap.style.display = 'none';
      if (userProfileDropdown) userProfileDropdown.classList.remove('show');
      if (userProfileWrap) userProfileWrap.classList.remove('open');

      if (drawerSignInLabel) {
        drawerSignInLabel.textContent = 'Account';
      }
    }
  }

  // Restore session on boot
  updateAuthUI();

  // User Profile Dropdown Toggle
  if (userProfileBtn && userProfileDropdown) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userProfileDropdown.classList.toggle('show');
      if (userProfileWrap) userProfileWrap.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      userProfileDropdown.classList.remove('show');
      if (userProfileWrap) userProfileWrap.classList.remove('open');
    });
  }

  if (dropdownAdminPublishBtn) {
    dropdownAdminPublishBtn.addEventListener('click', () => {
      if (userProfileDropdown) userProfileDropdown.classList.remove('show');
      if (userProfileWrap) userProfileWrap.classList.remove('open');
      handleOpenPublishDesk();
    });
  }

  // Role Tab Switching inside Sign In Modal
  if (tabReaderRole && tabAdminRole) {
    tabReaderRole.addEventListener('click', () => {
      activeAuthRole = 'reader';
      tabReaderRole.classList.add('active');
      tabAdminRole.classList.remove('active');
      if (authEmailInput) authEmailInput.value = 'reader@dailynigerian.ng';
      if (authPasswordInput) authPasswordInput.value = 'secret123';
      if (authRoleDescription) {
        authRoleDescription.innerHTML = '<strong>Reader Privileges:</strong> Read articles, bookmark stories, and submit up to 1 comment per post.';
      }
      if (authSubmitBtn) authSubmitBtn.textContent = 'Sign In as Reader';
    });

    tabAdminRole.addEventListener('click', () => {
      activeAuthRole = 'admin';
      tabAdminRole.classList.add('active');
      tabReaderRole.classList.remove('active');
      if (authEmailInput) authEmailInput.value = 'admin@nigerianupdates.ng';
      if (authPasswordInput) authPasswordInput.value = 'admin123';
      if (authRoleDescription) {
        authRoleDescription.innerHTML = '<strong>Admin Privileges:</strong> Authorized to publish news stories directly to the Front Page, manage broadcasts, and participate in civic discussions.';
      }
      if (authSubmitBtn) authSubmitBtn.textContent = 'Sign In as Admin (Editor-in-Chief)';
    });
  }

  // Quick Demo Logins for Instant Testing
  if (quickLoginAdminBtn) {
    quickLoginAdminBtn.addEventListener('click', () => {
      currentUser = {
        name: 'Maik Bello (Admin)',
        email: 'admin@nigerianupdates.ng',
        role: 'admin'
      };
      localStorage.setItem('daily_news_user', JSON.stringify(currentUser));
      updateAuthUI();
      closeModal(signInModal);
      showToast('Signed in as Bureau Admin! Publishing desk unlocked.', 'success');
    });
  }

  if (quickLoginReaderBtn) {
    quickLoginReaderBtn.addEventListener('click', () => {
      currentUser = {
        name: 'Chidi Okonkwo (Reader)',
        email: 'chidi@dailynigerian.ng',
        role: 'reader'
      };
      localStorage.setItem('daily_news_user', JSON.stringify(currentUser));
      updateAuthUI();
      closeModal(signInModal);
      showToast('Signed in as Standard Reader: Chidi Okonkwo', 'info');
    });
  }

  // Sign Out Handler
  if (userSignOutBtn) {
    userSignOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentUser = null;
      localStorage.removeItem('daily_news_user');
      updateAuthUI();
      showToast('Signed out of account. Browsing as Guest Reader.', 'info');
    });
  }

  // Sign In Form Submission
  const signInForm = document.getElementById('signInModalForm');
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = authEmailInput ? authEmailInput.value.trim() : 'reader@dailynigerian.ng';
      const isAdmin = activeAuthRole === 'admin' || email.toLowerCase().includes('admin');

      currentUser = {
        name: isAdmin ? 'Maik Bello (Admin)' : (email.split('@')[0] || 'Reader'),
        email: email,
        role: isAdmin ? 'admin' : 'reader'
      };

      localStorage.setItem('daily_news_user', JSON.stringify(currentUser));
      updateAuthUI();
      closeModal(signInModal);
      showToast(`Welcome back, ${currentUser.name}! (${isAdmin ? 'Admin Publishing Unlocked' : 'Reader Account'})`, 'success');
    });
  }

  // ==========================================
  // 8.2 ADMIN STORY PUBLISHING ENGINE (ADMIN ONLY)
  // ==========================================
  function handleOpenPublishDesk() {
    if (currentUser && currentUser.role === 'admin') {
      openModal(publishStoryModal);
    } else {
      // Access Restricted for non-admins
      openModal(adminRequiredModal);
    }
  }

  if (adminPublishBtn) {
    adminPublishBtn.addEventListener('click', handleOpenPublishDesk);
  }
  if (drawerAdminPublishBtn) {
    drawerAdminPublishBtn.addEventListener('click', () => {
      closeDrawer();
      handleOpenPublishDesk();
    });
  }

  if (cancelPublishBtn && publishStoryModal) {
    cancelPublishBtn.addEventListener('click', () => closeModal(publishStoryModal));
  }

  if (closeAdminRequiredBtn && adminRequiredModal) {
    closeAdminRequiredBtn.addEventListener('click', () => closeModal(adminRequiredModal));
  }

  if (adminLoginShortcutBtn) {
    adminLoginShortcutBtn.addEventListener('click', () => {
      closeModal(adminRequiredModal);
      currentUser = {
        name: 'Maik Bello (Admin)',
        email: 'admin@nigerianupdates.ng',
        role: 'admin'
      };
      localStorage.setItem('daily_news_user', JSON.stringify(currentUser));
      updateAuthUI();
      showToast('Admin privileges verified: Maik Bello (Editor-in-Chief)!', 'success');
      setTimeout(() => openModal(publishStoryModal), 250);
    });
  }

  // Image Preset Pill Selector
  document.querySelectorAll('.preset-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.preset-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const imgPath = pill.getAttribute('data-img');
      const imgInput = document.getElementById('publishImage');
      if (imgInput && imgPath) imgInput.value = imgPath;
    });
  });

  // Render Admin Dispatches on Front Page
  function renderAdminDispatches() {
    if (!adminDispatchesSection || !adminDispatchesGrid) return;
    if (customAdminArticles.length === 0) {
      adminDispatchesSection.style.display = 'none';
      return;
    }
    adminDispatchesSection.style.display = 'block';
    adminDispatchesGrid.innerHTML = customAdminArticles.map(art => `
      <article class="admin-dispatch-card" onclick="openArticle('${art.id}')">
        <div class="admin-dispatch-thumb">
          <img src="${art.image}" alt="${art.title}" loading="lazy">
          <span class="admin-dispatch-pill">${art.badgeType || 'HOT NOW'}</span>
        </div>
        <div class="admin-dispatch-body">
          <div class="admin-dispatch-meta">
            <span>${art.category}</span> • <span>${art.date}</span> • <span>${art.readTime}</span>
          </div>
          <h4 class="admin-dispatch-title">${art.title}</h4>
          <p class="admin-dispatch-desc">${art.subtitle || art.excerpt}</p>
          <div class="admin-dispatch-author">
            <span>By ${art.author?.name || 'Editorial Board'}</span>
            <span>Read Story →</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Initial render of saved admin articles
  renderAdminDispatches();

  // Admin Story Publish Submission Form
  if (adminPublishForm) {
    adminPublishForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // SECURITY ENFORCEMENT: ONLY ADMIN CAN POST
      if (!currentUser || currentUser.role !== 'admin') {
        showToast('Access Denied: Only certified Administrators can publish stories!', 'error');
        closeModal(publishStoryModal);
        openModal(adminRequiredModal);
        return;
      }

      const title = document.getElementById('publishTitle').value.trim();
      const categorySelect = document.getElementById('publishCategory');
      const categorySlug = categorySelect.value;
      const categoryName = categorySelect.options[categorySelect.selectedIndex].text;
      const badge = document.getElementById('publishBadge').value;
      const subtitle = document.getElementById('publishSubtitle').value.trim();
      const author = document.getElementById('publishAuthor').value.trim() || currentUser.name;
      const role = document.getElementById('publishRole').value.trim() || 'Bureau Editor-in-Chief';
      const image = document.getElementById('publishImage').value.trim() || 'assets/images/abuja-gate.jpg';
      const content = document.getElementById('publishContent').value.trim();

      if (!title || !content || !subtitle) {
        showToast('Please fill out all required fields before publishing.', 'info');
        return;
      }

      // Format body into paragraphs
      const paragraphs = content.split('\n\n').filter(p => p.trim()).map((p, idx) => {
        if (idx === 0) return `<p class="lead">${p.trim()}</p>`;
        return `<p>${p.trim()}</p>`;
      }).join('');

      const wordsCount = content.split(/\s+/).length;
      const calcReadTime = `${Math.max(2, Math.ceil(wordsCount / 140))} min read`;

      const newArticle = {
        id: `admin-story-${Date.now()}`,
        title: title,
        subtitle: subtitle,
        category: categoryName.toUpperCase(),
        categorySlug: categorySlug,
        badgeType: badge,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: calcReadTime,
        author: {
          name: author,
          role: role,
          avatar: 'assets/images/author-1.jpg'
        },
        image: image,
        trending: true,
        views: '1.2k',
        likes: 0,
        excerpt: subtitle,
        content: paragraphs,
        isAdminPublished: true
      };

      // Prepend to active memory array and localStorage store
      BLOG_ARTICLES.unshift(newArticle);
      customAdminArticles.unshift(newArticle);
      localStorage.setItem('nu_custom_articles', JSON.stringify(customAdminArticles));

      // Refresh dynamic feed on the front page
      renderAdminDispatches();

      closeModal(publishStoryModal);
      adminPublishForm.reset();

      showToast(`Story published live by Admin: "${newArticle.title}"`, 'success');

      // Scroll smoothly to the newly published story
      if (adminDispatchesSection) {
        adminDispatchesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ==========================================
  // 9. VIDEO MODAL FOR "WORTH READING"
  // ==========================================
  const worthReadingVideoCard = document.getElementById('worthReadingVideoCard');
  if (worthReadingVideoCard && videoModal) {
    worthReadingVideoCard.addEventListener('click', () => {
      openModal(videoModal);
    });
  }

  // ==========================================
  // 10. LUXURY MOBILE DRAWER & CONTROLS
  // ==========================================

  function updateDrawerState() {
    if (drawerBookmarksCount) {
      drawerBookmarksCount.textContent = `${savedBookmarks.length} item${savedBookmarks.length === 1 ? '' : 's'}`;
    }
    if (drawerSignInLabel && currentUser) {
      drawerSignInLabel.textContent = currentUser.name;
    }
    if (drawerThemeDark && drawerThemeLight) {
      if (currentTheme === 'dark') {
        drawerThemeDark.classList.add('active');
        drawerThemeLight.classList.remove('active');
      } else {
        drawerThemeLight.classList.add('active');
        drawerThemeDark.classList.remove('active');
      }
    }
  }

  function openDrawer() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateDrawerState();
  }

  function closeDrawer() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeMobileNav) closeMobileNav.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // In-drawer search input handler
  if (drawerSearchInput) {
    drawerSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = drawerSearchInput.value.trim();
        closeDrawer();
        openModal(searchModal);
        if (searchInput) {
          searchInput.value = query;
          searchInput.dispatchEvent(new Event('input'));
          setTimeout(() => searchInput.focus(), 150);
        }
      }
    });
  }

  // In-drawer category link clicks
  document.querySelectorAll('.classy-nav-link[data-category], .drawer-nav-card[data-category]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-category');
      navigateToCategory(cat);
    });
  });

  // In-drawer bookmarks button
  if (drawerBookmarksBtn) {
    drawerBookmarksBtn.addEventListener('click', () => {
      closeDrawer();
      renderBookmarksDrawer();
      if (bookmarksDrawer) bookmarksDrawer.classList.add('open');
    });
  }

  // In-drawer Sign In button
  if (drawerSignInBtn) {
    drawerSignInBtn.addEventListener('click', () => {
      closeDrawer();
      openModal(signInModal);
    });
  }

  // In-drawer Subscribe button
  if (drawerSubscribeBtn) {
    drawerSubscribeBtn.addEventListener('click', () => {
      closeDrawer();
      openModal(subscribeModal);
    });
  }

  // In-drawer Theme switchers
  if (drawerThemeLight) {
    drawerThemeLight.addEventListener('click', () => {
      applyTheme('editorial');
      updateDrawerState();
      showToast('Light Editorial Mode activated');
    });
  }
  if (drawerThemeDark) {
    drawerThemeDark.addEventListener('click', () => {
      applyTheme('dark');
      updateDrawerState();
      showToast('Midnight Dark Mode activated');
    });
  }

  // ==========================================
  // LANGUAGE SELECTOR DROPLIST
  // ==========================================
  // ==========================================
  // LANGUAGE SELECTOR DROPLIST
  // ==========================================
  if (langToggleBtn && langDropdown) {
    // Restore saved language preference on load and apply translations
    const savedLang = localStorage.getItem('nu_selected_lang') || 'en';
    if (typeof applyLanguage === 'function') {
      applyLanguage(savedLang);
    } else {
      const initialItem = langDropdown.querySelector(`.lang-item[data-lang="${savedLang}"]`) || langDropdown.querySelector('.lang-item');
      if (initialItem) {
        initialItem.classList.add('selected');
        const span = langToggleBtn.querySelector('.current-lang');
        if (span) span.textContent = initialItem.getAttribute('data-lang').toUpperCase();
      }
    }

    // Toggle dropdown on button click
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const willShow = !langDropdown.classList.contains('show');
      langDropdown.classList.toggle('show', willShow);
      langToggleBtn.classList.toggle('open', willShow);
      langToggleBtn.setAttribute('aria-expanded', willShow ? 'true' : 'false');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langToggleBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('show');
        langToggleBtn.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Language option selection
    langDropdown.querySelectorAll('.lang-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const langCode = item.getAttribute('data-lang');

        // Apply page-wide language translations
        if (typeof applyLanguage === 'function') {
          applyLanguage(langCode);
        } else {
          const span = langToggleBtn.querySelector('.current-lang');
          if (span) span.textContent = langCode.toUpperCase();
          langDropdown.querySelectorAll('.lang-item').forEach(i => i.classList.remove('selected'));
          item.classList.add('selected');
          localStorage.setItem('nu_selected_lang', langCode);
        }

        langDropdown.classList.remove('show');
        langToggleBtn.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');

        showToast(`Language set to ${item.textContent.trim()}`, 'success');
      });
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 11. TOAST NOTIFICATION UTILITY
  // ==========================================
  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    // Strictly prevent category filter toasts from ever popping up in the bottom right corner
    if (typeof message === 'string' && (message.toLowerCase().includes('filtered for') || message.toLowerCase().includes('stories)'))) {
      return;
    }
    // Dismiss any existing toasts so they never stack up into multiple popups
    while (toastContainer.firstChild) {
      toastContainer.removeChild(toastContainer.firstChild);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'success' : ''}`;
    toast.innerHTML = `
      <svg style="width: 18px; height: 18px; flex-shrink: 0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        ${type === 'success' 
          ? '<path d="M5 13l4 4L19 7"/>' 
          : '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'}
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  window.showToast = showToast;
});

