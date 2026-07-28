# AI Agent Guide - ITATS Design System

Panduan singkat ini dibuat agar AI Agent cepat memahami struktur, tujuan, dan peta pengetahuan project.

## Project Summary

ITATS Design System adalah design system berbasis HTML, CSS, Bootstrap 5.3.3, dan vanilla JavaScript untuk membuat pengalaman web ITATS yang konsisten, compact, accessible, dan sesuai identitas brand.

Core principles dari project:

- Refined Elegance: UI ringkas, profesional, tidak bulky.
- Consistent Identity: memakai ITATS Blue `#06469e` dan ITATS Yellow `#f8b500` sebagai fondasi visual.
- Accessibility First: warna, typography, dan komponen harus mudah dibaca dan digunakan.

## Important Files

- `README.md`: overview project, cara pakai via CDN/local, daftar dokumentasi.
- `index.html`: halaman overview design system, prinsip desain, identitas ITATS, getting started.
- `developer-guide.html`: panduan developer untuk memakai design system secara manual dan agentic.
- `css/style.css`: sumber utama token CSS, Bootstrap override, typography, warna brand, komponen, layout, responsive behavior.
- `js/script.js`: interaksi global seperti mobile sidebar, copy color hex, code toggle, copy code block, popover, dan toast.
- `img/logo-itats.png`: aset logo/identitas ITATS.
- `img/course-1.png`, `img/course-2.png`, `img/course-3.png`: aset visual course card/LMS.
- `replace_icons.js`, `replace_all_icons.js`: script utilitas penggantian icon.

## Documentation Pages

Halaman HTML root adalah dokumentasi live untuk komponen dan contoh implementasi.

- Getting Started: `index.html`, `developer-guide.html`.
- Foundation: `colors.html`, `typography.html`, `grid.html`, `utilities.html`.
- Components: `accordion.html`, `alerts.html`, `badges.html`, `breadcrumbs.html`, `button-group.html`, `buttons.html`, `cards.html`, `carousel.html`, `close-button.html`, `collapse.html`, `dropdowns.html`, `figures.html`, `forms.html`, `images.html`, `list-group.html`, `modals.html`, `navbar.html`, `navs-tabs.html`, `offcanvas.html`, `pagination.html`, `placeholders.html`, `popovers.html`, `progress.html`, `ratio.html`, `scrollspy.html`, `spinners.html`, `stacks.html`, `tables.html`, `toasts.html`, `tooltips.html`.
- Example pages: `examples.html`, `admin.html`, `example-courses.html`, `example-lms-courses.html`, `example-login.html`, `example-login-classroom.html`.

## Styling Rules

- Prefer editing `css/style.css` for global style/system changes.
- Keep Bootstrap 5 as the base; add overrides rather than replacing Bootstrap patterns.
- Use existing CSS variables under `:root` before introducing new values.
- Preserve compact typography: body uses `0.875rem`, buttons and labels are intentionally smaller.
- Keep brand colors aligned with ITATS tokens and service brand variables.
- Maintain responsive sidebar/mobile behavior already supported by `js/script.js` and CSS.

## JavaScript Rules

- Project uses vanilla JavaScript only.
- Main interaction entry point is `js/script.js`.
- Existing behavior is initialized on `DOMContentLoaded` for sidebar, copy interactions, and code block helpers.
- Bootstrap interactive APIs are used for popovers and toasts.
- Avoid introducing framework dependencies unless explicitly requested.

## Graphify Outputs

Knowledge graph sudah dibuat di `graphify-out/`.

- `graphify-out/graph.json`: raw graph data for AI/GraphRAG usage.
- `graphify-out/graph.html`: interactive graph visualization, bisa dibuka langsung di browser.
- `graphify-out/GRAPH_REPORT.md`: audit report berisi hub, surprising connections, communities, dan suggested questions.
- `graphify-out/manifest.json`: manifest untuk incremental update.
- `graphify-out/cost.json`: tracker token/cost run Graphify.

Ringkasan graph terakhir:

- 166 nodes.
- 143 edges.
- 30 communities.
- Health warning: 2 dangling-endpoint edges. Graph tetap usable, tetapi beberapa edge mungkin menunjuk endpoint yang tidak masuk node final.

Community penting dari graph:

- Brand Colors Services.
- LMS Example Pages.
- Typography And Stacks.
- ITATS Logo Identity.
- Design System Principles.
- Navigation Components.
- Popovers Tooltips.
- Tables Dropdown Actions.

God nodes dari report:

- ITATS logo.
- Minimal workspace.
- abstract geometric illustration.
- ITATS Design System.
- Utilities Page.
- Accordion Component.
- Color Palette.
- Services Brand Colors.
- Course Grid.
- Abstract 3D shapes.

Surprising connections dari report:

- `Course Data Table` semantically similar to `Course Grid`.
- `Grid System` semantically similar to `Course Grid`.
- `List Group Component` semantically similar to `Active Tasks Panel`.
- `Forms Component` semantically similar to `Classroom ITATS Login`.
- `Forms Component` semantically similar to `Sign In Page`.

## How To Use Graphify As An Agent

Untuk menjawab pertanyaan arsitektur/keterkaitan project, mulai dari graph:

```bash
graphify query "What connects Forms Component to Classroom ITATS Login?"
```

Untuk melihat jalur antar konsep:

```bash
graphify path "Forms Component" "Classroom ITATS Login"
```

Untuk menjelaskan node tertentu:

```bash
graphify explain "ITATS logo"
```

Jika project berubah signifikan, update graph secara incremental:

```bash
graphify . --update
```

## Common Agent Tasks

- Untuk perubahan visual umum: cek `css/style.css`, lalu halaman HTML terkait.
- Untuk komponen dokumentasi: edit file komponen spesifik, misalnya `buttons.html` untuk buttons.
- Untuk layout contoh aplikasi: cek `examples.html` dan file `example-*.html`.
- Untuk behavior interaktif: cek `js/script.js` dan atribut Bootstrap di HTML terkait.
- Untuk konsistensi brand: cek `colors.html`, `index.html`, dan token warna di `css/style.css`.

## Verification

Tidak ada test runner khusus selain dependency Playwright di `package.json`. Untuk perubahan UI, verifikasi minimal:

- Buka halaman HTML terkait di browser.
- Cek desktop dan mobile width.
- Pastikan Bootstrap JS tetap dimuat di halaman yang butuh dropdown, modal, toast, tooltip, popover, collapse, atau offcanvas.
- Pastikan tidak memutus sidebar navigation dan code copy/toggle behavior.
