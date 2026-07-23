# GeoCatalog — GIS & Geospatial Research Services

Static one-page site for GeoCatalog, a GIS/geospatial research consultancy led by Nitesh Kumar Mourya.

## Structure

```
geocatalog/
├── index.html              # Main page (all sections: hero, about, services, pricing, expertise, clients, publications, tools, contact)
├── css/styles.css           # All site styles (extracted from inline <style>)
├── js/script.js             # Mobile menu + scroll-reveal behaviour
├── assets/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   └── site.webmanifest
├── robots.txt
└── sitemap.xml
```

## Before you publish — checklist

1. **Domain/URL**: All canonical/OG/sitemap/robots URLs assume
   `https://nikmourya.github.io/geocatalog/`. If you host this at a
   different repo name or a custom domain, find-and-replace that URL
   across `index.html`, `robots.txt`, and `sitemap.xml`.
2. **Google Search Console verification**: add your own verification
   file (e.g. `google<code>.html`) or meta tag to `index.html` — the
   code is unique to your Search Console property, so it can't be
   generated for you.
3. **Social profile links**: LinkedIn, ResearchGate, and Google
   Scholar links in the Contact section are still placeholder `#`
   links — add your profile URLs.
4. **Contact form**: currently submits via `mailto:` (opens the
   user's email client). For a proper inbox-delivered form on GitHub
   Pages, swap in a form backend such as Formspree or Web3Forms.
5. **Pricing/expertise sections**: double check the pricing tiers and
   numbers in `index.html` match what you want published publicly.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```
