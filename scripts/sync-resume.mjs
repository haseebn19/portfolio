import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RESUME_URL = 'https://docs.google.com/document/d/1hPSZbvASgoLmqY8Cfrx61v-O5OAiZUKIrq4hfx_2bEE/export?format=pdf';
const FILE_NAME = 'Haseeb_Niazi_Resume.pdf';
const DEST_PATH = path.join(__dirname, '..', 'public', FILE_NAME);

console.log('Downloading latest resume from Google Docs...');

try {
  const response = await fetch(RESUME_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }
  
  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/pdf')) {
    throw new Error('Downloaded file is not a PDF. Please check the Google Drive sharing permissions.');
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  fs.writeFileSync(DEST_PATH, buffer);
  
  console.log(`✅ Successfully updated resume at: public/${FILE_NAME} (${(buffer.length / 1024).toFixed(2)} KB)`);
} catch (error) {
  console.error('❌ Error syncing resume:', error.message);
  process.exit(1);
}
