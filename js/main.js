/**
 * Portfolio JavaScript
 * Network visualization + interactions
 */

(function() {
    'use strict';

    // ============================================
    // NETWORK GRAPH VISUALIZATION
    // ============================================
    
    class NetworkGraph {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.nodes = [];
            this.edges = [];
            this.animationId = null;
            this.mouseX = 0;
            this.mouseY = 0;
            
            this.config = {
                nodeCount: 50,
                nodeRadius: 2,
                maxDistance: 150,
                nodeColor: 'rgba(45, 52, 54, 0.2)',
                edgeColor: 'rgba(45, 52, 54, 0.06)',
                speed: 0.3
            };
            
            this.init();
        }
        
        init() {
            this.resize();
            this.createNodes();
            this.animate();
            
            window.addEventListener('resize', () => this.resize());
            this.canvas.addEventListener('mousemove', (e) => {
                const rect = this.canvas.getBoundingClientRect();
                this.mouseX = e.clientX - rect.left;
                this.mouseY = e.clientY - rect.top;
            });
        }
        
        resize() {
            const rect = this.canvas.parentElement.getBoundingClientRect();
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
            
            // Adjust node count based on screen size
            this.config.nodeCount = Math.floor((rect.width * rect.height) / 20000);
            this.config.nodeCount = Math.max(30, Math.min(80, this.config.nodeCount));
            
            if (this.nodes.length > 0) {
                this.createNodes();
            }
        }
        
        createNodes() {
            this.nodes = [];
            for (let i = 0; i < this.config.nodeCount; i++) {
                this.nodes.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * this.config.speed,
                    vy: (Math.random() - 0.5) * this.config.speed,
                    radius: Math.random() * 1.5 + 1
                });
            }
        }
        
        updateNodes() {
            this.nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
                
                // Keep within bounds
                node.x = Math.max(0, Math.min(this.canvas.width, node.x));
                node.y = Math.max(0, Math.min(this.canvas.height, node.y));
            });
        }
        
        drawNodes() {
            this.ctx.fillStyle = this.config.nodeColor;
            this.nodes.forEach(node => {
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
        }
        
        drawEdges() {
            this.ctx.strokeStyle = this.config.edgeColor;
            this.ctx.lineWidth = 1;
            
            for (let i = 0; i < this.nodes.length; i++) {
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const dx = this.nodes[i].x - this.nodes[j].x;
                    const dy = this.nodes[i].y - this.nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < this.config.maxDistance) {
                        const opacity = 1 - (distance / this.config.maxDistance);
                        this.ctx.strokeStyle = `rgba(45, 52, 54, ${opacity * 0.08})`;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                        this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                        this.ctx.stroke();
                    }
                }
            }
        }
        
        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.updateNodes();
            this.drawEdges();
            this.drawNodes();
            this.animationId = requestAnimationFrame(() => this.animate());
        }
        
        destroy() {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
        }
    }

    // ============================================
    // NAVIGATION
    // ============================================
    
    function initNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const nav = document.getElementById('nav');
        const navLinks = navMenu.querySelectorAll('a');
        
        // Mobile toggle
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
        
        // Active link highlighting
        const sections = document.querySelectorAll('section[id]');
        
        function highlightActiveLink() {
            const scrollY = window.scrollY;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        window.addEventListener('scroll', highlightActiveLink);
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = document.getElementById('nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // POEM MODAL
    // ============================================
    
    function initPoemModal() {
        const modal = document.getElementById('poem-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const modalClose = document.getElementById('modal-close');
        const poemItems = document.querySelectorAll('.poem-item');
        
        // Sample poems - replace with actual content
        const poems = {
            1: {
                title: 'Poem Title One',
                content: `Add your poem content here.
                
Each line will be preserved
as you write it.

This is just placeholder text.`
            },
            2: {
                title: 'Poem Title Two',
                content: `Another poem goes here.

Replace this with your actual writing.`
            },
            3: {
                title: 'Poem Title Three',
                content: `And a third poem.

Your words, your voice.`
            }
        };
        
        poemItems.forEach(item => {
            item.addEventListener('click', () => {
                const poemId = item.dataset.poem;
                const poem = poems[poemId];
                
                if (poem) {
                    modalTitle.textContent = poem.title;
                    modalBody.textContent = poem.content;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        modalClose.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe project cards, timeline items, etc.
        document.querySelectorAll('.project-card, .timeline-item, .skill-category').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    // ============================================
    // INITIALIZE
    // ============================================
    
    document.addEventListener('DOMContentLoaded', () => {
        // Network graph
        const canvas = document.getElementById('network-canvas');
        if (canvas) {
            new NetworkGraph(canvas);
        }
        
        // Navigation
        initNavigation();
        
        // Smooth scroll
        initSmoothScroll();
        
        // Poem modal
        initPoemModal();
        
        // Scroll animations
        initScrollAnimations();
    });

    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-menu a.active {
            color: var(--color-text);
        }
    `;
    document.head.appendChild(style);

})();
