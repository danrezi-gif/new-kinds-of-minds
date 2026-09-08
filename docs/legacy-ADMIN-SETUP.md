# Admin Dashboard Setup

## Admin Page Created! 

Access it at: **`https://your-vercel-url/admin`**

## Features
- ✅ Password-protected admin access
- ✅ View pending submissions
- ✅ Approve/reject projects with one click
- ✅ Delete approved projects
- ✅ See submission details (contact, website, ND focus)

## Setup Instructions

### 1. Add Admin Password to Vercel

1. Go to your **Vercel Dashboard**
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name:** `NEXT_PUBLIC_ADMIN_PASSWORD`
   - **Value:** Choose a secure password (e.g., generate random 20+ character string)
   - **Environment:** Production, Preview, Development (select all)
5. Click **Save**

### 2. Redeploy (if needed)

The next git push will automatically use the new env var. Or trigger a manual redeploy in Vercel.

### 3. Test the Admin Dashboard

1. Visit `https://your-vercel-url/admin`
2. Enter your password
3. You'll see:
   - **Pending Submissions** - Projects waiting for approval
   - **Approved Projects** - Live projects with delete option

## Usage

### Approve a Project
1. Review the pending submission
2. Click **Approve** → Project immediately appears on the map

### Reject a Project
1. Click **Reject** → Project hidden (status = rejected)
2. Rejected projects won't show up but remain in database

### Delete a Project  
1. In the Approved section, click **Delete**
2. Confirm → Project permanently removed from database

## Security Note

This uses a simple password. For production with multiple admins, consider:
- Email-based authentication (Supabase Auth)
- Role-based access (check users table)
- Session management with cookies

For now, this password approach is fine for solo admin use.

## Recommended Password

Generate a strong password:
```powershell
# PowerShell - Generate 24 character random password
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 24 | %{[char]$_})
```

Or use a password manager to generate one.

## Next Steps

After setting up:
1. Test submitting a project from the main site
2. Go to /admin and approve it
3. Verify it appears on the map
4. Ready for outreach! 🚀
