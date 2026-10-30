# Directorate of Economics & Statistics (DES) Chhattisgarh
## Rajyotsav 2026 Interactive Digital Games & Citizen Kiosk Hub

An interactive, bilingual (Hindi & English) digital arcade and citizen engagement platform created for the **Directorate of Economics & Statistics (DES), Government of Chhattisgarh** for the **Chhattisgarh Rajyotsav 2026 Pavilion** and public kiosks.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Vanilla_CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 🎮 Included Modules & Games

### 1. 💡 GDP & Economy Overview (`index.html`, `rajyotsav_arcade.html`)
- **Real vs Nominal GSDP**: Highlights Chhattisgarh's GSDP scorecard based on the *CG Economic Survey 2025–26* (₹3.58 Lakh Cr Real / ₹6.31 Lakh Cr Nominal).
- **Sector Sorting Arcade Game**: Interactive Drag-and-Tap categorization game testing players on **Primary (कृषि व खनन)**, **Secondary (उद्योग व निर्माण)**, and **Tertiary (सेवाएं)** sectors.
- **Sector Growth Metrics**: Displays official state growth trends (Services: 7.82%, Industry: 6.78%, Agriculture: 4.88%).

### 2. 🎡 Spin The Wheel / Aankda Chakra (`spin_wheel.html`)
- **10 Core Economic & Social Indicators**: GSDP, Per Capita Income, Forest Cover (44.21%), Tribal Population (30.62%), Clean Energy, Sex Ratio, Mineral Wealth, Paddy Production, Literacy, and Industrial Power.
- **State NITI Aayog Integration**: Highlighting *Viksit Chhattisgarh @ 2047* blueprint goals.
- **Interactive Quiz Engine**: Dynamic scoring with timer, sound effects, bilingual questions, and celebratory fireworks.

### 3. 📋 Vital Data Awareness Cycle (`vital_data_cycle.html`)
- **Civil Registration System (CRS)**: Educates citizens on birth and death registrations under the *Registration of Births and Deaths Act*.
- **The 21-Day Golden Period**: Emphasizes free, hassle-free registration within 21 days at local Gram Panchayats / Urban Local Bodies.
- **Delayed Registration Tiers**: Clear guidance on reporting between 22–30 days (late fee), 31–365 days (SDO/Tehsildar permission), and after 1 year (Executive Magistrate order).

### 4. 🌸 Citizen Schemes Priority Planner (`priority_builder.html`)
- **Sewa Setu Integration ([sewasetu.cgstate.gov.in](https://sewasetu.cgstate.gov.in/home?lang=hi))**: Built around Chhattisgarh’s single-window citizen welfare portal.
- **Flagship Citizen-Centric Schemes**:
  - 🌸 **महतारी वंदन योजना (Mahtari Vandan Yojana)** – ₹1,000/mo (₹12,000/yr) women's DBT.
  - 🌾 **कृषक उन्नति योजना (Krishak Unnati Yojana)** – ₹3,100/Qtl paddy procurement support (21 Qtl/acre).
  - 🏥 **आयुष्मान भारत व स्वास्थ्य सुरक्षा (Ayushman Arogya)** – Up to ₹5 Lakh cashless treatment cover per family.
  - 🏠 **प्रधानमंत्री आवास योजना (PM Awas Yojana)** – Pucca concrete permanent homes.
  - 👵 **सामाजिक सुरक्षा पेंशन (Social Security Pension)** – Monthly DBT for seniors, widows & Divyangjan.
  - 🎓 **स्वामी आत्मानंद शिक्षा व छात्रवृत्ति (Atmanand Education)** – Smart schooling & youth merit scholarships.
  - 📜 **सेवा सेतु ई-प्रमाण पत्र (Sewa Setu Digital e-Certificates)** – Fast digital delivery of Domicile, Caste & Income certificates.
  - ✏️ **नागरिक सुझाव (Suggest Custom Scheme)** – Custom citizen write-in priority.
- **Certified Blueprint Generation**: Renders a custom 1280×720 visual blueprint image overlaying chosen schemes on the scenic Chhattisgarh landscape with an instant download button.

---

## 📁 Repository Directory Structure

```text
Descg_games/
├── index.html                 # Main central games hub & navigation portal
├── rajyotsav_arcade.html      # Pavilion full-screen arcade presentation screen
├── priority_builder.html      # Citizen Schemes Priority Planner (Sewa Setu)
├── spin_wheel.html            # Spin The Wheel (Aankda Chakra & Indicator Quiz)
├── vital_data_cycle.html      # Birth & Death Registration 21-Day Awareness Cycle
├── human_bar_chart.html       # Sectoral interactive comparison chart
│
├── assets/
│   └── images/
│       └── cg_dream_village_base.jpg  # High-resolution landscape for blueprints
│
├── css/
│   └── style.css              # Unified arcade design system & theme variables
│
├── js/
│   ├── app.js                 # Central hub logic & screen management
│   ├── arcade.js              # Sector sorting game & interactive logic
│   ├── data.js                # Official statistics & full EN/HI bilingual dictionary
│   └── sound.js               # Web Audio API sound synthesizer (no external audio files needed)
│
├── docs/
│   └── Vital Data Awareness Cycle.pdf  # Reference CRS regulatory guidelines
│
├── vercel.json                # Vercel deployment configuration
├── package.json               # Project manifest & local dev server scripts
├── .gitignore                 # Standard repository ignores
└── README.md                  # Project documentation & deployment guide
```

---

## 🚀 Key Technical Highlights

- **Pure Web Standards**: Built entirely with Vanilla HTML5, CSS3, and modern JavaScript (ES6+). Zero heavy frameworks or runtime build steps required.
- **Offline / Kiosk Capable**: Zero external CDN dependencies for core game loops.
- **Zero External Audio Assets**: All audio effects (clicks, correct pops, celebratory fanfares) are synthesized live using the browser's native **Web Audio API**.
- **Canvas Image Synthesis**: Generates official `.jpg` blueprints in-browser on an HTML5 canvas without backend image processing.
- **Kiosk Protection**: Right-click context menus disabled, touch-first responsive controls, and automatic 45-second inactivity reset for public kiosks.
- **Bilingual By Design**: Instant one-tap toggle between **हिंदी (Hindi)** and **English** across all modules.
- **Light & Dark Themes**: High-contrast, accessibility-compliant themes with persistent `localStorage` memory.

---

## 💻 Local Development

You can run the project locally using any static web server:

```bash
# 1. Clone the repository
git clone https://github.com/dhwanikejriwal/Descg_games.git
cd Descg_games

# 2. Run with Node's npx http-server
npx http-server . -p 8080 -c-1

# 3. Open in your browser:
# http://localhost:8080/index.html
```

Alternatively, use Python:
```bash
python -m http.server 8080
```

---

## 🌐 Guide: Deploying to Vercel

Deploying this project to [Vercel](https://vercel.com/) takes less than 2 minutes.

### Method A: Deploy via GitHub (Recommended)

1. **Sign In to Vercel**:
   Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.

2. **Import Repository**:
   - In the Vercel Dashboard, click **"Add New..."** → **"Project"**.
   - Under **"Import Git Repository"**, select `dhwanikejriwal/Descg_games`.

3. **Configure Project**:
   - **Framework Preset**: Select **"Other"** (or leave as Default).
   - **Root Directory**: `./` (Default).
   - **Build and Output Settings**: Leave empty / defaults (this is a static site).

4. **Deploy**:
   - Click **"Deploy"**.
   - Within 15 seconds, Vercel will build and publish your project with an active HTTPS domain (e.g. `https://descg-games.vercel.app`).

5. **Automatic Updates**:
   - Any future `git push` to your `main` branch will automatically trigger a new deployment on Vercel.

---

### Method B: Deploy using Vercel CLI

If you prefer deploying directly from your terminal:

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from the project root:
   ```bash
   vercel
   ```
   - Follow the prompts (accept defaults).

4. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## 🏛️ Acknowledgments & Official Data Sources

- **Directorate of Economics & Statistics (DES), Nava Raipur, Chhattisgarh**
- **Chhattisgarh Economic Survey (2025–26)**
- **Sewa Setu Citizen Services Portal**: [https://sewasetu.cgstate.gov.in](https://sewasetu.cgstate.gov.in) (Toll-Free: 1076)
- **Civil Registration System (CRS)**: Directorate of Economics & Statistics / Office of the Chief Registrar of Births and Deaths, Chhattisgarh
- **State NITI Aayog Chhattisgarh**: *Viksit Chhattisgarh @ 2047 Blueprint*
