/* ============================================================
   Shared layout — sidebar, topbar, icons
   ============================================================ */

const ICONS = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 13h7V3H3zM14 21h7v-9h-7zM3 21h7v-6H3zM14 3v7h7V3z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/></svg>',
  graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8M8 17h8M8 9h2"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2"/></svg>',
  archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
};

const ADMIN_NAV = [
  { section: 'Overview', items: [
    { href: 'dashboard.html', label: 'Dashboard', icon: 'dashboard' },
  ]},
  { section: 'Master Data', items: [
    { href: 'teachers.html', label: 'Teachers', icon: 'users' },
    { href: 'students.html', label: 'Students', icon: 'graduation' },
    { href: 'subjects.html', label: 'Subjects', icon: 'book' },
    { href: 'departments.html', label: 'Departments', icon: 'building' },
  ]},
  { section: 'Examinations', items: [
    { href: 'submissions.html', label: 'Submissions', icon: 'inbox' },
    { href: 'reports.html', label: 'Reports', icon: 'report' },
  ]},
  { section: 'System', items: [
    { href: 'settings.html', label: 'Settings', icon: 'settings' },
    { href: 'audit.html', label: 'Audit Trail', icon: 'history' },
  ]},
];

const TEACHER_NAV = [
  { section: 'Overview', items: [
    { href: 'dashboard.html', label: 'Dashboard', icon: 'dashboard' },
  ]},
  { section: 'My Submissions', items: [
    { href: 'submissions.html', label: 'Submissions', icon: 'inbox' },
    { href: 'history.html', label: 'History', icon: 'history' },
  ]},
];

function renderSidebar(role, currentPage) {
  const nav = role === 'admin' ? ADMIN_NAV : TEACHER_NAV;
  const html = `
    <div class="sidebar-brand">
      <img src="../assets/logo.png" alt="Barpeta Polytechnic">
      <div class="text">
        <div class="name">Barpeta Polytechnic</div>
        <div class="tag">Examination Cell</div>
      </div>
    </div>
    ${nav.map(group => `
      <div class="sidebar-section">
        <div class="sidebar-section-title">${group.section}</div>
        <nav>
          ${group.items.map(it => `
            <a href="${it.href}" class="${currentPage === it.href ? 'active' : ''}">
              ${ICONS[it.icon]}
              <span>${it.label}</span>
            </a>
          `).join('')}
        </nav>
      </div>
    `).join('')}
    <div class="sidebar-section">
      <nav>
        <a href="#" onclick="event.preventDefault(); Auth.logout(); window.location.href='../index.html';">
          ${ICONS.logout}<span>Sign Out</span>
        </a>
      </nav>
    </div>
    <div class="sidebar-footer">
      Developed by Prasanna Kr Konch,<br>Librarian, Barpeta Polytechnic
    </div>
  `;
  return html;
}

function renderTopbar(user, crumb, title) {
  return `
    <div>
      <button class="icon-btn mobile-toggle no-print" id="mobile-menu-btn" onclick="document.querySelector('.sidebar').classList.toggle('open')">${ICONS.menu}</button>
    </div>
    <div style="flex:1;">
      <div class="crumb">${crumb}</div>
      <h1>${title}</h1>
    </div>
    <div class="topbar-right">
      <button class="icon-btn no-print" title="Notifications">${ICONS.bell}</button>
      <div class="user-chip">
        <div class="avatar">${fmt.initials(user.name)}</div>
        <div class="info">
          <div class="name">${user.name}</div>
          <div class="role">${user.role === 'admin' ? 'Examination Cell' : 'Teacher · ' + (user.department || '')}</div>
        </div>
      </div>
    </div>
  `;
}

function bootPage({ role, currentPage, crumb, title, contentHtml }) {
  const user = role === 'admin' ? Auth.requireAdmin() : Auth.requireTeacher();
  if (!user) return null;
  document.body.innerHTML = `
    <div class="app">
      <aside class="sidebar">${renderSidebar(role, currentPage)}</aside>
      <div class="main">
        <header class="topbar">${renderTopbar(user, crumb, title)}</header>
        <div class="content" id="page-content">${contentHtml || ''}</div>
      </div>
    </div>
  `;
  return user;
}
