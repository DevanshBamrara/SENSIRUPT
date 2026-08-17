const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimize() {
  const publicDir = path.join(__dirname, 'public');

  // 1. Optimize lady-justice-cutout.png to WebP (lossless/high-quality with alpha)
  const cutoutInput = path.join(publicDir, 'lady-justice-cutout.png');
  const cutoutWebp = path.join(publicDir, 'lady-justice-cutout.webp');
  
  if (fs.existsSync(cutoutInput)) {
    await sharp(cutoutInput)
      .webp({ quality: 85, effort: 6 })
      .toFile(cutoutWebp);
    console.log('Created lady-justice-cutout.webp');
  }

  // 2. Optimize sky-clouds-user.jpg to WebP
  const skyInput = path.join(publicDir, 'sky-clouds-user.jpg');
  const skyWebp = path.join(publicDir, 'sky-clouds-user.webp');

  if (fs.existsSync(skyInput)) {
    await sharp(skyInput)
      .webp({ quality: 82, effort: 6 })
      .toFile(skyWebp);
    console.log('Created sky-clouds-user.webp');
  }
}

optimize().catch(console.error);
