document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Sidebar Toggle ---
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-toggle';
    toggleBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `;
    document.body.appendChild(toggleBtn);

    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (sidebar && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // --- Copy Color Hex ---
    const colorCards = document.querySelectorAll('.color-card');
    colorCards.forEach(card => {
        card.addEventListener('click', () => {
            const hex = card.querySelector('.color-hex').textContent;
            navigator.clipboard.writeText(hex).then(() => {
                const originalText = card.querySelector('.color-hex').textContent;
                card.querySelector('.color-hex').textContent = 'Copied!';
                setTimeout(() => {
                    card.querySelector('.color-hex').textContent = originalText;
                }, 1500);
            });
        });
        card.style.cursor = 'pointer';
        card.title = 'Click to copy hex code';
    });

    // --- Code Blocks Toggle ---
    const codeToggles = document.querySelectorAll('.code-toggle');
    codeToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                const isShowing = target.classList.contains('show');
                if (isShowing) {
                    target.classList.remove('show');
                    this.textContent = 'Show Code';
                } else {
                    target.classList.add('show');
                    this.textContent = 'Hide Code';
                }
            }
        });
    });
});
