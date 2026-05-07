import * as fs from 'fs';
import * as path from 'path';

function replaceColors(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace blue color scale to brand color scale
      const pattern = /(text|bg|border|from|via|to|shadow|selection:bg|selection:text|group-hover:border|group-hover:bg|hover:text|hover:bg|hover:border|ring|focus:ring)-blue-([0-9]{2,3})/g;
      const original = content;
      content = content.replace(pattern, '$1-brand-$2');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceColors(path.join(process.cwd(), 'components'));
replaceColors(path.join(process.cwd(), 'app'));
