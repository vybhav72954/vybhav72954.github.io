/**
 * Portfolio Main JavaScript
 * Fully dynamic rendering based on config.js
 */

(function() {
    'use strict';

    // SVG
    const ICONS = {
        github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
        linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
        email: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',
        link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>',
        devto: '<svg viewBox="0 0 448 512" fill="currentColor"><path d="M71.4 128h62.9c32.7 0 60.5 24.3 60.5 59.8v80.4c0 35.5-27.8 59.8-60.5 59.8H71.4V128zm30.3 30v140h31c15.8 0 29.5-12.2 29.5-29.5v-81c0-17.3-13.7-29.5-29.5-29.5h-31zM203.9 128h89.1v30h-58.8v55h53.7v29.5h-53.7V298h58.8v30h-89.1V128zm111.4 0l42 122.9L399.3 128h33.3L376 328h-34.7L282 128h33.3z"/></svg>',
        medium: '<svg viewBox="0 0 640 512" fill="currentColor"><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.75,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.256,102.729Z"/></svg>'
    };

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        setPageMeta();
        renderHero();
        renderAbout();
        renderProjects();
        renderResearch();
        renderExperience();
        renderSkills();
        renderContact();
        renderFooter();
        initNavigation();
        initCarousel();
        initSmoothScroll();
    }

    // ============================================
    // 1. PAGE META & HERO
    // ============================================
    function setPageMeta() {
        document.getElementById('page-title').textContent = `${CONFIG.name} | ${CONFIG.title}`;
    }

    function renderHero() {
        document.getElementById('hero-name').textContent = CONFIG.name;
        document.getElementById('hero-title').textContent = CONFIG.title;
        document.getElementById('hero-subtitle').textContent = CONFIG.subtitle;
        document.getElementById('hero-tagline').textContent = CONFIG.tagline;

        const credContainer = document.getElementById('hero-credentials');
        credContainer.innerHTML = CONFIG.credentials.map(cred =>
            `<span class="credential">${cred}</span>`
        ).join('');

        const actionsContainer = document.querySelector('.hero-actions');
        if (actionsContainer) {
            actionsContainer.innerHTML = `
                <a href="#projects" class="btn btn-primary">View Projects</a>
                ${CONFIG.resume ? `
                <a href="${CONFIG.resume}" target="_blank" rel="noopener" class="btn btn-outline">
                    View Resume
                </a>` : ''}
                <a href="#contact" class="btn btn-outline">Get in Touch</a>
            `;
        }

        const socialContainer = document.getElementById('hero-social');
        const socialOrder = ['github', 'linkedin', 'instagram', 'email'];
        const links = [];

        socialOrder.forEach(platform => {
            if (CONFIG.social[platform]) {
                const url = platform === 'email' ? `mailto:${CONFIG.social.email}` : CONFIG.social[platform];
                links.push(`
                    <a href="${url}" target="_blank" rel="noopener" aria-label="${platform}">
                        ${ICONS[platform] || ICONS.link}
                    </a>
                `);
            }
        });
        socialContainer.innerHTML = links.join('');
    }

    // ============================================
    // 2. ABOUT
    // ============================================
    function renderAbout() {
        document.getElementById('about-text').innerHTML = CONFIG.about.intro.map(p => `<p>${p}</p>`).join('');
        document.getElementById('about-philosophy').innerHTML = CONFIG.about.philosophy.map(item => `<li>${item}</li>`).join('');

        const snapshotMap = { education: "Education", experience: "Experience", domains: "Domains" };

        document.getElementById('about-snapshot').innerHTML = Object.entries(CONFIG.about.snapshot).map(([key, value]) => {
            let formattedValue = value;
            if (value.includes('||')) {
                formattedValue = value.split('||').map(v => `<div style="margin-bottom: 6px;">${v.trim()}</div>`).join('');
            }

            return `
            <div class="snapshot-item">
                <span class="snapshot-label">${snapshotMap[key] || key}</span>
                <span class="snapshot-value">${formattedValue}</span>
            </div>
            `;
        }).join('');
    }

    // ============================================
    // 3. PROJECTS
    // ============================================
    function renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container || !CONFIG.projects) return;

        // SORTING: Featured projects first, then others
        const sortedProjects = [...CONFIG.projects].sort((a, b) => {
            return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1;
        });

        container.innerHTML = sortedProjects.map(project => `
            <article class="project-card ${project.featured ? 'featured' : ''}">
                <div class="card-header">
                    <span class="project-category">${project.category}</span>
                    ${project.featured ? '<span class="featured-badge">★ Featured</span>' : ''}
                </div>
                <h3>${project.title}</h3>
                <p class="project-subtitle">${project.subtitle}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-skills">
                    ${project.skills.map(skill => `<span class="project-skill">${skill}</span>`).join('')}
                </div>
                <div class="project-results">
                    <strong>Results:</strong> ${project.results}
                </div>
                <a href="${project.github}" target="_blank" rel="noopener" class="project-link">
                    View on GitHub ${ICONS.link}
                </a>
            </article>
        `).join('');
    }

    // ============================================
    // 4. RESEARCH
    // ============================================
    function renderResearch() {
        const pubContainer = document.getElementById('publications-grid');
        pubContainer.innerHTML = CONFIG.publications.filter(p => p.type === 'paper').map(pub => `
            <div class="publication-card">
                <span class="pub-status ${pub.status}">${pub.status}</span>
                <h4>${pub.title}</h4>
                <p>${pub.abstract}</p>
                <div class="pub-meta">
                    <span class="pub-journal">${pub.journal} · ${pub.year}</span>
                    ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener" class="pub-link">View Paper →</a>` : ''}
                </div>
            </div>
        `).join('');

        const patents = CONFIG.publications.filter(p => p.type === 'patent');
        if (patents.length > 0) {
            document.getElementById('patents-section').innerHTML = `
                <h3 class="subsection-title">Patents</h3>
                ${patents.map(pat => `
                    <div class="patent-card">
                        <div class="patent-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            <span>${pat.id}</span>
                        </div>
                        <h4>${pat.title}</h4>
                        <p>${pat.abstract}</p>
                        <span class="patent-status">${pat.status} · Expires ${pat.expiry}</span>
                    </div>
                `).join('')}
            `;
        }

        document.getElementById('blog-posts-grid').innerHTML = CONFIG.blogPosts.map(post => `
            <a href="${post.url}" target="_blank" rel="noopener" class="blog-post-card">
                <div class="blog-post-img" style="background-image: url('${post.thumbnail}')">
                    <span class="blog-platform-badge">${post.platform}</span>
                </div>
                <div class="blog-post-info">
                    <h4>${post.title}</h4>
                    <span class="blog-read-more">Read Article →</span>
                </div>
            </a>
        `).join('');

        const profileContainer = document.getElementById('blog-profiles');
        if (profileContainer && CONFIG.social) {
            profileContainer.innerHTML = `
                <span>View all on:</span>
                <a href="${CONFIG.social.devto}" target="_blank" rel="noopener" class="profile-btn devto">
                    ${ICONS.devto} DEV.to
                </a>
                <a href="${CONFIG.social.medium}" target="_blank" rel="noopener" class="profile-btn medium">
                    ${ICONS.medium} Towards Data Science
                </a>
            `;
        }
    }

    // ============================================
    // 5. EXPERIENCE & SKILLS
    // ============================================
    function renderExperience() {
        document.getElementById('experience-timeline').innerHTML =
            '<div class="timeline-line"></div>' +
            CONFIG.experience.map((exp, index) => {
                const side = exp.side || (index % 2 === 0 ? 'left' : 'right');
                return `
                <div class="timeline-item ${side}">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <span class="timeline-period">${exp.period}</span>
                        <h3>${exp.title}</h3>
                        <span class="timeline-org">${exp.org}</span>
                        <ul class="timeline-points">${exp.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
                    </div>
                </div>`;
            }).join('');
    }

    function renderSkills() {
        document.getElementById('skills-container').innerHTML = Object.entries(CONFIG.skills).map(([category, skills]) => `
            <div class="skill-group">
                <h3>${category}</h3>
                <div class="skill-tags">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // 6. CONTACT & FOOTER
    // ============================================
    function renderContact() {
        const platforms = [
            { key: 'email', label: 'Email', icon: 'email', isMail: true },
            { key: 'github', label: 'GitHub', icon: 'github' },
            { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
            { key: 'instagram', label: 'Instagram', icon: 'instagram' }
        ];

        document.getElementById('contact-grid').innerHTML = platforms.map(platform => {
            const url = platform.isMail ? `mailto:${CONFIG.social.email}` : CONFIG.social[platform.key];
            if (!url) return '';

            return `
            <a href="${url}" target="_blank" rel="noopener" class="contact-card">
                <div class="contact-icon">${ICONS[platform.icon]}</div>
                <span class="contact-label">${platform.label}</span>
            </a>
            `;
        }).join('');
    }

    function renderFooter() {
        document.getElementById('footer-name').textContent = CONFIG.name;
        document.getElementById('footer-title').textContent = CONFIG.title;
        document.getElementById('footer-year').textContent = `© ${new Date().getFullYear()}`;
        document.getElementById('footer-links').innerHTML = Object.entries(CONFIG.social).map(([key, url]) => {
            if (key === 'email') return '';
            return `<a href="${url}" target="_blank" rel="noopener">${key.charAt(0).toUpperCase() + key.slice(1)}</a>`;
        }).join('');
    }

    // ============================================
    // UTILS
    // ============================================
    function initNavigation() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        if (!toggle || !menu) return;
        toggle.addEventListener('click', () => menu.classList.toggle('active'));
        menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('active')));
    }

    function initCarousel() {
        const track = document.getElementById('carousel-track');
        const dotsContainer = document.getElementById('carousel-dots');
        if (!track || !CONFIG.headshots.length) return;

        // LAZY LOADING + PLACEHOLDER
        track.innerHTML = CONFIG.headshots.map((src, i) => `
            <div class="carousel-slide ${i === 0 ? 'active' : ''}">
                <div class="headshot-placeholder">
                    <span>${i === 0 ? '' : ``}</span>
                </div>
                <img src="${src}" alt="Headshot ${i+1}" 
                     loading="${i === 0 ? 'eager' : 'lazy'}"
                     style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover;"
                     onerror="this.style.display='none'">
            </div>
        `).join('');

        dotsContainer.innerHTML = CONFIG.headshots.map((_, i) => `
            <button class="dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></button>
        `).join('');

        const slides = track.querySelectorAll('.carousel-slide');
        const dots = dotsContainer.querySelectorAll('.dot');
        let current = 0;
        let interval;

        const update = (index) => {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = (index + slides.length) % slides.length;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        };

        const next = () => update(current + 1);
        const start = () => interval = setInterval(next, 10000);
        const stop = () => clearInterval(interval);

        dots.forEach((dot, i) => dot.addEventListener('click', () => { stop(); update(i); start(); }));
        track.parentElement.addEventListener('mouseenter', stop);
        track.parentElement.addEventListener('mouseleave', start);
        start();
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || !document.querySelector(href)) return;
                e.preventDefault();
                const target = document.querySelector(href);
                const navHeight = document.querySelector('.nav').offsetHeight;
                window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
            });
        });
    }

})();
