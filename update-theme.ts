import * as fs from 'fs';
import * as path from 'path';

function replaceInDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/yellow/g, 'blue');
      content = content.replace(/gold-glow/g, 'brand-glow');
      content = content.replace(/text-gradient-gold/g, 'text-gradient-brand');
      content = content.replace(/bg-black/g, 'bg-slate-950');
      content = content.replace(/bg-\[\#030303\]/g, 'bg-slate-950');
      content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-slate-900');
      content = content.replace(/amber-/g, 'blue-');
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

replaceInDir(path.join(process.cwd(), 'components'));
replaceInDir(path.join(process.cwd(), 'app'));
