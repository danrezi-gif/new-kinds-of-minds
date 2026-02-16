# New Kinds of Minds

An interactive world map of neurodiversity projects and initiatives. Part of the [Entrementes](https://danielrezinovsky.com) initiative.

## Features

- 🗺️ Interactive global map with OpenStreetMap
- 📍 Color-coded project markers by category
- 🔍 Filter by category
- 📝 Community project submissions (moderation required)
- 🌍 Discover neurodiversity initiatives worldwide
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Map**: Leaflet, react-leaflet, leaflet.markercluster
- **Database**: Supabase (PostgreSQL + Auth + Row-Level Security)
- **Hosting**: Vercel (recommended)
- **Geocoding**: Nominatim (OpenStreetMap)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/danrezi-gif/new-kinds-of-minds.git
cd new-kinds-of-minds
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** in your Supabase dashboard
3. Copy the contents of `supabase-schema.sql` and run it
4. This will create:
   - `projects` table (neurodiversity projects)
   - `categories` table (project categories with default data)
   - `users` table (for admin moderation)
   - Row-Level Security policies
   - Default categories (Support Groups, Education, Employment, etc.)

### 4. Configure environment variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Get your Supabase credentials:
   - Go to **Settings** > **API** in your Supabase dashboard
   - Copy the **Project URL** and **anon/public key**

3. Update `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
new-kinds-of-minds/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with map
├── components/
│   ├── Map.tsx             # Leaflet map component
│   ├── Sidebar.tsx         # Category filter sidebar
│   └── SubmitModal.tsx     # Project submission form
├── lib/
│   └── supabase.ts         # Supabase client & types
└── supabase-schema.sql     # Database schema
```

## Usage

### Viewing Projects

- All approved projects appear on the map as colored markers
- Click markers to see project details (name, description, category, location, website, contact)
- Use the sidebar to filter by category
- Map auto-zooms to show all visible projects

### Submitting Projects

1. Click **"+ Submit a Project"** in the sidebar
2. Fill in required fields:
   - Project name
   - Description
   - Category
   - Neurodiversity focus (select all that apply)
   - Location (city, country)
   - Click **"Find"** to geocode the location
3. Optional: Add contact email and website
4. Submit for moderation

All submissions start with `status: 'pending'` and require admin approval.

### Moderation (Admin Only)

To moderate submissions:

1. Add your email to the `users` table with `role: 'admin'` in Supabase
2. Update project `status` to `'approved'` or `'rejected'` via Supabase dashboard
3. Approved projects appear immediately on the map

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel, go to **Settings** > **Domains**
2. Add your domain (e.g., `newkindsofminds.com`)
3. Update DNS records as instructed

## Costs

- **MVP**: ~$2/month (domain only)
  - Supabase: Free (500MB DB, 50K MAU)
  - Vercel: Free (Hobby plan)
  - Nominatim: Free (geocoding)

- **Growth**: ~$67/month (1000+ users)
  - Domain: $11/year
  - Supabase Pro: $25/month
  - Vercel Pro: $20/month
  - Mapbox: $0-5/month (optional, for better geocoding)

## Roadmap

- [ ] Admin dashboard for moderation
- [ ] User authentication (save favorites, claim projects)
- [ ] Advanced search (by neurodiversity type, location radius)
- [ ] Project images/photos
- [ ] Events calendar integration
- [ ] Multi-language support
- [ ] Mobile app (React Native)

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Contact

Part of the **Entrementes** initiative by Daniel Rezinovsky
- Website: [danielrezinovsky.com](https://danielrezinovsky.com)
- GitHub: [@danrezi-gif](https://github.com/danrezi-gif)

## Acknowledgments

- Inspired by [PsychoactiveMap.com](https://psychoactivemap.com)
- Built with [Next.js](https://nextjs.org), [Supabase](https://supabase.com), and [Leaflet](https://leafletjs.com)
- Neurodiversity focus options based on research and community input
