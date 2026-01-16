# Vybhav Chaturvedi — Portfolio

Personal portfolio showcasing ML/Data Science work.

## 🚀 Deploy to GitHub Pages

```bash
# 1. Create repo named yourusername.github.io on GitHub

# 2. Initialize and push
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main

# 3. Live at https://YOURUSERNAME.github.io
```

## 📁 Structure

```
portfolio/
├── index.html           # Main page
├── css/
│   ├── style.css        # Main styles
│   └── personal.css     # Personal page styles
├── js/
│   ├── config.js        # All content data (edit this!)
│   └── main.js          # Rendering logic
├── pages/
│   └── personal.html    # Travel, Football, Poetry page
└── img/                 # Your images
```

## ✏️ Customize

### 1. Edit `js/config.js`

All your content is in one file:
- Personal info & social links
- Projects (title, description, skills, results, GitHub link)
- Experience timeline
- Skills
- Research

### 2. Add Images

- Put headshots in `img/` folder
- Update the carousel in `index.html`
- Add travel photos to `pages/personal.html`

### 3. Update Links

Search for `yourusername` and `your.email@example.com` and replace with your actual info.

## 🎨 Design

- Modern gradient backgrounds
- Card-based layouts with hover effects
- Dark sections for contrast
- Responsive mobile menu
- Photo carousel in hero

Built with vanilla HTML/CSS/JS. No build step required.
