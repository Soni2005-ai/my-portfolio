import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'components');
const files = [
  ...fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx')).map(f => path.join(componentsDir, f)),
  ...fs.readdirSync(path.join(componentsDir, 'ui')).filter(f => f.endsWith('.tsx')).map(f => path.join(componentsDir, 'ui', f))
];

const replacements = [
  // Backgrounds
  { from: /bg-\[#0B1120\]/g, to: 'bg-white' },
  { from: /bg-slate-900\/50/g, to: 'bg-white' },
  { from: /bg-slate-950\/50/g, to: 'bg-white' },
  { from: /bg-slate-900/g, to: 'bg-white' },
  { from: /bg-slate-950/g, to: 'bg-white' },
  { from: /bg-white\/\[0\.0[0-9]+\]/g, to: 'bg-white' }, // bg-white/[0.03], bg-white/[0.05]
  { from: /border-white\/\[0\.0[0-9]+\]/g, to: 'border-slate-200' }, // border-white/[0.05]
  
  // Specific styling
  { from: /text-gray-400/g, to: 'text-slate-600' },
  { from: /text-gray-500/g, to: 'text-slate-500' },
  { from: /text-gray-300/g, to: 'text-slate-600' },
  { from: /text-gray-200/g, to: 'text-slate-700' },
  { from: /text-white/g, to: 'text-slate-900' },
  
  // Specific brand text adjustments for light mode readability (often brand-400 -> brand-600, brand-300 -> brand-600)
  { from: /text-brand-400/g, to: 'text-brand-600' },
  { from: /text-brand-300/g, to: 'text-brand-600' },

  { from: /shadow-\[0_0_8px_rgba\(234,179,8,0.8\)\]/g, to: 'shadow-none' },
];

for (const filePath of files) {
  if (filePath.endsWith('hero.tsx') || filePath.endsWith('navbar.tsx')) continue; // Skip hero and navbar as we manually edited it
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const rep of replacements) {
    content = content.replace(rep.from, rep.to);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}
