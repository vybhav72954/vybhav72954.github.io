/**
 * Network Graph Animation
 * Animated nodes and edges for hero background - ML/DS themed
 */

(function() {
    'use strict';

    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let nodes = [];
    let animationId;

    // Configuration
    const config = {
        nodeCount: 50,
        nodeRadius: 2,
        maxDistance: 150,
        nodeSpeed: 0.4,
        mouseRadius: 180
    };

    let mouse = { x: null, y: null };

    // Node class
    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * config.nodeSpeed;
            this.vy = (Math.random() - 0.5) * config.nodeSpeed;
            this.radius = config.nodeRadius + Math.random() * 1.5;
            this.baseRadius = this.radius;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            this.x = Math.max(0, Math.min(width, this.x));
            this.y = Math.max(0, Math.min(height, this.y));

            // Mouse interaction
            if (mouse.x && mouse.y) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < config.mouseRadius) {
                    this.radius = this.baseRadius * (1 + (1 - dist / config.mouseRadius) * 1.2);
                } else {
                    this.radius = this.baseRadius;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(37, 99, 235, 0.6)';
            ctx.fill();
        }
    }

    function init() {
        resize();
        createNodes();
        animate();

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouse);
        canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
    }

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        // Recreate nodes on resize
        if (nodes.length > 0) createNodes();
    }

    function createNodes() {
        nodes = [];
        const count = Math.min(config.nodeCount, Math.floor((width * height) / 15000));
        for (let i = 0; i < count; i++) {
            nodes.push(new Node());
        }
    }

    function handleMouse(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function drawConnections() {
        // Node to node connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.maxDistance) {
                    const opacity = (1 - (dist / config.maxDistance)) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        // Mouse connections (highlight effect)
        if (mouse.x && mouse.y) {
            for (let i = 0; i < nodes.length; i++) {
                const dx = nodes[i].x - mouse.x;
                const dy = nodes[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.mouseRadius) {
                    const opacity = (1 - (dist / config.mouseRadius)) * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }

            // Draw mouse node
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        drawConnections();
        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Cleanup
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
    });

})();
