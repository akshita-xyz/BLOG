// Main JavaScript for the blog

document.addEventListener('DOMContentLoaded', () => {
    // Highlight current nav link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) || 
            (href.includes('topics') && currentPath.includes('topics'))) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add copy button to code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: #222;
            border: 1px solid #333;
            color: #888;
            padding: 0.3rem 0.6rem;
            font-size: 0.75rem;
            cursor: pointer;
            font-family: inherit;
        `;
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', async () => {
            await navigator.clipboard.writeText(block.textContent);
            button.textContent = 'copied!';
            setTimeout(() => button.textContent = 'copy', 2000);
        });
    });
});

