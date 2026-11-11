# haseeb.ca

Source code for my personal portfolio at [haseeb.ca](https://haseeb.ca). The site presents my software projects, technical background, and resume in a responsive React interface.

## Development

The project requires Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:3000/`. Before submitting a change, run the same checks used by CI:

```bash
npm run lint
npm run format:check
npm test
npm run build
```

`npm run format` formats the code with Prettier.

## Project Structure

| Path | Contents |
| :--- | :--- |
| `src/data/profile.js` | Name, contact links, skills, and the About section text |
| `src/data/projects.js` | Project cards, in display order. The comment at the top lists every field. |
| `public/projects/` | Project screenshots |
| `src/components/` | Page sections and shared components |
| `src/tests/` | Vitest and Testing Library tests |

To add a project, add an entry to `src/data/projects.js` and put its screenshot in `public/projects/`.

## Updating the Resume

Replace `public/Haseeb_Niazi_Resume.pdf` with the new PDF. That file is the one linked from the site.

## Deployment

The production site is hosted with GitHub Pages. To build and publish it:

```bash
npm run deploy
```

## License

The code is licensed under the [MIT License](LICENSE). The resume, photos, and written content about me are not covered by it.
