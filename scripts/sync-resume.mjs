// Downloads the latest resume PDF from Google Docs into public/.
import {writeFile} from 'node:fs/promises';

const RESUME_URL = 'https://docs.google.com/document/d/1hPSZbvASgoLmqY8Cfrx61v-O5OAiZUKIrq4hfx_2bEE/export?format=pdf';
const DESTINATION = new URL('../public/Haseeb_Niazi_Resume.pdf', import.meta.url);

console.log('Downloading the latest resume from Google Docs...');

try {
    const response = await fetch(RESUME_URL);
    if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
    }

    if (!response.headers.get('content-type')?.includes('application/pdf')) {
        throw new Error('The response is not a PDF. Check that the document is shared publicly.');
    }

    const pdf = Buffer.from(await response.arrayBuffer());
    await writeFile(DESTINATION, pdf);
    console.log(`Updated public/Haseeb_Niazi_Resume.pdf (${(pdf.length / 1024).toFixed(1)} KB).`);
} catch (error) {
    console.error(`Could not update the resume: ${error.message}`);
    process.exit(1);
}
