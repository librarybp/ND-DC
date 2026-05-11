# Barpeta Polytechnic — Examination Cell Portal

A complete, static, browser-based portal for managing NC (Not Clear), DC (Detained Candidate), and Eligible student lists for the Examination Branch of Barpeta Polytechnic.

Runs entirely in the browser — no server, no database, no build step. All data is stored in `localStorage`, which makes it perfect for **GitHub Pages**, **Netlify**, **Vercel**, or even a USB drive.

---

## ✨ Features

### Admin (Examination Cell)
- Dashboard with live KPIs and charts (status distribution, NC/DC/Eligible counts)
- Full CRUD for Teachers, Students, Subjects, Departments, Semesters
- Excel/CSV import & export everywhere
- Review submissions → approve, reject (with remarks), or lock as final
- Submission window control (open/close, start/end dates)
- Filterable reports + **official PDF generation matching the supplied format** (GOVT OF ASSAM header, logo, NC/DC table, Exam Supdt. signature block)
- Backup & restore (JSON), factory reset
- Audit trail of every action

### Teacher
- Personal dashboard with assigned subjects and window status
- Submit NC/DC/Eligible lists per subject
- Auto-categorize: attendance < 75% → NC
- Excel template download + bulk import
- Submission history with PDF download per submission
- See admin remarks and resubmit

---

## 🚀 Deploy to GitHub Pages (in under 2 minutes)

1. **Create a new repository** on GitHub (e.g. `bpoly-portal`).
2. **Upload all files** from this folder to the repo root (or use `git push`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/bpoly-portal.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Pick **Branch: `main`**, **Folder: `/ (root)`**, click **Save**.
6. Wait ~30 seconds. Your portal will be live at:
   ```
   https://<your-username>.github.io/bpoly-portal/
   ```

That's it. No build step. No CI. The repo IS the website.

---

## 🔐 Demo Credentials

| Role     | Username  | Password     |
|----------|-----------|--------------|
| Admin    | `admin`   | `admin123`   |
| Teacher  | `anjan`   | `teacher123` |
| Teacher  | `priyanka`| `teacher123` |
| Teacher  | `hiranya` | `teacher123` |
| Teacher  | `manashi` | `teacher123` |

Change these in `js/store.js` (search for `seed` function) before going live.

---

## 📁 Folder Structure

```
bpoly-portal/
├── index.html                  # Login page (role: admin / teacher)
├── assets/
│   └── logo.png                # Official Barpeta Polytechnic logo
├── css/
│   └── style.css               # Complete design system + print styles
├── js/
│   ├── store.js                # Data layer (localStorage CRUD + seed)
│   └── layout.js               # Shared sidebar, topbar, page bootstrap
└── pages/
    ├── admin/
    │   ├── dashboard.html
    │   ├── teachers.html
    │   ├── students.html
    │   ├── subjects.html
    │   ├── departments.html
    │   ├── submissions.html
    │   ├── reports.html        # Official NC/DC PDF generator
    │   ├── settings.html       # Window control + backup/restore
    │   └── audit.html
    └── teacher/
        ├── dashboard.html
        ├── submissions.html
        └── history.html
```

---

## 🖨 Official PDF Format

The generated PDF (from **Reports** in admin or **History** in teacher) exactly matches the supplied template:

- Centered Barpeta Polytechnic logo
- `GOVT OF ASSAM` / `OFFICE OF THE PRINCIPAL: BARPETA POLYTECHNIC` header
- Full address + website + email
- `Ref. No.` and `Date:` row
- Centered title: **List of NC and DC**
- 6-column table: SL. No · Name of Students · Roll No · Subject · NC · DC
- Right-aligned signature block: *Signature / Exam Supdt. / Examination Cell / Barpeta Polytechnic*

Print via your browser's print dialog → **Save as PDF** for an exact-format digital copy, or print directly.

---

## 💾 Data & Backups

- All data lives in `localStorage` under the key `bpoly_portal_db_v1`.
- **Export a backup**: Admin → Settings → Download Backup (JSON file).
- **Restore**: Admin → Settings → Upload JSON.
- **Factory reset** wipes everything and re-seeds demo data.

> 💡 For a multi-machine setup, take a JSON backup regularly. For a true multi-user database, you'd swap `js/store.js` for an API client pointing at a real backend — the rest of the UI doesn't need to change.

---

## 🛠 Tech Stack

- **Vanilla HTML / CSS / JS** — no framework, no build
- **Chart.js 4.4** (CDN) — dashboard charts
- **SheetJS 0.18** (CDN) — Excel import/export
- **localStorage** — persistence
- **window.print()** — PDF generation (browser-native, no library)

---

## 📝 Credits

**Developed by Prasanna Kr Konch, Librarian, Barpeta Polytechnic**

---

## License

For institutional use at Barpeta Polytechnic.
