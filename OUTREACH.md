# Neurodiversity Project Outreach Campaign

**Status:** Ready for deployment after site testing completion  
**Target:** 20-30 initial organizations  
**Goal:** Populate database with established neurodiversity projects

---

## Email Template

### Subject Line Options
- "Feature your project on New Kinds of Minds - ND Project Directory"
- "Free listing for [Organization Name] on neurodiversity map hub"
- "Connecting the global neurodiversity community"

### Email Body

```
Hi [Contact Name / Team],

I'm reaching out from New Kinds of Minds, a new open-access platform that maps neurodiversity projects, initiatives, and organizations worldwide.

We discovered [Organization/Project Name] and were impressed by your work in [specific focus area - education/support/advocacy/etc.]. We'd love to feature your project on our interactive map to help people in the neurodivergent community discover your resources.

**About New Kinds of Minds:**
- Interactive global map of ND projects
- Free listing for all organizations
- Filtered by category (Support Groups, Education, Employment, Healthcare, Arts, Research, Advocacy, Social)
- Tagged by neurodiversity focus (Autism, ADHD, Dyslexia, etc.)

**What we need from you:**
- Project name & description (2-3 sentences)
- Location (city/region)
- Category that best fits your work
- Contact email (optional but recommended)
- Website URL
- Primary ND focus areas

You can submit directly at: [YOUR VERCEL URL]/
Or reply to this email and I'll add it for you.

This is a community-driven project inspired by platforms like PsychedelicAlpha's clinical trial tracker - bringing visibility to the incredible work happening in neurodiversity spaces globally.

Would you be interested in being listed?

Best regards,
[Your Name]
New Kinds of Minds
[Your Email]
[Site URL]
```

---

## Contact List

### Instructions
Add contacts from your initial research below. Format:
```
**Organization Name**
- Category: [Support Groups/Education/Employment/Healthcare/Arts/Research/Advocacy/Social]
- Website: [URL]
- Contact: [email or contact form URL]
- Location: [City, Country]
- ND Focus: [Autism/ADHD/Dyslexia/etc.]
- Notes: [Any relevant info]
```

### Example Entries

**The Autistic Self Advocacy Network (ASAN)**
- Category: Advocacy
- Website: https://autisticadvocacy.org
- Contact: info@autisticadvocacy.org
- Location: Washington, D.C., USA
- ND Focus: Autism
- Notes: Leading autism rights organization, "Nothing About Us Without Us"

**ADHD Foundation**
- Category: Support Groups / Education
- Website: https://adhdfoundation.org.uk
- Contact: info@adhdfoundation.org.uk
- Location: Liverpool, UK
- ND Focus: ADHD
- Notes: UK's leading ADHD charity

**Dyslexia International**
- Category: Education / Advocacy
- Website: https://www.dyslexia-international.org
- Contact: contact form on website
- Location: Brussels, Belgium (International)
- ND Focus: Dyslexia
- Notes: UNESCO partner organization

---

### Your Research Contacts
**ADD YOUR CONTACTS BELOW** (from initial project research)

<!-- Template for each entry:
**[Organization Name]**
- Category: 
- Website: 
- Contact: 
- Location: 
- ND Focus: 
- Notes: 

-->

---

## Gmail Automation Prompt

### For AI Assistant / Automation Tool

```
TASK: Send outreach emails to neurodiversity organizations

PREREQUISITES:
1. Open Gmail in default browser
2. Ensure signed in to correct account
3. Have OUTREACH.md file accessible

INSTRUCTIONS:
1. For each contact in the "Contact List" section:
   - Create new email draft
   - Subject: Use template from "Subject Line Options" 
   - Body: Use "Email Body" template, personalize:
     * Replace [Contact Name / Team] with org name
     * Replace [Organization/Project Name] with actual name
     * Replace [specific focus area] with their category
     * Replace [YOUR VERCEL URL] with actual site URL
     * Sign with my name and email
   
2. DO NOT auto-send - create drafts for review
3. Create checklist of sent/pending contacts
4. Mark organizations by response status

PERSONALIZATION REQUIRED FOR EACH EMAIL:
- Organization name (3 places)
- Specific work they do (mention real project/initiative)
- Contact name if available (use "team" if not)

OUTPUT:
- Gmail drafts folder with all emails ready
- Tracking spreadsheet: Organization | Email | Sent Date | Response | Status
```

---

## PowerShell Automation Script

**Run this after populating contact list above:**

```powershell
# Open Gmail compose in default browser
Start-Process "https://mail.google.com/mail/?view=cm&fs=1"

# Optional: Open this file in VS Code for reference
code "C:\Users\danre\OneDrive\Desktop\AI\new-kinds-of-minds\OUTREACH.md"
```

---

## Manual Process (If Not Automating)

1. **Test Phase** (Before mass outreach)
   - Send 3-5 test emails to organizations you know
   - Wait for responses
   - Refine template based on feedback

2. **Batch Sending**
   - Send 5-10 per day maximum (avoid spam flags)
   - Personalize each one thoroughly
   - Track responses in spreadsheet

3. **Response Handling**
   - Positive response: Add project immediately
   - Questions: Provide site tour/screenshots
   - No response: Follow up after 2 weeks

4. **Follow-Up Template** (if no response after 2 weeks)
   ```
   Hi [Name],
   
   Following up on my email about featuring [Organization Name] on New Kinds of Minds. 
   
   We've now launched with [X] projects across [Y] countries. Here's what it looks like: [screenshot]
   
   Would you still be interested in a free listing?
   
   No pressure if not - just wanted to check in!
   
   Best,
   [Your Name]
   ```

---

## Response Tracking Template

| Organization | Category | Contact | Email Sent | Response Date | Status | Notes |
|--------------|----------|---------|------------|---------------|--------|-------|
| Example Org | Education | info@example.org | 2026-02-20 | 2026-02-22 | ✅ Added | Enthusiastic response |
| | | | | | | |

**Status Key:**
- ✅ Added - Project listed on site
- 📧 Pending - Email sent, awaiting response
- 🔄 Follow-up - Need to send reminder
- ❌ Declined - Not interested
- 📝 In Progress - Gathering info from them

---

## Legal / Ethical Checklist

Before sending:
- [ ] Site is fully functional and tested
- [ ] Privacy policy is in place (if collecting emails)
- [ ] We can moderate submissions (admin access works)
- [ ] Email template is professional and clear
- [ ] Opt-out option is available (reply to decline)
- [ ] We're not scraping their data - asking permission
- [ ] Contact info will only be used for this outreach
- [ ] Organizations can request removal anytime

---

## Success Metrics

**Phase 1 Goals:**
- 10 organizations listed (beyond test entry)
- Response rate > 30%
- Zero spam complaints
- At least 3 different categories represented
- 3+ countries represented

**Phase 2 Goals:**
- 50+ projects on map
- Organic submissions starting (people finding the site)
- Social media mentions from listed organizations
- First community feedback/feature requests

---

## Next Steps After Outreach

1. **Once 10+ projects are listed:**
   - Share on neurodiversity subreddits (r/neurodiversity, r/autism, r/ADHD)
   - Post in relevant Discord/Slack communities
   - Ask listed organizations to share

2. **Prepare for organic growth:**
   - Set up notification system for new submissions
   - Create admin dashboard for easier moderation
   - Add project verification badges

3. **Build credibility:**
   - Document your methodology
   - Show project growth metrics publicly
   - Engage with community feedback

---

## Contact Research Sources

**Where to find neurodiversity organizations:**
- Autism Alliance (https://www.autism-alliance.org.uk/directory)
- Global Autism Project directory
- ADHD Awareness Month participant lists
- Neurodiversity Foundation networks
- University neurodiversity programs
- LinkedIn groups and professional networks
- Twitter/X hashtags: #ActuallyAutistic #ADHD #Neurodiversity
- Previous research [ADD YOUR SOURCES]

---

**Document Status:** Draft - ready for contact list population  
**Last Updated:** February 15, 2026  
**Deploy After:** Site testing complete + admin access confirmed
