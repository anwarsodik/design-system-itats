# ITATS Design System

Welcome to the **ITATS Design System**, a comprehensive guide and resource library containing everything needed to design and develop elegant, consistent web experiences.

## 🌟 Overview

This design system utilizes raw HTML, CSS, and Bootstrap 5 to provide a simple yet powerful styling foundation. Our goal is to ensure consistency, accessibility, and a premium feel across all web applications.

### Core Principles

- **Refined Elegance:** Our aesthetic embraces subtlety. We use smaller typography and compact UI elements to ensure interfaces appear professional, clean, and not overly bulky.
- **Consistent Identity:** Grounded in the core ITATS Blue and Yellow, our palette is carefully balanced with neutral tones to create a sleek and modern look.
- **Accessibility First:** Colors, typography, and interactive components are meticulously chosen to ensure legibility and ease of use for all audiences.

## 🚀 Getting Started

There are a few ways to include the ITATS Design System in your project. Since our system relies on Bootstrap 5 as its core foundation, **you must include Bootstrap 5 beforehand**.

### 1. Download Source Files
You can download the entire repository containing the CSS, JS, and HTML Documentations here:
- **[Download Reference / Templates (.ZIP)](https://github.com/anwarsodik/design-system-itats/archive/refs/heads/main.zip)**

### 2. Include via CDN (jsDelivr)
If you want to quickly integrate the design system without hosting the files yourself, you can use our CDN links via jsDelivr. Just add these tags into your HTML `<head>`:

```html
<!-- 1. Include Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- 2. Include ITATS Design System CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/anwarsodik/design-system-itats@main/css/style.css">
```

For interactive components, also include the JS scripts right before your closing `</body>` tag:

```html
<!-- 1. Include Bootstrap 5 JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- 2. Include ITATS Custom Scripts -->
<script src="https://cdn.jsdelivr.net/gh/anwarsodik/design-system-itats@main/js/script.js"></script>
```

### 3. Local Usage
If you have downloaded the files locally, host them in your project structure:

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
```

## 📚 Documentation

Explore the following HTML pages included in this repository to view our detailed design guidelines and component live demos:

- **[Overview (index.html)](index.html):** Introduction and core principles.
- **[Developer Guide (developer-guide.html)](developer-guide.html):** Panduan penggunaan manual dan agentic untuk developer.
- **[Colors (colors.html)](colors.html):** Our primary and secondary brand colors (ITATS Blue `#06469e` & Yellow `#f8b500`), along with neutral palettes and status indicators.
- **[Typography (typography.html)](typography.html):** Typography guidelines powered by the **Inter** font family.
- **Components:** Interactive building blocks such as Alerts, Buttons, Cards, Modals, Navbars, Forms, Tables, Toasts, Tooltips, and more are documented as individual HTML pages.
- **Dashboard Patterns:** Production-oriented dashboard references for admin/LMS products.
  - **[Dashboard Shell](dashboard-shell.html):** Topbar, sidebar, page header, action area, and responsive content shell.
  - **[Advanced Data Table](data-table.html):** Toolbar, search, bulk selection, sticky header, compact density, row actions, and pagination.
  - **[KPI Stats](stats.html):** Metric cards, deltas, progress, and status variants.
  - **[Charts](charts.html):** Chart card patterns and token-aligned visualization placeholders.
  - **[Filters](filters.html):** Search, select filters, date/month input, active filter chips, reset/apply actions.
  - **[Empty States](empty-states.html):** No data and no result states with clear recovery actions.
  - **[Skeletons](skeletons.html):** Dashboard, card, and content loading placeholders.

## 💻 Powered by

- **HTML5**
- **CSS3 / Custom CSS Variables** (`css/style.css`)
- **Bootstrap 5.3.3** (UI Framework Base)
- **Vanilla JavaScript** (`js/script.js`)
- [Admin Dashboard - Data Mahasiswa](admin.html)
- [Courses Management](example-courses.html)

These examples include full layouts with navbars, sidebars, summary cards, and responsive tables.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure your code follows the project's style guidelines and includes tests if applicable.

For issues or suggestions, open a GitHub issue.

**License:** This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
