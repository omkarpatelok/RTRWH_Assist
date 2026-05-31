# 💧 Jal-Sankalp (Rooftop Rainwater Harvesting Potential Calculator)

[![Smart India Hackathon 2025](https://img.shields.io/badge/Smart%20India%20Hackathon-2025-blue.svg)](https://www.sih.gov.in/)
[![Platform: Web](https://img.shields.io/badge/Platform-Web-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)]()

**Jal-Sankalp** is an interactive, bilingual web application developed as a solution for the **Smart India Hackathon 2025**. It helps households, builders, and administrators compute Rooftop Rainwater Harvesting (RTRWH) potential, determine feasibility, estimate optimal storage capacities, and calculate financial savings based on localized rainfall, groundwater, and rooftop configurations.

---

## 🌟 Key Features

- **🌐 Bilingual Support:** Toggle seamlessly between English and Hindi (`translations.js` & `additional_translations.js`).
- **📍 Location Matching (3 Methods):**
  - **State & District Selector:** Pre-populated lists of major Indian states and districts.
  - **Pincode Lookup:** Directly input a 6-digit Indian pincode to pull rainfall and groundwater data.
  - **GPS Geolocation:** Uses browser geolocation to locate the user and auto-match the nearest weather station.
- **🗺️ Interactive Roof Area Calculator:**
  - **Manual Entry:** Calculate roof dimensions (Length × Width).
  - **Direct Total Area:** Enter area directly in square meters.
  - **Google Maps Integration:** Draw boundaries directly on satellite/hybrid imagery using Google Maps Drawing tools to compute real-time roof surface area.
- **📊 Comprehensive Rainfall & Groundwater Database:** Integrates historical meteorological records of annual and monsoon rainfall, alongside state-wise groundwater table depths.
- **📈 Advanced Financial & Feasibility Scoring:**
  - Standard feasibility score out of 100 based on water scarcity, roof size, water bills, and groundwater depths.
  - Recommends setup details (e.g., *Recharge Pit System*, *Storage Tank System*, etc.).
  - Calculates installation cost, monthly/annual financial savings, and payback period.
- **📥 Downloadable Assessment Report:** Generates and downloads a detailed `.txt` text report for offline reference.

---

## 📂 Project Structure

```text
├── index.html                  # Main UI Layout and Step Card Structure
├── style.css                   # Custom responsive styling and animations
├── script.js                  # Core Application logic, Google Maps, and calculations
├── translations.js             # Basic translations for English & Hindi
├── additional_translations.js  # Extended multilingual strings
├── config.example.js           # API Key Configuration template
├── config.js                   # Local configuration containing API key (Git-ignored)
├── bg.jpg                      # Parallax background image (Landing Screen)
├── bg1.jpg                     # Application container background
└── .gitignore                  # Standard git-ignore rules for config/system files
```

---

## 🚀 Setup & Installation

### Prerequisite
A **Google Maps API Key** is required for satellite drawing tools. 
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the **Maps JavaScript API** and **Drawing Library**.
3. Create an API Key and restrict it to your deployment domains.

### Local Run Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/rtrwh-assist.git
   cd rtrwh-assist
   ```
2. **Setup the Configuration File:**
   Copy `config.example.js` to a new file named `config.js`:
   ```bash
   cp config.example.js config.js
   ```
   Open `config.js` in a text editor and paste your API key:
   ```javascript
   const CONFIG = {
       GOOGLE_MAPS_API_KEY: "YOUR_GOOGLE_MAPS_API_KEY_HERE"
   };
   ```
3. **Open the App:**
   - You can open the `index.html` file directly in any modern browser.
   - For a cleaner setup (especially to test GPS geolocation, which requires HTTPS/localhost), run a local server:
     ```bash
     # Using Python
     python3 -m http.server 8000
     
     # Or using Node/npm (if installed)
     npx serve
     ```
     Navigate to `http://localhost:8000` or `http://localhost:3000`.

---

## 📐 How it Works (Calculation Methodology)

### 1. Rainwater Harvesting Potential Formula
$$V = A \times P \times \eta$$

Where:
* **$V$**: Annual Harvest Potential (Liters)
* **$A$**: Rooftop Area ($\text{m}^2$)
* **$P$**: Average Annual Rainfall ($\text{mm}$)
* **$\eta$**: Runoff Coefficient (Collection Efficiency) based on roof texture:
  - **Concrete:** $95\%$ ($\eta = 0.95$)
  - **Metal Sheet:** $90\%$ ($\eta = 0.90$)
  - **Clay Tiles:** $85\%$ ($\eta = 0.85$)
  - **Ceramic Tiles:** $80\%$ ($\eta = 0.80$)

### 2. Recommended Structure & Cost Estimation
Based on computed annual potential and roof size:
* **Recharge Pit System** ($< 10,000\text{L}$ / Roof Area $< 50\text{m}^2$):
  - Capacity: Max of $2,000\text{L}$ or $20\%$ of annual harvest + recharge pit.
  - Setup Cost: $\text{Area} \times ₹300$ (Min: $₹25,000$).
* **Storage Tank System** ($10,000\text{L} - 30,000\text{L}$):
  - Capacity: Max of $5,000\text{L}$ or $25\%$ of annual harvest + first flush diverter.
  - Setup Cost: $\text{Area} \times ₹450$ (Min: $₹50,000$).
* **Dual Purpose System** ($30,000\text{L} - 60,000\text{L}$):
  - Capacity: Max of $8,000\text{L}$ or $30\%$ of annual harvest + storage tank + recharge pit.
  - Setup Cost: $\text{Area} \times ₹600$ (Min: $₹80,000$).
* **Large Scale Combined System** ($> 60,000\text{L}$):
  - Capacity: Max of $15,000\text{L}$ or $35\%$ of annual harvest + multi-tank system + recharge pit.
  - Setup Cost: $\text{Area} \times ₹800$ (Min: $₹1,200,000$).

### 3. Feasibility Index Score (Max 100 pts)
The app weighs parameters to determine the overall score:
1. **Rainfall:** Up to 40 points ($>1500\text{mm} = 40\text{pts}$, $>1000\text{mm} = 30\text{pts}$, $>600\text{mm} = 20\text{pts}$, else $10\text{pts}$).
2. **Rooftop Area:** Up to 30 points ($>200\text{m}^2 = 30\text{pts}$, $>100\text{m}^2 = 20\text{pts}$, $>50\text{m}^2 = 15\text{pts}$, else $10\text{pts}$).
3. **Current Cost of Water (Monthly Bill):** Up to 20 points ($>₹2000 = 20\text{pts}$, $>₹1000 = 15\text{pts}$, else $10\text{pts}$).
4. **Groundwater Level Depth:** Up to 10 points ($>30\text{m} = 10\text{pts}$, $>15\text{m} = 8\text{pts}$, else $5\text{pts}$).

---

## 🌐 Deployment to GitHub Pages

Since Jal-Sankalp is built with clean static frontend assets, it can be deployed on **GitHub Pages** for free in a few simple steps:

1. **Commit and push** your code to your GitHub repository (excluding `config.js` which is handled by `.gitignore`).
2. Go to the **Settings** tab of your GitHub repository.
3. Select **Pages** from the left sidebar navigation menu.
4. Under **Build and deployment**, set the source to **Deploy from a branch**.
5. Select the `main` or `master` branch and folder `/ (root)`. Click **Save**.
6. GitHub will generate a link (e.g., `https://your-username.github.io/rtrwh-assist/`) where the site is live.
7. *Note:* Make sure anyone cloning/visiting has configured their API keys if they run the app on their own domains, or ensure the active key in your deployment is restricted appropriately via Google Cloud Console to only allow requests from your deployment URL.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgements

Developed as part of the **Smart India Hackathon 2025**. Thanks to the Ministry of Jal Shakti and the SIH organizing committee for putting forward challenges that drive sustainability and technological innovation in water conservation.
