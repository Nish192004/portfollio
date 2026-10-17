# Rajshekhar Ojha — Developer Portfolio

A responsive React + Vite portfolio with a dark navy/cyan theme and separate CSS.

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open the folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal.

## Customize first

- **Name / intro / skills / projects:** `src/App.jsx`
- **Colors, layout, typography, responsive CSS:** `src/styles.css` (`:root` variables are near the top)
- **Page title and SEO description:** `index.html`
- **Email address:** replace `your.email@example.com` in `src/App.jsx`
- **Social links:** replace the sample GitHub and LinkedIn URLs in `src/App.jsx`
- **Project links:** replace the placeholder GitHub URLs in the `projects` array.

## About HTTP-only cookies

A public portfolio does not need authentication cookies. If you later add a private admin dashboard or protected content, implement HTTP-only cookies on a backend (for example Express) and configure CORS/CSRF protection correctly. Never try to set an HTTP-only cookie from React; the server must set it with `Set-Cookie`.

## Build for production

```bash
npm run build
```

The generated static site will be in `dist/`.
