# Mira Academy Deployment Guide

## Deployment to Cloudflare Pages

### Current Temporary Solution

We are currently using a temporary landing page for deployment to Cloudflare Pages while we address Next.js static export issues with dynamic routes.

1. The current build process:
   - Creates a temporary landing page in the `out` directory
   - Does not use the full Next.js application yet
   - Provides a simple contact form for visitors

2. Build the project:
   ```
   npm run build
   ```

3. This generates a static site in the `out` directory with:
   - An index.html file with inline styling
   - Basic CSS in the static directory

4. When deploying to Cloudflare Pages:
   - Set the build command to: `npm run build`
   - Set the build output directory to: `out`
   - Set the Node.js version to: `18` or higher

## Next Steps for Full App Deployment

To deploy the full Next.js application with all routes, we need to:

1. Add `generateStaticParams()` functions to all dynamic route pages:
   - `/programs/[id]`
   - `/events/[id]`
   - And any other dynamic routes

2. Each `generateStaticParams()` function should return an array of objects with the parameter value, for example:
   ```typescript
   export async function generateStaticParams() {
     return [
       { id: '1' },
       { id: '2' },
       { id: '3' }
     ];
   }
   ```

3. Once all dynamic routes are properly configured, update the `next.config.mjs` file to remove conditional output and use:
   ```js
   output: 'export'
   ```

4. Then update the build script in `package.json` to use the standard Next.js build:
   ```json
   "build": "next build"
   ```

## Troubleshooting

If deployment fails:
1. Check the build logs in Cloudflare Pages dashboard
2. Verify that the `out` directory is being generated properly
3. Make sure the `cloudflare.toml` file is correctly configured
4. If there are issues with dynamic routes, check each page for proper `generateStaticParams()` implementation 