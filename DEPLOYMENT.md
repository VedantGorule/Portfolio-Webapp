# Deployment Guide - Portfolio Webapp

## ✅ What's Fixed

Your code has been updated and pushed to GitHub with the following fixes:
- ✅ Fixed Windows/Linux compatibility for npm scripts
- ✅ Server configuration optimized for Railway
- ✅ Production build tested locally and working
- ✅ All changes committed and pushed to GitHub

## 🚀 Railway Deployment Steps

### Step 1: Go to Railway
1. Open https://railway.app
2. Sign in with GitHub

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose **"Portfolio-Webapp"** repository
4. Click **"Deploy"**

### Step 3: Railway will auto-detect:
- Node.js project ✅
- Build command: `npm run build` ✅
- Start command: `npm start` ✅

### Step 4: Add PostgreSQL Database
1. Click **"Add"** in Railway dashboard
2. Select **"Database"** → **"PostgreSQL"**
3. Wait 2-3 minutes for provisioning

### Step 5: Environment Variables
Railway auto-generates `DATABASE_URL` when you add PostgreSQL.

Optional: Add these in Railway **Variables** tab:
- `NODE_ENV`: `production` (auto-set by npm)
- `PORT`: `3000` (Railway manages this)

### Step 6: Wait for Deployment
- Watch the **"Logs"** tab
- Look for: `serving on port 3000`
- Green checkmark means SUCCESS ✅

### Step 7: Access Your App
Your URL will be:
```
https://portfolio-webapp-production.up.railway.app
```

## 🔄 Auto-Redeploy from GitHub

Push changes and Railway automatically redeploys:
```powershell
git add .
git commit -m "Your changes"
git push origin main
```

## 📝 Local Development

### Run Development Server:
```powershell
$env:DATABASE_URL='postgresql://user:password@localhost:5432/portfolio'
npm run dev
```

### Run Production Build:
```powershell
npm run build
$env:DATABASE_URL='postgresql://...'
npm start
```

## ✅ Testing Checklist

Once deployed to Railway:
- [ ] App loads at Railway URL
- [ ] Frontend is visible
- [ ] Navigation works
- [ ] Check Railway logs for errors

## 🐛 Troubleshooting

### Build fails on Railway?
- Check **Deployments** → **View Logs**
- Look for error messages

### App crashes?
- Verify `DATABASE_URL` is set in Railway
- Check that PostgreSQL database was added

### Port issues?
- Railway auto-assigns the `PORT` environment variable
- Our app correctly uses: `process.env.PORT || 5000`

## 📞 Support

If you encounter issues:
1. Check Railway deployment logs
2. Verify DATABASE_URL is set
3. Ensure PostgreSQL is added as a service

---

**Status:** ✅ Ready to deploy to Railway!
