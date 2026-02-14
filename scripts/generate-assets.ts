import sharp from "sharp";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.join(import.meta.dirname, "../client/public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");

// Ensure directories exist
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Favicon SVG with embedded font styling
function createFaviconSvg(size: number): string {
  const fontSize = size * 0.5;
  const yOffset = size * 0.68;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="#000000"/>
  <text x="${size / 2}" y="${yOffset}"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', Times, serif"
    font-size="${fontSize}"
    font-weight="600"
    fill="#ffffff"
    letter-spacing="-${size * 0.015}">DD</text>
</svg>`;
}

// OG Image SVG (1200x630)
function createOgImageSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000"/>
      <stop offset="50%" style="stop-color:#0a0a0a"/>
      <stop offset="100%" style="stop-color:#111111"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:rgba(147, 51, 234, 0.15)"/>
      <stop offset="70%" style="stop-color:rgba(147, 51, 234, 0)"/>
    </radialGradient>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:transparent"/>
      <stop offset="50%" style="stop-color:#9333ea"/>
      <stop offset="100%" style="stop-color:transparent"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Name -->
  <text x="600" y="280"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', Times, serif"
    font-size="100"
    font-weight="700"
    fill="#ffffff"
    letter-spacing="3">DANI DÍAZ</text>

  <!-- Decorative line -->
  <rect x="540" y="320" width="120" height="2" fill="url(#line)"/>

  <!-- Title -->
  <text x="600" y="390"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', Times, serif"
    font-size="24"
    font-weight="400"
    fill="#a1a1aa"
    letter-spacing="4">DIRECTORA DE CASTING INTERNACIONAL</text>
</svg>`;
}

async function generateAssets() {
  console.log("Generating assets...");

  // Generate favicon PNGs
  const faviconSizes = [
    { size: 16, name: "favicon-16x16.png" },
    { size: 32, name: "favicon-32x32.png" },
    { size: 180, name: "apple-touch-icon.png" },
  ];

  for (const { size, name } of faviconSizes) {
    const svg = createFaviconSvg(size);
    await sharp(Buffer.from(svg)).png().toFile(path.join(PUBLIC_DIR, name));
    console.log(`Created ${name}`);
  }

  // Update favicon.svg with proper sizing
  const faviconSvg = createFaviconSvg(32);
  fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.svg"), faviconSvg);
  console.log("Updated favicon.svg");

  // Generate OG image
  const ogSvg = createOgImageSvg();
  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90 })
    .toFile(path.join(IMAGES_DIR, "og-image.jpg"));
  console.log("Created og-image.jpg");

  console.log("\nAll assets generated successfully!");
}

generateAssets().catch(console.error);
