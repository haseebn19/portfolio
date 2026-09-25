# haseeb.ca

Source code for my personal portfolio at [haseeb.ca](https://haseeb.ca). The site presents my software projects, technical background, and resume in a responsive React interface.

## Development

The project requires Node.js 20.19 or newer.

```bash
npm ci
npm run dev
```

Before submitting a change, run the same checks used by CI:

```bash
npm run lint
npm test
npm run build
```

## Updating the resume

To download the latest PDF from the source Google document, run:

```bash
npm run sync-resume
```

The script replaces `public/Haseeb_Niazi_Resume.pdf`, which is the file linked from the site.

## Deployment

The production site is hosted with GitHub Pages. To build and publish it:

```bash
npm run deploy
```
