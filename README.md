# Sean M. Daugherity — Architecture Portfolio

A static website for Sean M. Daugherity's architecture portfolio: six semester studio projects, a resume page, and contact links. It is plain HTML, CSS and a little JavaScript, with no build step, so it can be hosted anywhere that serves static files (GitHub Pages included).

**Live site:** https://seandaugherity-pixel.github.io/Portfolio/ (once GitHub Pages is turned on; see [Publishing](#publishing))

## What's on the site

- **Glass header** that stays at the top of every page: Resume, phone and email on the left; name and "Architecture Portfolio - selected works" on the right. Hovering Resume shows a preview of the resume.
- **Cover** with the Childhood Home recollection sketch.
- **Table of contents.** Each project's artwork fills its box; click a box to jump to that project.
- **Six projects.** Each one opens with a cover page showing the title, studio and location, and a framed write-up about the project. The pages after it show the drawings, renders and models, each in a framed box with its caption.

  | Project | Semester |
  |---|---|
  | Common Horizons — Low Income Housing | Spring 2024 |
  | Carnegie Library Reuse & Community Center | Fall 2024 |
  | Prairie Revival — Conservation Center | Fall 2023 |
  | Verum Sanctorum — Refugee Housing | Spring 2025 |
  | Prairie Forward — Public Installation | Fall 2023 |
  | ISU Arboretum — Public Pavilion | Spring 2023 |

- **About and contact page** with the email, phone, LinkedIn, Instagram, design Instagram, resume link, portfolio PDF download, and the design statement.
- **Resume page** (`resume.html`) with both resume pages and a PDF download.

Pages fill the full width of the screen. On phones, titles and write-ups move above the artwork so they stay readable. The left and right arrow keys step between pages.

## Files

```
index.html                  The portfolio (all 21 pages)
resume.html                 Resume page
assets/
  site.css                  All styles (header, pages, contents, write-ups, phone layout)
  site.js                   Arrow-key navigation; keeps jump links clear of the header
  pages/page-NN.webp        Page artwork, one image per portfolio page
  toc/*.webp                Contents box artwork, one per project
  resume/resume-0N.webp     Resume page images
  Sean-Daugherity-Portfolio.pdf   Portfolio PDF offered for download
  Sean-Daugherity-Resume.pdf      Resume PDF offered for download
.nojekyll                   Tells GitHub Pages to serve the files as-is
```

Page 2, the table of contents, is built entirely in HTML, so there is no `page-02.webp`.

## Editing

- **Text** (titles, project write-ups, contact links) lives in `index.html` as ordinary HTML. Each project section has an `id` (for example `#carnegie-library`), and its write-up sits in the `<div class="project-text">` inside it.
- **Links:** LinkedIn appears in `index.html` (last page) and `resume.html`. The email and phone appear in the header and on the last page.
- **Artwork** comes from the page images in `assets/pages/`. To change a drawing, replace the matching `page-NN.webp` with an image of the same size (2400 × 1553 px) so the layout doesn't shift.
- **Resume:** replace `assets/Sean-Daugherity-Resume.pdf` and the two images in `assets/resume/`.
- **Download PDF:** `assets/Sean-Daugherity-Portfolio.pdf` is the original print portfolio. It doesn't include the website's later edits (moved write-ups, spelling fixes, reframed pages).

## Previewing locally

From the repository folder, start any static file server, for example:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publishing

1. On GitHub, open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Choose the `main` branch and the `/ (root)` folder, then **Save**.

After a minute or so the site is live at https://seandaugherity-pixel.github.io/Portfolio/. Every push to `main` updates it.
