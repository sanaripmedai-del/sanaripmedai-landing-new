const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      replaceInDir(p);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
      let c = fs.readFileSync(p, 'utf8');
      let ch = false;
      if (c.includes('#1C64F2')) {
        c = c.replace(/#1C64F2/g, '#09638D');
        ch = true;
      }
      if (c.includes('#49DCB8')) {
        c = c.replace(/#49DCB8/g, '#61DED3');
        ch = true;
      }
      if (c.includes('#1650C4')) {
        c = c.replace(/#1650C4/g, '#075174');
        ch = true;
      }
      if (ch) {
        fs.writeFileSync(p, c, 'utf8');
        console.log('Updated:', file);
      }
    }
  });
}

replaceInDir('src');
console.log('Colors replaced successfully!');
