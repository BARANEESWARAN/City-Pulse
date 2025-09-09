# City Pulse - Event Discovery App

City Pulse is a modern event discovery application that helps users find, save, and manage events in their city with ease. The app features secure authentication, event browsing by name or city, favorite event management, and interactive maps.

---

## 🚀 Live Demo

Check out the live application: [https://city-pulse-m866.onrender.com](https://city-pulse-m866.onrender.com)

---

## 📱 Application Features

1. **Authentication System**  
   - Sign Up/Login with email and password  
   - Simulated biometric authentication for demo  
   - Secure user profiles using Firebase Authentication  

2. **Event Discovery**  
   - Browse featured events on the home page  
   - Search events by **event name or city**  
   - Clicking search without input shows **all default events**  
   - Click events to view detailed information  
   - Add events to favorites with one click  

3. **Favorites Management**  
   - Save favorite events easily  
   - View all favorites in your profile  
   - Persistent storage synced via Firebase  

4. **User Profiles**  
   - Edit profile info (name, photo URL)  
   - Manage biometric authentication settings  
   - View and manage favorite events  

5. **Event Details**  
   - Comprehensive details including date, venue, and pricing  
   - Interactive maps with Google Maps integration  

---

## 🛠️ Technology Stack

- **Frontend:** React.js with React Router  
- **Authentication:** Firebase Auth  
- **Database:** Firebase Firestore  
- **Events API:** Ticketmaster Discovery API  
- **Maps:** Google Maps API  
- **Styling:** CSS3 with responsive design  
- **Icons:** Font Awesome  
- **State Management:** React Context API  

---

## 📦 Installation & Setup

Since the `.env` file is already configured with Firebase and API keys, you just need to follow these steps:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/city-pulse-app.git
   cd city-pulse-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the development server**  
   ```bash
   npm run dev
   ```

4. **Open your browser**  
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## 🎯 Usage Guide

### For Users
- Sign up or login with your credentials  
- Browse events on the home page  
- Use the search bar to find events **by event name or city**  
- Click search without typing anything to view **all default events**  
- Add events to favorites using the heart icon  
- Visit your profile to manage favorites and update personal info  
- Enable or disable biometric login in profile settings  

---

## 📖 Page Overview

### 🔐 Sign Up / Login Page
- Secure Firebase authentication  
- Email/password login or simulated biometric login  

### 🏠 Home Page - Event Discovery
- Browse featured events  
- Search events by **event name or city**  
- Clicking search with no input shows **all default events**  
- View event cards with quick access to details  

### 📅 Event Details Page
- View complete info: date, time, venue, pricing  
- Interactive Google Map location  
- Add/remove favorites  

### 🗺️ Map View
- Google Maps integration with event location pins  
- Zoom and directions enabled  

### 👤 Profile Page
- Edit name and photo URL  
- Manage favorites  
- Enable/disable biometric login  
- Secure logout  

### ❤️ Favorites Management
- View all saved events  
- Remove favorites easily  
- Favorites synced across sessions  

---

✨ Thank you for using **City Pulse**! Enjoy discovering your city’s events with ease.
