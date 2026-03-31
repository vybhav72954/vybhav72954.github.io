# Vybhav Chaturvedi — Portfolio

> **[vybhav72954.github.io](https://vybhav72954.github.io/)**

Personal portfolio showcasing ML / Data Science research, projects, publications, and professional experience.  
Built as a config-driven static site — all content lives in a single JavaScript file, so the site never needs a rebuild to update.

> ☕ **Fuelled by:** mass-produced instant coffee, mass-deleted CSS rules, and mass-existential
> crises at 3 AM wondering why a `<div>` wouldn't centre.

---

## ✨ Features

| Feature | Detail |
|---|---|
| **Config-driven content** | Every section (projects, experience, skills, publications, blog posts) is rendered from `js/config.js` — zero HTML editing for content changes |
| **Interactive hero** | Animated neural-network canvas background + auto-rotating headshot carousel |
| **Project showcase** | Filterable card grid with featured badges, skill tags, and direct GitHub links |
| **Research & Writing** | Publications (Springer), patents, and technical blog posts (Medium / DEV.to) |
| **Timeline** | Alternating left-right experience timeline |
| **Dark-mode aesthetic** | Playfair Display + DM Sans + JetBrains Mono type stack with DS-flavoured code annotations |
| **SEO-ready** | Open Graph, Twitter Card meta tags, sitemap, robots.txt, and web manifest |
| **Responsive** | Fully responsive across mobile, tablet, and desktop breakpoints |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5, semantic sections |
| Styling | Vanilla CSS (custom properties, grid, flexbox, keyframe animations) |
| Logic | Vanilla JavaScript (ES6+, no frameworks, no build step) |
| Canvas | Custom WebGL-style neural network animation (`network.js`) |
| Fonts | Google Fonts — Playfair Display, DM Sans, JetBrains Mono |
| Hosting | GitHub Pages |
| Framework | ❌ None. We die like real men. |

---

## 📁 Project Structure

```
.
├── index.html              # Main single-page app
├── 404.html                # Custom 404 — even my errors are styled
├── css/
│   ├── style.css           # 34 KB of mass-produced pain
│   └── personal.css        # Styles for the 'me, myself & I' page
├── js/
│   ├── config.js           # ★ The one file that rules them all
│   ├── main.js             # DOM rendering, interactions, vibes
│   └── network.js          # Canvas neural-network animation (the cool background thing™)
├── pages/
│   └── personal.html       # Personal / travel page
├── img/                    # Headshots & proof I go outside sometimes
├── assets/                 # Favicon variants, resume PDF, manifest icons
├── site.webmanifest        # PWA manifest
├── sitemap.xml             # Sitemap for search engines
├── robots.txt              # Politely telling bots where not to go
└── LICENSE                 # MIT — take it, I dare you
```

---

## 🚀 Local Development

```bash
cd "path/to/Personal Portfolio"
python -m http.server 8000
```

> Open **http://localhost:8000**

> [!WARNING]
> Do **not** open `index.html` via `file://` unless you enjoy staring at a blank page and questioning every life choice that led you to web development.

---

## 🪦 Graveyard of Bugs I Almost Didn't Survive

- CSS Grid not gridding → fixed after 4 hours, 2 coffees, and 1 whispered threat to my monitor
- The neural-network canvas once ate 100% CPU → laptop nearly achieved liftoff
- A missing semicolon in `config.js` broke everything for 40 minutes. Forty. Minutes.
- `z-index: 999999` exists somewhere in the CSS. I refuse to touch it. It works. I don't know why.

---

## 💬 Interact With Me

Found a bug? Have a suggestion? Or just want to roast my CSS?

- 🐛 **Open an issue** — I'll pretend I didn't cause it
- 📬 **Email** — [vybhavchaturvedi@gmail.com](mailto:vybhavchaturvedi@gmail.com)
- 💼 **LinkedIn** — [Let's connect](https://www.linkedin.com/in/vybhav-chaturvedi-0ba82614a/) (I promise I won't send you a pitch)
- ⭐ **Star the repo** — it's free and it makes me mass-produced happy

---

## 📄 License

[MIT](LICENSE) © Vybhav Chaturvedi

> *No divs were harmed in the making of this portfolio.*  
> *The developer, however, was not so lucky.*
