# Deploy Backend to Railway

## Quick Deploy Steps:

1. **Go to Railway**: https://railway.app/
2. **Sign up** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select**: `vishwakarmakashyap/v-Infotech-website`
5. **Root Directory**: `/backend`
6. **Add Environment Variables**:
   - `GMAIL_APP_PASSWORD` = `voki fxmx zdxn vrzo`
7. **Deploy**

## Your API will be available at:
`https://v-infotec-backend.up.railway.app/contact`

## Alternative: Render.com
1. Go to https://render.com/
2. Connect GitHub repo
3. Select backend folder
4. Add environment variables
5. Deploy

## Alternative: Vercel
```bash
cd backend
npm install -g vercel
vercel --prod
```

## Test API:
- Health check: `https://your-api-url/health`
- Contact endpoint: `POST https://your-api-url/contact`