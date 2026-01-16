# Vybhav Ashok — Portfolio

Personal portfolio website showcasing ML/Data Science work, research, and projects.

## 🚀 Deployment (GitHub Pages)

### Option 1: Direct Push (Simplest)

1. Create a new repository named `yourusername.github.io` on GitHub
2. Push this code to the repository:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. Your site will be live at `https://yourusername.github.io`

### Option 2: Project Repository

1. Create any repository (e.g., `portfolio`)
2. Push the code
3. Go to **Settings → Pages**
4. Under "Source", select **main** branch and **/ (root)** folder
5. Your site will be at `https://yourusername.github.io/portfolio`

## 📁 Structure

```
portfolio/
├── index.html              # Main page (all sections)
├── css/
│   ├── style.css          # Global styles
│   └── project.css        # Project detail page styles
├── js/
│   └── main.js            # Network animation + interactions
├── projects/
│   ├── mdd-biomarkers.html    # Project detail template
│   └── [other projects...]
├── img/                   # Add your images here
│   └── travel/            # Travel photos for Funside
└── README.md
```

## ✏️ Customization Checklist

### Required Updates

- [ ] **index.html**: Update contact links (email, GitHub, LinkedIn, Scholar)
- [ ] **index.html**: Add your actual project descriptions
- [ ] **index.html**: Update experience section with your actual roles
- [ ] **index.html**: Add poem content in `js/main.js`
- [ ] **projects/**: Create detail pages for each project
- [ ] **img/**: Add travel photos and any diagrams

### Project Pages

Each project needs these sections (as per spec):

1. Title
2. One-line summary
3. Problem Statement
4. Why This Problem Matters
5. Data Description
6. Methodology
7. Architecture / Flow Diagram
8. Results / Findings
9. Assumptions & Constraints
10. Limitations
11. Tech Stack
12. Links (GitHub / Paper / Data)

Use `projects/mdd-biomarkers.html` as your template.

## 🎨 Design Notes

The design follows these principles from the spec:

- **Visual Motifs**: Network graph animation (hero), mathematical symbols (section dividers), grid-based layouts
- **Typography**: Source Serif 4 (headings), Inter (body), JetBrains Mono (code/labels)
- **Colors**: Muted, analytical palette — no flashy colors
- **No Forbidden Elements**: No progress bars, chat interfaces, dashboards, or skill percentages

## 🔧 Local Development

Just open `index.html` in a browser. No build step required.

For live reload during development:
```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve
```

Then visit `http://localhost:8000`

## 📱 Responsive

- Desktop-first design
- Fully responsive down to 320px width
- Mobile navigation with hamburger menu

## ♿ Accessibility

- Semantic HTML
- Keyboard navigable
- Reduced motion support (`prefers-reduced-motion`)
- Sufficient color contrast

---

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools.
