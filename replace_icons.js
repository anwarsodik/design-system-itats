const fs = require('fs');
let content = fs.readFileSync('example-lms-courses.html', 'utf8');

// Filter Data icon
content = content.replace(
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\s*<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"><\/polygon>\s*<\/svg>/g,
    '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Magnifying%20glass%20tilted%20left/3D/magnifying_glass_tilted_left_3d.png" width="20" height="20" alt="Filter">'
);

// Tugas Aktif sidebar icon
content = content.replace(
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var\(--bs-primary\)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"><\/path><polyline points="14 2 14 8 20 8"><\/polyline><line x1="16" y1="13" x2="8" y2="13"><\/line><line x1="16" y1="17" x2="8" y2="17"><\/line><polyline points="10 9 9 9 8 9"><\/polyline><\/svg>/g,
    '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Clipboard/3D/clipboard_3d.png" width="22" height="22" alt="Task">'
);

// Presensi Terendah sidebar icon
content = content.replace(
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"><\/path><line x1="12" y1="9" x2="12" y2="13"><\/line><line x1="12" y1="17" x2="12.01" y2="17"><\/line><\/svg>/g,
    '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Chart%20decreasing/3D/chart_decreasing_3d.png" width="22" height="22" alt="Trending Down">'
);

// Graduation Cap (Jurusan)
const gradCapRegex = /<svg class="course-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\s*<path d="M22 10v6M2 10l10-5 10 5-10 5z"><\/path>\s*<path d="M6 12v5c3 3 9 3 12 0v-5"><\/path>\s*<\/svg>/g;
content = content.replace(gradCapRegex, '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Graduation%20cap/3D/graduation_cap_3d.png" width="18" height="18" class="course-icon" alt="Jurusan">');

// Calendar (Hari)
const calendarRegex = /<svg class="course-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\s*<rect x="3" y="4" width="18" height="18" rx="2" ry="2"><\/rect>\s*<line x1="16" y1="2" x2="16" y2="6"><\/line>\s*<line x1="8" y1="2" x2="8" y2="6"><\/line>\s*<line x1="3" y1="10" x2="21" y2="10"><\/line>\s*<\/svg>/g;
content = content.replace(calendarRegex, '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Calendar/3D/calendar_3d.png" width="18" height="18" class="course-icon" alt="Jadwal">');

// Users (Mahasiswa)
const usersRegex = /<svg class="course-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"\s*stroke-width="2">\s*<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"><\/path>\s*<circle cx="9" cy="7" r="4"><\/circle>\s*<path d="M23 21v-2a4 4 0 0 0-3-3.87"><\/path>\s*<path d="M16 3.13a4 4 0 0 1 0 7.75"><\/path>\s*<\/svg>/g;
content = content.replace(usersRegex, '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Busts%20in%20silhouette/3D/busts_in_silhouette_3d.png" width="18" height="18" class="course-icon" alt="Mahasiswa">');

// Arrow right (Pergi ke Kelas)
const arrowRegex = /<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"\s*stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\s*<line x1="5" y1="12" x2="19" y2="12"><\/line>\s*<polyline points="12 5 19 12 12 19"><\/polyline>\s*<\/svg>/g;
content = content.replace(arrowRegex, '<img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets/Rocket/3D/rocket_3d.png" width="20" height="20" alt="Go">');

fs.writeFileSync('example-lms-courses.html', content);
console.log("Replaced all SVGs with Fluent UI Emojis");
