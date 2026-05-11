/* ============================================================
   BPoly Portal — Data Store (localStorage)
   ============================================================ */

const DB_KEY = 'bpoly_portal_db_v1';

const DEPARTMENTS = ['Civil Engineering', 'Mechanical Engineering', 'Biomedical Engineering'];
const SEMESTERS = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

/* --------- Seed data --------- */
function seedData() {
  const teachers = [
    { id: 't1', name: 'Dr. Anjan Sarma', email: 'anjan.sarma@bpoly.ac.in', username: 'anjan', password: 'teacher123', department: 'Civil Engineering', subjects: ['CIV301', 'CIV302'] },
    { id: 't2', name: 'Mrs. Priyanka Das', email: 'priyanka.das@bpoly.ac.in', username: 'priyanka', password: 'teacher123', department: 'Mechanical Engineering', subjects: ['MEC301', 'MEC302'] },
    { id: 't3', name: 'Mr. Hiranya Boro', email: 'hiranya.boro@bpoly.ac.in', username: 'hiranya', password: 'teacher123', department: 'Biomedical Engineering', subjects: ['BME301'] },
    { id: 't4', name: 'Dr. Manashi Kalita', email: 'manashi.kalita@bpoly.ac.in', username: 'manashi', password: 'teacher123', department: 'Civil Engineering', subjects: ['CIV303'] },
  ];

  const subjects = [
    { id: 's1', code: 'CIV301', name: 'Structural Analysis', department: 'Civil Engineering', semester: '3rd', credits: 4 },
    { id: 's2', code: 'CIV302', name: 'Surveying-II', department: 'Civil Engineering', semester: '3rd', credits: 3 },
    { id: 's3', code: 'CIV303', name: 'Concrete Technology', department: 'Civil Engineering', semester: '4th', credits: 4 },
    { id: 's4', code: 'MEC301', name: 'Thermodynamics', department: 'Mechanical Engineering', semester: '3rd', credits: 4 },
    { id: 's5', code: 'MEC302', name: 'Manufacturing Processes', department: 'Mechanical Engineering', semester: '3rd', credits: 3 },
    { id: 's6', code: 'BME301', name: 'Biomedical Instrumentation', department: 'Biomedical Engineering', semester: '3rd', credits: 4 },
  ];

  const students = [
    { id: 'st1', roll: 'CE21001', regNo: 'BPC/CE/2021/001', name: 'Abhijit Talukdar', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st2', roll: 'CE21002', regNo: 'BPC/CE/2021/002', name: 'Bhaskar Kumar', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st3', roll: 'CE21003', regNo: 'BPC/CE/2021/003', name: 'Chandan Bora', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st4', roll: 'CE21004', regNo: 'BPC/CE/2021/004', name: 'Deepika Saikia', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st5', roll: 'CE21005', regNo: 'BPC/CE/2021/005', name: 'Ehsan Ahmed', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st6', roll: 'CE21006', regNo: 'BPC/CE/2021/006', name: 'Farhan Ali', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st7', roll: 'CE21007', regNo: 'BPC/CE/2021/007', name: 'Gitashree Devi', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st8', roll: 'CE21008', regNo: 'BPC/CE/2021/008', name: 'Himangshu Nath', department: 'Civil Engineering', semester: '3rd' },
    { id: 'st9', roll: 'ME21001', regNo: 'BPC/ME/2021/001', name: 'Iqbal Hussain', department: 'Mechanical Engineering', semester: '3rd' },
    { id: 'st10', roll: 'ME21002', regNo: 'BPC/ME/2021/002', name: 'Jonali Pathak', department: 'Mechanical Engineering', semester: '3rd' },
    { id: 'st11', roll: 'ME21003', regNo: 'BPC/ME/2021/003', name: 'Karan Mahanta', department: 'Mechanical Engineering', semester: '3rd' },
    { id: 'st12', roll: 'ME21004', regNo: 'BPC/ME/2021/004', name: 'Lakshmi Barman', department: 'Mechanical Engineering', semester: '3rd' },
    { id: 'st13', roll: 'ME21005', regNo: 'BPC/ME/2021/005', name: 'Manash Jyoti Roy', department: 'Mechanical Engineering', semester: '3rd' },
    { id: 'st14', roll: 'ME21006', regNo: 'BPC/ME/2021/006', name: 'Nayanjyoti Das', department: 'Mechanical Engineering', semester: '3rd' },
    { id: 'st15', roll: 'BM21001', regNo: 'BPC/BM/2021/001', name: 'Oliva Sharma', department: 'Biomedical Engineering', semester: '3rd' },
    { id: 'st16', roll: 'BM21002', regNo: 'BPC/BM/2021/002', name: 'Pritam Choudhury', department: 'Biomedical Engineering', semester: '3rd' },
    { id: 'st17', roll: 'BM21003', regNo: 'BPC/BM/2021/003', name: 'Queen Bordoloi', department: 'Biomedical Engineering', semester: '3rd' },
    { id: 'st18', roll: 'BM21004', regNo: 'BPC/BM/2021/004', name: 'Rohit Medhi', department: 'Biomedical Engineering', semester: '3rd' },
  ];

  // A demo submission already approved
  const submissions = [
    {
      id: 'sub1',
      teacherId: 't1',
      subjectId: 's1',
      department: 'Civil Engineering',
      semester: '3rd',
      status: 'approved',
      remarks: 'Verified and approved.',
      createdAt: '2026-04-20T10:00:00Z',
      updatedAt: '2026-04-22T14:30:00Z',
      records: [
        { studentId: 'st1', attendance: 82, internal: 22, status: 'eligible', remarks: '' },
        { studentId: 'st2', attendance: 68, internal: 18, status: 'nc', remarks: 'Shortage of attendance' },
        { studentId: 'st3', attendance: 91, internal: 25, status: 'eligible', remarks: '' },
        { studentId: 'st4', attendance: 55, internal: 12, status: 'dc', remarks: 'Detained due to poor internals' },
        { studentId: 'st5', attendance: 88, internal: 24, status: 'eligible', remarks: '' },
        { studentId: 'st6', attendance: 72, internal: 20, status: 'nc', remarks: 'Below 75% attendance' },
        { studentId: 'st7', attendance: 94, internal: 27, status: 'eligible', remarks: '' },
        { studentId: 'st8', attendance: 85, internal: 23, status: 'eligible', remarks: '' },
      ]
    }
  ];

  const auditLogs = [
    { id: 'l1', user: 'admin', action: 'login', detail: 'Admin logged in', ts: new Date().toISOString() },
  ];

  const settings = {
    windowOpen: true,
    submissionStart: '2026-04-15',
    submissionEnd: '2026-05-30',
    institutionName: 'Barpeta Polytechnic',
  };

  return {
    teachers,
    students,
    subjects,
    departments: DEPARTMENTS.map((n, i) => ({ id: `d${i+1}`, name: n })),
    semesters: SEMESTERS.map((n, i) => ({ id: `sem${i+1}`, name: n })),
    submissions,
    auditLogs,
    settings,
    notifications: [],
  };
}

const Store = {
  load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (!raw) {
        const seed = seedData();
        localStorage.setItem(DB_KEY, JSON.stringify(seed));
        return seed;
      }
      return JSON.parse(raw);
    } catch (e) {
      console.error('Store load error', e);
      const seed = seedData();
      localStorage.setItem(DB_KEY, JSON.stringify(seed));
      return seed;
    }
  },
  save(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  },
  reset() {
    localStorage.removeItem(DB_KEY);
    return this.load();
  },
  log(action, detail) {
    const db = this.load();
    const user = Auth.current();
    db.auditLogs.unshift({
      id: 'l' + Date.now(),
      user: user ? user.username || user.email : 'system',
      action, detail,
      ts: new Date().toISOString()
    });
    if (db.auditLogs.length > 500) db.auditLogs = db.auditLogs.slice(0, 500);
    this.save(db);
  },

  /* --------- Generic helpers --------- */
  list(collection) { return this.load()[collection] || []; },
  byId(collection, id) { return this.list(collection).find(x => x.id === id); },
  upsert(collection, item) {
    const db = this.load();
    const arr = db[collection];
    const idx = arr.findIndex(x => x.id === item.id);
    if (idx >= 0) arr[idx] = item; else arr.push(item);
    this.save(db);
    return item;
  },
  remove(collection, id) {
    const db = this.load();
    db[collection] = db[collection].filter(x => x.id !== id);
    this.save(db);
  },
  newId(prefix='id') { return prefix + Date.now() + Math.floor(Math.random()*999); },
  saveSettings(s) {
    const db = this.load();
    db.settings = { ...db.settings, ...s };
    this.save(db);
  },
};

/* --------- Authentication --------- */
const AUTH_KEY = 'bpoly_auth_v1';
const Auth = {
  current() {
    try { return JSON.parse(sessionStorage.getItem(AUTH_KEY) || 'null'); }
    catch { return null; }
  },
  login(role, username, password) {
    if (role === 'admin') {
      if (username === 'admin' && password === 'admin123') {
        const user = { role: 'admin', username: 'admin', name: 'Examination Cell', email: 'exam@bpoly.ac.in' };
        sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
        Store.log('login', 'Admin logged in');
        return user;
      }
      return null;
    }
    // teacher
    const t = Store.list('teachers').find(t => (t.username === username || t.email === username) && t.password === password);
    if (t) {
      const user = { role: 'teacher', id: t.id, username: t.username, name: t.name, email: t.email, department: t.department };
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
      Store.log('login', `Teacher ${t.name} logged in`);
      return user;
    }
    return null;
  },
  logout() {
    Store.log('logout', 'User logged out');
    sessionStorage.removeItem(AUTH_KEY);
  },
  requireAdmin() {
    const u = this.current();
    if (!u || u.role !== 'admin') { window.location.href = '../index.html'; return null; }
    return u;
  },
  requireTeacher() {
    const u = this.current();
    if (!u || u.role !== 'teacher') { window.location.href = '../index.html'; return null; }
    return u;
  },
  requireAny() {
    const u = this.current();
    if (!u) { window.location.href = '../index.html'; return null; }
    return u;
  }
};

/* --------- Utility helpers --------- */
const fmt = {
  date(d) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  dateTime(d) {
    if (!d) return '—';
    return new Date(d).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  },
  time(d) {
    if (!d) return '—';
    return new Date(d).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  },
  initials(name) {
    return (name || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  },
  attendance(p) {
    if (p == null) return '—';
    return p + '%';
  },
};

function toast(message, type='') {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = `<span>${message}</span>`;
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 200); }, 3000);
}

function openModal(html, opts={}) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop show';
  backdrop.innerHTML = `<div class="modal ${opts.large?'lg':''}">${html}</div>`;
  document.body.appendChild(backdrop);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });
  return backdrop;
}
function closeModal(el) {
  const m = el?.closest('.modal-backdrop') || document.querySelector('.modal-backdrop');
  if (m) m.remove();
}

function confirmDialog(message, onYes) {
  const m = openModal(`
    <div class="modal-head"><h3>Confirm</h3></div>
    <div class="modal-body"><p>${message}</p></div>
    <div class="modal-foot">
      <button class="btn" onclick="closeModal(this)">Cancel</button>
      <button class="btn btn-danger" id="confirm-yes">Yes, proceed</button>
    </div>
  `);
  m.querySelector('#confirm-yes').addEventListener('click', () => { m.remove(); onYes(); });
}

/* Initialize the database on first load */
Store.load();
