const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      if (content.includes('#1C64F2')) {
        content = content.replace(/#1C64F2/g, '#09638D');
        changed = true;
      }
      if (content.includes('#49DCB8')) {
        content = content.replace(/#49DCB8/g, '#61DED3');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', file);
      }
    }
  });
}
replaceInDir('src');
console.log('Color replacement complete!');
