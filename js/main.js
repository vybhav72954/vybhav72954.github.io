/**
 * Portfolio Main JavaScript
 * Renders content from config.js
 */

(function() {
    'use strict';

    // Wait for DOM
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        renderProjects();
        renderTimeline();
        renderSkills();
        initNavigation();
        initCarousel();
        initSmoothScroll();
    }

    // ============================================
    // RENDER PROJECTS
    // ============================================
    
    function renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container || !CONFIG.projects) return;

        const html = CONFIG.projects.map(project => `
            <article class="project-card">
                <span class="project-category">${project.category}</span>
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
                    View on GitHub
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </a>
            </article>
        `).join('');

        container.innerHTML = html;
    }

    // ============================================
    // RENDER TIMELINE
    // ============================================
    
    function renderTimeline() {
        const container = document.getElementById('timeline');
        if (!container || !CONFIG.experience) return;

        const html = CONFIG.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <span class="timeline-org">${exp.org}</span>
                    <span class="timeline-period">${exp.period}</span>
                    <ul class="timeline-points">
                        ${exp.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    // ============================================
    // RENDER SKILLS
    // ============================================
    
    function renderSkills() {
        const container = document.getElementById('skills-container');
        if (!container || !CONFIG.skills) return;

        const html = Object.entries(CONFIG.skills).map(([category, skills]) => `
            <div class="skill-group">
                <h3>${category}</h3>
                <div class="skill-tags">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    // ============================================
    // NAVIGATION
    // ============================================
    
    function initNavigation() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        
        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Close on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }

    // ============================================
    // HEADSHOT CAROUSEL
    // ============================================
    
    function initCarousel() {
        const carousel = document.getElementById('headshot-carousel');
        if (!carousel) return;

        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.dot');
        let currentSlide = 0;
        let interval;

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = index;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        // Auto-advance
        function startAutoplay() {
            interval = setInterval(nextSlide, 4000);
        }

        function stopAutoplay() {
            clearInterval(interval);
        }

        // Dot clicks
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoplay();
                goToSlide(index);
                startAutoplay();
            });
        });

        // Start
        startAutoplay();

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

})();
