# Vasant Valley School Website - Recreation & Enhancement

A modern, high-performance, and responsive single-page web application recreating and enhancing the official Vasant Valley School website using **React** and **Vite**.

---

## 📋 Developer & Submission Information

- **Full Name**: Jyoti Pandey
- **Intern ID**: `DETTROIN-INT-JYOTI`
- **Email Address**: `jyotipandeycselit@gmail.com`
- **GitHub Username**: [Javako077](https://github.com/Javako077)
- **Selected Website**: Vasant Valley School Website ([vasantvalley.org](https://www.vasantvalley.org))
- **Live Demo Link**: [https://dettroin-int-jyoti-vasantvalley-web.vercel.app/](https://dettroin-int-jyoti-vasantvalley-web.vercel.app/)

---

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 & Vite
- **Routing**: React Router DOM (`react-router-dom`)
- **Animation & Transitions**: Framer Motion
- **Icons**: Lucide React (`lucide-react`)
- **Styling**: Vanilla CSS Design Tokens, CSS Grid, Flexbox, Media Queries
- **Hosting & Deployment**: Vercel (with `vercel.json` SPA rewrite rules)

---

## ✨ Key Improvements Made

1. **Modern React + Vite Architecture**:
   - Transformed the legacy website into a fast Single Page Application (SPA) with zero full-page reloads and client-side routing.
2. **Enhanced UI Design & Aesthetics**:
   - Crafted a refined color palette, editorial typography (`heading-serif`), luxury card containers (`card-luxury`), and smooth Framer Motion micro-animations.
3. **Asset & Path Optimization**:
   - Restructured legacy media uploads to `/assets/` to eliminate CloudFront/Vercel WAF 403 Forbidden restrictions and keep production payloads lightweight.
4. **Interactive Components**:
   - Built a custom hero slider carousel, interactive FAQ accordion, tab-switching portal authentication login, and responsive mobile navigation drawer.
5. **Production SPA Routing & Deep Linking**:
   - Added `vercel.json` rewrite configurations and `_redirects` rules to guarantee seamless client-side page refreshes across all routes without 404 errors.

---

## 🚀 Local Setup & Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Javako077/DETTROIN-INT-Jyoti-Vasantvalley-website.git
   cd DETTROIN-INT-Jyoti-Vasantvalley-website/frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```
