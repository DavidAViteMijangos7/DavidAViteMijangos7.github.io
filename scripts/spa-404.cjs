// GitHub Pages serves 404.html for unknown paths. Making it a copy of index.html
// lets BrowserRouter handle deep links like /projects on refresh.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));
console.log('SPA fallback: dist/404.html created');
