# SVG Proxy

A serverless function that fetches an SVG from GitHub, modifies its background color, and serves it at a new URL. This project can be deployed to both Vercel and Netlify.

## What It Does

This proxy:

1. Fetches the SVG from `https://raw.githubusercontent.com/AbdulDevHub/AbdulDevHub/main/profile-3d-contrib/profile-night-green.svg`
2. Changes the background color from `#00000f` to `#0d1117` (GitHub's dark theme background)
3. Serves the modified SVG at a clean URL you can use in `<img>` tags

## Usage

### Vercel Deployment

```txt
https://your-project.vercel.app/profile.svg
```

### Netlify Deployment

```txt
https://your-project.netlify.app/profile.svg
```

Use in HTML:

```html
<img src="https://svg-proxy.vercel.app/profile.svg" alt="Profile">
```

Or in Markdown:

```markdown
![Profile](https://svg-proxy.netlify.app/profile.svg)
```

## Deployment

### Deploy to Vercel

1. Fork or clone this repository
2. Push to GitHub
3. Go to [vercel.com](https://vercel.com)
4. Click "Import Project" and select your repository
5. Deploy with default settings
6. Your SVG will be available at `https://your-project.vercel.app/profile.svg`

### Deploy to Netlify

1. Fork or clone this repository
2. Push to GitHub
3. Go to [netlify.com](https://netlify.com)
4. Click "Add new site" → "Import an existing project"
5. Connect your GitHub repository
6. Deploy with auto-detected settings
7. Your SVG will be available at `https://your-project.netlify.app/profile.svg`

## Project Structure

```bash
svg-proxy/
├── README.md
├── package.json
├── vercel.json          # Vercel configuration
├── netlify.toml         # Netlify configuration
├── api/                 # Vercel serverless functions
│   └── svg.js
└── netlify/             # Netlify serverless functions
    └── functions/
        └── svg.js
```

## How It Works

### Vercel (`api/svg.js`)

- Uses Vercel's serverless function format with `export default`
- Responds using `res.setHeader()` and `res.send()`
- Configured via `vercel.json` with rewrites

### Netlify (`netlify/functions/svg.js`)

- Uses Netlify's serverless function format with `exports.handler`
- Uses Node's built-in `https` module for compatibility
- Returns response object with `statusCode`, `headers`, and `body`
- Configured via `netlify.toml` with redirects

Both implementations:

- Fetch the original SVG from GitHub
- Use regex to find and replace the background color
- Cache the response for 1 hour to reduce API calls
- Serve the modified SVG with proper `Content-Type` headers

## Customization

To modify a different SVG or change different colors:

1. Update the source URL in both `api/svg.js` and `netlify/functions/svg.js`
2. Update the regex pattern to match your desired changes:

```javascript
svg = svg.replace(
  /(<rect[^>]*x="0"[^>]*y="0"[^>]*width="1280"[^>]*height="850"[^>]*fill=")#00000f(")/gi,
  '$1#0d1117$2'
);
```

## Caching

- **Vercel**: `s-maxage=3600, stale-while-revalidate` (1 hour cache, serves stale while revalidating)
- **Netlify**: `public, max-age=3600, s-maxage=3600` (1 hour cache)

To adjust cache duration, modify the `Cache-Control` header in the respective function files.

## License

MIT

## Why This Exists

GitHub's profile contribution SVGs have a dark background (`#00000f`) that doesn't quite match GitHub's actual dark theme background (`#0d1117`). This proxy fixes that cosmetic issue so the SVG blends seamlessly into GitHub profiles and README files.
