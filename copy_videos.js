const fs = require('fs');
const path = require('path');

const srcDir = 'D:\\IT\\Sanarip Med AI Landing\\videos';
const destDir = 'D:\\IT\\Sanarip Med AI Landing\\public\\videos';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

for (let i = 1; i <= 4; i++) {
  const srcFile = path.join(srcDir, `${i}.mp4`);
  const destFile = path.join(destDir, `${i}.mp4`);
  
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${i}.mp4 successfully.`);
  } else {
    console.log(`Source file ${srcFile} not found.`);
  }
}
