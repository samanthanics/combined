# Combined Group - Organizational Communication Website

Company website for our Organizational Communication subject at the University of Makati (Section II-ACSAD).

## Pages
| File | Page |
|---|---|
| `index.html` | Home (navigation links and company video) |
| `organizational-chart.html` | Organizational Chart |
| `organizational-theory.html` | Organizational Theory (Weber's Bureaucratic Theory) |
| `members-reflection.html` | Members' Reflection |
| `company-details.html` | Company Details |
| `about-contact.html` | About Us / Contact Information |

## Folder structure
```
index.html (and the other 5 pages)
css/style.css      design of all pages
js/script.js       shared code and the CONFIG block (names, photos, video)
assets/logo.svg    logo used as the browser tab icon (assets/favicon.png is the fallback)
assets/images/     put member photos, the UMak logo, and Weber's portrait here
assets/video/      put the company video here (1 to 3 minutes)
```

## How to add your photos and video
Open `js/script.js` and edit the `CONFIG` block at the top:
- `umakLogo` is already set to `assets/images/umak-logo.png`
- `theoristPhoto: "assets/images/max-weber.jpg"`
- `videoSrc: "assets/video/company-video.mp4"`
- For each member, set `photo: "assets/images/<file>.jpg"`

## Publish on GitHub Pages
1. Create a new repository on GitHub and upload all files and folders in this project.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then save.
4. After a minute, your site is live at `https://<your-username>.github.io/<repository-name>/`.

Note: GitHub limits normal uploads to 25 MB per file in the browser. If your video is larger, compress it first.

Contact details in the website: University of Makati, J.P. Rizal Extension, West Rembo, Makati City. The phone number and email are sample details for a school project.
