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

    const gettingStartedNav = document.getElementById('collapseGettingStarted');
    if (gettingStartedNav && !gettingStartedNav.querySelector('a[href="developer-guide.html"]')) {
        const developerGuideLink = document.createElement('a');
        developerGuideLink.href = 'developer-guide.html';
        developerGuideLink.className = 'nav-sub-item';
        developerGuideLink.textContent = 'Developer Guide';
        gettingStartedNav.appendChild(developerGuideLink);
    }

    const sidebarNav = document.getElementById('sidebarNavAccordion');
    if (sidebarNav && !sidebarNav.querySelector('a[href="dashboard-shell.html"]')) {
        const dashboardGroup = document.createElement('div');
        dashboardGroup.className = 'nav-group-title collapsed';
        dashboardGroup.setAttribute('data-bs-toggle', 'collapse');
        dashboardGroup.setAttribute('data-bs-target', '#collapseDashboardPatterns');
        dashboardGroup.setAttribute('aria-expanded', 'false');
        dashboardGroup.innerHTML = 'Dashboard Patterns <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';

        const dashboardCollapse = document.createElement('div');
        dashboardCollapse.className = 'collapse';
        dashboardCollapse.id = 'collapseDashboardPatterns';
        dashboardCollapse.setAttribute('data-bs-parent', '#sidebarNavAccordion');

        const dashboardLinks = [
            ['dashboard-shell.html', 'Dashboard Shell'],
            ['data-table.html', 'Data Table'],
            ['stats.html', 'KPI Stats'],
            ['charts.html', 'Charts'],
            ['filters.html', 'Filters'],
            ['empty-states.html', 'Empty States'],
            ['skeletons.html', 'Skeletons'],
            ['admin.html', 'Admin Example']
        ];

        const currentPage = window.location.pathname.split('/').pop();
        dashboardLinks.forEach(([href, label]) => {
            const link = document.createElement('a');
            link.href = href;
            link.className = `nav-sub-item${currentPage === href ? ' active' : ''}`;
            link.textContent = label;
            dashboardCollapse.appendChild(link);
            if (currentPage === href) {
                dashboardGroup.classList.remove('collapsed');
                dashboardGroup.setAttribute('aria-expanded', 'true');
                dashboardCollapse.classList.add('show');
            }
        });

        const examplesGroup = sidebarNav.querySelector('[data-bs-target="#collapseExamples"]');
        if (examplesGroup) {
            sidebarNav.insertBefore(dashboardGroup, examplesGroup);
            sidebarNav.insertBefore(dashboardCollapse, examplesGroup);
        } else {
            sidebarNav.appendChild(dashboardGroup);
            sidebarNav.appendChild(dashboardCollapse);
        }
    }

    toggleBtn.addEventListener('click', () => {
        if (sidebar) {
            sidebar.classList.toggle('open');
        }
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

    // --- Copy Services Brand Hex ---
    const serviceItems = document.querySelectorAll('.col-md-6 > .d-flex.align-items-center');
    serviceItems.forEach(item => {
        const hexSpan = item.querySelector('.text-muted');
        if (hexSpan && hexSpan.textContent.startsWith('#')) {
            item.style.cursor = 'pointer';
            item.title = 'Click to copy hex code';
            
            // Add subtle hover effect padding wrapper
            item.style.transition = 'all 0.2s ease';
            item.style.padding = '6px';
            item.style.marginLeft = '-6px';
            item.style.borderRadius = '6px';
            
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = 'rgba(0,0,0,0.04)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
            });

            item.addEventListener('click', () => {
                const hex = hexSpan.dataset.originalHex || hexSpan.textContent;
                if (hexSpan.textContent === 'Copied!') return;
                
                // Store original hex to dataset
                if(!hexSpan.dataset.originalHex) {
                    hexSpan.dataset.originalHex = hex;
                }
                
                navigator.clipboard.writeText(hex).then(() => {
                    hexSpan.textContent = 'Copied!';
                    hexSpan.classList.remove('text-muted');
                    hexSpan.classList.add('text-success', 'fw-bold');
                    
                    setTimeout(() => {
                        hexSpan.textContent = hex;
                        hexSpan.classList.add('text-muted');
                        hexSpan.classList.remove('text-success', 'fw-bold');
                    }, 1500);
                });
            });
        }
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
