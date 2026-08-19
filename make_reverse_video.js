const { execSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const inputFile = path.join(__dirname, 'GettyImages-1273300871.mov');
const outputFile = path.join(__dirname, 'src', 'GettyImages-7s-reverse.mp4');

console.log('Generating true 7-second reversed video asset...');
// Command: trim first 7s, apply reverse video filter, output to MP4
const cmd = `"${ffmpegPath}" -y -ss 0 -t 7 -i "${inputFile}" -vf reverse -an -c:v libx264 -pix_fmt yuv420p "${outputFile}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Successfully generated reversed video asset:', outputFile);
} catch (err) {
  console.error('Error generating reverse video:', err);
}
