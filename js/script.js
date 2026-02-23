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

    // --- Copy Button for Code Blocks ---
    const codeBlocks = document.querySelectorAll('.component-code');
    codeBlocks.forEach(block => {
        // Create the copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.title = 'Copy code to clipboard';

        // Append button to the pre element
        block.appendChild(copyBtn);

        // Add click event to copy text
        copyBtn.addEventListener('click', () => {
            // Find the <code> element inside this block to prevent copying the button text itself
            const codeElement = block.querySelector('code');
            const textToCopy = codeElement ? codeElement.textContent : block.textContent.replace('Copy', '').trim();

            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('copied');

                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                copyBtn.textContent = 'Failed';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
    });
});

    // --- Initialize Popovers ---
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // --- Initialize Toasts ---
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
