
import fs from 'fs';

const content = fs.readFileSync('client/src/data/index.ts', 'utf8');
const fixedContent = content.replace(/\\n/g, '\n');
fs.writeFileSync('client/src/data/index.ts', fixedContent);
