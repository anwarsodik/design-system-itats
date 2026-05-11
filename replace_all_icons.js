const fs = require('fs');

// Map of SVG regexes to fluent UI emojis
const replacements = [
    {
        // Chevron down
        regex: /<svg class="chevron" [^>]*><polyline points="6 9 12 15 18 9"><\/polyline><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Down%20arrow/3D/down_arrow_3d.png" class="chevron" width="16" height="16" alt="Down">'
    },
    {
        // Components / Book / Layers
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"><\/path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"><\/path><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Books/3D/books_3d.png" width="20" height="20" class="me-1" alt="Books">'
    },
    {
        // Star
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"><\/path><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Star/3D/star_3d.png" width="20" height="20" class="me-1" alt="Star">'
    },
    {
        // Layout / Rect
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><rect x="3" y="3" width="18" height="18" rx="2"\/>\s*<line x1="3" y1="9" x2="21" y2="9"\/>\s*<line x1="3" y1="15" x2="21" y2="15"\/>\s*<line x1="9" y1="9" x2="9" y2="21"\/><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Page%20with%20curl/3D/page_with_curl_3d.png" width="20" height="20" class="me-1" alt="Layout">'
    },
    {
        // Layout 2 / Grid
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"><\/rect><line x1="3" y1="9" x2="21" y2="9"><\/line><line x1="9" y1="21" x2="9" y2="9"><\/line><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Card%20file%20box/3D/card_file_box_3d.png" width="20" height="20" class="me-1" alt="Grid">'
    },
    {
        // Check Square / Forms
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><polyline points="9 11 12 14 22 4"><\/polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"><\/path><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Check%20mark%20button/3D/check_mark_button_3d.png" width="20" height="20" class="me-1" alt="Forms">'
    },
    {
        // Image
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><rect x="3" y="3" width="18" height="18" rx="2"\/>\s*<circle cx="8.5" cy="8.5" r="1.5"\/>\s*<polyline points="21 15 16 10 5 21"\/><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Framed%20picture/3D/framed_picture_3d.png" width="20" height="20" class="me-1" alt="Images">'
    },
    {
        // Type / Text
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><circle cx="12" cy="12" r="3"\/>\s*<path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"\/><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Input%20latin%20letters/3D/input_latin_letters_3d.png" width="20" height="20" class="me-1" alt="Typography">'
    },
    {
        // Pentagon / Shape
        regex: /<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary me-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"><\/polygon><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Artist%20palette/3D/artist_palette_3d.png" width="20" height="20" class="me-1" alt="Icons">'
    },
    {
        // External Link (small)
        regex: /<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"\/><polyline points="15 3 21 3 21 9"\/><line x1="10" y1="14" x2="21" y2="3"\/><\/svg>/g,
        emoji: '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Link/3D/link_3d.png" width="14" height="14" alt="Link">'
    }
];

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let changedCount = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    for (const rule of replacements) {
        if (rule.regex.test(content)) {
            content = content.replace(rule.regex, rule.emoji);
            modified = true;
        }
    }
    
    if (modified) {
        fs.writeFileSync(file, content);
        changedCount++;
        console.log(`Updated icons in ${file}`);
    }
}
console.log(`Completed. Updated ${changedCount} files.`);
