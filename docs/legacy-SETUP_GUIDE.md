# Setup Guide - New Kinds of Minds

## 🎉 What's Been Built

Your neurodiversity map platform is now ready for setup! Here's what's complete:

✅ **GitHub Repository**: https://github.com/danrezi-gif/new-kinds-of-minds
✅ **Next.js Project**: TypeScript + Tailwind CSS + App Router
✅ **Interactive Map**: Leaflet with OpenStreetMap tiles
✅ **Category Filtering**: Sidebar with 8 project categories
✅ **Project Submission**: Full form with geocoding
✅ **Database Schema**: Supabase SQL ready to run
✅ **Responsive UI**: Mobile-friendly design

## 📋 Next Steps (30 minutes)

### Step 1: Create Supabase Project (10 min)

1. Go to https://supabase.com and sign up/login
2. Click **"New Project"**
3. Choose a name (e.g., "new-kinds-of-minds")
4. Set a database password (save it!)
5. Select a region close to you
6. Wait 2-3 minutes for project to provision

### Step 2: Set Up Database (5 min)

1. In Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Open `supabase-schema.sql` in your project folder
4. Copy ALL the SQL code and paste into the query editor
5. Click **"Run"** (bottom right)
6. Verify in **Table Editor** → should see `projects`, `categories`, `users` tables

### Step 3: Get API Keys (2 min)

1. In Supabase, go to **Settings** (gear icon) → **API**
2. Copy these values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public** key (long string under "Project API keys")

### Step 4: Configure Environment (3 min)

1. In your project folder, create `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
   ```

2. Save the file

### Step 5: Run Locally (5 min)

1. Open terminal in project folder
2. Run:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000
4. You should see the map with an empty sidebar (no projects yet)

### Step 6: Test Submission (5 min)

1. Click **"+ Submit a Project"**
2. Fill in the form:
   - Name: Test Project
   - Description: Testing the submission
   - Category: Support Groups
   - ND Focus: Autism (check at least one)
   - Location: Houston, Texas, USA
   - Click **"Find"** to geocode
   - Add optional email/website
3. Click **"Submit Project"**
4. You'll see success message

### Step 7: Approve Test Project (2 min)

1. In Supabase, go to **Table Editor** → **projects**
2. Find your test project
3. Click the row to edit
4. Change `status` from `pending` to `approved`
5. Save
6. Refresh your browser → marker should appear on map!

## 🚀 Deploy to Vercel (10 minutes)

### Option A: Via GitHub

1. Go to https://vercel.com
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository `new-kinds-of-minds`
4. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
5. Click **"Deploy"**
6. Wait 2-3 minutes
7. Your site is live! (e.g., `new-kinds-of-minds.vercel.app`)

### Option B: Via CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts and add environment variables when asked.

## 🎨 Customization Ideas

### Change Colors

Edit category colors in `supabase-schema.sql` before running, or update via Supabase Table Editor:
- `categories` table → `color` column
- Use hex codes (e.g., `#3B82F6` for blue)

### Add More Categories

In Supabase SQL Editor:
```sql
INSERT INTO categories (name, color, icon) VALUES
  ('Your Category', '#FF5733', 'icon-name');
```

### Modify ND Focus Options

Edit `ND_FOCUSES` array in `components/SubmitModal.tsx`

### Change Map Style

Replace TileLayer URL in `components/Map.tsx` with:
- CartoDB: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`
- Dark: `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png`

## 🛠️ Common Issues

### "Cannot connect to Supabase"
- Check `.env.local` has correct URL and key
- Restart dev server after adding env vars
- Ensure no trailing spaces in env values

### "Markers not showing"
- Check projects have `status: 'approved'` in database
- Verify `latitude` and `longitude` are valid numbers
- Check browser console for errors

### "Geocoding not working"
- Nominatim has rate limits (1 request/second)
- Try more specific addresses (include country)
- If persistent, consider Mapbox API (requires account)

### "Map not loading"
- Clear browser cache
- Check Leaflet CSS is imported in `Map.tsx`
- Verify dynamic import in `page.tsx`

## 📊 Monitoring

### Track Usage
- Supabase: **Settings** → **Database** → Usage metrics
- Vercel: **Analytics** → Visitor stats
- Free tiers:
  - Supabase: 500MB DB, 50K monthly active users
  - Vercel: 100GB bandwidth, 1M edge requests

### When to Upgrade
- **Supabase Pro ($25/mo)**: >50K users or >500MB data
- **Vercel Pro ($20/mo)**: >100GB bandwidth or custom domain needs

## 🎯 Next Development Phase

After everything works:

1. **Admin Dashboard** (Week 2-3)
   - Moderation interface
   - Bulk approve/reject
   - Analytics dashboard

2. **Search & Filters** (Week 4)
   - Text search
   - Radius search
   - Multiple category filter

3. **User Features** (Week 5-6)
   - Authentication
   - Save favorites
   - Claim projects

4. **Enhancements** (Week 7-10)
   - Project photos
   - Comments/reviews
   - Email notifications
   - Multi-language

## 📞 Support

If stuck:
1. Check README.md for detailed docs
2. Review Supabase logs: **Logs Explorer**
3. Check Vercel logs: **Deployments** → click deployment
4. Test API directly: https://REST-CLIENT-URL/rest/v1/projects

## 🎊 You're Ready!

Once setup is complete, you'll have:
- ✅ Live map at your Vercel URL
- ✅ Database with sample data
- ✅ Submission form working
- ✅ Moderation system active
- ✅ Production-ready platform

Share your map and start gathering submissions! 🌍
