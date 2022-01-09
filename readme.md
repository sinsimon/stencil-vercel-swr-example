# Stencil SSR POC

Objectives:

- [x] Get a stencil app to work with SSR and a simple express server
- [] Pre-render components and avoid additional server requests during re-hydration on the client
- [] Configure for deployment to Vercel and enable headers for stale-while-revalidate

## Getting Started

Install:

```bash
npm start
```

To create the hydrate app, run:

```bash
npm run build
```

To run the server, run:

```
npm run serve
```

## Useful Links

- https://github.com/jagreehal/stencil-ssr-example
- https://vercel.com/docs/concepts/edge-network/caching#stale-while-revalidate
- https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter
- https://wp-kyoto.net/en/using-ionic-framework-into-next-js-application-without-using-ionic-react/
