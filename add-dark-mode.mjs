import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'components');
const files = [
  ...fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx')).map(f => path.join(componentsDir, f)),
  ...fs.readdirSync(path.join(componentsDir, 'ui')).filter(f => f.endsWith('.tsx')).map(f => path.join(componentsDir, 'ui', f)),
  path.join(process.cwd(), 'app', 'page.tsx'),
  path.join(process.cwd(), 'app', 'layout.tsx'),
  path.join(process.cwd(), 'app', 'globals.css')
];

// Reverting hardcoded light mode -> adding dark variants
const replacements = [
  { from: /(?<!dark:)bg-\[#F9FAFB\]/g, to: 'bg-[#F9FAFB] dark:bg-[#0B1120]' },
  { from: /(?<!dark:)bg-white(?!\/)/g, to: 'bg-white dark:bg-[#111827]' }, // Use a proper dark panel background, slightly lighter than #0B1120
  { from: /(?<!dark)(?<!-)bg-slate-50/g, to: 'bg-slate-50 dark:bg-white/5' },
  { from: /(?<!dark:)bg-slate-100/g, to: 'bg-slate-100 dark:bg-white/10' },
  { from: /(?<!dark:)border-slate-200/g, to: 'border-slate-200 dark:border-white/10' },
  { from: /(?<!dark:)border-slate-100/g, to: 'border-slate-100 dark:border-white/5' },
  
  // Texts
  { from: /(?<!dark:)text-slate-800/g, to: 'text-slate-800 dark:text-slate-200' },
  { from: /(?<!dark:)text-slate-700/g, to: 'text-slate-700 dark:text-slate-300' },
  { from: /(?<!dark:)text-slate-600/g, to: 'text-slate-600 dark:text-slate-400' },
  { from: /(?<!dark:)text-slate-500/g, to: 'text-slate-500 dark:text-slate-500' },
  { from: /(?<!dark:)text-slate-900/g, to: 'text-slate-900 dark:text-white' },

  // Brand
  { from: /(?<!dark:)text-brand-600/g, to: 'text-brand-600 dark:text-brand-400' },
  
  // Specific fix for header text
  { from: /text-gray-900/g, to: 'text-slate-900 dark:text-white' }
];

for (const filePath of files) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const rep of replacements) {
    content = content.replace(rep.from, rep.to);
  }
  
  // Specific fix for text/bg colors which were overly replaced
  content = content.replace(/dark:bg-[#111827]\/[0-9]+/g, 'dark:bg-[#111827]');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}
