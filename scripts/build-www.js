// Veb faylları www/ qovluğuna kopyalayır (Capacitor həmin qovluğu iOS tətbiqinin içinə qoyur).
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const files = fs.readdirSync(root).filter(f =>
  /\.(html|png|json|js)$/i.test(f) &&
  !['package.json', 'package-lock.json', 'capacitor.config.json'].includes(f) &&
  !/^assetlinks/i.test(f) &&
  !/^(ss-|feature-graphic)/i.test(f)
);

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of files) fs.copyFileSync(path.join(root, f), path.join(out, f));

if (!fs.existsSync(path.join(out, 'index.html'))) {
  console.error('index.html tapılmadı'); process.exit(1);
}
console.log('www/ hazırdır:', files.length, 'fayl');
