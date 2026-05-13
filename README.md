# Code Atlas

A geeky static web app for browsing popular programming languages by type. Each language includes a short history, fun facts, a Hello World snippet, and known easter eggs or cultural quirks.

Built with React, TypeScript, and Vite for easy deployment to Azure Static Web Apps free tier.

## Local Development

```powershell
npm install
npm run dev
```

## Production Build

```powershell
npm run build
```

The build output is written to `dist`.

## Azure Static Web Apps

Recommended build settings if Azure asks for them:

- App location: `/`
- API location: leave empty
- Output location: `dist`
- Build command: `npm run build`
