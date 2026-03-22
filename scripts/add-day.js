#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const date = process.argv[2];
if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('Usage: node scripts/add-day.js YYYY-MM-DD');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const dataDir = path.join(root, 'data');
const templatePath = path.join(dataDir, 'templates', 'daily-news-template.json');
const manifestPath = path.join(dataDir, 'manifest.json');
const outputJsonPath = path.join(dataDir, `news-${date}.json`);
const coversDir = path.join(root, 'public', 'covers');
const outputCoverPath = path.join(coversDir, `${date}-cover.jpg`);
const newsTsPath = path.join(root, 'components', 'news.ts');

if (!fs.existsSync(coversDir)) fs.mkdirSync(coversDir, { recursive: true });
if (fs.existsSync(outputJsonPath)) {
  console.error(`Data file already exists: ${outputJsonPath}`);
  process.exit(1);
}

const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
template.date = date;
template.coverImage = `/covers/${date}-cover.jpg`;

fs.writeFileSync(outputJsonPath, JSON.stringify(template, null, 2));
if (!fs.existsSync(outputCoverPath)) {
  fs.writeFileSync(outputCoverPath, '');
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
if (!manifest.availableDates.includes(date)) {
  manifest.availableDates.push(date);
  manifest.availableDates.sort();
}
manifest.defaultDate = date;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

const importName = `news${date.replace(/-/g, '')}`;
const importLine = `import ${importName} from '@/data/news-${date}.json';`;
const datasetLine = `  '${date}': ${importName},`;

let newsTs = fs.readFileSync(newsTsPath, 'utf8');
if (!newsTs.includes(importLine)) {
  const lines = newsTs.split('\n');
  lines.splice(1, 0, importLine);
  newsTs = lines.join('\n');
}
if (!newsTs.includes(datasetLine)) {
  newsTs = newsTs.replace("const datasets = {\n", `const datasets = {\n${datasetLine}\n`);
}
fs.writeFileSync(newsTsPath, newsTs);

console.log(`Created ${outputJsonPath}`);
console.log(`Created placeholder ${outputCoverPath}`);
console.log(`Updated manifest.json and components/news.ts`);
