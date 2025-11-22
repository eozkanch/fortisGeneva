const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));

async function convertToWebP() {
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.jpg', '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      console.log(`✓ Converted ${file} to WebP`);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }
  console.log('\n✓ All images converted to WebP!');
}

convertToWebP();

