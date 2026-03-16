# Deploy your portfolio so anyone can view it

Follow **one** of these options. Both are free.

---

## Option 1: Deploy with Vercel (recommended, ~2 minutes)

1. **Push your project to GitHub** (if not already):
   - Create a new repo at https://github.com/new (e.g. name: `portfolio`)
   - In your Portfolio folder, run in terminal:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

2. **Deploy on Vercel**:
   - Go to **https://vercel.com** and sign in with **GitHub**.
   - Click **Add New…** → **Project**.
   - Select your **portfolio** repository.
   - Click **Deploy** (no need to change settings).
   - Wait ~1 minute. You’ll get a link like:  
     **https://portfolio-xxxx.vercel.app**

3. **Share your profile**: Send that link to anyone; they can open your portfolio in the browser.

---

## Option 2: Deploy with Netlify

1. **Push your project to GitHub** (same as step 1 above).

2. **Deploy on Netlify**:
   - Go to **https://app.netlify.com** and sign in with **GitHub**.
   - Click **Add new site** → **Import an existing project**.
   - Choose **GitHub** and select your **portfolio** repo.
   - Build settings (usually auto-filled):
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click **Deploy site**.

3. You’ll get a link like: **https://something.netlify.app** — that’s your profile link.

---

## After deployment

- Your portfolio will be **public**: anyone with the link can view it.
- If you change code and push to GitHub, Vercel/Netlify will **auto-deploy** the new version.
- You can add a custom domain later in the hosting site’s dashboard (e.g. anandkumar.dev).

If you tell me which option you use (Vercel or Netlify) and your GitHub username, I can give you the exact link pattern for your profile.
