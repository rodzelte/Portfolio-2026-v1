# Rodzel John Te — Portfolio

This ZIP contains the complete source for the single-page portfolio, including all project images.

## Deploy to Render

1. Extract this ZIP.
2. Upload the extracted files to a new GitHub repository.
3. In Render, choose **New → Blueprint** and connect that repository.
4. Render will read `render.yaml`, install the packages, build the site, and start the web service.

The included Blueprint uses Node.js 22, binds the site to Render's `PORT` on `0.0.0.0`, and includes a health check for the home page.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
