const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const path = require('path');
const fs = require('fs');

const inputFile = path.join(__dirname, 'GettyImages-1273300871.mov');
const forwardFile = path.join(__dirname, 'temp_forward.mp4');
const reverseFile = path.join(__dirname, 'temp_reverse.mp4');
const listFile = path.join(__dirname, 'concat_list.txt');
const outputFile = path.join(__dirname, 'src', 'bg-loop.mp4');

const ffmpegPath = ffmpeg.path;

console.log('Using FFmpeg at:', ffmpegPath);

try {
  // Step 1: Extract first 7 seconds
  console.log('Extracting first 7 seconds...');
  execSync(`"${ffmpegPath}" -y -i "${inputFile}" -t 7 -c:v libx264 -preset fast -crf 23 "${forwardFile}"`, { stdio: 'inherit' });

  // Step 2: Create reversed version of the 7-second clip
  console.log('Creating reversed clip...');
  execSync(`"${ffmpegPath}" -y -i "${forwardFile}" -vf reverse -c:v libx264 -preset fast -crf 23 "${reverseFile}"`, { stdio: 'inherit' });

  // Step 3: Concatenate forward and reverse into a single seamless loop
  console.log('Concatenating clips...');
  fs.writeFileSync(listFile, `file 'temp_forward.mp4'\nfile 'temp_reverse.mp4'`);
  execSync(`"${ffmpegPath}" -y -f concat -safe 0 -i "${listFile}" -c copy "${outputFile}"`, { stdio: 'inherit' });

  console.log('Success! Final seamless loop video created at:', outputFile);

  // Clean up temp files
  fs.unlinkSync(forwardFile);
  fs.unlinkSync(reverseFile);
  fs.unlinkSync(listFile);
} catch (error) {
  console.error('Error during processing:', error.message);
}
